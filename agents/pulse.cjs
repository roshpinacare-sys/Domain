// PULSE — the fleet's daily self-improvement pulse (reef/SkillClaw loop pattern, Rung 1) · CR-0009
//
// Z-60 · CR-0028: the pulse now CONSUMES the laya advisory triage book
// (agents/laya-triage.json, CR-0025) as an input. ADVISORY-ONLY law holds: the join
// attaches lane/urgency HINTS to proposals by id and never touches dispositions,
// gates, or the verify-only law. Freshness line (CARRY-LAW family, sharpened for
// hints): measured NUMBERS carry (venture-desk), HINTS don't — a triage book older
// than 36h is marked STALE-NOT-JOINED and nothing is attached. Uncalibrated
// confidence stays flagged on every joined row (CR-0023 serving proof).
//
// Study: Human-Agent-Society/reef @ 297af97 (Z-48): "infrastructure for continually
// self-improving agents" — SkillClaw's loop: day = fixed task list with current skills;
// night = review sessions → propose changes → evaluate → settle (accept/version or
// rollback). Rung 1 adopts the LOOP as doctrine on native surfaces — every component
// already exists here: day-ledger (git log), proposals (canon queues), evaluator
// (harness-audit + run-evals), versioned delivery (judged CRs), rollback (CR FAIL path).
//
// Verify-only (permission-at-launch, cua lesson): this desk NEVER auto-applies changes —
// application only via a judged tier-B CR. Fail-soft: exit 0 always; missing inputs
// booked honestly. Zero network. Books: agents/pulse-book.{json,md}.

"use strict";
const fs = require("fs");
const path = require("path");
const { execFileSync, spawnSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const AG = __dirname;
const read = (p) => { try { return fs.readFileSync(p, "utf8"); } catch (_) { return null; } };
const readJson = (p) => { try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch (_) { return null; } };
const ago = (iso) => (Date.now() - Date.parse(iso)) / 3600000;
const log = (m) => console.log(`[pulse] ${m}`);
// recursion guard: when the eval harness spawns the pulse (E21), the gates are skipped
// honestly — the gate runs are proven in standalone runs; without the guard the loop
// pulse→evals→pulse would recurse forever (caught live in Z-49, timeout 300s).
const SKIP_GATES = /^(1|true|yes)$/i.test(process.env.PULSE_SKIP_GATES || "");

// ---- white-box core: disposition derivation (eval E21 pins this) ----
const DISPOSITIONS = ["PROPOSED-CR", "GATED-BLOCKED", "DEFERRED-TIER-C", "ACCEPTED-TODAY", "ROLLED-BACK", "BOOKED"];
function deriveDisposition(item) {
  switch (item.kind) {
    case "probe-queued": return "PROPOSED-CR";          // lane candidate waiting for a tier-B CR
    case "probe-parked": return "DEFERRED-TIER-C";      // opening conditions live in operator hands
    case "needs-validation": return "GATED-BLOCKED";    // exact missing fact named; no severity by law
    case "cr-pass": return "ACCEPTED-TODAY";            // judged PASS → the version already shipped
    case "cr-fail": return "ROLLED-BACK";               // judged FAIL → rollback path
    case "observation": return "BOOKED";                // measured state carried into the record
    case "tier-c": return "DEFERRED-TIER-C";            // fuel/keys/creds/domain — operator-owned
    default: return "BOOKED";
  }
}

function main() {
try {
  const at = new Date().toISOString();
  const prev = readJson(path.join(AG, "pulse-book.json"));
  const since = prev && prev.at ? prev.at : new Date(Date.now() - 24 * 3600 * 1000).toISOString();

  // ---- DAY: what did the bloc actually do since the last pulse ----
  let commits = [];
  try {
    const out = execFileSync("git", ["-C", ROOT, "log", `--since=${since}`, "--oneline", "--no-color"], { encoding: "utf8", timeout: 15000 });
    commits = out.trim() ? out.trim().split("\n").slice(0, 40).map((l) => { const i = l.indexOf(" "); return { sha: l.slice(0, i), subject: l.slice(i + 1) }; }) : [];
  } catch (_) { log("git log unavailable — day ledger booked empty (honest)"); }

  // ---- REVIEW: the canon queues ----
  const proposals = [];
  // probe lane (single canon: agents/security-audit/PROBE-LANE.md)
  const lane = read(path.join(AG, "security-audit", "PROBE-LANE.md")) || "";
  for (const line of lane.split("\n")) {
    if (!/^\|\s*[^|\s]/.test(line) || /Candidate/.test(line)) continue;
    const cells = line.split("|").map((c) => c.trim());
    if (cells.length < 5) continue;
    const name = cells[1], verdictCell = cells[4];
    if (/QUEUED/i.test(verdictCell)) proposals.push({ id: `lane:${name.slice(0, 24)}`, kind: "probe-queued", source: "security-audit/PROBE-LANE.md", action: "draft tier-B CR for the queued pattern", receipt: verdictCell.slice(0, 60) });
    else if (/PARKED/i.test(verdictCell)) proposals.push({ id: `lane:${name.slice(0, 24)}`, kind: "probe-parked", source: "security-audit/PROBE-LANE.md", action: "hold; opening conditions named in the lane canon", receipt: verdictCell.slice(0, 60) });
  }
  // needs_validation findings (no severity by law — they are gates, not bugs)
  const findings = readJson(path.join(AG, "security-audit", "findings.json"));
  if (Array.isArray(findings)) for (const f of findings) {
    if (f.verdict !== "needs_validation") continue;
    const blocker = (f.blockers && f.blockers[0]) || (f.validation_plan && "run validation plan") || "unresolved fact";
    proposals.push({ id: `nv:${f.fingerprint.slice(0, 32)}`, kind: "needs-validation", source: "security-audit/findings.json", action: `resolve missing fact: ${String(blocker).slice(0, 90)}`, receipt: f.fingerprint });
  }
  // change requests judged today
  let crs = [];
  try { crs = fs.readdirSync(path.join(AG, "change-requests")).filter((f) => f.endsWith(".json")); } catch (_) {}
  for (const f of crs) {
    const cr = readJson(path.join(AG, "change-requests", f));
    if (!cr || !cr.verdict || !cr.judged_at) continue;
    if (Date.parse(cr.judged_at) >= Date.parse(since)) {
      proposals.push({ id: cr.id, kind: cr.verdict === "PASS" ? "cr-pass" : "cr-fail", source: `change-requests/${f}`, action: cr.verdict === "PASS" ? "accepted version already shipped (judged)" : "rollback path (judged FAIL)", receipt: (cr.judged_by || "").slice(0, 80) });
    }
  }
  // live observations — the one-bloc boundary (wiped cross-repo creds, tier C restore)
  const ob = readJson(path.join(AG, "one-bloc.json"));
  if (ob && ob.verdict && ob.verdict !== "ONE-BLOC") {
    const c = ob.counts || {};
    proposals.push({ id: "obs:one-bloc-boundary", kind: ob.verdict === "DEGRADED" ? "tier-c" : "observation", source: "one-bloc.json", action: ob.verdict === "DEGRADED" ? `restore cross-repo credential (operator, tier C) — ${c.reached}/${c.repos} reached; the len-93 token is gone from remotes; restore.sh rebuild is the convergence leftover` : "refresh the whole-git map", receipt: `verdict ${ob.verdict} · reached ${c.reached}/${c.repos} · tokenReach ${c.tokenReach}` });
  }
  const hb = readJson(path.join(AG, "hands-book.json"));
  if (hb && hb.hands) proposals.push({ id: "obs:hands", kind: "observation", source: "hands-book.json", action: "carry the hands boundary into the daily record", receipt: `hands ${hb.hands.length} · live ${(hb.hands.filter(h => h.verdict === 'LIVE')).length}` });

  // derive dispositions (single source of truth, E23-pinned)
  for (const p of proposals) p.disposition = deriveDisposition(p);

  // ---- ADVISORY: consume the laya triage book (CR-0025 output, CR-0028 input) ----
  // Join by proposal id. Hints attach AFTER dispositions are derived — the advisory
  // surface can reorder human attention, never gate the loop (ADVISORY-ONLY law).
  const advisoryTriag = { mode: "ABSENT", joined: 0, note: "laya-triage.json absent or unreadable — advisory surface honestly empty (no hint invented)" };
  const tri = readJson(path.join(AG, "laya-triage.json"));
  if (tri && tri.ok && Array.isArray(tri.rows)) {
    const ageH = tri.at ? (Date.now() - Date.parse(tri.at)) / 3600000 : NaN;
    if (!Number.isFinite(ageH)) {
      advisoryTriag.mode = "UNTIMED-NOT-JOINED";
      advisoryTriag.note = "triage book carries no parseable timestamp — never joined (a hint without a timestamp can never count as fresh)";
    } else if (ageH > 36) {
      advisoryTriag.mode = "STALE-NOT-JOINED";
      advisoryTriag.at = tri.at;
      advisoryTriag.age_h = Math.round(ageH * 10) / 10;
      advisoryTriag.note = "triage book >36h old — hints are ordering hints, not measured numbers; stale hints are never joined (numbers carry, hints don't)";
    } else {
      const byId = {};
      for (const r of tri.rows) if (r && r.status === "TRIAGED" && r.id) byId[r.id] = r;
      advisoryTriag.mode = "JOINED-FRESH";
      advisoryTriag.at = tri.at;
      advisoryTriag.age_h = Math.round(ageH * 10) / 10;
      advisoryTriag.note = "fresh advisory triage joined by id — lane/urgency hints only, confidence uncalibrated (en checkpoint), dispositions untouched";
      const deskRow = tri.rows.find((r) => r && r.id === "desk");
      if (deskRow) advisoryTriag.desk = deskRow.status;
      for (const p of proposals) {
        const r = byId[p.id];
        if (!r) continue;
        p.advisory = {
          lane: r.lane, urgency: r.urgency, urgency_label: r.urgency_label,
          actionable_yes_prob: r.actionable_yes_prob,
          confidence: "uncalibrated (CR-0023/CR-0025)", source_at: tri.at,
        };
        advisoryTriag.joined++;
      }
    }
  }

  // ---- GATE: the evaluator IS the judge + evals (SkillClaw evaluate step) ----
  let judge = "unavailable", evals = "unavailable";
  if (SKIP_GATES) {
    judge = "skipped (PULSE_SKIP_GATES recursion guard — real gates proven in standalone runs)";
    evals = judge;
    log("gates skipped by recursion guard (eval harness context)");
  } else {
    try { judge = (spawnSync(process.execPath, [path.join(AG, "harness-audit.cjs")], { cwd: ROOT, timeout: 120000, encoding: "utf8" }).stdout || "").trim().split("\n").filter(Boolean).pop() || "no output"; } catch (_) {}
    try { evals = (spawnSync(process.execPath, [path.join(AG, "evals", "run-evals.cjs")], { cwd: ROOT, timeout: 120000, encoding: "utf8" }).stdout || "").trim().split("\n").filter(Boolean).pop() || "no output"; } catch (_) {}
  }

  // ---- SETTLE: the book ----
  const counts = {};
  for (const d of DISPOSITIONS) counts[d] = proposals.filter((p) => p.disposition === d).length;
  const book = {
    ok: true, at, since, agent: "pulse v1.1.0 (CR-0009 loop, Rung 1; CR-0028 consumes the laya advisory triage — Z-48/Z-49/Z-60)",
    dayLedger: { since, count: commits.length, commits },
    proposals, counts,
    gates: { judge, evals },
    advisoryTriag,
    laws: { verifyOnly: true, noNetwork: true, autoApply: false, advisoryGates: false, note: "application only via judged tier-B CR — the pulse proposes, the CR law disposes; advisory triage hints ride along but never gate (CR-0028)" },
  };
  const md = [
    `# Daily Pulse — ${at}`,
    ``,
    `- **loop:** reef/SkillClaw Rung 1 (day → review → propose → gate → settle) · **verify-only:** proposals never auto-applied`,
    `- **window:** since ${since} · **commits:** ${commits.length}`,
    `- **gates:** ${judge} · ${evals}`,
    ``,
    `| # | id | disposition | advisory (lane/urgency) | action |`,
    `|---|---|---|---|---|`,
    ...proposals.map((p, i) => `| ${i + 1} | ${p.id} | ${p.disposition} | ${p.advisory ? `${p.advisory.lane || "—"} / ${p.advisory.urgency_label || "—"} (uncal.)` : "—"} | ${String(p.action).replace(/\|/g, "/").slice(0, 100)} |`),
    ``,
    ...DISPOSITIONS.map((d) => `- ${d}: ${counts[d]}`),
    ``,
    `- advisory triage: **${advisoryTriag.mode}** · joined ${advisoryTriag.joined} · ${advisoryTriag.note}`,
    ``,
  ].join("\n");
  fs.writeFileSync(path.join(AG, "pulse-book.json"), JSON.stringify(book, null, 2) + "\n");
  fs.writeFileSync(path.join(AG, "pulse-book.md"), md);
  log(`booked: proposals=${proposals.length} (${DISPOSITIONS.map((d) => `${d}:${counts[d]}`).join(" ")}) · judge="${judge}"`);
} catch (e) {
  // fail-soft: even a crashed pulse must exit 0 and say why
  console.log(`[pulse] booked degraded: ${String(e && e.message).slice(0, 120)}`);
}
}
// side-effect-free require: the eval harness imports the pure core; the run happens
// only as a main script (the lesson caught live in Z-49 — an unguarded process.exit
// inside a require() killed the whole evals suite mid-run)
if (require.main === module) { main(); process.exit(0); }
module.exports = { deriveDisposition, DISPOSITIONS, main };
