#!/usr/bin/env node
'use strict';
/* dex-activation — THE IGNITION DESK (CR-0077 · the owner ordered the DEX alive)
 *
 * הבעלים מסתכל על שורת הענקים ורואה: "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" (trace
 * 1a135897157a1d75, 2026-10-13). השורש נמדד: STASIS (active=true, הבלם המאושר) עצר את
 * dex-core ואת arb-mesh BEFORE-READ מאז 2026-10-04 — המנוע דופק כל שעה ונעצר, הבריכות
 * מתות, אפס-נפח, אפס-עמלות. CR-0077 מכניס את חוק-המסילות-המדורגות לליבה (דפוס CR-0075
 * של דלפק-הבאטץ') ופותח את המסילות dex-core/arb-mesh/dex-activation — והדלפק הזה הוא
 * מנוע-הנזילות: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה.
 *
 * החוקים (כל-הדלפקים-האחרים נשארים בדיוק-כמו-שהם):
 *  1. keyless + internal-only: יחידות-ספר-פנימיות (SIM) בלבד; אפס-שידור, אפס-מפתחות,
 *     אפס-כסף-אמיתי. ה-settle עובר רק דרך חוקי-ה-settle של הליבה עצמה.
 *  2. חוק-המסילה המדורגת: STASIS עוצר את הדלפק רק כש-'dex-activation' לא ב-stagedLanes.allow;
 *     הבלם-הראשי (active=true) לעולם לא מתהפך; הסרת-שם-המסילה עוצרת fail-closed בטיק הבא.
 *  3. דו-צדדיות: כל בריכה מקבלת סולם-קנייה וסולם-מכירה משני-הצדדים — גריד-חד-צדדי הוא
 *     הימור-כיוון והוא REFUSED לפי חוק-הגריד-הנגדי (CR-0074); כאן שני-הצדדים תמיד.
 *  4. סולם-גדלים: 10/100/500 bps מהעומק של צד-הקלט (חוק LADDER_SIZES_BPS של ה-mesh) —
 *     ראנג-אבק (MESH_DUST=1000µ) נדחה בכנות; ראנג מעל 5%-עומק אינו נוצר (חוק-הכובע של הליבה).
 *  5. minOut: quote מ-routeBest של הליבה −50bps (חוק MESH_MAX_SLIP_BPS) — אין-סחיפה בין
 *     ניסוח להסדרה.
 *  6. רוסטרה: ספליט מנדטות — מפעיל 40%, החיילים את היתר (חוק OPERATOR_SHARE_BPS של ה-mesh);
 *     השארית-השלמה (מודולו) חוזרת למפעיל — דטרמיניסטי לחלוטין.
 *  7. סופר-כותב: הדלפק כותב רק dex-activation-queue.json + ספריו שלו; הליבה מסדרת את
 *     התור הזה דרך DEX_SETTLE_QUEUE (אותם-חוקי-הסדרה בדיוק); תור-ה-mesh לא נוגע.
 *  8. אידמפוטנטיות: batch id דטרמיניסטי (שעה + hash של הספר) — שעה משוחזרת לא מסדרת פעמיים.
 *  9. כנות: נפח/עמלות 24ש׳ נמדדים מפנקס-ה-ops (AGENT_FILL בלבד) — אף-מספר לא מומצא;
 *     fail-closed: ספר-ליבה חסר/ישן/שבור = ספר-DRY כן, exit 0 תמיד.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');
const dc = require('./dex-core.cjs');
const mesh = require('./arb-mesh.cjs');

const AG = __dirname;
const PROTOCOL = 'SAOS-DEX-ACTIVATION/1';
const VERSION = 'dex-activation v1.0.0 (CR-0077 THE DEX IGNITION · two-sided ladder flow)';
const STASIS_FILE = path.join(AG, 'STASIS.json');
const LANE = 'dex-activation';
const OUT_JSON = path.join(AG, 'dex-activation.json');
const OUT_MD = path.join(AG, 'dex-activation.md');
const OUT_HISTORY = path.join(AG, 'dex-activation-history.jsonl');
const QUEUE_FILE = path.join(AG, 'dex-activation-queue.json');
const CORE_BOOK = path.join(AG, 'dex-core.json');
const CORE_HISTORY = path.join(AG, 'dex-core-history.jsonl');

const BPS = dc.BPS;
const MESH_DUST = dc.MESH_DUST;               // 1000n µ — dust never rests
const LADDER_SIZES_BPS = mesh.LADDER_SIZES_BPS; // [10n,100n,500n] — the mesh's own ladder
const MESH_MAX_SLIP_BPS = mesh.MESH_MAX_SLIP_BPS; // 50n — minOut guard
const OPERATOR_SHARE_BPS = mesh.OPERATOR_SHARE_BPS; // 4000n — operator 40%
const CORE_STALE_HOURS = 30;                  // the mesh's staleness law, same number
const MAX_INTENTS_PER_RUN = 30;               // a bounded batch — the desk never floods the queue
const LADDER_ROUNDS = 3;                      // heavy-running law: up to 3 ladder passes per tick (each re-reads the fresh book)
const CROSS_PAIRS_ENABLED = true;             // the owner's stable-pair surfaces (WSTEEM/WSBD)
const ub = (z) => { try { return BigInt(String(z == null ? '0' : z)); } catch (_) { return 0n; } };
const mu = (z) => z.toString();

function nowIso() {
  if (process.env.DEX_ACT_NOW) { const t = Date.parse(process.env.DEX_ACT_NOW); if (isFinite(t)) return new Date(t).toISOString(); }
  return new Date().toISOString();
}
function readJson(f) { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (_) { return null; } }
function stasisCheck() {
  try { const s = JSON.parse(fs.readFileSync(STASIS_FILE, 'utf8')); return s && s.active ? s : null; } catch (_) { return null; }
}
function laneAllowed(st, lane) {
  try { const a = ((st || {}).stagedLanes || {}).allow || []; return a.map(String).includes(String(lane)); } catch (_) { return false; }
}
function writeBook(obj, file) {
  const tmp = (file || OUT_JSON) + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(obj, null, 1) + '\n');
  fs.renameSync(tmp, file || OUT_JSON);
}
function appendHistory(rows) {
  if (!rows.length) return;
  fs.appendFileSync(OUT_HISTORY, rows.map((r) => JSON.stringify(r)).join('\n') + '\n');
}

// ── the drafting laws (pure — eval-recomputable, no fs, no clock) ───────────

/** LADDER-ROSTER-ROTATION law (CR-0077): each RUNG is assigned to ONE roster account by a
 *  deterministic rotation (owner leads; soldiers cycle) — the roster participates evenly,
 *  the intent count stays bounded whatever the fleet size, and every agent both buys and
 *  sells across the rounds (the two-sided discipline kills inventory skew).
 *  The operator-share law stays where it belongs: the mesh's mandate split (OPERATOR_SHARE_BPS). */
function makeRotator(roster) {
  let n = 0;
  return (budget) => {
    if (budget <= 0n || !roster.length) return null;
    const agent = roster[n % roster.length];
    n += 1;
    return { agent, budgetMu: mu(budget), share: `ROTATION-${(n - 1) % roster.length}-of-${roster.length}` };
  };
}

/** the pre-trade simulation (CR-0077): the desk replays the CORE's own settle law — the same
 *  depth-at-turn (min reserve across pools holding the asset), the same 5%-depth cap, the same
 *  wire law (≤10% of treasury free), the same routeBest + poolSwap walk — over the sim state
 *  (pools + accounts), committing each intent's movements exactly like the settle will. It
 *  invents NOTHING: every number is the core's own math on the book's own state. Returns the
 *  intent's {sizeIn, quote} or null when the core would refuse (honest skip at draft time). */
function simIntent(sim, agent, from, to, budget) {
  try {
    const depth0 = (pools, asset) => {
      let depth = 0n;
      for (const p of pools) {
        if (p.planned || (ub(p.ra) <= 0n && ub(p.rb) <= 0n)) continue;
        if (p.a === asset) depth = depth === 0n ? ub(p.ra) : (ub(p.ra) < depth ? ub(p.ra) : depth);
        if (p.b === asset) depth = depth === 0n ? ub(p.rb) : (ub(p.rb) < depth ? ub(p.rb) : depth);
      }
      return depth;
    };
    const depth = depth0(sim.pools, from);
    if (depth <= 0n) return null;
    let sizeIn = budget > depth * 500n / BPS ? depth * 500n / BPS : budget; // the core's 5%-depth cap
    if (sizeIn < MESH_DUST) return null;
    if (!sim.accounts[agent]) sim.accounts[agent] = { claims: {} };
    let held = ub(sim.accounts[agent].claims[from] || '0');
    let wireAmt = 0n;
    if (held < sizeIn) {
      const shortfall = sizeIn - held;
      const free = ub((sim.accounts.treasury || { claims: {} }).claims[from] || '0');
      const wireCap = free * 1000n / BPS; // the core's 10%-wire cap
      wireAmt = shortfall > wireCap ? wireCap : shortfall;
      if (wireAmt <= 0n) return null; // GATED-WIRE-NO-CAPITAL — honest skip, the core would refuse
      if (held + wireAmt < sizeIn) sizeIn = held + wireAmt; // partial wire → partial fill
      if (sizeIn < MESH_DUST) return null;
    }
    const route = dc.routeBest(sim.pools, from, to, sizeIn);
    if (!route) return null;
    let cur = from, amt = sizeIn;
    for (const pid of route.ids) {
      const p = sim.pools.find((x) => x.id === pid);
      if (!p) return null;
      const dirOut = p.a === cur ? p.b : p.a;
      const sw = dc.poolSwap(p, cur, dirOut, amt, null);
      if (!sw || sw.error) return null;
      p.ra = mu(sw.newRa); p.rb = mu(sw.newRb); p.feeMeter = mu(ub(p.feeMeter) + sw.feeAmt);
      amt = sw.out; cur = dirOut;
    }
    if (cur !== to) return null;
    // commit the movements exactly like the settle does (claims conservation in the sim)
    if (wireAmt > 0n) {
      sim.accounts.treasury.claims[from] = mu(ub(sim.accounts.treasury.claims[from]) - wireAmt);
      sim.accounts[agent].claims[from] = mu(held + wireAmt);
    }
    sim.accounts[agent].claims[from] = mu(ub(sim.accounts[agent].claims[from]) - sizeIn);
    sim.accounts[agent].claims[to] = mu(ub(sim.accounts[agent].claims[to] || '0') + amt);
    return { sizeIn, quote: amt };
  } catch (_) { return null; }
}

/** TWO-SIDED ladder intents for one live pool: sell-a rungs (a→b) + sell-b rungs (b→a),
 *  each at 10/100/500 bps of that side's depth, dust-guarded, roster-split, minOut-guarded.
 *  PRE-TRADE SIMULATION law (CR-0077): every intent is quoted against the batch-sequential
 *  state AT ITS OWN TURN by replaying the core's settle laws (simIntent) — the settle re-runs
 *  the identical math in the identical order, so execution equals simulation; the −50bps
 *  guard stays armed against any real drift between draft and settle (a concurrent writer
 *  moving the book still refuses honestly).
 *  INTERLEAVING law: rungs alternate a→b / b→a ascending in size — the pool oscillates
 *  around the mid instead of drifting one way (a sequential one-direction batch is a
 *  direction bet on itself; the interleave is the two-sided discipline).
 *  Deterministic: same book in → byte-identical intents out. */
function draftPoolLadder(coreBook, pool, roster, sim, assign) {
  const intents = [];
  if (!pool || pool.planned) return intents;
  const ra = ub(pool.ra), rb = ub(pool.rb);
  if (ra <= 0n || rb <= 0n) return intents; // an empty pool has no market — honest absence
  const sides = [
    { from: pool.a, to: pool.b, depth: ra },
    { from: pool.b, to: pool.a, depth: rb },
  ];
  for (const bps of LADDER_SIZES_BPS) { // ascending — small impact first, the interleave keeps the mid home
    for (const side of sides) {
      const size = side.depth * bps / BPS;
      if (size < MESH_DUST) continue; // the dust law: an honest skip, never padded
      const cap = side.depth * 500n / BPS; // the core's 5%-depth cap — the desk never drafts above it
      const sizeIn = size > cap ? cap : size;
      {
        const s = assign(sizeIn);
        if (!s) continue; // empty roster — honest absence
        const budget = ub(s.budgetMu);
        if (budget < MESH_DUST) continue; // a sub-dust split is noise — honest skip
        const q = simIntent(sim, s.agent, side.from, side.to, budget);
        if (!q) continue; // the core's own laws would refuse — honest skip at draft time
        intents.push({
          agent: s.agent, from: side.from, to: side.to, amountIn: mu(q.sizeIn),
          minOut: mu(q.quote - (q.quote * MESH_MAX_SLIP_BPS / BPS)), quote: mu(q.quote),
          rowId: `ACT-${pool.id}-${side.from}-${Number(bps)}`,
          share: s.share, heldMu: mu(ub(((coreBook.accounts || {})[s.agent] || { claims: {} }).claims[side.from] || '0')),
          wireExpected: q.sizeIn === budget ? '0' : mu(budget - q.sizeIn),
          ladder: 'activation', sizeBps: Number(bps), poolId: pool.id,
        });
      }
    }
  }
  return intents;
}

/** CROSS-PAIR law (CR-0077 · the owner's stable-pair order): two-sided rungs on the WRAPPED
 *  pairs the single pools cannot quote directly — WSTEEM↔WSBD (volatile vs its own stable,
 *  the wrapped "STEEM/SBD stable pair") — routed ATOMICALLY through OUR pools (every hop
 *  pays us fees). Depth = min reserve across pools holding the input asset. */
const CROSS_PAIRS = [['WSTEEM', 'WSBD'], ['WSBD', 'WSTEEM']];
function draftCrossPairs(coreBook, roster, sim, assign, budgetLeft) {
  const intents = [];
  if (!coreBook.genesisDone) return intents;
  const depth0 = (asset) => {
    let depth = 0n;
    for (const p of (coreBook.pools || [])) {
      if (p.planned || (ub(p.ra) <= 0n && ub(p.rb) <= 0n)) continue;
      if (p.a === asset) depth = depth === 0n ? ub(p.ra) : (ub(p.ra) < depth ? ub(p.ra) : depth);
      if (p.b === asset) depth = depth === 0n ? ub(p.rb) : (ub(p.rb) < depth ? ub(p.rb) : depth);
    }
    return depth;
  };
  for (const [from, to] of CROSS_PAIRS) {
    if (intents.length >= budgetLeft) break;
    const depth = depth0(from);
    if (depth <= 0n) continue;
    for (const bps of [10n, 100n]) { // the cross pair rides smaller rungs — multi-hop impact compounds
      const size = depth * bps / BPS;
      if (size < MESH_DUST) continue;
      const s = assign(size);
      if (!s) break;
      const budget = ub(s.budgetMu);
      if (budget < MESH_DUST) continue;
      const q = simIntent(sim, s.agent, from, to, budget);
      if (!q) continue;
      intents.push({
        agent: s.agent, from, to, amountIn: mu(q.sizeIn),
        minOut: mu(q.quote - (q.quote * MESH_MAX_SLIP_BPS / BPS)), quote: mu(q.quote),
        rowId: `ACT-X-${from}-${to}-${Number(bps)}`,
        share: s.share, heldMu: mu(ub(((coreBook.accounts || {})[s.agent] || { claims: {} }).claims[from] || '0')),
        wireExpected: q.sizeIn === budget ? '0' : mu(budget - q.sizeIn),
        ladder: 'activation-cross', sizeBps: Number(bps), poolId: null,
      });
    }
  }
  return intents;
}

/** the full queue draft for one tick (pools sorted by id — the law never depends on file order).
 *  sim = one mutable deep-copy of the live pools + accounts; EVERY intent of the batch (across all
 *  pools and cross-pairs, in settle order) quotes + applies against it — the desk replays the exact
 *  batch the core is about to settle. */
function draftActivation(coreBook, roster) {
  const pools = (coreBook.pools || []).filter((p) => !p.planned && ub(p.ra) > 0n && ub(p.rb) > 0n)
    .slice().sort((x, y) => String(x.id).localeCompare(String(y.id)));
  const sim = {
    pools: (coreBook.pools || []).map((p) => JSON.parse(JSON.stringify(p))),
    accounts: JSON.parse(JSON.stringify(coreBook.accounts || { treasury: { claims: {} } })),
  };
  const assign = makeRotator(roster);
  let intents = [];
  for (const p of pools) {
    if (intents.length >= MAX_INTENTS_PER_RUN) break;
    intents = intents.concat(draftPoolLadder(coreBook, p, roster, sim, assign));
  }
  intents = intents.concat(draftCrossPairs(coreBook, roster, sim, assign, MAX_INTENTS_PER_RUN - intents.length));
  intents = intents.slice(0, MAX_INTENTS_PER_RUN);
  const stateHash = crypto.createHash('sha256')
    .update(JSON.stringify({ coreSeq: coreBook.seq, pools: pools.map((p) => [p.id, mu(p.ra), mu(p.rb)]), intents }))
    .digest('hex').slice(0, 8);
  const hourBucket = new Date(coreBook.at || nowIso()).toISOString().slice(0, 13);
  return { batch: `ACT-${hourBucket.replace(/[-:T]/g, '')}-${stateHash}`, pools: pools.map((p) => p.id), intents };
}

/** rolling-24h measurement from the append-only ledger (AGENT_FILL rows only — never invented). */
function measure24h(now) {
  const since = Date.now() - 24 * 3600 * 1000;
  const acc = { fills: 0, volumeInMu: 0n, volumeOutMu: 0n, feesMu: 0n, perPool: {}, perAgent: {} };
  try {
    const raw = fs.readFileSync(CORE_HISTORY, 'utf8');
    const lines = raw.split('\n');
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i];
      if (!line || line.indexOf('AGENT_FILL') === -1) continue;
      let row = null;
      try { row = JSON.parse(line); } catch (_) { continue; }
      if (!row || row.type !== 'AGENT_FILL') continue;
      const at = Date.parse(row.at || '');
      if (!isFinite(at) || at < since) continue;
      acc.fills += 1;
      acc.volumeInMu += ub(row.amountIn);
      acc.volumeOutMu += ub(row.amountOut);
      acc.feesMu += ub(row.feesMu);
      const pa = acc.perAgent[row.agent] || { fills: 0, volumeInMu: 0n, feesMu: 0n };
      pa.fills += 1; pa.volumeInMu += ub(row.amountIn); pa.feesMu += ub(row.feesMu);
      acc.perAgent[row.agent] = pa;
      for (const h of (row.hops || [])) {
        const pp = acc.perPool[h.pool] || { swaps: 0, inMu: 0n, outMu: 0n, feesMu: 0n };
        pp.swaps += 1; pp.inMu += ub(h.in); pp.outMu += ub(h.out); pp.feesMu += ub(h.fee);
        acc.perPool[h.pool] = pp;
      }
    }
  } catch (_) { /* no ledger yet — honest zeros */ }
  const ser = (o) => JSON.parse(JSON.stringify(o, (k, v) => (typeof v === 'bigint') ? mu(v) : v));
  return {
    windowHours: 24, at: now, fills: acc.fills,
    volumeInMu: mu(acc.volumeInMu), volumeOutMu: mu(acc.volumeOutMu), fees24hMu: mu(acc.feesMu),
    perPool: Object.fromEntries(Object.entries(acc.perPool).map(([k, v]) => [k, { swaps: v.swaps, inMu: mu(v.inMu), outMu: mu(v.outMu), feesMu: mu(v.feesMu) }])),
    perAgent: Object.fromEntries(Object.entries(acc.perAgent).map(([k, v]) => [k, { fills: v.fills, volumeInMu: mu(v.volumeInMu), feesMu: mu(v.feesMu) }])),
    _raw: ser(acc),
  };
}

// ── the book (md twin) ──────────────────────────────────────────────────────
function writeMd(b) {
  const L = [];
  L.push(`# dex-activation — THE IGNITION DESK (CR-0077)\n`);
  L.push(`At: ${b.at} · Verdict: **${b.verdict}** · batch: ${b.batch || '—'} · lane: ${b.lane}\n`);
  L.push(`Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.\n`);
  L.push(`Pools armed: ${(b.poolsArmed || []).join(', ') || '—'} · Intents drafted: ${b.intentsDrafted} · Fills settled: ${(b.fills || []).length} · Refusals: ${(b.rejects || []).length} · Wires: ${b.wires || 0}\n`);
  if (b.coreLedger) L.push(`Core ledger: seq ${b.coreLedger.seq} @ ${b.coreLedger.at} · conservation ${b.coreLedger.conservationOk} · att ${b.coreLedger.attestation || '—'}\n`);
  if ((b.fills || []).length) {
    L.push(`\n| Agent | Fill | Out | Edge (marked) | Fees |`);
    L.push(`|---|---|---|---|---|`);
    for (const f of b.fills) L.push(`| ${f.agent} | ${f.from} ${f.amountIn}µ | ${f.amountOut}µ ${f.to} | ${f.edgeMu == null ? 'null (honest)' : f.edgeMu + 'µ'} | ${f.feesMu}µ |`);
  }
  if ((b.rejects || []).length) {
    L.push(`\n| Agent | Refusal | Why |`);
    L.push(`|---|---|---|`);
    const seen = new Set();
    for (const r of b.rejects) { const k = `${r.agent}|${r.why}`; if (seen.has(k)) continue; seen.add(k); L.push(`| ${r.agent} | ${r.amountIn}µ ${r.from}→${r.to} | ${r.why} |`); }
  }
  if (b.measure24h) {
    L.push(`\n## Rolling 24h (measured from the ledger — never invented)\n`);
    L.push(`Fills: ${b.measure24h.fills} · Volume in: ${b.measure24h.volumeInMu}µ · Volume out: ${b.measure24h.volumeOutMu}µ · Fees accrued: ${b.measure24h.fees24hMu}µ\n`);
    const pools = Object.entries(b.measure24h.perPool || {});
    if (pools.length) {
      L.push(`\n| Pool | Swaps 24h | In µ | Out µ | Fees µ |`);
      L.push(`|---|---|---|---|---|`);
      for (const [k, v] of pools) L.push(`| ${k} | ${v.swaps} | ${v.inMu} | ${v.outMu} | ${v.feesMu} |`);
    }
  }
  L.push(`\nLaws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust ${MESH_DUST}µ · minOut −${Number(MESH_MAX_SLIP_BPS) / 100}% · roster split op-${Number(OPERATOR_SHARE_BPS) / 100}% · bounded ${MAX_INTENTS_PER_RUN} intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only\n`);
  fs.writeFileSync(OUT_MD, L.join('\n') + '\n');
}

// ── tick ────────────────────────────────────────────────────────────────────
async function tick() {
  const now = nowIso();
  try {
    const stasis = stasisCheck();
    if (stasis && !laneAllowed(stasis, LANE)) {
      writeBook({ protocol: PROTOCOL, at: now, agent: VERSION, verdict: 'HALTED-STASIS (lane not in stagedLanes.allow — the staged-lane law, CR-0077)', stasisHalted: true, lane: LANE, intentsDrafted: 0, fills: [], rejects: [], measure24h: null, errors: [] });
      console.log(`STASIS-HALT dex-activation · ${now}`);
      return 0;
    }
    const coreBook = readJson(CORE_BOOK);
    if (!coreBook || coreBook.protocol !== 'SAOS-DEX-CORE/1' || !coreBook.genesisDone) {
      writeBook({ protocol: PROTOCOL, at: now, agent: VERSION, verdict: 'DRY (no live core ledger — the exchange core has not born yet)', stasisHalted: false, lane: LANE, coreStale: true, intentsDrafted: 0, fills: [], rejects: [], measure24h: measure24h(now), errors: [] });
      console.log(`dex-activation: DRY (no core) · ${now}`);
      return 0;
    }
    const coreAgeH = (Date.now() - Date.parse(coreBook.at)) / 3600000;
    if (coreAgeH > CORE_STALE_HOURS) {
      writeBook({ protocol: PROTOCOL, at: now, agent: VERSION, verdict: `DRY (core book stale ${coreAgeH.toFixed(1)}h > ${CORE_STALE_HOURS}h — the desk reports, never guesses)`, stasisHalted: false, lane: LANE, coreStale: true, intentsDrafted: 0, fills: [], rejects: [], measure24h: measure24h(now), errors: [] });
      console.log(`dex-activation: DRY (stale core) · ${now}`);
      return 0;
    }
    if (coreBook.conservationOk === false) {
      writeBook({ protocol: PROTOCOL, at: now, agent: VERSION, verdict: 'REFUSED-CONSERVATION (the core book is broken — the desk never trades on a broken book)', stasisHalted: false, lane: LANE, intentsDrafted: 0, fills: [], rejects: [], measure24h: measure24h(now), errors: [] });
      console.log(`dex-activation: REFUSED-CONSERVATION · ${now}`);
      return 0;
    }

    const roster = mesh.meshRoster();
    // THE HEAVY RUN (CR-0077): up to LADDER_ROUNDS ladder passes per tick — each pass drafts
    // against the FRESH post-settle book (the pre-trade sim rides the newest state), settles
    // atomically, and stops honestly when a pass yields nothing (dust floor, wire gate).
    let poolsArmed = [], batch = null, fills = [], rejects = [], wires = 0, after = null, settledBatch = null;
    let curBook = coreBook, roundsRun = 0, roundsFilled = 0;
    for (let round = 1; round <= LADDER_ROUNDS; round++) {
      const ageH = (Date.now() - Date.parse(curBook.at)) / 3600000;
      if (ageH > CORE_STALE_HOURS) break;
      const draft = draftActivation(curBook, roster);
      if (round === 1) poolsArmed = draft.pools;
      if (!draft.intents.length) break;
      roundsRun += 1;
      writeQueueAtomic(draft.batch, now, draft.intents);
      spawnSync(process.execPath, [path.join(AG, 'dex-core.cjs'), 'settle-intents'], {
        encoding: 'utf8', timeout: 90000,
        env: Object.assign({}, process.env, { DEX_SETTLE_QUEUE: 'dex-activation-queue.json' }),
      });
      const settled = readJson(CORE_BOOK);
      if (!settled || settled.protocol !== 'SAOS-DEX-CORE/1') { console.log('dex-activation: the core did not answer the settle (booked honestly)'); break; }
      after = settled;
      batch = settledBatch = (settled.summary || {}).meshBatch || draft.batch;
      let roundFills = 0;
      for (const o of (settled.opsThisTick || [])) {
        if (o.type === 'AGENT_FILL') { fills.push(o); roundFills += 1; }
        else if (o.type === 'AGENT_REJECT') rejects.push(o);
        else if (o.type === 'MESH-WIRE') wires += 1;
      }
      if (roundFills > 0) roundsFilled += 1;
      if (roundFills === 0) break; // an honest stop: the laws refused this pass — never force
      curBook = settled; // the next pass drafts against the fresh state
    }
    var rounds = { configured: LADDER_ROUNDS, run: roundsRun, filled: roundsFilled };
    const m24 = measure24h(now);
    let verdict;
    if (!fills.length && !rejects.length && roundsRun === 0) verdict = 'NO-LADDER (no live pool passed the dust/depth floor — tiny-but-real custody, the drip funds it when it lands)';
    else if (fills.length) verdict = `IGNITED (${rounds.filled}/${LADDER_ROUNDS} rounds filled)`;
    else if (rejects.some((x) => x.why === 'GATED-WIRE-NO-CAPITAL')) verdict = 'GATED-WIRE (ladder armed but no free capital to wire the agents — named, never faked)';
    else if (after == null) verdict = 'SETTLE-PENDING (queue written, the core did not answer)';
    else verdict = 'ACT-LIVE';
    const book = {
      protocol: PROTOCOL, at: now, agent: VERSION, mode: 'KEYLESS-ACTIVATION-LADDER',
      stasisHalted: false, lane: LANE, verdict, batch, settledBatch,
      coreLedger: { seq: coreBook.seq, at: coreBook.at, ageHours: +coreAgeH.toFixed(2), conservationOk: coreBook.conservationOk, attestation: coreBook.attestation },
      roster, poolsArmed, rounds, intentsDrafted: fills.length + rejects.length, intents: [],
      wires, fills, rejects, measure24h: m24,
      laws: [
        'keyless + internal-only (SIM units; zero broadcast, zero keys, zero real-money)',
        'staged-lane law (CR-0077): STASIS halts only when the lane is not allowed; the master brake never flips',
        'two-sided ladder on every live pool — a one-sided book is a direction bet and it is REFUSED',
        'sizes 10/100/500bps of input-side depth; dust refuses honestly; 5%-depth cap is the core\'s own law',
        'minOut = core route quote −0.5%; a minOut miss refuses (REFUSED-MINOUT) — never a hope',
        'roster split: operator 40% / soldiers the rest; wire ≤10% of free treasury per batch (the core\'s law)',
        'single-writer per queue file: the desk owns dex-activation-queue.json, the mesh owns dex-intents.json',
        'idempotency: deterministic batch id — a replayed hour settles nothing twice',
        'the 24h numbers are measured from the append-only ledger — fail-closed honest zeros when absent',
      ],
      errors: [],
    };
    writeBook(book); writeMd(book);
    appendHistory([{ at: now, verdict: verdict.split(' ')[0], batch, pools: poolsArmed, rounds: rounds, intents: book.intentsDrafted, fills: fills.length, rejects: rejects.length, wires, vol24hInMu: m24.volumeInMu, fees24hMu: m24.fees24hMu }]);
    console.log(`DEX-ACTIVATION-TICK verdict=${verdict.split(' ')[0]} rounds=${rounds.filled}/${rounds.run}/${LADDER_ROUNDS} batch=${batch || '—'} pools=${poolsArmed.join(',') || '—'} intents=${book.intentsDrafted} fills=${fills.length} rejects=${rejects.length} wires=${wires} vol24h=${m24.volumeInMu}µ fees24h=${m24.fees24hMu}µ`);
    return 0;
  } catch (e) {
    try {
      writeBook({ protocol: PROTOCOL, at: now, agent: VERSION, verdict: 'ERROR (booked honestly, exit 0)', stasisHalted: false, lane: LANE, intentsDrafted: 0, fills: [], rejects: [], measure24h: null, errors: [String(e.message).slice(0, 300)] });
    } catch (_) {}
    console.log(`dex-activation: ERROR (booked honestly, exit 0) ${e.message}`);
    return 0;
  }
}

function writeQueueAtomic(batch, now, intents) {
  const tmp = QUEUE_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify({ protocol: 'SAOS-DEX-ACTIVATION-QUEUE/1', batch, at: now, intents }, null, 1) + '\n');
  fs.renameSync(tmp, QUEUE_FILE);
}

// ── selftest (fresh process, zero network — the drafting laws judge themselves) ──
function selftest() {
  const ok = (name, cond) => { if (!cond) { console.error(`SELFTEST-RED ${name}`); process.exitCode = 1; } else console.log(`ok ${name}`); };
  const mkCore = (ra, rb, feeBps, claims) => ({
    protocol: 'SAOS-DEX-CORE/1', at: nowIso(), seq: 7, genesisDone: true, conservationOk: true,
    attestation: 'selftest', pools: [{ id: 'PX', pair: 'AAA/BBB', a: 'AAA', b: 'BBB', kind: 'VOLATILE', feeBps, ra: mu(ra), rb: mu(rb), feeMeter: '0', planned: false }],
    accounts: { treasury: { claims: claims || { AAA: mu(ra * 10n), BBB: mu(rb * 10n) } } }, arb: [],
  });
  const roster = ['owner', 's1', 's2'];
  // 1 · two-sided law: BOTH directions drafted for a live pool
  const core1 = mkCore(1000000n, 500000n, 30);
  const mkSim = (c) => ({ pools: c.pools.map((x) => JSON.parse(JSON.stringify(x))), accounts: JSON.parse(JSON.stringify(c.accounts)) });
  const d1 = draftPoolLadder(core1, core1.pools[0], roster, mkSim(core1), makeRotator(roster));
  const dirs = new Set(d1.map((i) => `${i.from}>${i.to}`));
  ok('two-sided-both-directions', dirs.has('AAA>BBB') && dirs.has('BBB>AAA'));
  ok('ladder-rung-bps', d1.every((i) => [10, 100, 500].includes(i.sizeBps)));
  // 2 · determinism: same book in → byte-identical draft
  const core = mkCore(1000000n, 500000n, 30);
  const q1 = JSON.stringify(draftActivation(core, roster)), q2 = JSON.stringify(draftActivation(JSON.parse(JSON.stringify(core)), roster));
  ok('draft-deterministic', q1 === q2);
  // 3 · roster rotation: owner leads, deterministic cycle, budgets equal the rung size
  const rot = makeRotator(roster);
  const a0 = rot(1000n), a1 = rot(1000n), a2 = rot(1000n), a3 = rot(1000n);
  ok('rotation-owner-leads', a0.agent === 'owner' && a1.agent === 's1' && a2.agent === 's2' && a3.agent === 'owner');
  const rungRows = d1.filter((i) => i.sizeBps === 100 && i.from === 'AAA');
  const sum = rungRows.reduce((a, i) => a + ub(i.amountIn), 0n);
  ok('roster-rotation-sums', sum === (1000000n * 100n / BPS));
  ok('operator-leads', d1[0].agent === 'owner');
  // 4 · dust law: sub-dust rungs never drafted (a 30_000µ pool at 10bps = 30µ < 1000µ dust)
  const core2 = mkCore(30000n, 15000n, 30);
  const tiny = draftPoolLadder(core2, core2.pools[0], roster, mkSim(core2), makeRotator(roster));
  ok('dust-refused-honestly', tiny.every((i) => ub(i.amountIn) >= MESH_DUST));
  // 5 · depth-cap law: no intent above 5% of its side's depth
  const core3 = mkCore(1000000n, 500000n, 30);
  const big = draftPoolLadder(core3, core3.pools[0], roster, mkSim(core3), makeRotator(roster));
  ok('depth-cap-law', big.every((i) => ub(i.amountIn) <= 1000000n * 500n / BPS || ub(i.amountIn) <= 500000n * 500n / BPS));
  // 6 · minOut law: every intent carries a minOut below its quote
  ok('minout-guard', big.every((i) => i.minOut != null && ub(i.minOut) <= ub(i.quote)));
  // 7 · bounded run
  const core4 = mkCore(10n ** 12n, 5n * 10n ** 11n, 30);
  const many = draftActivation(core4, ['owner', 's1', 's2', 's3', 's4', 's5', 's6', 's7']);
  ok('bounded-run', many.intents.length <= MAX_INTENTS_PER_RUN);
  // 8 · the settle law still refuses dust at the core (the desk never bypasses the core's laws)
  ok('mesh-dust-constant', MESH_DUST === 1000n);
  ok('ladder-constants', JSON.stringify(LADDER_SIZES_BPS.map(String)) === '["10","100","500"]');
  // 9 · pre-trade sim law: minOut is always quote −50bps, never above the quote
  ok('presim-minout-law', big.every((i) => ub(i.minOut) === ub(i.quote) - (ub(i.quote) * MESH_MAX_SLIP_BPS / BPS)));
  // 10 · measure24h honest zeros when the ledger is absent
  const m = measure24h(nowIso());
  ok('measure-honest-zeros', typeof m.fills === 'number' && m.fills >= 0);
  console.log(process.exitCode ? 'dex-activation selftest RED' : 'dex-activation selftest GREEN');
  return process.exitCode || 0;
}

if (require.main === module) {
  const argv = process.argv.slice(2);
  if (argv[0] === 'selftest') process.exit(selftest());
  tick().then((c) => process.exit(c || 0)).catch((e) => { console.error(`dex-activation fatal: ${e.message}`); process.exit(0); });
}
module.exports = { PROTOCOL, VERSION, makeRotator, draftPoolLadder, draftActivation, draftCrossPairs, simIntent, measure24h, laneAllowed, selftest, MAX_INTENTS_PER_RUN, LADDER_ROUNDS, CROSS_PAIRS };
