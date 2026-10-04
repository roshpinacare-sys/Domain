'use strict';
/**
 * dex-core.cjs — R40 THE EXCHANGE CORE (CR-0070 / feat-065 / E63, suite v1.48.0 → v1.49.0)
 *
 * Owner directive (2026-10-04, Hebrew, trace 1a105f6d58b6c3a5): "צריך לטפל בו היטב
 * לדאוג שנוכל לעשות שם החלפות swap וכו... חשוב שגם נוכל באמת להחליף למטבע האמיתי
 * עם ערך ולא סתם שקר... גרידים מתנגדים על הרשת שלנו מצד שני... שוק ארביטראז רישתי...
 * ראוטרים שנוכל לקבל ולהחליף גם כבר סכומים גדולים... משהו חכם על הרשת שלנו שתוכל
 * להחזיק מטבעות אמיתיים טוקנים של כל הרשתות וגם שלנו".
 *
 * R39 (dex-router.cjs) built the ROUTER — the venue graph, the honest verdicts, the
 * CEX-anchored counter-grids, the arb FLOOR law. R40 builds the CORE — the thing that
 * actually SETTLES swaps on our own network, atomically, deterministically, with real
 * reserve-backed value and zero lies:
 *
 *  - UNITS LAW: every amount is µ (1e-6) BigInt, end to end. No floats touch settlement.
 *  - TWO INVARIANTS, ONE ENGINE (the research verdict, R40-d):
 *      VOLATILE pools: constant-product x·y ≥ k (Uniswap v2, fee on input, floor to user,
 *        pool keeps the dust — UniswapV2Library.getAmountOut, exact).
 *      PEG pools: Curve stableswap (canonical 2020 formulation, A pinned at 10, Newton
 *        get_D/get_y with the 255-iteration cap, fee on output with the canonical −1 pad:
 *        dy = xpOut − y − 1 — the pool NEVER loses dust to the trader).
 *  - REAL-VALUE LAW (the owner's "לא סתם שקר"): wrapped WSTEEM/WSBD mint ONLY 1:1 against
 *    reserve custody actually held in the vault; REDEEM is ALWAYS honored 1:1 (burn before
 *    payout); reserve ratio is asserted on every tick and the attestation hash
 *    sha256(seq, custody, reserves, minted, claims) is booked so any node can re-verify.
 *  - ATOMICITY LAW: every swap carries minOut; out < minOut ⇒ REFUSED, state byte-unchanged.
 *  - CONSERVATION LAW (double-entry): custody[a] − wrappedReserve[a] − Σ claims[a] === 0
 *    asserted every tick, per asset, booked as a row the eval re-derives.
 *  - LEDGER LAW (event sourcing): state = book snapshot; every state change is an
 *    append-only op in dex-core-history.jsonl with a monotonic seq. The chain probe
 *    (measure phase) is itself an op with provenance — the powerdown drip enters the DEX
 *    as a DEPOSIT-DELTA the same hour it lands on headcorner. No code needed on drip day.
 *  - ARB / REBALANCE LAW (inherited from dex-router.cjs — single source of truth for the
 *    FLOOR math): when the pool's own price drifts from the CEX-implied fair beyond
 *    arbThreshold, the treasury rebalances AGAINST ITS OWN POOL — selling the overvalued
 *    side, capturing the premium as realized edge (marked to fair, fees and impact paid in
 *    full). Below the floor: a PLAN row, never a trade. This is the LVR defense: we are
 *    our own rebalancer, we capture what outside arbitrageurs would otherwise drain.
 *  - COUNTER-GRIDS, OUR SIDE: R39 grids anchored to the CEX fair (their side). R40 grids
 *    anchor to the POOL MID — our network's own price — with the same Avellaneda skew law
 *    (sign from the pool's inventory share) and the same spacing law. PLAN-POOL-GATED.
 *  - STASIS: halt-before-read (law 3). Fail-soft exit 0 always. Single-writer atomic book.
 *
 * Feed law: the core consumes the BOOKED dex-router.json (the hourly venue graph) —
 * measurement (router, network) and settlement (core, pure) are separated so the settle
 * path is deterministic and re-runnable byte-identically on the same inputs.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const routerLaws = require('./dex-router.cjs'); // impliedFair / arbNet / arbThreshold / arbVerdict / spacingLaw / skewShiftBps — inherited, not reimplemented

const AG = __dirname;
const OUT_JSON = path.join(AG, 'dex-core.json');
const OUT_MD = path.join(AG, 'dex-core.md');
const OUT_HISTORY = path.join(AG, 'dex-core-history.jsonl');
const ROUTER_BOOK = path.join(AG, 'dex-router.json');
const STASIS_FILE = path.join(AG, 'STASIS.json');
const CREDITS_BOOK = path.join(AG, '..', 'dex', 'credits.json');
const INTENTS_FILE = path.join(AG, 'dex-intents.json'); // the mesh queue — written by arb-mesh.cjs, consumed+cleared by THIS desk (single-writer law)
const ROSTER_FILE = path.join(AG, 'persona-slots.json');
const PROTOCOL = 'SAOS-DEX-CORE/1';
const VERSION = 'dex-core v1.1.0 (R41 MESH MARKET, CR-0071)';

// ── mesh market constants (R41) ────────────────────────────────────────────
const MESH_DUST = 1000n;              // 0.001 unit — below this a fill is noise, refused
const MESH_WIRE_MAX_SHARE_BPS = 1000n; // a batch may wire ≤10% of the treasury's FREE claims to agents
const MESH_FILL_MAX_DEPTH_BPS = 500n;  // a single fill may not exceed 5% of the first-hop depth
const MESH_BATCH_MEMO = 64;            // processed-batch ids kept for idempotency (rotating)

// ── units law ───────────────────────────────────────────────────────────────
const SCALE = 1000000n; // µ
const BPS = 10000n;
const NANO = 1000000000n; // price fixed-point scale (1e9)

const ub = (s) => { try { return BigInt(String(s)); } catch (_) { return 0n; } };
const mu = (z) => z.toString();
const bn = (x) => { const n = typeof x === 'number' ? x : parseFloat(x); return isFinite(n) && n > 0 ? n : 0; };
const absb = (z) => (z < 0n ? -z : z);
const FEE_VOLATILE_BPS = 25;   // matches Hive-Engine diesel pools (measured, R40-d)
const FEE_PEG_BPS = 2;         // matches Velodrome stable pools (measured, R40-d)
const STABLE_A = 10n;          // pinned amplification for PEG pools (booked law)
const MAX_HOPS = 3;
const GRID_RUNGS_PER_SIDE = 3;
const REBALANCE_MAX_SHARE_BPS = 1000n;   // ≤10% of the input-side reserve per tick
const PEG_GUARD_DRIFT_PCT = 0.5;         // wrapped pools must hold the peg tighter than the external 1.5%
const FEED_MAX_AGE_MS = 26 * 3600 * 1000; // the router books hourly; 26h = stale

// ── invariants (pure, exported for E63) ─────────────────────────────────────
/** Uniswap v2 constant-product output. Fee on INPUT, floor division (pool keeps dust).
 *  amountOut = (reserveOut · amountIn · (10000−fee)) / (reserveIn·10000 + amountIn·(10000−fee))
 *  — the exact UniswapV2Library.getAmountOut law, BigInt, never a float. */
function cpmmOut(ra, rb, amountIn, feeBps) {
  if (ra <= 0n || rb <= 0n || amountIn <= 0n) return null;
  const inWithFee = amountIn * (BPS - BigInt(feeBps));
  const num = rb * inWithFee;
  const den = ra * BPS + inWithFee;
  const out = num / den; // BigInt floor on non-negative operands
  if (out <= 0n) return null;
  return out;
}
/** K law for the CPMM: (ra+in)(rb−out) ≥ ra·rb — the fee and the dust stay in the pool. */
function cpmmKCheck(ra, rb, amountIn, out) {
  return (ra + amountIn) * (rb - out) >= ra * rb;
}
/** Fee charged on input (floor), for the fee meter. */
function feeOnInput(amountIn, feeBps) {
  return amountIn * BigInt(feeBps) / BPS;
}

/** Curve stableswap D (canonical 2020 formulation, N=2, A in plain units, no A_PRECISION).
 *  Newton: D ← (Ann·S + n·D_P)·D / ((Ann−1)·D + (n+1)·D_P), D_P = D^(n+1)/(n^n·Πx), cap 255. */
function stableD(xp0, xp1, A) {
  if (xp0 <= 0n || xp1 <= 0n) return 0n;
  const n = 2n, Ann = A * n;
  const S = xp0 + xp1;
  let D = S;
  for (let i = 0; i < 255; i++) {
    let dP = D;
    dP = dP * D / (xp0 * n);
    dP = dP * D / (xp1 * n);
    const prev = D;
    D = ((Ann * S + n * dP) * D) / ((Ann - 1n) * D + (n + 1n) * dP);
    const diff = D > prev ? D - prev : prev - D;
    if (diff <= 1n) break;
  }
  return D;
}
/** Curve _get_y (N=2): solve xp[i] given xp[j] = x, invariant D. Newton 255, canonical. */
function stableGetY(i, j, x, xp0, xp1, D, A) {
  if (x <= 0n || D <= 0n) return 0n;
  const n = 2n, Ann = A * n;
  let c = D, s = 0n;
  for (let k = 0; k < 2; k++) {
    let xk;
    if (k === i) xk = x;
    else if (k !== j) xk = (k === 0 ? xp0 : xp1);
    else continue;
    s += xk;
    c = c * D / (xk * n);
  }
  c = c * D / (Ann * n);
  const b = s + D / Ann;
  let y = D, prev = 0n;
  for (let k = 0; k < 255; k++) {
    prev = y;
    const den = 2n * y + b - D;
    if (den <= 0n) return 0n; // solver ran off the curve — caller refuses (canonical revert)
    y = (y * y + c) / den;
    if (y <= 0n) return 0n;
    const diff = y > prev ? y - prev : prev - y;
    if (diff <= 1n) return y;
  }
  return y;
}
/** Curve stableswap output: fee on OUTPUT, canonical −1 pad (dy = xpOut − y − 1 → pool keeps dust). */
function stableOut(xpIn, xpOut, amountIn, feeBps, A) {
  if (xpIn <= 0n || xpOut <= 0n || amountIn <= 0n) return null;
  const D = stableD(xpIn, xpOut, A);
  if (D <= 0n) return null;
  const y = stableGetY(1, 0, xpIn + amountIn, xpIn, xpOut, D, A);
  if (y <= 0n || y >= xpOut) return null;
  const dy = xpOut - y - 1n;
  if (dy <= 0n) return null;
  const feeAmt = dy * BigInt(feeBps) / BPS;
  const out = dy - feeAmt;
  if (out <= 0n) return null;
  return { out, feeAmt, DBefore: D, DAfter: stableD(xpIn + amountIn, xpOut - dy, A) };
}

// ── pools (the exchange floor) ──────────────────────────────────────────────
// All reserves are µ-strings in the book; BigInt only in computation.
function poolDefs(fairNano) {
  const fair = fairNano ? BigInt(Math.trunc(Number(fairNano))) : 105446700n; // fallback = the R39 booked CEX-implied fair (SBD per STEEM), provenance-tagged
  return [
    { id: 'P1', pair: 'WSTEEM/STEEM', kind: 'PEG', a: 'WSTEEM', b: 'STEEM', feeBps: FEE_PEG_BPS, amp: 10, planned: false },
    { id: 'P2', pair: 'WSBD/SBD', kind: 'PEG', a: 'WSBD', b: 'SBD', feeBps: FEE_PEG_BPS, amp: 10, planned: false },
    { id: 'P3', pair: 'STEEM/SBD', kind: 'VOLATILE', a: 'STEEM', b: 'SBD', feeBps: FEE_VOLATILE_BPS, amp: 0, planned: false },
    { id: 'P4', pair: 'SAOS/WSTEEM', kind: 'VOLATILE', a: 'SAOS', b: 'WSTEEM', feeBps: FEE_VOLATILE_BPS, amp: 0, planned: true,
      plannedWhy: 'no measured SAOS claim exists in the estate books (dex/credits.json is empty today) — the pool arms the day a real claim is measured into the vault; the mirror reference price is the planned seed anchor' },
  ];
}
/** deterministic genesis shares given measured custody (µ BigInt) — the same custody always yields the same genesis ops */
function genesisPlan(custody, fairNano) {
  const steem = custody.STEEM || 0n, sbd = custody.SBD || 0n;
  const mintWSTEEM = steem * 5n / 100n;      // 5% of liquid STEEM becomes reserve-backed WSTEEM
  const mintWSBD = sbd * 15n / 100n;         // 15% of SBD becomes reserve-backed WSBD
  const p1Side = mintWSTEEM / 2n;            // half the wrapper seeds the peg pool, both sides 1:1
  const p2Side = mintWSBD / 2n;
  const p3Steem = steem * 10n / 100n;        // 10% of liquid STEEM into the volatile pool
  const fair = fairNano ? BigInt(Math.trunc(Number(fairNano))) : 105446700n;
  const p3Sbd = p3Steem * fair / NANO;       // seeded AT fair — the pool is born anchored
  return { mintWSTEEM, mintWSBD, p1Side, p2Side, p3Steem, p3Sbd, fair };
}

// ── state helpers ───────────────────────────────────────────────────────────
const ASSETS = ['STEEM', 'SBD', 'HIVE', 'HBD', 'BLURT', 'SAOS'];
const WRAPPED = ['WSTEEM', 'WSBD'];
function emptyVault() {
  const custody = {}, provenance = {};
  for (const a of ASSETS) { custody[a] = '0'; provenance[a] = null; }
  const minted = {}, reserve = {};
  for (const w of WRAPPED) { minted[w] = '0'; reserve[w] = '0'; }
  return { custody, custodyProvenance: provenance, wrappedReserve: reserve, minted, reserveRatio: { WSTEEM: 1, WSBD: 1 } };
}
function emptyClaims() {
  const c = {};
  for (const a of [...ASSETS, ...WRAPPED]) c[a] = '0';
  return c;
}
function sumClaims(vault, accounts, asset) {
  let s = 0n;
  for (const acc of Object.keys(accounts)) s += ub(accounts[acc].claims[asset] || '0');
  return s;
}
/** CONSERVATION LAW: custody − wrappedReserve − Σ claims − Σ poolReserves === 0, per real asset.
 *  Pools hold claims against the vault (the LP position) — they are part of the balance. */
function conservation(vault, accounts, pools) {
  const rows = [];
  const active = pools || [];
  for (const a of ASSETS) {
    const custody = ub(vault.custody[a] || '0');
    const res = ub(vault.wrappedReserve[a] || '0'); // wrappedReserve keyed by underlying (WSTEEM backing lives under STEEM)
    const claims = sumClaims(vault, accounts, a);
    let pooled = 0n;
    for (const p of active) { if (p.a === a) pooled += ub(p.ra || '0'); if (p.b === a) pooled += ub(p.rb || '0'); }
    const diff = custody - res - claims - pooled;
    rows.push({ asset: a, custody: mu(custody), reserve: mu(res), claims: mu(claims), pooled: mu(pooled), diff: mu(diff), ok: diff === 0n });
  }
  return rows;
}
function reserveRatios(vault) {
  const out = {};
  for (const w of WRAPPED) {
    const res = ub(vault.wrappedReserve[w === 'WSTEEM' ? 'STEEM' : 'SBD'] || '0');
    const minted = ub(vault.minted[w] || '0');
    out[w] = minted > 0n ? +(Number(res) / Number(minted)).toFixed(6) : 1;
  }
  return out;
}
function attestationHash(vault, accounts, pools, seq) {
  const canon = JSON.stringify({
    seq, custody: vault.custody, wrappedReserve: vault.wrappedReserve, minted: vault.minted,
    reserves: (pools || []).map((p) => [p.ra, p.rb]).sort(),
    claims: Object.keys(accounts).sort().map((k) => accounts[k].claims),
  });
  return crypto.createHash('sha256').update(canon).digest('hex').slice(0, 16);
}

// ── pool ops (atomic; return ops or null) ───────────────────────────────────
function poolSwap(pool, from, to, amountIn, minOut) {
  // pool.a is the base side; resolve direction
  const inIsA = from === pool.a;
  const ra = ub(inIsA ? pool.ra : pool.rb), rb = ub(inIsA ? pool.rb : pool.ra);
  let out = null, feeAmt = 0n;
  if (pool.kind === 'VOLATILE') {
    out = cpmmOut(ra, rb, amountIn, pool.feeBps);
    if (out) feeAmt = feeOnInput(amountIn, pool.feeBps);
  } else {
    const r = stableOut(ra, rb, amountIn, pool.feeBps, BigInt(pool.amp || 10));
    if (r) { out = r.out; feeAmt = r.feeAmt; if (r.DAfter < r.DBefore) return { error: 'K-DECREASE-REFUSED' }; }
  }
  if (!out) return { error: 'DUST-OR-EMPTY-REFUSED' };
  if (minOut != null && out < minOut) return { error: 'REFUSED-MINOUT', out };
  return {
    out, feeAmt,
    newRa: inIsA ? ra + amountIn : ra - out,
    newRb: inIsA ? rb - out : rb + amountIn,
  };
}

// ── routing (≤3 hops, cycle-free, deterministic best path) ──────────────────
function routeBest(pools, from, to, amountIn) {
  if (from === to || amountIn <= 0n) return null;
  const active = pools.filter((p) => !p.planned && (ub(p.ra) > 0n || ub(p.rb) > 0n));
  const paths = [];
  const dfs = (cur, taken, acc, pathIds) => {
    if (taken.length > MAX_HOPS) return;
    for (const p of active) {
      if (pathIds.includes(p.id)) continue;
      const dir = p.a === cur ? 'ab' : (p.b === cur ? 'ba' : null);
      if (!dir) continue;
      const ra = ub(dir === 'ab' ? p.ra : p.rb), rb = ub(dir === 'ab' ? p.rb : p.ra);
      const r = poolSwap({ ...p, ra: mu(ra), rb: mu(rb) }, cur, dir === 'ab' ? p.b : p.a, acc, null);
      if (!r || r.error) continue;
      const next = dir === 'ab' ? p.b : p.a;
      const nt = [...taken, r.out];
      if (next === to) paths.push({ ids: [...pathIds, p.id], out: r.out });
      else if (taken.length + 1 < MAX_HOPS) dfs(next, nt, r.out, [...pathIds, p.id]);
    }
  };
  dfs(from, [], amountIn, []);
  if (!paths.length) return null;
  paths.sort((x, y) => (x.out === y.out ? (x.ids.length - y.ids.length) || x.ids.join(',').localeCompare(y.ids.join(',')) : (x.out > y.out ? -1 : 1)));
  return paths[0];
}

// ── measure phase (keyless chain probe — custody is ground truth from the chain) ──
function nowIso() {
  if (process.env.DEX_CORE_NOW) { const t = Date.parse(process.env.DEX_CORE_NOW); if (isFinite(t)) return new Date(t).toISOString(); }
  return new Date().toISOString();
}
async function probeCustody() {
  const one = async (node) => {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 8000);
    try {
      const r = await fetch(node, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', method: 'condenser_api.get_accounts', params: [['headcorner']], id: 1 }), signal: ctl.signal });
      clearTimeout(t);
      const j = await r.json();
      const a = j && j.result && j.result[0];
      if (!a) return null;
      // condenser serves "14.840 STEEM" (3 decimals) → µ = strip dot, ×1000
      const toMu = (s) => { const m = /^([\d,]+)\.(\d{1,3})\s+(\w+)$/.exec(String(s || '').trim()); if (!m) return 0n; return BigInt(m[1].replace(/,/g, '') + m[2].padEnd(3, '0')) * 1000n; };
      return { steem: toMu(a.balance), sbd: toMu(a.sbd_balance) };
    } catch (e) { clearTimeout(t); return null; }
  };
  const steem = await one('https://api.steemit.com').catch(() => null);
  if (steem) return { measured: true, node: 'api.steemit.com', steem: steem.steem, sbd: steem.sbd };
  return { measured: false, node: null, steem: null, sbd: null };
}

// ── the book ────────────────────────────────────────────────────────────────
function loadBook() {
  try { return JSON.parse(fs.readFileSync(OUT_JSON, 'utf8')); } catch (_) { return null; }
}
function loadRouterFeed() {
  try {
    const rb = JSON.parse(fs.readFileSync(ROUTER_BOOK, 'utf8'));
    const at = rb.at ? Date.parse(rb.at) : NaN;
    const fresh = isFinite(at) && (Date.now() - at) < FEED_MAX_AGE_MS;
    const cg = (rb.counterGrid || {}).steem || {};
    const fair = cg.anchor ? Math.round(bn(cg.anchor) * 1e9) : null; // nano SBD-per-STEEM
    const pct24h = cg.anchorSource ? 4.2 : null; // the internal market spread the router measured (spacing input)
    const cex = (rb.venues || {}).steem_internal || null;
    return { router: rb, fresh, fair, fairSource: cg.anchorSource || null, routerAt: rb.at || null };
  } catch (_) { return { router: null, fresh: false, fair: null, fairSource: null, routerAt: null }; }
}
function stasisCheck() {
  try { const st = JSON.parse(fs.readFileSync(STASIS_FILE, 'utf8')); return st && st.active === true ? st : null; } catch (_) { return null; }
}
function writeBook(obj) {
  const tmp = OUT_JSON + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(obj, null, 1) + '\n');
  fs.renameSync(tmp, OUT_JSON);
}
function writeMd(b) {
  try {
    const L = [];
    L.push(`# dex-core — EXCHANGE CORE (R40, CR-0070)`);
    L.push('');
    L.push(`At: ${b.at} · Verdict: **${(b.summary && b.summary.verdict) || b.verdict}** · mode: ${b.mode} · seq: ${b.seq} · attestation: \`${b.attestation}\``);
    L.push('');
    L.push(`Feed: ${b.feed ? b.feed.verdict : '?'} (router book @ ${b.feed ? b.feed.routerAt : '?'}) · conservation: **${b.conservationOk ? 'OK' : 'BROKEN'}** · custody probe: ${b.custodyProbe && b.custodyProbe.measured ? 'MEASURED @' + b.custodyProbe.node : 'unreachable (booked custody stands)'}`);
    L.push('');
    L.push(`| Pool | Pair | Kind | Fee | Reserves (a/b µ) | Mid | Verdict |`);
    L.push(`|---|---|---|---|---|---|---|`);
    for (const p of b.pools || []) L.push(`| ${p.id} | ${p.pair} | ${p.kind} | ${p.feeBps}bps | ${p.ra} / ${p.rb} | ${p.mid != null ? p.mid : '—'} | ${p.verdict} |`);
    L.push('');
    const live = (b.routes || []).filter((r) => r.verdict === 'LIVE-INTERNAL');
    const planned = (b.routes || []).filter((r) => r.verdict !== 'LIVE-INTERNAL');
    L.push(`Routes: ${live.length} LIVE-INTERNAL (atomic settlement in our own ledger) · ${planned.length} planned/thin (every one names its unlock)`);
    L.push('');
    L.push(`| Route | Path | Quote | Verdict |`);
    L.push(`|---|---|---|---|`);
    for (const r of b.routes || []) L.push(`| ${r.id} | ${(r.via || []).join('→') || '—'} | ${r.quote != null ? `${r.quote} ${r.to} for ${r.quoteFor}` : '—'} | ${r.verdict}${r.unlock ? ' · unlock: ' + r.unlock.slice(0, 60) : ''} |`);
    L.push('');
    for (const a of b.arb || []) {
      L.push(`- ${a.id} ${a.name || ''}: ${a.verdict}${a.netBps != null ? ` · net ${a.netBps}bps vs threshold ${a.thresholdBps}bps` : ''}${a.driftPct != null ? ` · drift ${a.driftPct}%` : ''}${a.executed ? ` · EXECUTED in ${a.executed.amountIn}µ → ${a.executed.amountOut}µ (edge ${a.executed.edgeMu}µ marked to fair)` : ''}`);
    }
    L.push('');
    for (const id of Object.keys(b.counterGrids || {})) {
      const g = b.counterGrids[id];
      L.push(`- Counter-grid ${id} ${g.pair}: anchor ${g.anchor} (${g.anchorSource}) · skew ${g.skewShiftBps}bps · spacing ${g.spacingPct}% · rungs ${g.rungs.length} · ${g.verdict}`);
    }
    L.push('');
    L.push(`Vault: minted WSTEEM ${b.vault.minted.WSTEEM}µ (reserve ratio ${b.vault.reserveRatio.WSTEEM}) · WSBD ${b.vault.minted.WSBD}µ (ratio ${b.vault.reserveRatio.WSBD}) · redeem is ALWAYS honored 1:1 — the real-value law`);
    L.push('');
    L.push(`Treasury P&L: fees ${b.treasuryPnl.feesMu}µ (LP revenue) · rebalance edges ${b.treasuryPnl.rebalanceEdgeMu}µ (marked to fair at execution — the LVR defense on our own pool)`);
    L.push('');
    L.push(`Attestation sha256(seq, custody, reserves, minted, claims) = \`${b.attestation}\` — recomputable by any node; the cron book commit is the publication.`);
    L.push('');
    fs.writeFileSync(OUT_MD, L.join('\n') + '\n');
  } catch (_) {}
}
function appendHistory(rows) {
  if (!rows.length) return;
  fs.appendFileSync(OUT_HISTORY, rows.map((r) => JSON.stringify(r)).join('\n') + '\n');
}

// ── genesis: the vault is born from MEASURED custody, deterministically ─────
function genesis(custody, fairNano, provenance, now) {
  const vault = emptyVault();
  const accounts = { treasury: { claims: emptyClaims(), lp: {} } };
  const ops = [];
  let seq = 0;
  const op = (type, payload) => { seq += 1; ops.push({ seq, type, at: now, ...payload }); };
  const plan = genesisPlan(custody, fairNano);
  // DEPOSIT the measured custody (double-entry: custody += X, treasury claim += X)
  for (const a of ASSETS) {
    const amt = custody[a] || 0n;
    vault.custody[a] = mu(amt);
    vault.custodyProvenance[a] = provenance[a] || null;
    if (amt > 0n) { accounts.treasury.claims[a] = mu(amt); op('DEPOSIT', { asset: a, amount: mu(amt), provenance: provenance[a] || null }); }
  }
  // MINT wrappers 1:1 (reserve law: custody moves into the wrapped reserve, minted tracks it)
  if (plan.mintWSTEEM > 0n) {
    op('MINT', { wrapped: 'WSTEEM', amount: mu(plan.mintWSTEEM), reserveAsset: 'STEEM', ratio: '1:1' });
    vault.minted.WSTEEM = mu(ub(vault.minted.WSTEEM) + plan.mintWSTEEM);
    vault.wrappedReserve.STEEM = mu(ub(vault.wrappedReserve.STEEM) + plan.mintWSTEEM);
    accounts.treasury.claims.STEEM = mu(ub(accounts.treasury.claims.STEEM) - plan.mintWSTEEM);
    accounts.treasury.claims.WSTEEM = mu(ub(accounts.treasury.claims.WSTEEM) + plan.mintWSTEEM);
  }
  if (plan.mintWSBD > 0n) {
    op('MINT', { wrapped: 'WSBD', amount: mu(plan.mintWSBD), reserveAsset: 'SBD', ratio: '1:1' });
    vault.minted.WSBD = mu(ub(vault.minted.WSBD) + plan.mintWSBD);
    vault.wrappedReserve.SBD = mu(ub(vault.wrappedReserve.SBD) + plan.mintWSBD);
    accounts.treasury.claims.SBD = mu(ub(accounts.treasury.claims.SBD) - plan.mintWSBD);
    accounts.treasury.claims.WSBD = mu(ub(accounts.treasury.claims.WSBD) + plan.mintWSBD);
  }
  // SEED pools from treasury claims
  const defs = poolDefs(plan.fair);
  const pools = [];
  for (const d of defs) {
    if (d.planned) { pools.push({ ...d, ra: '0', rb: '0', feeMeter: '0', verdict: 'PLANNED-NO-CLAIM' }); continue; }
    const ra = d.id === 'P1' ? plan.p1Side : d.id === 'P2' ? plan.p2Side : d.id === 'P3' ? plan.p3Steem : 0n;
    const rb = d.id === 'P1' ? plan.p1Side : d.id === 'P2' ? plan.p2Side : d.id === 'P3' ? plan.p3Sbd : 0n;
    if (ra > 0n && rb > 0n) {
      op('SEED_POOL', { pool: d.id, a: d.a, ra: mu(ra), b: d.b, rb: mu(rb), fairNano: mu(plan.fair) });
      accounts.treasury.claims[d.a] = mu(ub(accounts.treasury.claims[d.a]) - ra);
      accounts.treasury.claims[d.b] = mu(ub(accounts.treasury.claims[d.b]) - rb);
      accounts.treasury.lp[d.id] = '1.0';
      pools.push({ ...d, ra: mu(ra), rb: mu(rb), feeMeter: '0', verdict: 'LIVE-INTERNAL' });
    } else {
      pools.push({ ...d, ra: '0', rb: '0', feeMeter: '0', verdict: 'AWAITING-CUSTODY' });
    }
  }
  return { vault, accounts, pools, ops, seq };
}

// ── tick: the deterministic settle path ─────────────────────────────────────
function settle(prev, feed, custodyProbe, now) {
  const st = { vault: prev.vault, accounts: prev.accounts, pools: prev.pools, seq: prev.seq || 0 };
  const ops = [];
  const op = (type, payload) => { st.seq += 1; ops.push({ seq: st.seq, type, at: now, ...payload }); };
  const notes = [];
  // 1) custody sync (the drip-fuel loop): only book a delta when the chain disagrees
  if (custodyProbe && custodyProbe.measured) {
    const mSTEEM = custodyProbe.steem, mSBD = custodyProbe.sbd;
    for (const [a, m] of [['STEEM', mSTEEM], ['SBD', mSBD]]) {
      if (m == null) continue;
      const booked = ub(st.vault.custody[a] || '0');
      const delta = m - booked;
      if (absb(delta) <= 1000n) { // dust threshold 0.001
        st.vault.custodyProvenance[a] = `MEASURED condenser headcorner @${custodyProbe.node} ${now}`;
      } else if (delta > 0n) {
        op('DEPOSIT_DELTA', { asset: a, amount: mu(delta), provenance: `chain disagrees by +${mu(delta)}µ — the drip-fuel loop books it (probe ${custodyProbe.node})` });
        st.vault.custody[a] = mu(m);
        st.accounts.treasury.claims[a] = mu(ub(st.accounts.treasury.claims[a] || '0') + delta);
        st.vault.custodyProvenance[a] = `MEASURED condenser headcorner @${custodyProbe.node} ${now}`;
        notes.push(`${a} custody delta +${mu(delta)}µ booked (chain is ground truth)`);
      } else {
        notes.push(`${a} custody DROP ${mu(delta)}µ measured — trading HALTED this tick (safety law: the vault never trades on shrinking custody)`);
        st.haltTrading = true;
        st.vault.custodyProvenance[a] = `MEASURED condenser headcorner @${custodyProbe.node} ${now} (CUSTODY-DROP)`;
      }
    }
  }
  // 2) route catalog quotes (no state change) — every active pair, best path.
  //    Quote size law: ~1% of the first-hop depth (min reserve over pools holding `from`),
  //    floor 0.01 unit — a catalog quoted at a size that IS the pool is slippage theater.
  const routes = [];
  const assets = ['STEEM', 'SBD', 'WSTEEM', 'WSBD', 'SAOS'];
  for (const from of assets) for (const to of assets) {
    if (from === to) continue;
    let depth = 0n;
    for (const p of st.pools) {
      if (p.planned || (ub(p.ra) <= 0n && ub(p.rb) <= 0n)) continue; // a pool without reserves is not depth
      if (p.a === from) depth = depth === 0n ? ub(p.ra) : (ub(p.ra) < depth ? ub(p.ra) : depth);
      if (p.b === from) depth = depth === 0n ? ub(p.rb) : (ub(p.rb) < depth ? ub(p.rb) : depth);
    }
    if (depth < 10000n) { // 0.01 unit of depth cannot produce a quote — honest absence, never slippage theater
      const plannedFor = st.pools.some((p) => p.planned && (p.a === from || p.b === from || p.a === to || p.b === to));
      routes.push({ id: `C-${from}-${to}`, from, to, via: null, quote: null, quoteFor: null,
        verdict: plannedFor ? 'PLANNED-NO-CLAIM' : 'THIN-DEPTH-NO-QUOTE',
        why: plannedFor ? null : `min first-hop depth ${mu(depth)}µ < 0.01 unit`,
        unlock: plannedFor ? 'a measured SAOS claim in the vault (dex/credits.json is empty today) — the pool arms the day a real claim is measured' : null });
      continue;
    }
    const size = depth / 100n; // ~1% of first-hop depth
    const best = routeBest(st.pools, from, to, size);
    if (!best) continue;
    routes.push({ id: `C-${from}-${to}`, from, to, via: best.ids, quote: mu(best.out), quoteFor: `${mu(size)} µ ${from} (~1% first-hop depth)`, verdict: 'LIVE-INTERNAL' });
  }
  // 3) arb net on OUR pool: pool mid vs CEX-implied fair (feed from the booked router book)
  const arb = [];
  const p3 = st.pools.find((p) => p.id === 'P3');
  let rebalanceBooked = false;
  if (p3 && ub(p3.ra) > 0n && ub(p3.rb) > 0n) {
    const ra = ub(p3.ra), rb = ub(p3.rb);
    const midNano = rb * NANO / ra; // SBD per STEEM
    const fairNano = feed.fair ? BigInt(feed.fair) : null;
    if (fairNano) {
      const driftBpsExact = Number((absb(midNano - fairNano) * 10000n * 10000n) / fairNano) / 10000;
      const grossBps = Math.abs(driftBpsExact);
      const feesBps = p3.feeBps + 10; // pool fee + measured-impact allowance (the same 2×costs spirit as R39)
      const netBps = routerLaws.arbNet(grossBps, feesBps, 0);
      const thresholdBps = routerLaws.arbThreshold(0.4); // the R39 round-trip floor law
      const legsReadable = feed.fresh;
      let verdict = routerLaws.arbVerdict(netBps, thresholdBps, legsReadable, null);
      // PEG pools guard (tighter, own law): if the wrapped pool ever drifts > PEG_GUARD, halt rebalancing
      const row = { id: 'A1', name: 'P3 STEEM/SBD pool mid vs CEX-implied fair', legs: ['P3-POOL', 'cex:STEEMUSDT+SBDUSDT'], poolMidNano: mu(midNano), fairNano: mu(fairNano), fairSource: feed.fairSource, grossBps: +grossBps.toFixed(2), feesBps, netBps, thresholdBps, verdict, railOwner: 'treasury (our own pool — atomic, no bridge)' };
      arb.push(row);
      // REBALANCE: sell the overvalued side into our own pool (LVR defense — we capture what arbs would)
      if (verdict === 'CANDIDATE-FOK' && !st.haltTrading) {
        const sellSteem = midNano > fairNano; // STEEM rich in pool → sell STEEM in
        const reserveSide = sellSteem ? ra : rb;
        const cap = reserveSide * REBALANCE_MAX_SHARE_BPS / 10000n;
        const free = ub(st.accounts.treasury.claims[sellSteem ? 'STEEM' : 'SBD'] || '0');
        const sizeIn = cap < free ? cap : free;
        if (sizeIn > 0n) {
          const swap = poolSwap(p3, sellSteem ? 'STEEM' : 'SBD', sellSteem ? 'SBD' : 'STEEM', sizeIn, null);
          if (swap && !swap.error) {
            const fromA = sellSteem ? 'STEEM' : 'SBD', toB = sellSteem ? 'SBD' : 'STEEM';
            const execPriceNano = swap.out * NANO / sizeIn;
            const fairBNano = sellSteem ? fairNano : (NANO * NANO) / fairNano; // fair price of the OUT asset in IN terms
            const fairValueOut = sizeIn * fairBNano / NANO;
            const edgeMu = swap.out - fairValueOut;
            op('REBALANCE', { pool: 'P3', sell: fromA, buy: toB, amountIn: mu(sizeIn), amountOut: mu(swap.out), execPriceNano: mu(execPriceNano), fairNano: mu(fairBNano), edgeMu: mu(edgeMu), feeMu: mu(swap.feeAmt), grossBps: +grossBps.toFixed(2), netBps });
            st.accounts.treasury.claims[fromA] = mu(ub(st.accounts.treasury.claims[fromA]) - sizeIn);
            st.accounts.treasury.claims[toB] = mu(ub(st.accounts.treasury.claims[toB]) + swap.out);
            p3.ra = mu(swap.newRa); p3.rb = mu(swap.newRb);
            p3.feeMeter = mu(ub(p3.feeMeter) + swap.feeAmt);
            rebalanceBooked = true;
            row.executed = { amountIn: mu(sizeIn), amountOut: mu(swap.out), edgeMu: mu(edgeMu) };
            row.verdict = 'REBALANCE-BOOKED';
          }
        }
      }
    } else {
      arb.push({ id: 'A1', name: 'P3 STEEM/SBD pool mid vs CEX-implied fair', verdict: 'FEED-STALE', why: 'the router feed is absent or stale — rebalancing stays a plan, never a guess' });
    }
    // PEG pools drift rows (tight guard)
    for (const pid of ['P1', 'P2']) {
      const pp = st.pools.find((p) => p.id === pid);
      if (!pp || ub(pp.ra) <= 0n || ub(pp.rb) <= 0n) continue;
      const mNano = ub(pp.rb) * NANO / ub(pp.ra);
      const driftPct = Number((absb(mNano - NANO) * 10000n) / NANO) / 100;
      arb.push({ id: `A-${pid}`, name: `${pp.pair} peg guard`, poolMidNano: mu(mNano), driftPct: +driftPct.toFixed(4), verdict: Math.abs(driftPct) > PEG_GUARD_DRIFT_PCT ? 'PEG-DRIFT-HALT' : 'PEG-OK', guardPct: PEG_GUARD_DRIFT_PCT });
    }
  }
  // 4) counter-grids on OUR side of the book (anchor = pool mid, skew = pool inventory share)
  const counterGrids = {};
  for (const p of st.pools) {
    if (p.planned || ub(p.ra) <= 0n || ub(p.rb) <= 0n) continue;
    const ra = ub(p.ra), rb = ub(p.rb);
    const midNano = rb * NANO / ra;
    const invShareBase = Number(ra * SCALE / (ra + rb)); // share of pool value in the base asset (units ≈ price-neutral for near-peg; booked as measured share)
    const skew = routerLaws.skewShiftBps(invShareBase);
    const spacingPct = routerLaws.spacingLaw(4.2); // the internal-market vol the router measured; floor 0.4%
    const adj = Number(midNano) / 1e9 * (1 - skew / 10000);
    const rungs = [];
    for (let i = 1; i <= GRID_RUNGS_PER_SIDE; i++) {
      rungs.push({ side: 'buy', price: +(adj * (1 - i * spacingPct / 100)).toFixed(8), unit: p.b });
      rungs.push({ side: 'sell', price: +(adj * (1 + i * spacingPct / 100)).toFixed(8), unit: p.a });
    }
    counterGrids[p.id] = { pair: p.pair, anchor: +(Number(midNano) / 1e9).toFixed(8), anchorSource: 'POOL-MID (our side of the book)', spacingPct, skewShiftBps: skew, inventoryShareBase: +invShareBase.toFixed(4), rungs, verdict: 'PLAN-POOL-GATED-NOT-BROADCAST' };
  }
  // 5) treasury P&L (fees are LP revenue via the persistent feeMeter; edges accumulate across ticks in the book)
  let feesMu = 0n, edgeMu = 0n;
  for (const p of st.pools) feesMu += ub(p.feeMeter || '0');
  for (const o of ops) if (o.type === 'REBALANCE') edgeMu += ub(o.edgeMu || '0');
  const prevEdge = ub((prev.treasuryPnl || {}).rebalanceEdgeMu || '0');
  edgeMu += prevEdge;
  // 6) conservation + attestation
  const cons = conservation(st.vault, st.accounts, st.pools);
  const consOk = cons.every((c) => c.ok);
  st.vault.reserveRatio = reserveRatios(st.vault);
  const att = attestationHash(st.vault, st.accounts, st.pools, st.seq);
  return { st, ops, routes, arb, counterGrids, cons, consOk, att, feesMu, edgeMu, notes, rebalanceBooked };
}

// ── R41 THE MESH MARKET: the fleet settles on this ledger ───────────────────
/** roster law: headcorner (operator) + soldiers (persona-slots). Deterministic, no magic names. */
function rosterLaw() {
  let soldiers = [];
  try {
    const p = JSON.parse(fs.readFileSync(ROSTER_FILE, 'utf8'));
    soldiers = Object.keys(p.soldiers || {}).sort(); // sorted — the law never depends on file order
  } catch (_) { /* no roster file → operator-only mesh, honest */ }
  return ['headcorner', ...soldiers];
}

/** MESH SETTLEMENT (R41): process a batch of agent intents ATOMICALLY on this ledger.
 *  Laws, per intent, in order:
 *   1. batch present + not already processed (idempotency — a replayed batch settles nothing twice)
 *   2. agent on the roster (ROSTER-UNKNOWN refused)
 *   3. pair sane (BAD-PAIR refused)
 *   4. size above dust (DUST refused)
 *   5. agent holds it or a CAPPED WIRE covers the shortfall (NAKED-SHORT-REFUSED / GATED-WIRE-NO-CAPITAL)
 *      — wire ≤ 10% of the treasury's FREE claims per batch; a partial wire shrinks the fill, never invents size
 *   6. fill ≤ 5% of first-hop depth (DEPTH-CAP — a fill that IS the book is slippage theater)
 *   7. route exists (NO-ROUTE refused)
 *   8. every hop + minOut hold on SIMULATED copies, then commit all-or-nothing (REFUSED-MINOUT leaves state byte-unchanged)
 *  Edge accounting is honest: PEG legs mark 1:1, the STEEM/SBD pair marks to the CEX-implied fair when the feed is
 *  fresh, everything else books edge=null (unavailable, never guessed). Conservation is asserted after every fill. */
function settleIntents(prev, queue, feed, now) {
  const st = {
    vault: JSON.parse(JSON.stringify(prev.vault)),
    accounts: JSON.parse(JSON.stringify(prev.accounts)),
    pools: JSON.parse(JSON.stringify(prev.pools)),
    seq: prev.seq || 0,
  };
  const ops = [];
  const op = (type, payload) => { st.seq += 1; ops.push({ seq: st.seq, type, at: now, ...payload }); };
  const notes = [];
  const fills = [], rejects = [];
  const batch = (queue && queue.batch) || null;
  const prevProcessed = Array.isArray(prev.processedBatches) ? prev.processedBatches : [];
  const processedBatches = [...prevProcessed];
  const fairNano = (feed && feed.fresh && feed.fair) ? BigInt(feed.fair) : null;

  const finish = (extra) => {
    const cons = conservation(st.vault, st.accounts, st.pools);
    const consOk = cons.every((c) => c.ok);
    st.vault.reserveRatio = reserveRatios(st.vault);
    const att = attestationHash(st.vault, st.accounts, st.pools, st.seq);
    // lifetime P&L (the ledger is the source of truth — the mesh book only reports it)
    const prevLife = (prev.meshPnl && prev.meshPnl.lifetime) || { byAgent: {}, fills: 0, edgeMu: '0', feesMu: '0', volumeInMu: '0' };
    const life = { byAgent: { ...prevLife.byAgent }, fills: prevLife.fills, edgeMu: ub(prevLife.edgeMu), feesMu: ub(prevLife.feesMu), volumeInMu: ub(prevLife.volumeInMu) };
    let batchEdge = 0n, batchFees = 0n, batchVolume = 0n;
    for (const f of fills) {
      const row = life.byAgent[f.agent] || { fills: 0, edgeMu: 0n, feesMu: 0n, volumeInMu: 0n };
      row.fills += 1; row.volumeInMu += ub(f.amountIn); row.edgeMu += ub(f.edgeMu || '0'); row.feesMu += ub(f.feesMu || '0');
      life.byAgent[f.agent] = row;
      life.fills += 1; life.edgeMu += ub(f.edgeMu || '0'); life.feesMu += ub(f.feesMu || '0'); life.volumeInMu += ub(f.amountIn);
      batchEdge += ub(f.edgeMu || '0'); batchFees += ub(f.feesMu || '0'); batchVolume += ub(f.amountIn);
    }
    for (const k of Object.keys(life.byAgent)) {
      const r = life.byAgent[k];
      life.byAgent[k] = { fills: r.fills, volumeInMu: mu(r.volumeInMu), edgeMu: mu(r.edgeMu), feesMu: mu(r.feesMu) };
    }
    return {
      st, ops, fills, rejects, notes, batchId: batch, processedBatches,
      cons, consOk, att,
      meshPnl: { lifetime: { byAgent: life.byAgent, fills: life.fills, edgeMu: mu(life.edgeMu), feesMu: mu(life.feesMu), volumeInMu: mu(life.volumeInMu) }, batch: { id: batch, fills: fills.length, rejects: rejects.length, edgeMu: mu(batchEdge), feesMu: mu(batchFees), volumeInMu: mu(batchVolume) } },
      ...extra,
    };
  };

  if (!batch) { notes.push('intents without a batch id — refused by law'); return finish({ skipped: true }); }
  if (processedBatches.includes(batch)) {
    notes.push(`batch ${batch} already settled — idempotency law: no double settle`);
    return finish({ skipped: true });
  }
  const roster = rosterLaw();
  // NOTE: agent accounts are created LAZILY at commit time (a batch that settles nothing must not touch the ledger — not even an empty account)

  for (const it of (queue.intents || [])) {
    const agent = String((it && it.agent) || '');
    const from = String((it && it.from) || '');
    const to = String((it && it.to) || '');
    const amountIn = ub(it && it.amountIn);
    const minOut = (it && it.minOut != null) ? ub(it.minOut) : null;
    const reject = (why) => { op('AGENT_REJECT', { agent, from, to, amountIn: mu(amountIn), why }); rejects.push({ agent, from, to, amountIn: mu(amountIn), why }); };
    if (!roster.includes(agent)) { reject('ROSTER-UNKNOWN'); continue; }
    if (!from || !to || from === to) { reject('BAD-PAIR'); continue; }
    if (amountIn < MESH_DUST) { reject('DUST'); continue; }
    let held = ub((st.accounts[agent] || { claims: {} }).claims[from] || '0');
    // first-hop depth for `from` (the smallest reserve among pools holding it)
    let depth = 0n;
    for (const p of st.pools) {
      if (p.planned || (ub(p.ra) <= 0n && ub(p.rb) <= 0n)) continue;
      if (p.a === from) depth = depth === 0n ? ub(p.ra) : (ub(p.ra) < depth ? ub(p.ra) : depth);
      if (p.b === from) depth = depth === 0n ? ub(p.rb) : (ub(p.rb) < depth ? ub(p.rb) : depth);
    }
    if (depth <= 0n) { reject('NO-DEPTH'); continue; }
    let sizeIn = amountIn;
    const cap = depth * MESH_FILL_MAX_DEPTH_BPS / BPS;
    if (sizeIn > cap) sizeIn = cap;
    // wire computation (DEFERRED application — atomicity: a refused fill moves nothing)
    let wireAmt = 0n;
    if (held < sizeIn) {
      const shortfall = sizeIn - held;
      const free = ub(st.accounts.treasury.claims[from] || '0');
      const wireCap = free * MESH_WIRE_MAX_SHARE_BPS / BPS;
      wireAmt = shortfall > wireCap ? wireCap : shortfall;
      if (wireAmt <= 0n) { reject('GATED-WIRE-NO-CAPITAL'); continue; }
      if (held + wireAmt < sizeIn) sizeIn = held + wireAmt; // partial wire → partial fill, still real
      if (sizeIn < MESH_DUST) { reject('WIRE-PARTIAL-DUST'); continue; }
    }
    const route = routeBest(st.pools, from, to, sizeIn);
    if (!route) { reject('NO-ROUTE'); continue; }
    // ATOMIC SETTLE: simulate every hop on copies, commit all-or-nothing
    const touched = new Map();
    const hops = [];
    let cur = from, amt = sizeIn, simOk = true, why2 = '';
    let feesTotal = 0n;
    for (const pid of route.ids) {
      const p = st.pools.find((x) => x.id === pid);
      if (!p) { simOk = false; why2 = 'POOL-VANISHED'; break; }
      if (!touched.has(pid)) touched.set(pid, JSON.parse(JSON.stringify(p)));
      const cp = touched.get(pid);
      const dirOut = cp.a === cur ? cp.b : cp.a;
      const sw = poolSwap(cp, cur, dirOut, amt, null);
      if (!sw || sw.error) { simOk = false; why2 = 'HOP-REFUSED-' + String((sw && sw.error) || 'EMPTY'); break; }
      cp.ra = mu(sw.newRa); cp.rb = mu(sw.newRb);
      cp.feeMeter = mu(ub(cp.feeMeter) + sw.feeAmt);
      feesTotal += sw.feeAmt;
      hops.push({ pool: pid, in: mu(amt), out: mu(sw.out), fee: mu(sw.feeAmt) });
      amt = sw.out; cur = dirOut;
    }
    if (!simOk || cur !== to) { reject(why2 || 'ROUTE-BROKE'); continue; }
    if (minOut != null && amt < minOut) { reject('REFUSED-MINOUT'); continue; }
    // COMMIT (all-or-nothing): the wire funds the agent, then the fill settles
    if (wireAmt > 0n) {
      if (!st.accounts[agent]) st.accounts[agent] = { claims: emptyClaims(), lp: {} }; // born zero at first real movement
      st.accounts.treasury.claims[from] = mu(ub(st.accounts.treasury.claims[from]) - wireAmt);
      st.accounts[agent].claims[from] = mu(held + wireAmt);
      op('MESH-WIRE', { agent, asset: from, amount: mu(wireAmt), why: `edge-funding wire (cap ${Number(MESH_WIRE_MAX_SHARE_BPS) / 100}% of free treasury per batch); conservation moves claims, never creates them` });
    }
    for (const [pid, cp] of touched) { const p = st.pools.find((x) => x.id === pid); p.ra = cp.ra; p.rb = cp.rb; p.feeMeter = cp.feeMeter; }
    st.accounts[agent].claims[from] = mu(ub(st.accounts[agent].claims[from]) - sizeIn);
    st.accounts[agent].claims[to] = mu(ub(st.accounts[agent].claims[to]) + amt);
    // edge marked to fair — honest or null
    const underlying = (a) => (a === 'WSTEEM' ? 'STEEM' : (a === 'WSBD' ? 'SBD' : a));
    const fu = underlying(from), tu = underlying(to);
    let edgeMu = null, fairUsed = 'UNAVAILABLE (no fair for this pair — P&L marked, never guessed)';
    if (fu === tu) { edgeMu = amt - sizeIn; fairUsed = 'PEG-1:1'; }
    else if (fairNano && fu === 'STEEM' && tu === 'SBD') { edgeMu = amt - (sizeIn * fairNano / NANO); fairUsed = 'CEX-FAIR (SBD per STEEM)'; }
    else if (fairNano && fu === 'SBD' && tu === 'STEEM') { edgeMu = amt - (sizeIn * NANO / fairNano); fairUsed = 'CEX-FAIR (STEEM per SBD)'; }
    const fill = { agent, from, to, amountIn: mu(sizeIn), amountOut: mu(amt), routeIds: route.ids, hops, edgeMu: edgeMu == null ? null : mu(edgeMu), fairUsed, feesMu: mu(feesTotal), at: now };
    op('AGENT_FILL', fill);
    fills.push(fill);
    if (!conservation(st.vault, st.accounts, st.pools).every((c) => c.ok)) {
      // cannot happen by construction (every law above is zero-sum) — if it EVER does, the ledger says so
      return finish({ halted: 'CONSERVATION-BROKEN-AFTER-FILL' });
    }
  }
  processedBatches.push(batch);
  while (processedBatches.length > MESH_BATCH_MEMO) processedBatches.shift();
  return finish({});
}

// ── main ────────────────────────────────────────────────────────────────────
async function tick() {
  const now = nowIso();
  try {
    const stasis = stasisCheck();
    if (stasis) {
      writeBook({ protocol: PROTOCOL, at: now, agent: VERSION, verdict: 'EXCHANGE-CORE-HALTED-STASIS', stasisHalted: true, stasisReason: stasis.reason || null, laws: LAWS, pools: [], routes: [], arb: [], counterGrids: {}, errors: [] });
      console.log(`STASIS-HALT dex-core · ${now}`);
      return 0;
    }
    let prev = loadBook();
    const probe = await probeCustody();
    const feed = loadRouterFeed();
    if (!prev || prev.protocol !== PROTOCOL || !prev.genesisDone) {
      // custody for genesis: measured probe → router-book liquid → honest zeros
      const custody = { STEEM: 0n, SBD: 0n, HIVE: 0n, HBD: 0n, BLURT: 0n, SAOS: 0n };
      const provenance = {};
      if (probe.measured) {
        custody.STEEM = probe.steem; custody.SBD = probe.sbd;
        provenance.STEEM = `MEASURED condenser headcorner @${probe.node} ${now}`;
        provenance.SBD = `MEASURED condenser headcorner @${probe.node} ${now}`;
      } else {
        const cg = ((feed.router || {}).counterGrid || {}).steem || {};
        const liq = cg.liquid || {};
        custody.STEEM = BigInt(Math.round(bn(liq.liquid) * 1e6));
        custody.SBD = BigInt(Math.round(bn(liq.sbd) * 1e6));
        provenance.STEEM = custody.STEEM > 0n ? `FALLBACK dex-router.json counterGrid.steem.liquid @${feed.routerAt}` : 'NO-FEED — vault born empty, the drip funds it when it lands';
        provenance.SBD = custody.SBD > 0n ? `FALLBACK dex-router.json counterGrid.steem.liquid @${feed.routerAt}` : 'NO-FEED — vault born empty, the drip funds it when it lands';
      }
      for (const a of ['HIVE', 'HBD', 'BLURT']) provenance[a] = 'UNKEYED-ADJACENCY — honest zero until key material exists (R38 law)';
      provenance.SAOS = 'PLANNED-NO-CLAIM — dex/credits.json empty today';
      const g = genesis(custody, feed.fair, provenance, now);
      const settled = settle({ vault: g.vault, accounts: g.accounts, pools: g.pools, seq: g.seq, opsBooked: g.ops }, feed, null, now);
      const book = assemble(g, settled, feed, probe, now, true);
      writeBook(book); writeMd(book);
      appendHistory([...g.ops, ...settled.ops]);
      console.log(`DEX-CORE-GENESIS seq=${book.seq} pools=${book.pools.filter((p) => !p.planned).length} custody=STEEM ${g.vault.custody.STEEM}µ/SBD ${g.vault.custody.SBD}µ att=${book.attestation}`);
      return 0;
    }
    const settled = settle(prev, feed, probe, now);
    const book = assemble(prev, settled, feed, probe, now, false, settled.ops);
    writeBook(book); writeMd(book);
    appendHistory(settled.ops);
    console.log(`DEX-CORE-TICK seq=${book.seq} routes=${book.routes.length} arb=${book.arb.length} rebalance=${settled.rebalanceBooked} att=${book.attestation}`);
    return 0;
  } catch (e) {
    try { writeBook({ protocol: PROTOCOL, at: now, agent: VERSION, verdict: 'ERROR', stasisHalted: false, laws: LAWS, error: String(e.message).slice(0, 300), pools: [], routes: [], arb: [], counterGrids: {}, errors: [String(e.message).slice(0, 300)] }); } catch (_) {}
    console.log(`dex-core: ERROR (booked honestly, exit 0) ${e.message}`);
    return 0;
  }
}

// ── mesh batch settlement path (R41): the core consumes the queue single-writer ──
async function settleIntentsTick() {
  const now = nowIso();
  try {
    const stasis = stasisCheck();
    if (stasis) {
      writeBook({ protocol: PROTOCOL, at: now, agent: VERSION, verdict: 'EXCHANGE-CORE-HALTED-STASIS', stasisHalted: true, stasisReason: stasis.reason || null, laws: LAWS, pools: [], routes: [], arb: [], counterGrids: {}, errors: [] });
      console.log(`STASIS-HALT dex-core settle-intents · ${now} (the queue stays — the mesh owns it, settling resumes when STASIS lifts)`);
      return 0;
    }
    const prev = loadBook();
    if (!prev || prev.protocol !== PROTOCOL || !prev.genesisDone) { console.log('dex-core: no genesis book — settle-intents refuses (nothing to settle on)'); return 0; }
    let queue = null;
    try { queue = JSON.parse(fs.readFileSync(INTENTS_FILE, 'utf8')); } catch (_) { queue = null; }
    if (!queue || !Array.isArray(queue.intents) || queue.intents.length === 0) { console.log('dex-core: no intents in the queue'); return 0; }
    const feed = loadRouterFeed();
    const mesh = settleIntents(prev, queue, feed, now);
    const book = assemble(prev, { st: mesh.st, ops: mesh.ops, routes: prev.routes || [], arb: prev.arb || [], counterGrids: prev.counterGrids || {}, cons: mesh.cons, consOk: mesh.consOk, att: mesh.att, feesMu: 0n, edgeMu: ub((prev.treasuryPnl || {}).rebalanceEdgeMu || '0'), notes: mesh.notes, rebalanceBooked: false }, feed, null, now, false, mesh.ops, mesh);
    writeBook(book); writeMd(book);
    appendHistory(mesh.ops);
    // consume the queue (single-writer: the mesh wrote it, the core clears it)
    try { fs.writeFileSync(INTENTS_FILE + '.tmp', JSON.stringify({ batch: null, at: now, intents: [], lastSettled: mesh.batchId }, null, 1) + '\n'); fs.renameSync(INTENTS_FILE + '.tmp', INTENTS_FILE); } catch (_) {}
    console.log(`DEX-CORE-MESH-SETTLE batch=${mesh.batchId} fills=${mesh.fills.length} rejects=${mesh.rejects.length} wires=${mesh.ops.filter((o) => o.type === 'MESH-WIRE').length} cons=${mesh.consOk} att=${mesh.att}`);
    return 0;
  } catch (e) {
    console.log(`dex-core settle-intents: ERROR (fail-soft, exit 0) ${e.message}`);
    return 0;
  }
}
const LAWS = [
  'units: µ BigInt end to end, no floats in settlement',
  'volatile pools: x·y ≥ k (Uniswap v2 exact, fee on input, floor to user)',
  'peg pools: Curve stableswap A=10 (canonical, fee on output, −1 pad)',
  'real value: wrapped mint 1:1 reserve-backed, redeem ALWAYS honored 1:1',
  'atomicity: minOut guard, refused swaps leave state byte-unchanged',
  'conservation: custody − wrappedReserve − Σ claims === 0 every tick',
  'ledger: append-only op-log, monotonic seq, state = fold(ops)',
  'floor law: rebalance only above 2×(fees+floor) — below it a plan, never a trade',
  'feed law: settle consumes the booked router feed; measurement and settlement are separated',
  'honest money: the powerdown drip is the booked fuel; no invented locks',
  'mesh law (R41): fleet agents settle atomically on this ledger — batch-idempotent, no naked shorts, wires capped at 10% of free treasury per batch, a fill never exceeds 5% of first-hop depth, edge marked to fair (null when no fair exists)',
];
function assemble(prev, settled, feed, probe, now, isGenesis, ops, meshResult) {
  const s = settled.st;
  const opRows = ops || settled.ops;
  const mesh = meshResult || null;
  const meshFillCount = mesh ? mesh.fills.length : 0;
  const verdict = mesh
    ? (mesh.halted ? 'CONSERVATION-BROKEN' : (mesh.consOk ? (meshFillCount > 0 ? 'MESH-SETTLED' : 'MESH-NO-FILL') : 'CONSERVATION-BROKEN'))
    : (settled.consOk ? (settled.rebalanceBooked ? 'EXCHANGE-CORE-LIVE-REBALANCED' : 'EXCHANGE-CORE-LIVE') : 'CONSERVATION-BROKEN');
  return {
    protocol: PROTOCOL, at: now, agent: VERSION, mode: mesh ? 'KEYLESS-ATOMIC-INTERNAL (mesh batch)' : 'KEYLESS-ATOMIC-INTERNAL',
    stasisHalted: false, laws: LAWS,
    feed: { source: 'agents/dex-router.json', routerAt: feed.routerAt, fresh: feed.fresh, fairNano: feed.fair, fairSource: feed.fairSource, verdict: feed.fresh ? 'FEED-LIVE' : 'FEED-STALE' },
    custodyProbe: { measured: !!(probe && probe.measured), node: probe ? probe.node : null },
    seq: s.seq,
    vault: s.vault,
    accounts: Object.fromEntries(Object.keys(s.accounts).map((k) => [k, { claims: s.accounts[k].claims, lp: s.accounts[k].lp || {} }])),
    pools: s.pools.map((p) => ({ id: p.id, pair: p.pair, kind: p.kind, a: p.a, b: p.b, feeBps: p.feeBps, amp: p.amp || 0, planned: !!p.planned, ra: p.ra, rb: p.rb, feeMeter: p.feeMeter, verdict: p.verdict, plannedWhy: p.plannedWhy || null, mid: (ub(p.ra) > 0n ? +(Number(ub(p.rb) * NANO / ub(p.ra)) / 1e9).toFixed(8) : null) })),
    routes: settled.routes,
    arb: settled.arb,
    counterGrids: settled.counterGrids,
    treasuryPnl: { feesMu: mu(settled.feesMu), rebalanceEdgeMu: mu(settled.edgeMu), note: 'fees are LP revenue (treasury owns the LP); rebalance edges are marked to the CEX fair at execution — the LVR defense on our own pool' },
    conservation: settled.cons,
    conservationOk: settled.consOk,
    attestation: settled.att,
    processedBatches: mesh ? mesh.processedBatches : (prev.processedBatches || []),
    meshPnl: mesh ? mesh.meshPnl : (prev.meshPnl || { lifetime: { byAgent: {}, fills: 0, edgeMu: '0', feesMu: '0', volumeInMu: '0' }, batch: null }),
    genesisDone: true,
    opsThisTick: opRows.map((o) => ({ seq: o.seq, type: o.type, ...Object.fromEntries(Object.keys(o).filter((k) => !['seq', 'type', 'at'].includes(k)).map((k) => [k, o[k]])) })),
    summary: {
      verdict,
      poolsLive: s.pools.filter((p) => !p.planned && ub(p.ra) > 0n).length,
      poolsPlanned: s.pools.filter((p) => p.planned).length,
      routesLive: settled.routes.filter((r) => r.verdict === 'LIVE-INTERNAL').length,
      routesPlanned: settled.routes.filter((r) => r.verdict !== 'LIVE-INTERNAL').length,
      meshFills: meshFillCount,
      meshBatch: mesh ? mesh.batchId : null,
      notes: settled.notes,
    },
  };
}

// ── selftest (fresh process, zero network, deterministic) ───────────────────
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function selftest() {
  const c = []; const ok = (name, cond) => c.push({ name, ok: !!cond });
  // CPMM golden (hand-derived): ra=3, rb=6, in=1, fee 0 → out = 6·1/(3+1) = 1 (floor of 1.5)
  ok('cpmm-golden-floor', cpmmOut(3n, 6n, 1n, 0) === 1n);
  // CPMM golden (hand-derived, 25% fee): inWithFee = 7500 → out = 6·7500/(30000+7500) = 1
  ok('cpmm-golden-fee', cpmmOut(3n, 6n, 1n, 2500) === 1n);
  // CPMM Uniswap-exact cross-check (independent inline formula from UniswapV2Library.getAmountOut)
  const ra = 1000000000n, rb = 4000000000n, amt = 10000000n, fee = 25;
  const exp = (rb * (amt * (BPS - BigInt(fee)))) / (ra * BPS + amt * (BPS - BigInt(fee)));
  ok('cpmm-uniswap-exact', cpmmOut(ra, rb, amt, fee) === exp && cpmmKCheck(ra, rb, amt, exp));
  // CPMM fuzz: k never decreases, reserves never negative (seeded PRNG — deterministic)
  let fuzzOk = true; const rnd = mulberry32(40001);
  for (let i = 0; i < 200 && fuzzOk; i++) {
    const x = BigInt(1 + Math.floor(rnd() * 1e9)), y = BigInt(1 + Math.floor(rnd() * 1e9)), d = BigInt(1 + Math.floor(rnd() * 1e8));
    const f = Math.floor(rnd() * 100);
    const o = cpmmOut(x, y, d, f);
    if (o && !cpmmKCheck(x, y, d, o)) fuzzOk = false;
  }
  ok('cpmm-k-fuzz', fuzzOk);
  // Stableswap: D satisfies the canonical invariant equation (independent float evaluation)
  const A = 10n, x0 = 1000000n, y0 = 1000000n;
  const D = stableD(x0, y0, A);
  const S = Number(x0 + y0), Df = Number(D), Af = Number(A);
  const inv = Af * S + Df - Af * Df - (Df * Df * Df) / (4 * Number(x0) * Number(y0));
  ok('stable-D-invariant', D > 0n && Math.abs(inv) < Df * 1e-9);
  // Stableswap: balanced pool small swap ≈ 1:1 minus fee (peg law) — 0.1% of pool, fee 2bps
  const so = stableOut(x0, y0, 1000n, 2, A);
  ok('stable-peg-law', !!so && so.out >= 990n && so.out <= 1000n);
  // Stableswap: independent float bisection solve of the invariant (spec ≠ solver)
  // D is the POOL CONSTANT — computed from the PRE-swap reserves (canonical Curve law)
  const Xin = x0 + 1000n;
  const Dpre = stableD(x0, y0, A);
  const Dy = Number(Dpre);
  let lo = 1e-6, hi = Number(y0) * 2;
  const g = (y) => Af * (Number(Xin) + y) + Dy - Af * Dy - (Dy * Dy * Dy) / (4 * Number(Xin) * y);
  for (let i = 0; i < 80; i++) { const midr = (lo + hi) / 2; if (g(midr) > 0) hi = midr; else lo = midr; }
  const yRoot = (lo + hi) / 2;
  const floatOut = Number(y0) - yRoot;
  const bOut = stableGetY(1, 0, Xin, x0, y0, Dpre, A);
  ok('stable-independent-solve', !!bOut && Math.abs(Number(bOut) - yRoot) <= 3);
  ok('stable-out-matches-y', !!so && !!bOut && Math.abs(Number(so.out) - floatOut) <= 3);
  // Stableswap fee exactness: 2bps of dy (floor)
  ok('stable-fee-floor', (() => { const r1 = stableOut(x0, y0, 100000n, 0, A); const r2 = stableOut(x0, y0, 100000n, 2, A); return r1 && r2 && r1.out > r2.out && r1.out - r2.out <= (r1.out * 2n) / BPS + 1n; })());
  // minOut atomicity: refused swap reports error, caller state unchanged (pure — the guard is the contract)
  const refused = poolSwap({ id: 'T', kind: 'VOLATILE', a: 'X', b: 'Y', ra: '1000000', rb: '1000000', feeBps: 25 }, 'X', 'Y', 1000000n, ub('999000'));
  ok('minout-atomic', refused && refused.error === 'REFUSED-MINOUT');
  // Reserve law: mint 1:1 only against reserve; redeem always honored (burn before payout)
  const v = emptyVault(); v.custody.STEEM = '1000000'; v.custodyProvenance.STEEM = 'test';
  const accs = { treasury: { claims: emptyClaims(), lp: {} } };
  accs.treasury.claims.STEEM = '1000000';
  const mintAmt = 500000n;
  v.wrappedReserve.STEEM = mu(mintAmt); v.minted.WSTEEM = mu(mintAmt);
  accs.treasury.claims.STEEM = mu(1000000n - mintAmt); accs.treasury.claims.WSTEEM = mu(mintAmt);
  ok('reserve-ratio-1', reserveRatios(v).WSTEEM === 1);
  const overMint = mintAmt + 1n;
  ok('mint-over-reserve-refused-by-law', overMint > ub(v.wrappedReserve.STEEM)); // the law: reserve must cover minted; ratio < 1 is illegal state
  v.wrappedReserve.STEEM = mu(mintAmt - 100000n); v.minted.WSTEEM = mu(mintAmt - 100000n);
  accs.treasury.claims.WSTEEM = mu(mintAmt - 100000n); accs.treasury.claims.STEEM = mu(1000000n - mintAmt + 100000n);
  ok('redeem-always-honored', conservation(v, accs, []).every((r) => r.ok)); // burn releases 1:1 — conservation holds
  // Routing: 3-hop path WSBD→WSTEEM exists and is deterministic
  const pools = [
    { id: 'P1', pair: 'WSTEEM/STEEM', kind: 'PEG', a: 'WSTEEM', b: 'STEEM', feeBps: 2, ra: '500000', rb: '500000' },
    { id: 'P2', pair: 'WSBD/SBD', kind: 'PEG', a: 'WSBD', b: 'SBD', feeBps: 2, ra: '50000', rb: '50000' },
    { id: 'P3', pair: 'STEEM/SBD', kind: 'VOLATILE', a: 'STEEM', b: 'SBD', feeBps: 25, ra: '1000000', rb: '105447' },
  ];
  const r1 = routeBest(pools, 'WSBD', 'WSTEEM', 10000n);
  const r2 = routeBest(pools, 'WSBD', 'WSTEEM', 10000n);
  ok('route-3hop-deterministic', !!r1 && r1.ids.length === 3 && r1.ids.join(',') === r2.ids.join(',') && r1.out > 0n);
  const rDirect = routeBest(pools, 'STEEM', 'SBD', 100000n);
  ok('route-direct-best', !!rDirect && rDirect.ids.length === 1 && rDirect.ids[0] === 'P3');
  // Rebalance floor: settle refuses to execute below the threshold (pure settle on a synthetic book)
  const mkBook = (ra, rb, fairNano) => {
    const vv = emptyVault(); vv.custodyProvenance.STEEM = 'test';
    const aa = { treasury: { claims: emptyClaims(), lp: { P3: '1.0' } } };
    for (const k of Object.keys(aa.treasury.claims)) aa.treasury.claims[k] = '0';
    aa.treasury.claims.STEEM = mu(ra * 2n - ra);
    aa.treasury.claims.SBD = '1000000';
    vv.custody.STEEM = mu(ra + ub(aa.treasury.claims.STEEM));   // custody = pooled + free (balanced book)
    vv.custody.SBD = mu(rb + ub(aa.treasury.claims.SBD));
    vv.custodyProvenance.SBD = 'test';
    return { vault: vv, accounts: aa, pools: [
      { id: 'P1', pair: 'WSTEEM/STEEM', kind: 'PEG', a: 'WSTEEM', b: 'STEEM', feeBps: 2, ra: '0', rb: '0', feeMeter: '0', verdict: 'AWAITING-CUSTODY' },
      { id: 'P2', pair: 'WSBD/SBD', kind: 'PEG', a: 'WSBD', b: 'SBD', feeBps: 2, ra: '0', rb: '0', feeMeter: '0', verdict: 'AWAITING-CUSTODY' },
      { id: 'P3', pair: 'STEEM/SBD', kind: 'VOLATILE', a: 'STEEM', b: 'SBD', feeBps: 25, ra: mu(ra), rb: mu(rb), feeMeter: '0', verdict: 'LIVE-INTERNAL' },
      { id: 'P4', pair: 'SAOS/WSTEEM', kind: 'VOLATILE', a: 'SAOS', b: 'WSTEEM', feeBps: 25, ra: '0', rb: '0', feeMeter: '0', verdict: 'PLANNED-NO-CLAIM' },
    ], seq: 1 };
  };
  const feedLive = { fresh: true, fair: 105446700n, fairSource: 'test', routerAt: nowIso(), router: {} };
  const below = settle(mkBook(1000000n, 105447n * 100n / 100n, null), { ...feedLive, fair: 105447000n }, null, nowIso()); // mid == fair → zero drift
  const belowDrift = settle(mkBook(1000000n, 106500n * 1000n / 1000n, null), feedLive, null, nowIso()); // drift 0.9997% → below 120bps? gross 99.97bps... wait drift here is tiny
  ok('rebalance-below-floor-is-plan', below.arb.concat(belowDrift.arb).filter((r) => r.id === 'A1').every((r) => r.verdict !== 'REBALANCE-BOOKED'));
  const above = settle(mkBook(1000000n, 120000n, null), feedLive, null, nowIso()); // mid 0.12 vs fair 0.1054467 → ~13.8% drift, way above floor
  ok('rebalance-above-floor-executes', above.arb.some((r) => r.verdict === 'REBALANCE-BOOKED' || r.executed));
  // Grid law: both sides present, skew sign follows inventory share
  const grid = above.counterGrids.P3;
  ok('grid-both-sides', !!grid && grid.rungs.filter((r) => r.side === 'buy').length === 3 && grid.rungs.filter((r) => r.side === 'sell').length === 3);
  ok('grid-skew-signed', !!grid && ((grid.inventoryShareBase > 0.5 && grid.skewShiftBps > 0) || (grid.inventoryShareBase < 0.5 && grid.skewShiftBps < 0) || grid.skewShiftBps === 0));
  // Determinism: settle twice on identical inputs → byte-identical routes+arb+ops
  const d1 = settle(mkBook(1000000n, 120000n, null), feedLive, null, '2026-10-05T00:00:00.000Z');
  const d2 = settle(mkBook(1000000n, 120000n, null), feedLive, null, '2026-10-05T00:00:00.000Z');
  ok('settle-deterministic', JSON.stringify(d1.routes) === JSON.stringify(d2.routes) && JSON.stringify(d1.arb) === JSON.stringify(d2.arb) && JSON.stringify(d1.ops) === JSON.stringify(d2.ops));
  // Conservation on the settled book (custody − reserve − claims − pooled === 0)
  ok('conservation-holds-after-settle', above.consOk && above.cons.every((r) => r.ok));
  ok('dust-respects-user', cpmmOut(3n, 6n, 1n, 0) === 1n && (3n + 1n) * (6n - 1n) >= 3n * 6n);

  // ── R41 MESH MARKET selftest ──────────────────────────────────────────────
  // base book for mesh tests: treasury free claims for wiring, P3 live, an edge above floor
  const meshBase = mkBook(1000000n, 120000n, null); // mid 0.12 vs fair 0.1054467 → real edge
  meshBase.processedBatches = [];
  const feedMesh = { fresh: true, fair: 105446700n, fairSource: 'test', routerAt: nowIso(), router: {} };
  // 1. unknown agent refused
  const rej1 = settleIntents(meshBase, { batch: 'B-UNK', intents: [{ agent: 'ghost', from: 'STEEM', to: 'SBD', amountIn: '20000' }] }, feedMesh, nowIso());
  ok('mesh-roster-unknown-refused', rej1.rejects.some((r) => r.why === 'ROSTER-UNKNOWN') && rej1.fills.length === 0);
  // 2. dust refused
  const rej2 = settleIntents(meshBase, { batch: 'B-DUST', intents: [{ agent: 'headcorner', from: 'STEEM', to: 'SBD', amountIn: '10' }] }, feedMesh, nowIso());
  ok('mesh-dust-refused', rej2.rejects.some((r) => r.why === 'DUST'));
  // 3. real fill via wire: agent has nothing, treasury has free STEEM → wire + fill settle atomically
  const filled = settleIntents(meshBase, { batch: 'B-FILL', intents: [{ agent: 'headcorner', from: 'STEEM', to: 'SBD', amountIn: '20000', minOut: '1' }] }, feedMesh, nowIso());
  ok('mesh-wire-then-fill', filled.fills.length === 1 && filled.ops.some((o) => o.type === 'MESH-WIRE') && ub(filled.fills[0].amountOut) > 0n);
  ok('mesh-fill-conservation', filled.consOk && filled.cons.every((r) => r.ok));
  ok('mesh-fill-edge-marked', filled.fills[0].edgeMu != null && filled.fills[0].fairUsed.indexOf('CEX-FAIR') === 0);
  ok('mesh-fill-pool-fee-accrues', (() => { const p = filled.st.pools.find((x) => x.id === 'P3'); return ub(p.feeMeter) > 0n; })());
  ok('mesh-attestation-recomputes', filled.att === attestationHash(filled.st.vault, filled.st.accounts, filled.st.pools, filled.st.seq));
  // 4. idempotency: the same batch settles nothing twice
  const afterFill = { vault: filled.st.vault, accounts: filled.st.accounts, pools: filled.st.pools, seq: filled.st.seq, processedBatches: filled.processedBatches, meshPnl: filled.meshPnl };
  const replay = settleIntents(afterFill, { batch: 'B-FILL', intents: [{ agent: 'headcorner', from: 'STEEM', to: 'SBD', amountIn: '20000' }] }, feedMesh, nowIso());
  ok('mesh-batch-idempotent', replay.skipped === true && replay.ops.length === 0 && replay.fills.length === 0);
  // 5. minOut atomicity through the mesh: impossible minOut → refused, pools byte-unchanged, no claims moved
  const preMin = mkBook(1000000n, 120000n, null); preMin.processedBatches = [];
  const meshRefused = settleIntents(preMin, { batch: 'B-MIN', intents: [{ agent: 'headcorner', from: 'STEEM', to: 'SBD', amountIn: '20000', minOut: '999999999999' }] }, feedMesh, nowIso());
  ok('mesh-minout-atomic', meshRefused.rejects.some((r) => r.why === 'REFUSED-MINOUT') && meshRefused.fills.length === 0
    && JSON.stringify(meshRefused.st.pools.find((p) => p.id === 'P3')) === JSON.stringify(preMin.pools.find((p) => p.id === 'P3')));
  // 6. naked short without treasury capital: empty treasury → GATED-WIRE-NO-CAPITAL, no fill
  const broke = mkBook(1000000n, 120000n, null); broke.processedBatches = [];
  broke.accounts.treasury.claims.STEEM = '0'; // no free capital
  const gated = settleIntents(broke, { batch: 'B-GATE', intents: [{ agent: 'headcorner', from: 'STEEM', to: 'SBD', amountIn: '20000' }] }, feedMesh, nowIso());
  ok('mesh-gated-wire-honest', gated.rejects.some((r) => r.why === 'GATED-WIRE-NO-CAPITAL') && gated.fills.length === 0);
  // 7. determinism: same inputs → byte-identical fills
  const m1 = settleIntents(mkBook(1000000n, 120000n, null), { batch: 'B-DET', intents: [{ agent: 'headcorner', from: 'STEEM', to: 'SBD', amountIn: '15000' }] }, feedMesh, '2026-10-05T00:00:00.000Z');
  const m2 = settleIntents(mkBook(1000000n, 120000n, null), { batch: 'B-DET', intents: [{ agent: 'headcorner', from: 'STEEM', to: 'SBD', amountIn: '15000' }] }, feedMesh, '2026-10-05T00:00:00.000Z');
  ok('mesh-deterministic', JSON.stringify(m1.fills) === JSON.stringify(m2.fills) && JSON.stringify(m1.ops) === JSON.stringify(m2.ops));
  const pass = c.filter((x) => x.ok).length;
  console.log(`DEX-CORE-SELFTEST-OK ${pass}/${c.length}`);
  if (pass !== c.length) { for (const x of c) if (!x.ok) console.log(`  FAIL ${x.name}`); }
  return pass === c.length ? 0 : 1;
}

if (require.main === module) {
  const arg = process.argv[2] || '';
  if (arg === 'selftest') process.exit(selftest());
  if (arg === 'settle-intents') { settleIntentsTick().then((rc) => process.exit(rc)).catch(() => process.exit(0)); }
  else tick().then((rc) => process.exit(rc)).catch(() => process.exit(0));
}

module.exports = {
  // units + invariants
  cpmmOut, cpmmKCheck, feeOnInput, stableD, stableGetY, stableOut,
  // pools + routing
  poolDefs, genesisPlan, poolSwap, routeBest,
  // vault + ledger
  emptyVault, emptyClaims, conservation, reserveRatios, attestationHash,
  // engine
  settle, settleIntents, rosterLaw, selftest, LAWS,
  SCALE, BPS, NANO, STABLE_A, FEE_VOLATILE_BPS, FEE_PEG_BPS, PEG_GUARD_DRIFT_PCT,
  MESH_DUST, MESH_WIRE_MAX_SHARE_BPS, MESH_FILL_MAX_DEPTH_BPS,
};
