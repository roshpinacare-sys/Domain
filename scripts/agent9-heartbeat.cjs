#!/usr/bin/env node
/**
 * AGENT9-HEARTBEAT/1 — the third clock for the fleet-truth machine.
 *
 * WHY THIS EXISTS (measured, not assumed):
 *  The Domain repo carries 12+ cron workflows on ONE GitHub scheduler queue.
 *  Measured correlated silences: main clock (:09) and watchdog (:41) BOTH skipped
 *  2h+ while every dispatch-path run succeeded. Two clocks on one scheduler =
 *  correlated failures, not independence.
 *
 *  The cure: an independent clock that does NOT share Domain's scheduler queue —
 *  run this from a dedicated repo's scheduled workflow (one cron = best odds),
 *  or from any host. It measures the bake age of truth/agent9.json on main and,
 *  if genuinely stale, activates the bake through the PROVEN path
 *  (workflow_dispatch), then verifies the bake actually refreshed.
 *
 * MODES:
 *  node agent9-heartbeat.cjs          -> daemon: HTTP :3040 /health /status + interval ticks
 *  node agent9-heartbeat.cjs --once   -> single tick then exit (cron/Actions friendly)
 *
 * FRESHNESS LAW (anti-CDN-lag, bug-t55h-b):
 *  raw.githubusercontent edges may serve a stale copy for minutes after an update.
 *  A dispatch decided on stale raw = redundant bake (harmless but noisy).
 *  Therefore: raw age > threshold -> CONFIRM with the commits API for the file
 *  (authoritative, not CDN-cached). Dispatch only if BOTH agree it is stale.
 *
 * FAIL-CLOSED LAWS:
 *  - Never fabricates: reports only what it measured (ages, status codes, run ids).
 *  - Token: read at runtime from AGENT9_TOKEN_FILE (or GH_PAT env), held in memory,
 *    never logged (only boolean), never written anywhere.
 *  - Every await guarded (bug-t55h-a): a network throw degrades to a logged verdict,
 *    NEVER kills the process.
 *  - Missing/invalid token: stays alive, reports CRITICAL, keeps retrying.
 */

const http = require("http");
const fs = require("fs");

const ONCE = process.argv.includes("--once");

const CFG = {
  repo: process.env.AGENT9_REPO || "roshpinacare-sys/Domain",
  workflow: process.env.AGENT9_WORKFLOW || "agent9-fleet-truth.yml",
  branch: process.env.AGENT9_BRANCH || "main",
  tokenFile: process.env.AGENT9_TOKEN_FILE || "",
  staleMin: Number(process.env.AGENT9_STALE_MIN || 25),
  intervalMs: Number(process.env.AGENT9_INTERVAL_MS || 5 * 60 * 1000),
  verifyTimeoutMs: Number(process.env.AGENT9_VERIFY_TIMEOUT_MS || 8 * 60 * 1000),
  port: Number(process.env.PORT || 3040),
  stateFile: process.env.AGENT9_STATE_FILE || "",
  apiBase: "https://api.github.com",
  rawBase: "https://raw.githubusercontent.com",
};

const state = {
  startedAt: new Date().toISOString(),
  mode: ONCE ? "once" : "daemon",
  ticks: 0,
  lastTickAt: null,
  lastBakeAt: null,
  lastAgeMin: null,
  lastCommitAt: null,
  lastVerdict: "BOOT",
  dispatches: 0,
  healsConfirmed: 0,
  verifyFailures: 0,
  tokenPresent: false,
  tokenValid: null,
  events: [],
};

function logEvent(kind, detail) {
  const ev = { at: new Date().toISOString(), kind, detail: String(detail).slice(0, 300) };
  state.events.unshift(ev);
  if (state.events.length > 40) state.events.pop();
  console.log(`[agent9-heartbeat] ${ev.at} ${kind} ${ev.detail}`);
  if (CFG.stateFile) {
    try { fs.writeFileSync(CFG.stateFile, JSON.stringify(state, null, 2)); } catch {}
  }
}

function readToken() {
  const envTok = process.env.GH_PAT;
  if (envTok && envTok.length >= 30) { state.tokenPresent = true; return envTok.trim(); }
  if (!CFG.tokenFile) { state.tokenPresent = false; return null; }
  try {
    const t = fs.readFileSync(CFG.tokenFile, "utf8").trim();
    state.tokenPresent = t.length >= 30;
    return state.tokenPresent ? t : null;
  } catch {
    state.tokenPresent = false;
    return null;
  }
}

async function gh(path, token, opts = {}) {
  const res = await fetch(`${CFG.apiBase}${path}`, {
    ...opts,
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "agent9-heartbeat",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(opts.headers || {}),
    },
  });
  return res;
}

async function measureBakeRaw() {
  const url = `${CFG.rawBase}/${CFG.repo}/${CFG.branch}/truth/agent9.json?t=${Date.now()}`;
  const res = await fetch(url, { headers: { "User-Agent": "agent9-heartbeat", "Cache-Control": "no-store" } });
  if (!res.ok) throw new Error(`raw ${res.status}`);
  const j = await res.json();
  if (typeof j.at !== "string") throw new Error("bake has no 'at'");
  return { at: j.at, ageMin: Math.round((Date.now() - Date.parse(j.at)) / 60000) };
}

async function measureBakeCommit(token) {
  const res = await gh(`/repos/${CFG.repo}/commits?path=truth/agent9.json&sha=${CFG.branch}&per_page=1`, token || null);
  if (!res.ok) throw new Error(`commits ${res.status}`);
  const j = await res.json();
  const c = j && j[0] && j[0].commit && j[0].commit.committer && j[0].commit.committer.date;
  if (!c) throw new Error("no commit date");
  return { at: c, ageMin: Math.round((Date.now() - Date.parse(c)) / 60000) };
}

async function verifyToken(token) {
  const res = await gh("/user", token);
  state.tokenValid = res.ok;
  return res.ok;
}

async function dispatch(token) {
  const res = await gh(
    `/repos/${CFG.repo}/actions/workflows/${CFG.workflow}/dispatches`,
    token,
    { method: "POST", body: JSON.stringify({ ref: CFG.branch }) }
  );
  return res.status;
}

async function latestRunCreatedAt(token) {
  const res = await gh(`/repos/${CFG.repo}/actions/workflows/${CFG.workflow}/runs?per_page=1`, token);
  if (!res.ok) throw new Error(`runs ${res.status}`);
  const j = await res.json();
  return (j.workflow_runs && j.workflow_runs[0] && j.workflow_runs[0].created_at) || null;
}

async function healLoop(reason, ageMin) {
  const token = readToken();
  if (!token) {
    state.lastVerdict = "CRITICAL-NO-TOKEN";
    logEvent("CRITICAL", "no token — cannot heal; staying alive");
    return false;
  }
  let tokOk = false;
  try { tokOk = await verifyToken(token); } catch (e) { logEvent("TOKEN-ERR", e.message); }
  if (!tokOk) {
    state.lastVerdict = "CRITICAL-TOKEN-INVALID";
    logEvent("CRITICAL", "token rejected — cannot heal; staying alive");
    return false;
  }
  let st = 0;
  try { st = await dispatch(token); } catch (e) {
    state.lastVerdict = "DISPATCH-THREW";
    logEvent("DISPATCH-THREW", e.message);
    return false;
  }
  state.dispatches += 1;
  logEvent("DISPATCH", `reason=${reason} age=${ageMin}min status=${st}`);
  if (st !== 204) { state.verifyFailures += 1; state.lastVerdict = `DISPATCH-${st}`; return false; }
  if (ONCE) { state.lastVerdict = "DISPATCHED"; return true; } // next tick verifies (cron cadence)
  // daemon mode: verify a NEW run appears, then the bake refreshes
  const deadline = Date.now() + CFG.verifyTimeoutMs;
  let newRun = null;
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, 30000));
    try {
      const cur = await latestRunCreatedAt(token);
      if (cur) { newRun = cur; break; }
    } catch { /* network hiccup — keep polling */ }
  }
  if (!newRun) {
    state.verifyFailures += 1;
    state.lastVerdict = "VERIFY-NO-NEW-RUN";
    logEvent("VERIFY-FAIL", "no run seen within timeout");
    return false;
  }
  logEvent("RUN-SEEN", newRun);
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, 45000));
    try {
      const m = await measureBakeCommit();
      if (m.ageMin < 5) {
        state.lastBakeAt = m.at; state.lastAgeMin = m.ageMin; state.lastCommitAt = m.at;
        state.healsConfirmed += 1; state.lastVerdict = "HEALED";
        logEvent("HEALED", `bake=${m.at} age=${m.ageMin}min run=${newRun}`);
        return true;
      }
    } catch { /* keep polling until deadline */ }
  }
  state.verifyFailures += 1;
  state.lastVerdict = "VERIFY-BAKE-NOT-REFRESHED";
  logEvent("VERIFY-FAIL", "bake did not refresh within timeout");
  return false;
}

async function tick() {
  state.ticks += 1;
  state.lastTickAt = new Date().toISOString();
  let m;
  try { m = await measureBakeRaw(); } catch (e) {
    state.lastVerdict = "MEASURE-FAIL";
    logEvent("MEASURE-FAIL", e.message);
    // can't even read the bake — heal on repeated failure via commit check
    try {
      const c = await measureBakeCommit();
      state.lastCommitAt = c.at; state.lastAgeMin = c.ageMin;
      if (c.ageMin > CFG.staleMin) { await healLoop("raw-unreadable+commit-stale", c.ageMin); return; }
      state.lastVerdict = "OK-VIA-COMMIT";
      logEvent("OK-VIA-COMMIT", `age=${c.ageMin}min`);
    } catch (e2) { logEvent("COMMIT-FAIL", e2.message); }
    return;
  }
  state.lastBakeAt = m.at;
  state.lastAgeMin = m.ageMin;
  if (m.ageMin <= CFG.staleMin) {
    state.lastVerdict = "OK";
    logEvent("OK", `age=${m.ageMin}min bake=${m.at}`);
    return;
  }
  // raw says stale — CONFIRM with the authoritative commits API (anti CDN-lag)
  let c = null;
  try { c = await measureBakeCommit(readToken()); } catch (e) {
    // bug-t55h-c: confirm failing (403/net) must NOT paralyze healing —
    // fail-closed protects against fabrication, not against healing.
    // Redundant bake is harmless; hours of silence is not.
    logEvent("CONFIRM-FAIL-DISPATCH-ANYWAY", e.message);
    await healLoop("raw-stale+confirm-unavailable", m.ageMin);
    return;
  }
  state.lastCommitAt = c.at;
  if (c.ageMin <= CFG.staleMin) {
    state.lastVerdict = "OK-CDN-LAG";
    logEvent("OK-CDN-LAG", `raw=${m.ageMin}min but commit=${c.ageMin}min — no dispatch`);
    return;
  }
  logEvent("STALE", `raw=${m.ageMin}min commit=${c.ageMin}min > ${CFG.staleMin}min — activating`);
  await healLoop(`raw=${m.ageMin}+commit=${c.ageMin}`, c.ageMin);
}

function startDaemon() {
  const server = http.createServer((req, res) => {
    const url = req.url.split("?")[0];
    if (url === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ alive: true, schema: "AGENT9-HEARTBEAT/1", mode: "daemon" }));
    } else if (url === "/status") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(state, null, 2));
    } else { res.writeHead(404); res.end("not found"); }
  });
  server.listen(CFG.port, () => {
    logEvent("BOOT", `third clock daemon on :${CFG.port} repo=${CFG.repo} staleMin=${CFG.staleMin}`);
  });
  tick().catch((e) => logEvent("BOOT-TICK-ERR", e.message));
  setInterval(() => { tick().catch((e) => logEvent("TICK-ERR", e.message)); }, CFG.intervalMs);
  process.on("uncaughtException", (e) => logEvent("UNCAUGHT", e.message));
  process.on("unhandledRejection", (e) => logEvent("UNHANDLED", String(e).slice(0, 200)));
}

if (ONCE) {
  tick()
    .then(() => { logEvent("ONCE-DONE", state.lastVerdict); process.exit(0); })
    .catch((e) => { logEvent("ONCE-ERR", e.message); process.exit(1); });
} else {
  startDaemon();
}
