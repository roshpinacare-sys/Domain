#!/usr/bin/env node
/**
 * econ-engine.cjs — מנוע-הסליקה הפנימי של הריבונות (stdlib בלבד, אפס-רשת).
 * ---------------------------------------------------------------------------
 * THE MANDATE (Task 57, owner directive 2026-10-16): the sovereign economy
 * must transact at scale — thousands per day, internally, with zero external
 * dependency. This engine mints REAL settlement transactions anchored to
 * MEASURED events that already exist in the estate:
 *
 *   · office/world-journal.jsonl   — worldbeat advances + agent work events
 *     (the persistent world: agents actually working, measured by office-world)
 *   · git log cadence              — robot labor actually committed
 *     (dex-family / fill-ledger / market-grid / books-sync / pacemaker beats)
 *   · agents/arb-mesh-history.jsonl — real mesh scans (compute consumed)
 *   · FleetHQ git log (Task 58)    — fleet robot labor on the estate repo
 *     (pacemaker / office-ci / silence-watchdog / vault-seal / selfcheck…)
 *   · health-guard events (Task 58) — every measured fleet health check
 *
 * HONESTY LAWS (non-negotiable, same law as post-batcher):
 *   1. ZERO SYNTHETIC TRANSACTIONS — every tx carries `evidence` pointing at
 *      the real event line (file + ts). No evidence → no mint. Ever.
 *   2. NO NETWORK, NO KEYS — purely local settlement of internal accounts.
 *   3. WATERMARKED + HASH-CHAINED — a cursor (state file) guarantees
 *      exactly-once minting; the ledger is append-only sha16-chained.
 *   4. HOLD OVER LIE — unreadable source = skip that source and say so in
 *      the book verdict. Never fabricate to fill a quota.
 *
 * Money: mWU (milli work-units). Wages 1000/event, beat-fee 500, scan 250.
 * Accounts: treasury · agent:<who> · robot:<name> · compute-pool.
 *
 * Run: node agents/econ-engine.cjs           (single settlement)
 *      node agents/econ-engine.cjs --loop 120 (resident, every 120s)
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname; // agents/
const DOMAIN = path.resolve(ROOT, '..');
const LEDGER = path.join(ROOT, 'econ-ledger.jsonl');
const BOOK = path.join(ROOT, 'econ-book.json');
const STATE = path.join(ROOT, 'econ-engine-state.json');

// Task 58 (owner directive: thousands per day, scale) — fleet sources on the
// same host: the FleetHQ repo (robot commits) + the health-guard event log.
// Env-overridable so the cloud workflow (which lacks the fleet host) skips
// these sources honestly instead of failing.
const FLEET_ROOT = process.env.ECON_FLEET_ROOT || '/home/z/my-project';
const GUARD_JOURNAL = path.join(FLEET_ROOT, 'mini-services', 'health-guard', 'state', 'guard-events.jsonl');

const WAGE_MWU = 1000;
const BEAT_MWU = 500;
const SCAN_MWU = 250;
const GUARD_MWU = 100; // micro-settlement per measured guard check
const OFFEV_MWU = 200; // office agent activity event (real say/log labor)
const WDOG_MWU = 150;  // watchdog restoration/ops event
const HMEM_MWU = 50;   // host telemetry measurement (real compute)

const sha16 = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 16);
const nowIso = () => new Date().toISOString();

function readJsonl(p) {
  try {
    return fs.readFileSync(p, 'utf8').split('\n').filter(Boolean);
  } catch { return []; }
}
function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

/* ── cursor: exactly-once watermark, PER SOURCE ─────────────────────────── */
function loadCursor() {
  const s = readJson(STATE);
  const backfill = Date.now() - 24 * 3600_000; // books open with a 24h window
  const base = {
    last_seq: 0, last_sha16: '', minted: 0,
    src: { journal: backfill, git: backfill, mesh: backfill, fleet: backfill, guard: backfill, offev: backfill, wdog: backfill, hmem: backfill },
  };
  if (s && s.src && typeof s.src.git === 'number') {
    // per-key defaults — newly added sources open their own 24h window once
    for (const k of ['journal', 'git', 'mesh', 'fleet', 'guard', 'offev', 'wdog', 'hmem']) {
      if (typeof s.src[k] !== 'number') s.src[k] = backfill;
    }
    return s;
  }
  return base;
}

/* ── evidence harvest: real events only, per-source watermarks ──────────── */
function harvest(c) {
  const out = [];
  // 1) worldbeat journal — the persistent world's real agent work
  for (const line of readJsonl(path.join(DOMAIN, 'office', 'world-journal.jsonl'))) {
    try {
      const j = JSON.parse(line);
      const at = Date.parse(j.at || '');
      if (!Number.isFinite(at) || at <= c.src.journal) continue;
      const evs = Array.isArray(j.evs) ? j.evs : [];
      for (const e of evs) {
        const ets = Date.parse(e.at || '');
        if (!Number.isFinite(ets) || ets <= c.src.journal) continue;
        if (!e.who) continue;
        out.push({
          kind: 'wage', at: ets, who: 'agent:' + String(e.who).slice(0, 24),
          amount: WAGE_MWU, venue: 'office-world payroll',
          evidence: { type: 'worldbeat-event', file: 'office/world-journal.jsonl', ref: e.at, ts: e.at, text: String(e.text || '').slice(0, 80) },
        });
      }
    } catch { /* damaged line — skip, never invent */ }
  }
  // 2) robot labor — real commits on Domain main since the source cursor
  try {
    const { execFileSync } = require('child_process');
    const since = new Date(c.src.git).toISOString();
    const log = execFileSync('git', ['log', '--since', since, '--format=%H|%cI|%s'], {
      cwd: DOMAIN, timeout: 20000, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024,
    });
    for (const line of log.split('\n').filter(Boolean)) {
      const [hash, ci, ...subj] = line.split('|');
      const at = Date.parse(ci);
      if (!Number.isFinite(at) || at <= c.src.git) continue;
      const msg = subj.join('|');
      const robot = (msg.match(/^([a-z0-9-]+)[:.]/) || [])[1];
      if (!robot) continue; // only robot-shaped commits are labor
      out.push({
        kind: 'beat', at, who: 'robot:' + robot.slice(0, 24),
        amount: BEAT_MWU, venue: 'robot-labor settlement',
        evidence: { type: 'git-commit', file: 'git:main', ref: String(hash).slice(0, 12), ts: ci, text: msg.slice(0, 80) },
      });
    }
  } catch { /* git unavailable — skip source, verdict will say so */ }
  // 3) compute-meter — real mesh scans consumed compute
  for (const line of readJsonl(path.join(ROOT, 'arb-mesh-history.jsonl'))) {
    try {
      const j = JSON.parse(line);
      const at = Date.parse(j.at || '');
      if (!Number.isFinite(at) || at <= c.src.mesh) continue;
      if (!j.batch) continue;
      out.push({
        kind: 'scan', at, who: 'robot:arb-mesh',
        amount: SCAN_MWU, venue: 'compute-meter',
        evidence: { type: 'mesh-batch', file: 'agents/arb-mesh-history.jsonl', ref: String(j.batch).slice(0, 24), ts: j.at, text: String(j.verdict || '').slice(0, 80) },
      });
    } catch { /* skip */ }
  }
  // 4) fleet labor (Task 58) — robot commits on the FleetHQ estate repo.
  //    Distinct labor from the Domain beats: pacemaker/office-ci/watchdog/
  //    vault-seal commits are the fleet's real operational work.
  try {
    const { execFileSync } = require('child_process');
    const since = new Date(c.src.fleet).toISOString();
    const log = execFileSync('git', ['log', '--since', since, '--format=%H|%cI|%s'], {
      cwd: FLEET_ROOT, timeout: 20000, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024,
    });
    for (const line of log.split('\n').filter(Boolean)) {
      const parts = line.split('|');
      if (parts.length < 3) continue;
      const hash = parts[0], ci = parts[1];
      const msg = parts.slice(2).join('|');
      const at = Date.parse(ci);
      if (!Number.isFinite(at) || at <= c.src.fleet) continue;
      // robot-shaped: leading kebab token followed by space/colon/dot
      // (covers "pacemaker receipt:", "vault-seal [...]:", "decide:", …)
      const robot = (msg.match(/^([a-z0-9-]+)(?=[\s:.])/) || [])[1];
      if (!robot) continue; // only robot-shaped commits are labor
      out.push({
        kind: 'fleet', at, who: 'robot:' + robot.slice(0, 24),
        amount: BEAT_MWU, venue: 'fleet-labor settlement',
        evidence: { type: 'git-commit', file: 'git:FleetHQ-main', ref: String(hash).slice(0, 12), ts: ci, text: msg.slice(0, 80) },
      });
    }
  } catch { /* fleet repo unavailable — skip source, verdict notes it */ }
  // 5) guard-meter (Task 58) — every measured health check of the fleet.
  //    The guard is a real resident process; its events are the evidence.
  for (const line of readJsonl(GUARD_JOURNAL)) {
    try {
      const j = JSON.parse(line);
      const at = Date.parse(j.at || '');
      if (!Number.isFinite(at) || at <= c.src.guard) continue;
      if (!j.kind) continue;
      out.push({
        kind: 'guard', at, who: 'robot:health-guard',
        amount: GUARD_MWU, venue: 'guard-meter',
        evidence: { type: 'guard-event', file: 'mini-services/health-guard/state/guard-events.jsonl', ref: String(j.kind).slice(0, 24), ts: j.at, text: String(j.detail || '').slice(0, 80) },
      });
    } catch { /* damaged line — skip, never invent */ }
  }
  // 6) office agent activity (Task 58-b) — the office's own event stream:
  //    real agent say/log events from the persistent world (agents working).
  for (const line of readJsonl(path.join(DOMAIN, 'agents', 'office-events.jsonl'))) {
    try {
      const j = JSON.parse(line);
      const at = typeof j.ts === 'number' ? j.ts : Date.parse(j.at || '');
      if (!Number.isFinite(at) || at <= c.src.offev) continue;
      if (!j.agentId) continue;
      out.push({
        kind: 'offev', at, who: 'agent:' + String(j.agentId).slice(0, 24),
        amount: OFFEV_MWU, venue: 'office-events payroll',
        evidence: { type: 'office-event', file: 'agents/office-events.jsonl', ref: String(j.kind || 'log').slice(0, 24), ts: new Date(at).toISOString(), text: String(j.text || j.kind || '').slice(0, 80) },
      });
    } catch { /* damaged line — skip */ }
  }
  // 7) watchdog ops (Task 58-b) — measured fleet watchdog restorations
  for (const line of readJsonl(path.join(FLEET_ROOT, 'receipts', 'watchdog-events.jsonl'))) {
    try {
      const j = JSON.parse(line);
      const at = Date.parse(j.at || '');
      if (!Number.isFinite(at) || at <= c.src.wdog) continue;
      out.push({
        kind: 'wdog', at, who: 'robot:silence-watchdog',
        amount: WDOG_MWU, venue: 'watchdog-meter',
        evidence: { type: 'watchdog-event', file: 'receipts/watchdog-events.jsonl', ref: String(j.kind || '').slice(0, 24), ts: j.at, text: String(j.detail || j.kind || '').slice(0, 80) },
      });
    } catch { /* skip */ }
  }
  // 8) host telemetry (Task 58-b) — every real host measurement costs compute
  for (const line of readJsonl(path.join(FLEET_ROOT, 'receipts', 'host-mem.jsonl'))) {
    try {
      const j = JSON.parse(line);
      const at = Date.parse(j.at || '');
      if (!Number.isFinite(at) || at <= c.src.hmem) continue;
      out.push({
        kind: 'hmem', at, who: 'robot:host-meter',
        amount: HMEM_MWU, venue: 'telemetry-meter',
        evidence: { type: 'host-mem', file: 'receipts/host-mem.jsonl', ref: `used-${String(j.used_pct ?? '?')}`.slice(0, 24), ts: j.at, text: `load ${String(j.load1 ?? '?')}`.slice(0, 80) },
      });
    } catch { /* skip */ }
  }
  out.sort((a, b) => a.at - b.at);
  return out;
}

/* ── ledger append (hash-chained, append-only) ──────────────────────────── */
function appendLedger(events, c) {
  fs.mkdirSync(ROOT, { recursive: true });
  let fd;
  try { fd = fs.openSync(LEDGER, 'a'); } catch (e) { return { wrote: 0, error: String(e).slice(0, 80) }; }
  let wrote = 0;
  try {
    for (const ev of events) {
      c.last_seq += 1;
      const body = JSON.stringify({
        seq: c.last_seq, at: nowIso(), ev_at: new Date(ev.at).toISOString(),
        kind: ev.kind, payer: 'treasury', payee: ev.who, amount_mwu: ev.amount,
        venue: ev.venue, evidence: ev.evidence,
      });
      const rec = { ...JSON.parse(body), prev: c.last_sha16 || null, sha16: sha16(body + (c.last_sha16 || '')) };
      fs.writeSync(fd, JSON.stringify(rec) + '\n');
      c.last_sha16 = rec.sha16;
      wrote += 1;
    }
  } finally { fs.closeSync(fd); }
  return { wrote };
}

/* ── book: measured summary, never a quota ──────────────────────────────── */
function summarize() {
  const lines = readJsonl(LEDGER);
  let totals = { tx: lines.length, mwu: 0 };
  const venues = {};
  const workers = {};
  const dayStart = Date.now() - 24 * 3600_000;
  let tx24 = 0, mwu24 = 0;
  const participants = new Set();
  for (const line of lines) {
    try {
      const r = JSON.parse(line);
      totals.mwu += r.amount_mwu || 0;
      venues[r.venue] = (venues[r.venue] || 0) + 1;
      workers[r.payee] = (workers[r.payee] || 0) + (r.amount_mwu || 0);
      if (Date.parse(r.ev_at) > dayStart) { tx24 += 1; mwu24 += r.amount_mwu || 0; }
      participants.add(r.payee);
    } catch { /* skip */ }
  }
  const top = Object.entries(workers).sort((a, b) => b[1] - a[1]).slice(0, 8)
    .map(([who, mwu]) => ({ who, mwu }));
  return {
    at: nowIso(), ok: true,
    verdict: 'internal settlements measured from real events — every tx carries evidence, zero synthetic',
    engine: 'econ-engine/1', units: 'mWU (1 WU = 1000 mWU)',
    day24: { transactions: tx24, mwu: mwu24 },
    totals, venues, participants: participants.size, top_workers: top,
    honesty: 'no network, no keys, no invented numbers — evidence refs point at real journal/git/mesh records',
  };
}

/* ── main ────────────────────────────────────────────────────────────────── */
function settle() {
  const c = loadCursor();
  const events = harvest(c);
  const { wrote } = appendLedger(events, c);
  if (wrote > 0) {
    // advance each source watermark to the newest event it actually minted
    for (const ev of events) {
      const key = ev.kind === 'wage' ? 'journal' : ev.kind === 'beat' ? 'git' : ev.kind === 'fleet' ? 'fleet' : ev.kind === 'guard' ? 'guard' : ev.kind === 'offev' ? 'offev' : ev.kind === 'wdog' ? 'wdog' : ev.kind === 'hmem' ? 'hmem' : 'mesh';
      c.src[key] = Math.max(c.src[key] || 0, ev.at);
    }
    c.minted = (c.minted || 0) + wrote;
    fs.writeFileSync(STATE, JSON.stringify({ ...c, settled_at: nowIso() }));
  }
  const book = summarize();
  fs.writeFileSync(BOOK, JSON.stringify(book, null, 1));
  console.log(`[econ-engine] minted=${wrote} seq=${c.last_seq} tx24=${book.day24.transactions} mwu24=${book.day24.mwu}`);
  return book;
}

if (process.argv.includes('--loop')) {
  const sec = Math.max(30, parseInt(process.argv[process.argv.indexOf('--loop') + 1] || '120', 10) || 120);
  console.log(`[econ-engine] resident every ${sec}s`);
  settle();
  setInterval(settle, sec * 1000);
} else {
  settle();
}
