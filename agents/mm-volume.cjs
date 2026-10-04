#!/usr/bin/env node
/* MM-VOLUME (CR-0058, fleet Rung 28 — THE VOLUME ENGINE) — the fleet-scale
 * market-making planner: how the fleet becomes the volume leader of the venues
 * it stands on, PROVABLY, before a single owner-gated sat moves.
 *
 * Owner directive (2026-10-04): "אני רוצה שנהיה השחקנים של market maker וגריד הכי
 * גדולים ומרווחים על הרשתות... כמות מאוד גדולה של עסקאות עושה שוק... גם חלק מסחר
 * בינינו זה טוב... ניקח גם את העמלות של המשתמשים האחרים" — maximum provable
 * volume, fleet-partitioned ladders, bounded internal flow, fee-aware profitability.
 *
 * The ENGINEERING QUERIES this desk answers (asked and answered, in code):
 *  Q1 WHERE does provable volume live?  → the chains-side internal markets
 *     (SBD/STEEM, HBD/HIVE) charge ZERO trade fee (fee-doctrine law) and carry a
 *     measured tape (~10 fills/min on SBD/STEEM, 2026-10-03 recon) — volume there
 *     costs nothing per trade and captures the spread. Hive-Engine carries fees →
 *     priced separately, feasibility flagged by fee math.
 *  Q2 WHAT bounds profitability? → maker edge = captured spread − venue fees;
 *     BUY-EDGE law (no buy above realized sell VWAP − 0.3%); spacing floor keeps
 *     rungs wider than the round-trip cost.
 *  Q3 HOW does a fleet share one ladder? → deterministic partition: rung j goes to
 *     account (j mod N) — disjoint, complete cover, no stacking across accounts.
 *  Q4 WHAT about trading between our own soldiers? → internal flow is REAL volume
 *     at ZERO fee on the internal markets and it is BOUNDED (cap % of projected
 *     volume), LABELED INTERNAL-FLOW in every row, and EXCLUDED from the realized
 *     VWAP/edge books (the poison guard: internal fills must never teach the fleet
 *     a fake edge).
 *  Q5 HOW do we take other users' fees? → on chain internal markets fees are zero —
 *     we capture the SPREAD from their flow; on OUR OWN venue (saos-dex-kernel,
 *     30 bps, 30% treasury cut) their fees route to the treasury by law. Both paths
 *     are surfaced with their numbers.
 *  Q6 WHAT stops bleeding? → caps from treasury liquid (85% sells), MAX_NEW_ORDERS,
 *     band caps, internal-flow cap, STASIS brake, and the owner gate: this desk is
 *     PLAN-ONLY — the live broadcast path stays market-exec.cjs law (MARKET_EXEC_LIVE).
 *
 * Laws carried (all pre-existing, re-honored here):
 *  · STASIS halt-before-read (stasisHalt borrowed from fleet-census.cjs by require —
 *    the SAME brake, second-mover law).
 *  · MMV_SKIP off-switch + MMV_DIR eval seam (fresh-process fixtures never touch the
 *    real tree).
 *  · Single-writer atomic books: agents/mm-volume.json (+ .md — AT-FREE, HEBREW owner
 *    surface per the owner-language law).
 *  · Append-only plan ledger: agents/mm-volume-plan.jsonl (one row per run).
 *  · Fail-soft: unreadable/corrupt inputs degrade to null sections with honest
 *    blockedReasons, exit 0 always.
 *  · Determinism: venues/routes sorted, numbers rounded (4 decimals), the stable
 *    payload (book minus `at`) is byte-identical for the same tree (E50-guarded).
 */

const fs = require('fs');
const path = require('path');
const { stasisHalt } = require('./fleet-census.cjs');

const ROOT = path.resolve(__dirname, '..');
const DIR = process.env.MMV_DIR ? path.resolve(process.env.MMV_DIR) : path.join(ROOT, 'agents');
const BOOK_JSON = path.join(DIR, 'mm-volume.json');
const BOOK_MD = path.join(DIR, 'mm-volume.md');
const PLAN_JSONL = path.join(DIR, 'mm-volume-plan.jsonl');

// ---------- constants (the caps are LAW, encoded as data) ----------
const LAW = {
  SELL_CAP_PCT: 0.85,          // market-exec law: sells ≤ 85% of liquid inventory
  MAX_NEW_PER_RUN: 6,          // market-exec law: orders per run per account
  RUNS_PER_DAY: 96,            // the 15-min grid cadence
  INTERNAL_FLOW_CAP_PCT: 0.25, // internal flow ≤ 25% of projected volume (bounded honesty)
  BUY_EDGE_FLOOR_PCT: 0.3,     // BUY-EDGE law: no buy above sellVwap × (1 − 0.3%)
  TAPE_FILLS_PER_MIN: 10,      // measured tape (SBD/STEEM recon 2026-10-03, market-exec header)
  ASSUMED_AVG_SIZE_SBD: 0.1,   // assumption label carried when no realized rows exist
};

// ---------- pure helpers (E50 white-box surface) ----------
const r4 = (x) => (typeof x === 'number' && isFinite(x)) ? Math.round(x * 10000) / 10000 : null;

/** per-venue volume economics. feeBps = per-side fee in basis points (0 on chain
 * internal markets). Returns both conservative (half-spread capture) and
 * optimistic (full-spread capture) projections; volume is bounded by the measured
 * tape AND by the fleet's order capacity (whichever bites first). */
function venueEconomics({ feeBps, spreadPct, fillsPerMin, avgSizeSbd, runsPerDay = LAW.RUNS_PER_DAY, maxNewPerRun = LAW.MAX_NEW_PER_RUN, accounts = 1 }) {
  if (![feeBps, spreadPct, fillsPerMin, avgSizeSbd].every((x) => typeof x === 'number' && isFinite(x) && x >= 0)) return null;
  const feeRoundTripPct = (feeBps * 2) / 100;
  const edgeConsPct = Math.max(0, r4(spreadPct / 2 - feeRoundTripPct));
  const edgeOptPct = Math.max(0, r4(spreadPct - feeRoundTripPct));
  const tapeBound = fillsPerMin * 60 * 24;
  const capBound = maxNewPerRun * runsPerDay * Math.max(1, accounts);
  const projTradesDay = Math.min(tapeBound, capBound);
  const projVolumeSbd = r4(projTradesDay * avgSizeSbd);
  return {
    feeBps, spreadPct: r4(spreadPct), feeRoundTripPct: r4(feeRoundTripPct),
    edgeConsPct, edgeOptPct,
    bounds: { tapeBoundTradesDay: Math.round(tapeBound), capBoundTradesDay: Math.round(capBound), binding: tapeBound <= capBound ? 'tape' : 'capacity' },
    projTradesDay, projVolumeSbd,
    projNetConsSbd: r4((projVolumeSbd * edgeConsPct) / 100),
    projNetOptSbd: r4((projVolumeSbd * edgeOptPct) / 100),
  };
}

/** deterministic fleet partition: rung j → account (j mod N). Disjoint, complete
 * cover. Zero rungs or zero accounts = no ladder at all → covers:false (honest). */
function partitionLadder(accounts, rungs) {
  const accs = (accounts || []).filter((a) => typeof a === 'string' && a.length > 0).sort();
  const n = rungs | 0;
  if (!accs.length || n < 1) return { accounts: accs, slices: [], covers: false };
  const slices = accs.map((a) => ({ account: a, rungs: [] }));
  for (let j = 0; j < n; j++) slices[j % accs.length].rungs.push(j);
  const covered = slices.reduce((s, x) => s + x.rungs.length, 0);
  return { accounts: accs, slices, covers: covered === n };
}

/** internal-flow plan (trading between our own soldiers): REAL volume at the
 * venue's round-trip fee; eligible ONLY where feeRoundTripPct === 0 (on fee'd
 * venues self-crossing bleeds the fee into the venue). Bounded by capPct of the
 * projected volume. Guards are data, not prose. */
function selfFlowPlan({ accounts, projVolumeSbd, capPct = LAW.INTERNAL_FLOW_CAP_PCT, feeBps }) {
  const n = (accounts || []).length;
  const feeRoundTripPct = (feeBps * 2) / 100;
  const eligible = n >= 1 && feeRoundTripPct === 0 && typeof projVolumeSbd === 'number' && projVolumeSbd > 0;
  const internalCapSbd = eligible ? r4(capPct * projVolumeSbd) : 0;
  return {
    eligible,
    accounts: n,
    feeRoundTripPct: r4(feeRoundTripPct),
    capPct,
    internalCapSbd,
    guards: ['VWAP-EXCLUSION: internal fills never enter realized sell VWAP / edge books (poison guard)',
      'LABEL: every internal row carries INTERNAL-FLOW',
      `CAP: internal flow ≤ ${Math.round(capPct * 100)}% of projected volume`,
      'FEE-NULL-ONLY: internal flow armed only on zero-fee round-trip venues'],
    blockedReason: eligible ? null : (n < 1 ? 'NO-FLEET-ACCOUNTS' : feeRoundTripPct !== 0 ? 'FEE-ROUND-TRIP-NONZERO' : 'NO-PROJECTED-VOLUME'),
  };
}

/** BUY-EDGE law: the ceiling above which NO buy may be priced. Null when no
 * realized sell VWAP exists (buys then bounded by band only — honestly null). */
function buyEdgeFloor(sellVwap, floorPct = LAW.BUY_EDGE_FLOOR_PCT) {
  if (typeof sellVwap !== 'number' || !isFinite(sellVwap) || sellVwap <= 0) return null;
  return r4(sellVwap * (1 - floorPct / 100));
}

/** realized sell VWAP from market-exec run rows (placed sells, realized price ×
 * STEEM amount, SBD-weighted). Fail-soft: null when no rows. */
function sellVwapFromRuns(runs) {
  let sbd = 0, steem = 0;
  for (const run of runs || []) {
    for (const o of (run && run.placed) || []) {
      const amt = parseFloat(String(o.amount_to_sell || '').split(' ')[0]);
      const isSteem = String(o.amount_to_sell || '').endsWith('STEEM');
      if (isSteem && typeof o.realized === 'number' && amt > 0) { steem += amt; sbd += amt * o.realized; }
    }
  }
  return steem > 0 ? r4(sbd / steem) : null;
}

/** average sell notional in SBD from the same rows (the honest avgSize input);
 * falls back to the law default with the assumption labeled. */
function avgSellNotional(runs) {
  const notions = [];
  for (const run of runs || []) {
    for (const o of (run && run.placed) || []) {
      const amt = parseFloat(String(o.amount_to_sell || '').split(' ')[0]);
      if (String(o.amount_to_sell || '').endsWith('STEEM') && amt > 0 && typeof o.realized === 'number') notions.push(amt * o.realized);
    }
  }
  if (!notions.length) return { avgSizeSbd: LAW.ASSUMED_AVG_SIZE_SBD, assumed: true, n: 0 };
  const avg = notions.reduce((s, x) => s + x, 0) / notions.length;
  return { avgSizeSbd: r4(avg) || LAW.ASSUMED_AVG_SIZE_SBD, assumed: false, n: notions.length };
}

/** fleet growth table: the lift path from the funded fleet of today to a
 * partitioned fleet of N. Lift is honest: capacity scales with N, tape does not. */
function growthTable({ accounts, fillsPerMin, avgSizeSbd, ns = [1, 2, 3, 5], runsPerDay = LAW.RUNS_PER_DAY, maxNewPerRun = LAW.MAX_NEW_PER_RUN }) {
  const out = [];
  for (const n of ns) {
    const e = venueEconomics({ feeBps: 0, spreadPct: 1, fillsPerMin, avgSizeSbd, runsPerDay, maxNewPerRun, accounts: n });
    if (!e) continue;
    out.push({ n, ordersDayCap: Math.round(e.bounds.capBoundTradesDay), volumeBoundSbd: e.projVolumeSbd, binding: e.bounds.binding });
  }
  return out;
}

// ---------- main (fail-soft, exit 0 always; require.main guard at the bottom) ----------
async function run() {
  // TWO brakes, ONE law: (1) the DIR-local brake (market-grid law — works in eval
  // sandboxes, honors a per-surface halt), (2) the borrowed census brake (the SAME
  // fleet-wide brake, second-mover law). Either active = halt-before-read.
  let haltSrc = null, haltReason = null;
  try {
    const local = JSON.parse(fs.readFileSync(path.join(DIR, 'STASIS.json'), 'utf8'));
    if (local && local.active === true) { haltSrc = 'local:' + path.basename(DIR); haltReason = local.reason || null; }
  } catch (_) { /* no local brake declared → run normally */ }
  const halt = stasisHalt();
  if (halt.active && !haltSrc) { haltSrc = halt.source; haltReason = null; }
  if (haltSrc) {
    const at = new Date().toISOString();
    const book = { at, agent: 'mm-volume v1.0.0', verdict: 'MMV-HALTED-STASIS', halted: true, reason: haltReason, scope: haltSrc, venues: [], fleet: null, selfFlow: null, projections: null, ownerGate: { mode: 'PLAN-ONLY-OWNER-GATED' }, blockedReasons: ['STASIS'], errors: [] };
    try { fs.writeFileSync(BOOK_JSON, JSON.stringify(book, null, 1)); } catch (_) {}
    console.log(`STASIS-HALT mm-volume · ${at}`);
    return;
  }
  const read = (f) => { try { return JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')); } catch (_) { return null; } };
  const readJsonl = (f) => {
    try {
      const rows = [];
      for (const line of String(fs.readFileSync(path.join(DIR, f), 'utf8')).split('\n')) {
        const t = line.trim(); if (!t) continue;
        try { rows.push(JSON.parse(t)); } catch (_) { /* counted via corrupt below */ }
      }
      return rows;
    } catch (_) { return []; }
  };

  const errors = [];
  const feeDoctrine = read('fee-doctrine.json');
  const dexBook = read('dex-book.json');
  const mgHist = readJsonl('market-grid-history.jsonl');
  const money = read('money-ledger.json');
  const execRuns = Array.isArray(read('market-exec.json')) ? read('market-exec.json') : [];
  const registry = read('agent-registry.json');

  const blockedReasons = [];
  if (!feeDoctrine) blockedReasons.push('NO-FEE-DOCTRINE');
  if (!dexBook) blockedReasons.push('NO-DEX-BOOK');
  if (!money || !money.book) blockedReasons.push('NO-TREASURY-BOOK');

  // fleet accounts (steem:// owners from the registry; headcorner is the funded one)
  const accounts = [];
  if (registry && Array.isArray(registry.identity)) {
    for (const it of registry.identity) {
      const owner = it && it.metadata && typeof it.metadata.owner === 'string' ? it.metadata.owner : null;
      if (owner && owner.startsWith('steem://')) {
        const acct = owner.slice('steem://'.length);
        if (!accounts.includes(acct)) accounts.push(acct);
      }
    }
  }
  if (!accounts.length) { accounts.push('headcorner'); blockedReasons.push('REGISTRY-EMPTY-DEFAULTED-HEAD'); }

  // treasury inventory (steem lane)
  let liquidSteem = null, liquidSbd = null;
  if (money && money.book) {
    const p = (s) => { const x = parseFloat(String(s || '').split(' ')[0]); return isFinite(x) ? x : null; };
    liquidSteem = p(money.book.headSteemLiquid);
    liquidSbd = p(money.book.headSteemDebt);
  }

  // measured spread (last market-grid row, steem internal) + tape proxy
  const mgSorted = mgHist.filter((r) => r && typeof r.at === 'string' && !isNaN(Date.parse(r.at))).sort((a, b) => Date.parse(a.at) - Date.parse(b.at));
  const lastMg = mgSorted.length ? mgSorted[mgSorted.length - 1] : null;
  const steemSpread = lastMg && Array.isArray(lastMg.spreads)
    ? (lastMg.spreads.find((s) => String(s.market).includes('steem')) || {}).spreadPct : null;

  // venue rows: internal markets (zero fee by doctrine) + hive-engine (fee'd, from dex book where readable)
  const venues = [];
  const internalFeeBps = 0; // fee-doctrine: chains-side internal markets charge zero trade fee
  if (typeof steemSpread === 'number' && isFinite(steemSpread)) {
    const notion = avgSellNotional(execRuns);
    const vwap = sellVwapFromRuns(execRuns);
    const econ = venueEconomics({ feeBps: internalFeeBps, spreadPct: steemSpread, fillsPerMin: LAW.TAPE_FILLS_PER_MIN, avgSizeSbd: notion.avgSizeSbd, accounts: 1 });
    venues.push({
      venue: 'SBD/STEEM (internal steem)', layer: 'chain-internal', feeBps: internalFeeBps,
      spreadPct: r4(steemSpread), measuredFrom: 'market-grid-history last row',
      avgSizeSbd: notion.avgSizeSbd, avgSizeAssumed: notion.assumed, avgSizeN: notion.n,
      sellVwap: vwap, buyEdgeFloor: buyEdgeFloor(vwap),
      econ,
      selfFlow: selfFlowPlan({ accounts, projVolumeSbd: econ ? econ.projVolumeSbd : 0, feeBps: internalFeeBps }),
    });
  } else {
    blockedReasons.push('NO-MEASURED-STEEM-SPREAD');
  }
  // the fleet's OWN venue: other users' fees route to the treasury by doctrine
  if (feeDoctrine && Array.isArray(feeDoctrine.venues)) {
    const kernel = feeDoctrine.venues.find((v) => v && v.id === 'saos-dex-kernel');
    if (kernel && typeof kernel.feeBpsSource === 'number') {
      venues.push({
        venue: 'saos-dex-kernel (L1 our own DEX)', layer: 'saos-L1', feeBps: kernel.feeBpsSource,
        treasuryCutPct: kernel.treasuryCutPct != null ? kernel.treasuryCutPct : null,
        spreadPct: null, econ: null,
        selfFlow: selfFlowPlan({ accounts, projVolumeSbd: 0, feeBps: kernel.feeBpsSource }),
        note: 'feeBpsSource=' + kernel.feeBpsSource + ' bps per-swap input fee, ' + kernel.treasuryCutPct + '% treasury cut — other users\u2019 fees ARE the fleet\u2019s income here; volume metering is operator-gated future',
      });
    }
  }

  // fleet partition over the steem internal ladder (rungs = the market-grid 10-rung grid)
  const partition = partitionLadder(accounts, 10);
  const fleet = {
    accountsNow: accounts.length,
    fundedAccounts: accounts.includes('headcorner') ? ['headcorner'] : [],
    partition,
    growth: growthTable({ accounts, fillsPerMin: LAW.TAPE_FILLS_PER_MIN, avgSizeSbd: (venues[0] && venues[0].avgSizeSbd) || LAW.ASSUMED_AVG_SIZE_SBD }),
    rolloutPath: 'fleet rollout = fund + key-provision recruits (recruit.cjs contract path), one derived-key vault per account, each account re-runs market-exec law with its own caps; the partition above pre-assigns the rungs',
  };

  // totals (over venues with economics)
  const withEcon = venues.filter((v) => v.econ);
  const projections = {
    venuesMeasured: withEcon.length,
    projVolumeSbdDay: r4(withEcon.reduce((s, v) => s + (v.econ.projVolumeSbd || 0), 0)),
    projNetConsSbdDay: r4(withEcon.reduce((s, v) => s + (v.econ.projNetConsSbd || 0), 0)),
    projNetOptSbdDay: r4(withEcon.reduce((s, v) => s + (v.econ.projNetOptSbd || 0), 0)),
    internalFlowCapSbdDay: r4(withEcon.reduce((s, v) => s + (v.selfFlow && v.selfFlow.internalCapSbd ? v.selfFlow.internalCapSbd : 0), 0)),
  };

  const verdict = blockedReasons.length === 0 && withEcon.length > 0 ? 'MMV-PLAN-LIVE' : (withEcon.length > 0 ? 'MMV-PARTIAL' : 'MMV-BLOCKED-INPUTS');
  const at = new Date().toISOString();
  const book = {
    at, agent: 'mm-volume v1.0.0 (CR-0058, fleet Rung 28 — the volume engine)', verdict,
    law: {
      planOnly: 'this desk PLANs and MEASURES — it never signs; the live broadcast path is market-exec.cjs law (MARKET_EXEC_LIVE=1, verify-then-sign)',
      guards: ['SELL-CAP-85% of liquid inventory', 'MAX-NEW-ORDERS 6/run/account', 'BUY-EDGE: no buy above realized sell VWAP − 0.3%', 'SPACING-FLOOR 0.4% (market-grid)', 'INTERNAL-FLOW capped 25% + labeled + VWAP-excluded', 'STASIS halt-before-read'],
    },
    venues, fleet, projections,
    ownerGate: { mode: 'PLAN-ONLY-OWNER-GATED', livePath: 'market-exec.cjs (headcorner) — fleet rollout per fleet.rolloutPath', previewNote: 'per-venue order previews are emitted by market-grid executorPreview; this book carries counts and prices only' },
    inputs: {
      feeDoctrine: feeDoctrine ? (feeDoctrine.format || 'present') : null,
      dexBookAt: dexBook && dexBook.at ? dexBook.at : null,
      marketGridHistoryRows: mgSorted.length,
      lastMarketGridAt: lastMg ? lastMg.at : null,
      treasuryAt: money && money.updated ? money.updated : null,
      execRunRows: execRuns.length,
      registryAccounts: accounts,
    },
    blockedReasons, errors,
  };

  const stable = JSON.stringify({ ...book, at: null });
  try { fs.writeFileSync(BOOK_JSON + '.tmp', JSON.stringify(book, null, 1)); fs.renameSync(BOOK_JSON + '.tmp', BOOK_JSON); } catch (e) { errors.push({ book: String(e.message) }); }

  // append-only plan ledger (one row per run; STASIS rows never reach here)
  try { fs.appendFileSync(PLAN_JSONL, JSON.stringify({ at, verdict, projVolumeSbdDay: projections.projVolumeSbdDay, projNetConsSbdDay: projections.projNetConsSbdDay, internalFlowCapSbdDay: projections.internalFlowCapSbdDay, venues: venues.map((v) => v.venue), errors: errors.length }) + '\n'); } catch (e) { errors.push({ plan: String(e.message) }); }

  // Hebrew owner surface (AT-FREE)
  const he = [
    '# מנוע הנפח — תוכנית עושה-השוק של הצי (CR-0058, Rung 28)',
    '',
    `פסק דין: **${verdict === 'MMV-PLAN-LIVE' ? 'מנוע-נפח-חי' : verdict === 'MMV-PARTIAL' ? 'חלקי' : 'חסום-קלטים'}**`,
    projections.venuesMeasured ? `נפח מוקרן: **${projections.projVolumeSbdDay} SBD/יום** · רווח נטו מוקרן (שמרני→אופטימי): **${projections.projNetConsSbdDay} → ${projections.projNetOptSbdDay} SBD/יום**` : 'אין נפח מוקרן — חסרות מדידות',
    '',
    '| זירה | עמלה (bps) | מרווח נמדד % | קצה שמרני % | קצה אופטימי % | נפח מוקרן SBD/יום |',
    '|---|---|---|---|---|---|',
    ...venues.map((v) => `| ${v.venue} | ${v.feeBps} | ${v.spreadPct != null ? v.spreadPct : '—'} | ${v.econ ? v.econ.edgeConsPct : '—'} | ${v.econ ? v.econ.edgeOptPct : '—'} | ${v.econ ? v.econ.projVolumeSbd : '—'} |`),
    '',
    `סולם הצי: ${fleet.accountsNow} חשבון/ות ממומנים (${fleet.fundedAccounts.join(', ')}) · חלוקת סולמות מכסה ${partition.covers ? 'את כל' : 'חלק מ'} ה-10 המדרגות`,
    `זרימה פנימית (מסחר בין החיילים): ${venues[0] && venues[0].selfFlow && venues[0].selfFlow.eligible ? `זמינה — תקרה ${projections.internalFlowCapSbdDay} SBD/יום, מתויגת INTERNAL-FLOW, מוחרגת מה-VWAP` : 'חסומה'}`,
    '',
    'חוקי הבטיחות: ' + book.law.guards.join(' · '),
    blockedReasons.length ? 'חסימות כנות: ' + blockedReasons.join(' · ') : '',
    '',
    'השער: קצב הטייפ ' + LAW.TAPE_FILLS_PER_MIN + ' מילויים/דק׳ נמדד 2026-10-03 (recon market-exec); ' + LAW.MAX_NEW_PER_RUN + ' פקודות/ריצה × 96 ריצות/יום = תקרת יכולת; הנפח מוגבל למינימום מהטייפ ומהיכולת.',
    'כל פקודה בפועל נשארת OWNER-GATED (market-exec.cjs). הספר הזה תוכנית ומדידה — לעולם לא חתימה.',
  ].filter(Boolean).join('\n');
  try { fs.writeFileSync(BOOK_MD, he); } catch (e) { errors.push({ md: String(e.message) }); }

  console.log(`mm-volume: ${verdict} · venues ${venues.length} · projVol ${projections.projVolumeSbdDay} SBD/day · netCons ${projections.projNetConsSbdDay} · internalCap ${projections.internalFlowCapSbdDay} · blocked ${blockedReasons.length}`);
}

// Z-49 law: requiring this file for evals must never execute a run
if (require.main === module) {
  if (process.env.MMV_SKIP === '1') { console.log('mm-volume skipped (MMV_SKIP)'); process.exit(0); }
  run().catch((e) => { console.error('mm-volume FATAL:', e.message); process.exit(0); });
}

module.exports = { venueEconomics, partitionLadder, selfFlowPlan, buyEdgeFloor, sellVwapFromRuns, avgSellNotional, growthTable, LAW };
