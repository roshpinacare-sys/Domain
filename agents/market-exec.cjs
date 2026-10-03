'use strict';
/**
 * market-exec.cjs — Z-63 SIGNED EXECUTOR for the Steem internal-market grid (CR-0036).
 *
 * Doctrine chain: CR-0034 landed the KEYLESS observer (real books → real grids → PAPER
 * fills, previews stamped OWNER-GATED-NOT-BROADCAST). This desk is the composition that
 * CR-0034 left open and the three-layer law (CR-0035) needed: the SIGNED executor leg
 * for the venue where the fleet actually holds liquid capital — the SBD/STEEM internal
 * market (0% fee, no minimum size, spread ~1.3–1.55%, bot flow measured live at the
 * touch, ~10 fills/min on 2026-10-03 recon).
 *
 * Owner gate: OPENED by the operator directive of 2026-10-03 — "יש שוק פנימי לsteem
 * גם לhive כיכיד נוכל להשתלט עליהם אוטומטית בעזרת גרידים של הסוכנים והחיילים ...
 * בוא ניישם" (implement). The gate is bounded by the caps below; every action receipts.
 *
 * LAWS (in code):
 *  1. OFFICIAL SOURCES ONLY: api.steemit.com (primary) + api.justyy.com (cross-check).
 *     A >0.5% disagreement on best bid/ask = SPLIT-BRAIN abort, nothing signs.
 *  2. VERIFY-THEN-SIGN: the active WIF is derived from the local derived-keys vault and
 *     its pubkey is byte-compared against the ON-CHAIN active_key_auths of headcorner
 *     BEFORE any signature. Any mismatch = hard abort. The WIF never appears in any
 *     output, receipt, or log.
 *  3. ADD-ONLY v1: this desk NEVER cancels, NEVER touches orders it did not place.
 *     Other lanes' orders and older ops' orders coexist untouched; stale orders die by
 *     their own expirations.
 *  4. CAPS (hard): MAX_NEW_ORDERS=6/run · sells ≤ 85% of liquid STEEM · buys ≤ liquid
 *     SBD · per-level sizes 0.3..1.25 STEEM (0.25 SBD fixed on the buy side) · no level
 *     placed if remaining budget < 0.5 STEEM (a starved level would misprice).
 *  5. IN-BAND ONLY: every level price must sit within [mid*0.98, mid*1.02] — the recon
 *     ladder tops at +1.94% over mid; this is the fat-finger ceiling.
 *  6. IDEMPOTENT: a level is skipped if an own order already sits within 0.35% of the
 *     target price (no stacking across runs, no stacking on other desks' work).
 *  7. PRECISION LAW: assets are 3dp; the planner SCANS base amounts (3dp grid) for the
 *     (amount, min_to_receive) pair whose realized price best tracks the 6dp target —
 *     a naive 1.000 STEEM order at 0.102006 would realize 0.102000; the scan finds
 *     ~1.196 STEEM realizing 0.1020067. Realized price is booked next to target.
 *  8. MODE LAW: DRY_RUN is the default. Nothing broadcasts unless MARKET_EXEC_LIVE=1.
 *     Receipt rows carry mode:"DRY_RUN" or mode:"LIVE" — never unlabeled, never mixed.
 *  9. FAIL-LOUD BOOK, FAIL-SOFT EXIT: every error is an ERROR row in the canon; the
 *     process always exits 0 (treasury law). A silent success is a lie; a loud failure
 *     is a receipt.
 * 10. SINGLE WRITER: agents/market-exec.json (append-only run rows) + agents/market-exec.md
 *     (regenerated human summary). require.main guard (Z-49): requiring this file for
 *     evals must never execute a run.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const OUT_JSON = process.env.MARKET_EXEC_JSON || path.join(ROOT, 'agents', 'market-exec.json');
const OUT_MD = OUT_JSON.replace(/\.json$/, '.md');
const HEAD = process.env.MARKET_EXEC_HEAD || 'headcorner';
const HC_DERIVED = process.env.HC_DERIVED || '/home/z/my-project/.fleet/headcorner-derived.json';

const NODE_PRIMARY = 'https://api.steemit.com';
const NODE_CROSS = 'https://api.justyy.com';

// ── pure planner (exported for E28) ─────────────────────────────────────────
const DEFAULTS = {
  SELL_LEVELS: 4, SELL_SIZE_MIN: 0.3, SELL_SIZE_MAX: 1.25,
  BUY_LEVELS: 2, BUY_SBD: 0.25,
  SPACING: 1.004, BUY_SPACING: 0.996,
  SELL_CAP_PCT: 0.85, MAX_NEW_ORDERS: 6,
  BAND_PCT: 2.0, STACK_PCT: 0.35, MIN_REMAINING: 0.5,
  FIRST_SELL_OFFSET: 0.00005, FIRST_BUY_OFFSET: 0.0005,
  EXPIRY_DAYS: 27,
};

const mid = (bid, ask) => (bid + ask) / 2;
const spreadPct = (bid, ask) => ((ask - bid) / mid(bid, ask)) * 100;
const inBand = (price, m, pct = DEFAULTS.BAND_PCT) => price >= m * (1 - pct / 100) && price <= m * (1 + pct / 100);
const r3 = (x) => Math.round(x * 1000) / 1000;
const r6 = (x) => Math.round(x * 1e6) / 1e6;

function resolveMode(env) { return String(env || '') === '1' ? 'LIVE' : 'DRY_RUN'; }

// scan a 3dp base amount in [minA, maxA] whose (a, round3(a*p)) pair tracks target p best;
// ties break to the smaller amount (deterministic, ascending first-keep).
function scanSellAmount(target, minA, maxA) {
  let best = null;
  const lo = Math.max(1, Math.round(minA * 1000));
  const hi = Math.round(maxA * 1000);
  for (let m = lo; m <= hi; m++) {
    const a = m / 1000;
    const r = r3(a * target);
    if (r <= 0) continue;
    const realized = r / a;
    const err = Math.abs(realized - target) / target;
    if (!best || err < best.err - 1e-12) best = { amount: a, receive: r, realized, err };
  }
  return best;
}

// own-order stack check: is there an own order within STACK_PCT% of target?
function stacked(target, ownOrders, pct = DEFAULTS.STACK_PCT) {
  return (ownOrders || []).some((o) => Math.abs(o.price - target) / target < pct / 100);
}

function buildPlan({ liquidSteem, liquidSbd, bid, ask, ownOrders, params = DEFAULTS }) {
  const m = mid(bid, ask);
  const sells = [], buys = [], skipped = [];
  const sellCap = liquidSteem * params.SELL_CAP_PCT;
  let used = 0;

  const firstSell = r6(ask - params.FIRST_SELL_OFFSET);
  const firstBuy = r6(bid - params.FIRST_BUY_OFFSET);

  for (let i = 0; i < params.SELL_LEVELS; i++) {
    const target = r6(i === 0 ? firstSell : firstSell * Math.pow(params.SPACING, i));
    const reason = (name) => skipped.push({ kind: 'sell', level: i + 1, target, reason: name });
    if (!inBand(target, m)) { reason('OUT-OF-BAND'); continue; }
    if (stacked(target, ownOrders)) { reason('STACK-EXISTS'); continue; }
    const remaining = sellCap - used;
    if (remaining < params.MIN_REMAINING) { reason('CAP-REMAINING'); continue; }
    const s = scanSellAmount(target, params.SELL_SIZE_MIN, Math.min(params.SELL_SIZE_MAX, remaining));
    if (!s) { reason('NO-SCAN-FIT'); continue; }
    used += s.amount;
    sells.push({
      level: i + 1, op: 'limit_order_create2',
      amount_to_sell: `${s.amount.toFixed(3)} STEEM`,
      min_to_receive: `${s.receive.toFixed(3)} SBD`,
      target, realized: +s.realized.toFixed(6), err_pct: +(s.err * 100).toFixed(4),
    });
  }

  let usedSbd = 0;
  for (let j = 0; j < params.BUY_LEVELS; j++) {
    const target = r6(j === 0 ? firstBuy : firstBuy * Math.pow(params.BUY_SPACING, j));
    const reason = (name) => skipped.push({ kind: 'buy', level: j + 1, target, reason: name });
    if (!inBand(target, m)) { reason('OUT-OF-BAND'); continue; }
    if (stacked(target, ownOrders)) { reason('STACK-EXISTS'); continue; }
    if (usedSbd + params.BUY_SBD > liquidSbd + 1e-9) { reason('SBD-CAP'); continue; }
    const receive = r3(params.BUY_SBD / target);
    if (receive <= 0) { reason('NO-SCAN-FIT'); continue; }
    usedSbd += params.BUY_SBD;
    buys.push({
      level: j + 1, op: 'limit_order_create2',
      amount_to_sell: `${params.BUY_SBD.toFixed(3)} SBD`,
      min_to_receive: `${receive.toFixed(3)} STEEM`,
      target, realized: +(params.BUY_SBD / receive).toFixed(6),
      err_pct: +(Math.abs(params.BUY_SBD / receive - target) / target * 100).toFixed(4),
    });
  }

  let over = null;
  if (sells.length + buys.length > params.MAX_NEW_ORDERS) {
    over = sells.length + buys.length - params.MAX_NEW_ORDERS;
    for (let k = 0; k < over; k++) {
      const dropped = sells.pop() || buys.pop();
      if (dropped) skipped.push({ kind: dropped.op === 'limit_order_create2' ? (dropped.amount_to_sell.endsWith('STEEM') ? 'sell' : 'buy') : 'sell', level: dropped.level, target: dropped.target, reason: 'MAX-NEW-ORDERS' });
    }
  }
  return { mid: +m.toFixed(6), spread_pct: +spreadPct(bid, ask).toFixed(4), sells, buys, skipped, used_steem: +used.toFixed(3), used_sbd: +usedSbd.toFixed(3), sell_cap: +sellCap.toFixed(3) };
}

// ── network ─────────────────────────────────────────────────────────────────
function rpcNode(node, method, params, timeout = 20000) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({ jsonrpc: '2.0', method, params, id: 1 });
    const u = new URL(node);
    const req = https.request({ hostname: u.hostname, path: u.pathname || '/', method: 'POST', family: 4, headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }, timeout }, (res) => {
      let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => {
        try { const j = JSON.parse(d); if (j.error) return reject(new Error(String(j.error.message || 'rpc-error').slice(0, 90))); resolve(j.result); }
        catch (_) { reject(new Error('bad-rpc')); }
      });
    });
    req.on('timeout', () => req.destroy(new Error('timeout'))); req.on('error', reject);
    req.write(payload); req.end();
  });
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// steem-js resolver (fleet template: npm install --prefix /tmp/steemjs steem@0.7.11)
function loadSteem() {
  const candidates = [
    process.env.STEEM_JS_PATH,
    '/tmp/steemjs/node_modules/steem',
  ].filter(Boolean);
  for (const c of candidates) {
    try { return require(c); } catch (_) {}
  }
  try { return require('steem'); } catch (_) {}
  throw new Error('STEEM-JS-ABSENT — fleet template: npm install --prefix /tmp/steemjs steem@0.7.11 --omit=dev --no-audit --no-fund');
}

// derived-keys vault → active WIF. Never logged, never returned to callers that print.
function loadActiveWif() {
  const hc = JSON.parse(fs.readFileSync(HC_DERIVED, 'utf8'));
  const s = hc && hc.steem;
  const wif = typeof s === 'object' && s ? (typeof s.active === 'string' ? s.active : (s.active && s.active.wif)) : null;
  if (typeof wif !== 'string' || wif.length < 40) throw new Error('ACTIVE-WIF-ABSENT in ' + HC_DERIVED.replace(/^\/home\/[^/]+/, '~'));
  return wif;
}

// account-scoped own orders (database_api.find_limit_orders — no pagination, all pages of
// the account; the book-wide list_limit_orders path misverified 2/6 on run #7 — law booked)
async function fetchOwnOrders(node) {
  const r = await rpcNode(node, 'database_api.find_limit_orders', { account: HEAD });
  const arr = (r && r.orders) || [];
  return arr.map((o) => {
    // NAI assets: @@000000013 = SBD, @@000000021 = STEEM (precision 3 each).
    // sell_price base/quote orientation varies by side — resolve via nai, never position.
    const amt = (a) => parseFloat(a.amount) / Math.pow(10, a.precision || 3);
    const isSbd = (a) => a.nai === '@@000000013';
    const sbdLeg = isSbd(o.sell_price.base) ? o.sell_price.base : o.sell_price.quote;
    const steemLeg = isSbd(o.sell_price.base) ? o.sell_price.quote : o.sell_price.base;
    const sbd = amt(sbdLeg), steem = amt(steemLeg);
    return { orderid: o.orderid, price: +(sbd / steem).toFixed(6), steem_amt: steem, sbd_amt: sbd, created: o.created, expiration: o.expiration };
  });
}

async function crossCheckBook() {
  const L = 30;
  const [p, c] = await Promise.all([
    rpcNode(NODE_PRIMARY, 'condenser_api.get_order_book', [L]),
    rpcNode(NODE_CROSS, 'condenser_api.get_order_book', [L]).catch((e) => ({ err: String(e.message || e).slice(0, 60) })),
  ]);
  // condenser rows carry real_price = SBD per STEEM on both sides
  const bid = parseFloat(p.bids[0].real_price), ask = parseFloat(p.asks[0].real_price);
  if (!isFinite(bid) || !isFinite(ask)) throw new Error(`BOOK-UNREADABLE primary bid/ask ${p.bids[0].real_price}/${p.asks[0].real_price}`);
  if (!c || c.err) return { bid, ask, cross: { warn: 'cross-node unreachable: ' + ((c && c.err) || 'empty') } };
  const cbid = parseFloat(c.bids[0].real_price), cask = parseFloat(c.asks[0].real_price);
  if (!isFinite(cbid) || !isFinite(cask)) return { bid, ask, cross: { warn: 'cross-node unreadable book' } };
  const dBid = Math.abs(cbid - bid) / bid * 100, dAsk = Math.abs(cask - ask) / ask * 100;
  if (dBid > 0.5 || dAsk > 0.5) throw new Error(`SPLIT-BRAIN cross-node bid/ask delta ${dBid.toFixed(3)}%/${dAsk.toFixed(3)}% > 0.5%`);
  return { bid, ask, cross: { ok: true, dBid: +dBid.toFixed(4), dAsk: +dAsk.toFixed(4) } };
}

// verify-then-sign: on-chain active authority must match the derived WIF's pubkey
async function verifyAuthority(node, steem, wif) {
  const pub = steem.auth.wifToPublic(wif);
  const [acc] = await rpcNode(node, 'condenser_api.get_accounts', [[HEAD]]);
  const auths = (acc && acc.active && acc.active.key_auths) || [];
  const ok = auths.some((k) => k[0] === pub);
  return { ok, onchain: auths.map((k) => k[0]).join(','), derived: pub, account: acc };
}

function buildOpFromPlacement(p, expiry, orderid) {
  // create2 wire form (chain assert, run #6): exchange_rate = {base: SELL asset, quote: RECEIVE asset};
  // chain derives min_to_receive = amount_to_sell * rate — exact by construction
  // (base.amount == amount_to_sell, quote.amount == intended receive)
  return ['limit_order_create2', {
    owner: HEAD, orderid, amount_to_sell: p.amount_to_sell,
    fill_or_kill: false,
    exchange_rate: { base: p.amount_to_sell, quote: p.min_to_receive },
    expiration: expiry,
  }];
}

async function signBroadcast(node, steem, wif, ops) {
  const dgp = await rpcNode(node, 'condenser_api.get_dynamic_global_properties', []);
  const tx = {
    ref_block_num: dgp.head_block_number & 0xffff,
    ref_block_prefix: Buffer.from(dgp.head_block_id, 'hex').readUInt32LE(4),
    expiration: new Date(new Date(dgp.time + 'Z').getTime() + 90000).toISOString().slice(0, 19),
    operations: ops, extensions: [],
  };
  const signed = steem.auth.signTransaction(tx, [wif]);
  // wire law (measured run #4/#5): condenser_api.broadcast_transaction takes OBJECT op
  // payloads — steem-js signs objects natively; stringifying throws Bad Cast node-side
  await rpcNode(node, 'condenser_api.broadcast_transaction', [signed]);
  return { txid_hint: (signed.signatures && signed.signatures[0] || '').slice(0, 10) + '…', ref_block: tx.ref_block_num };
}

// ── canon (single writer) ───────────────────────────────────────────────────
function readCanon() {
  try { const j = JSON.parse(fs.readFileSync(OUT_JSON, 'utf8')); return Array.isArray(j) ? j : (j.rows || []); } catch (_) { return []; }
}
function writeCanon(rows) { fs.writeFileSync(OUT_JSON, JSON.stringify(rows, null, 2) + '\n'); }

function writeMd(row) {
  const L = [];
  L.push(`# market-exec — SIGNED EXECUTOR canon (CR-0036)`);
  L.push('');
  L.push(`Last run: ${row.ts} · mode **${row.mode}** · venue **${row.venue}** via ${row.node}`);
  L.push('');
  L.push(`| metric | value |`);
  L.push(`|---|---|`);
  L.push(`| bid / ask / mid | ${row.bid} / ${row.ask} / ${row.mid} |`);
  L.push(`| spread | ${row.spread_pct}% |`);
  L.push(`| feed (SBD per STEEM) | ${row.feed} |`);
  L.push(`| cross-check | ${JSON.stringify(row.crosscheck)} |`);
  L.push(`| liquid before | ${row.liquid_before.steem} / ${row.liquid_before.sbd} |`);
  L.push(`| own orders on book (pre) | ${row.own_orders_pre} |`);
  L.push(`| authority check | ${row.authority_ok} |`);
  L.push('');
  L.push(`## placed (${row.placed.length})`);
  for (const p of row.placed) L.push(`- L${p.level} ${p.side} ${p.amount_to_sell} → ${p.min_to_receive} (target ${p.target}, realized ${p.realized}, err ${p.err_pct}%)${p.broadcast ? ' · broadcast ✓' : ' · DRY'}`);
  L.push('');
  L.push(`## skipped (${row.skipped.length})`);
  for (const s of row.skipped) L.push(`- ${s.kind} L${s.level} @ ${s.target}: ${s.reason}`);
  L.push('');
  L.push(`## errors (${row.errors.length})`);
  for (const e of row.errors) L.push(`- ${e}`);
  L.push('');
  L.push(`Run history: ${row.run_index} rows in canon.`);
  fs.writeFileSync(OUT_MD, L.join('\n') + '\n');
}

// ── main ────────────────────────────────────────────────────────────────────
async function main() {
  const t0 = Date.now();
  const mode = resolveMode(process.env.MARKET_EXEC_LIVE);
  const row = {
    ts: new Date().toISOString(), mode, venue: 'SBD/STEEM internal (steem)', node: NODE_PRIMARY,
    bid: null, ask: null, mid: null, spread_pct: null, feed: null, crosscheck: null,
    liquid_before: null, own_orders_pre: null, authority_ok: false,
    planned: [], placed: [], skipped: [], errors: [], verify: [], broadcast: [], run_index: 0,
  };
  const canon = readCanon();
  row.run_index = canon.length + 1;

  try {
    const steem = loadSteem();
    // 1. book cross-check (official nodes only)
    const book = await crossCheckBook();
    row.bid = book.bid; row.ask = book.ask; row.mid = +mid(book.bid, book.ask).toFixed(6);
    row.crosscheck = book.cross;
    row.spread_pct = +spreadPct(book.bid, book.ask).toFixed(4);
    // 2. feed + balances + own orders
    const [fh, [acc], ownPre] = await Promise.all([
      rpcNode(NODE_PRIMARY, 'condenser_api.get_feed_history', []),
      rpcNode(NODE_PRIMARY, 'condenser_api.get_accounts', [[HEAD]]),
      fetchOwnOrders(NODE_PRIMARY).catch((e) => { row.errors.push('own-orders read failed: ' + String(e.message || e).slice(0, 60)); return []; }),
    ]);
    row.feed = fh.current_median_history ? +(f(fh.current_median_history.base) / f(fh.current_median_history.quote)).toFixed(6) : null;
    row.liquid_before = { steem: acc.balance, sbd: acc.sbd_balance };
    row.own_orders_pre = ownPre.length;
    const liquidSteem = f(acc.balance), liquidSbd = f(acc.sbd_balance);
    // 3. plan (pure)
    const plan = buildPlan({ liquidSteem, liquidSbd, bid: book.bid, ask: book.ask, ownOrders: ownPre });
    row.mid = plan.mid; row.planned = [...plan.sells, ...plan.buys].map((p) => ({ ...p }));
    row.skipped = plan.skipped;
    // 4. authority verify BEFORE any signature
    let wif = null;
    if (mode === 'LIVE') {
      wif = loadActiveWif();
      const auth = await verifyAuthority(NODE_PRIMARY, steem, wif);
      row.authority_ok = auth.ok;
      if (!auth.ok) throw new Error(`AUTHORITY-MISMATCH derived pubkey ${auth.derived.slice(0, 8)}… not in on-chain active auths — ABORT, nothing signed`);
    } else {
      row.authority_ok = 'skipped (DRY_RUN)';
    }
    // 5. execute
    const expiry = new Date(Date.now() + DEFAULTS.EXPIRY_DAYS * 864e5).toISOString().slice(0, 19);
    const ops = [];
    const placements = [];
    for (const p of plan.sells) { placements.push({ ...p, side: 'sell', broadcast: false }); }
    for (const p of plan.buys) { placements.push({ ...p, side: 'buy', broadcast: false }); }
    if (mode === 'LIVE') {
      // unique orderids: (epoch-seconds mod 2^32) + index — chain law: same (owner, orderid)
      // REPLACES the standing order, so uniqueness is correctness, not cosmetics
      const baseId = Math.floor(Date.now() / 1000) % 4294967000;
      placements.forEach((p, i) => { p.orderid = baseId + i + 1; });
      for (const p of placements) { ops.push(buildOpFromPlacement(p, expiry, p.orderid)); }
      if (ops.length) {
        const res = await signBroadcast(NODE_PRIMARY, steem, wif, ops);
        row.broadcast = [{ ops: ops.length, ...res }];
        for (const p of placements) p.broadcast = true;
      }
    }
    row.placed = placements;
    // 6. readback verify (LIVE): own orders should now include the placed levels
    if (mode === 'LIVE' && placements.length) {
      await sleep(3000);
      try {
        const ownPost = await fetchOwnOrders(NODE_PRIMARY);
        const byId = new Map(ownPost.map((o) => [o.orderid, o]));
        for (const p of placements) {
          const o = byId.get(p.orderid);
          const priceOk = !!o && Math.abs(o.price - p.realized) / p.realized < 0.005;
          row.verify.push({ level: p.level, side: p.side, orderid: p.orderid, found: !!o, price_match: priceOk, matched: !!o && priceOk });
        }
        row.own_orders_post = ownPost.length;
      } catch (e) { row.errors.push('readback failed: ' + String(e.message || e).slice(0, 60)); }
    }
  } catch (e) {
    row.errors.push(String(e.message || e).slice(0, 200));
  }

  row.duration_ms = Date.now() - t0;
  canon.push(row);
  writeCanon(canon);
  writeMd(row);
  // fail-soft exit (treasury law) with fail-loud book
  console.log(`[market-exec] mode=${row.mode} planned=${row.planned.length} skipped=${row.skipped.length} errors=${row.errors.length} verify=${(row.verify || []).filter(v => v.matched).length}/${(row.verify || []).length} in ${row.duration_ms}ms`);
  console.log(`[market-exec] canon: ${path.relative(ROOT, OUT_JSON)} (run #${row.run_index})`);
}
const f = (s) => parseFloat(String(s || '0'));

if (require.main === module) {
  main().catch((e) => { console.error('[market-exec] FATAL', String(e.message || e).slice(0, 200)); process.exit(0); });
} else {
  module.exports = { mid, spreadPct, inBand, r3, r6, resolveMode, scanSellAmount, stacked, buildPlan, DEFAULTS, HEAD, OUT_JSON };
}
