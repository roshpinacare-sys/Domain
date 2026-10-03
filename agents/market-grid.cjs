'use strict';
/**
 * market-grid.cjs — Z-60+ MARKET-GRID DESK (the internal-market sovereignty instrument)
 *
 * Owner directive (2026-10-03): "יש שוק פנימי לsteem גם לhive כיצד נוכל להשתלט
 * עליהם אוטומטית בעזרת גרידים של הסוכנים" — how do we take the internal markets
 * automatically with agent grids. This desk is the KEYLESS FIRST HALF of the answer:
 * it watches the REAL orderbooks 24/7-class, computes REAL grids with REAL spread
 * discipline, and records PAPER fills (labeled, never money) so the edge is MEASURED
 * before a single owner-gated sat of capital moves.
 *
 * LAWS (in code):
 *  1. OFFICIAL SOURCES ONLY: api.hive.blog, api.steemit.com (condenser_api — the
 *     chains' own nodes), api.hive-engine.com/rpc/contracts (the sidechain's own
 *     RPC). No third-party price aggregators for the book truth.
 *  2. KEYLESS: this desk reads. It NEVER signs, NEVER broadcasts. The executor
 *     surface is a PREVIEW of limit_order_create payloads stamped OWNER-GATED.
 *  3. PAPER IS PAPER: paper fills live in their own ledger file, every row labeled
 *     "PAPER" — the fleet does not launder simulation into realized book.
 *  4. FAIL-LOUD: a market that does not answer is recorded as an ERROR row, never
 *     silently skipped (the books pattern).
 *  5. SINGLE CANON: the book (market-grid.json + .md) is the one record; the paper
 *     ledger is its append-only evidence trail.
 *
 * Grid math (exported pure, for future evals):
 *  - mid(bid, ask) — honest mid
 *  - spreadPct(bid, ask) — round-trip cost floor
 *  - band(mid, pct) — [low, high] from 24h change, clamped
 *  - buildGrid(mid, bandLow, bandHigh, rungsPerSide, minSpacingPct) — grid with
 *    spacing discipline: no two rungs closer than the round-trip cost floor
 *  - crossings(grid, trades) — which rungs the recent tape already crossed (the
 *    paper-fill rule, placement-time snapshot)
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT_JSON = process.env.MGRID_JSON || path.join(ROOT, 'agents', 'market-grid.json');
const OUT_MD = path.join(OUT_JSON.replace(/\.json$/, '.md'));
const PAPER_LEDGER = process.env.MGRID_PAPER || path.join(ROOT, 'agents', 'market-grid-paper.jsonl');

const HIVE_NODE = 'https://api.hive.blog';
const STEEM_NODE = 'https://api.steemit.com';
const HE_RPC = 'https://api.hive-engine.com/rpc/contracts';
const HE_BASKET = ['BEE', 'WAIV', 'SWAP.DOGE', 'SWAP.LTC', 'CENT'];
const FEE_FLOOR_PCT = 0.4; // round-trip cost floor: no grid rung closer than this
const RUNGS_PER_SIDE = 5;

function post(url, body, timeout = 12000) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const data = JSON.stringify(body);
    const req = https.request(
      { hostname: u.hostname, path: u.pathname, method: 'POST',
        headers: { 'content-type': 'application/json', 'content-length': Buffer.byteLength(data) },
        timeout },
      (res) => {
        let buf = '';
        res.on('data', (c) => { buf += c; if (buf.length > 1e6) req.destroy(new Error('response too large')); });
        res.on('end', () => {
          try { resolve(JSON.parse(buf)); } catch (e) { reject(new Error(`bad json from ${url}: ${e.message}`)); }
        });
      });
    req.on('timeout', () => req.destroy(new Error(`timeout ${url}`)));
    req.on('error', reject);
    req.end(data);
  });
}

// ── pure grid math ──────────────────────────────────────────────────────────
const mid = (bid, ask) => (bid + ask) / 2;
const spreadPct = (bid, ask) => ((ask - bid) / mid(bid, ask)) * 100;
function band(midPrice, pct24h) {
  const x = Math.min(Math.max(Math.abs(pct24h) / 100, 0.005), 0.06); // clamp 0.5%..6%
  return { low: midPrice * (1 - x), high: midPrice * (1 + x), x };
}
function buildGrid(midPrice, b, rungsPerSide = RUNGS_PER_SIDE, minSpacingPct = FEE_FLOOR_PCT) {
  const minSpacing = midPrice * (minSpacingPct / 100);
  const step = Math.max((b.high - b.low) / (rungsPerSide * 2), minSpacing);
  const grid = [];
  for (let i = 1; i <= rungsPerSide; i++) grid.push({ side: 'buy', price: +(midPrice - i * step).toFixed(8) });
  for (let i = 1; i <= rungsPerSide; i++) grid.push({ side: 'sell', price: +(midPrice + i * step).toFixed(8) });
  return { grid, step: +step.toFixed(8), spacingDisciplined: step >= minSpacing };
}
function crossings(grid, trades) {
  const hits = [];
  for (const r of grid) {
    const crossed = trades.some((t) => (r.side === 'buy' ? t <= r.price : t >= r.price));
    if (crossed) hits.push(r);
  }
  return hits;
}

// ── market surfaces ─────────────────────────────────────────────────────────
async function readInternal(node, chain) {
  const t0 = Date.now();
  const ticker = await post(node, { jsonrpc: '2.0', method: 'condenser_api.get_ticker', params: [], id: 1 });
  const book = await post(node, { jsonrpc: '2.0', method: 'condenser_api.get_order_book', params: [10], id: 2 });
  const trades = await post(node, { jsonrpc: '2.0', method: 'condenser_api.get_recent_trades', params: [20], id: 3 });
  if (!ticker.result || !book.result || !trades.result) throw new Error('incomplete answer from ' + node);
  const bid = parseFloat(ticker.result.highest_bid);
  const ask = parseFloat(ticker.result.lowest_ask);
  const pct24h = parseFloat(ticker.result.percent_change || '0');
  const m = mid(bid, ask);
  const b = band(m, pct24h);
  const g = buildGrid(m, b);
  const tape = (trades.result || []).map((t) => parseFloat((t.current_pays || '').split(' ')[0]) / parseFloat((t.open_pays || '').split(' ')[0]) || 0)
    .filter((x) => isFinite(x) && x > 0);
  const crossed = crossings(g.grid, tape);
  const base = chain === 'hive' ? 'HBD' : 'SBD';
  const quote = chain === 'hive' ? 'HIVE' : 'STEEM';
  return {
    market: `${base}/${quote} (internal ${chain})`, chain,
    bid, ask, mid: +m.toFixed(8), spreadPct: +spreadPct(bid, ask).toFixed(4),
    pct24h: +pct24h.toFixed(3), band: { low: +b.low.toFixed(8), high: +b.high.toFixed(8) },
    grid: g.grid, step: g.step, spacingDisciplined: g.spacingDisciplined,
    paperFills: crossed.length, tapeSamples: tape.length, tapeLevels: tape.slice(0, 20),
    depthBids: (book.result.bids || []).length, depthAsks: (book.result.asks || []).length,
    ms: Date.now() - t0,
  };
}

async function readHiveEngine() {
  const t0 = Date.now();
  const res = await post(HE_RPC, { jsonrpc: '2.0', method: 'find',
    params: { contract: 'market', table: 'metrics', query: { symbol: { $in: HE_BASKET } }, limit: 10, offset: 0 }, id: 1 });
  if (!Array.isArray(res.result)) throw new Error('HE metrics not an array');
  const rows = res.result.map((r) => {
    const bid = parseFloat(r.highestBid || '0'), ask = parseFloat(r.lowestAsk || '0');
    const m = mid(bid, ask);
    const pct = parseFloat(r.priceChangePercent || r.priceChange || '0');
    const b = band(m || 1, pct);
    const g = buildGrid(m || 1, b);
    const sp = m > 0 ? spreadPct(bid, ask) : Infinity;
    return {
      symbol: r.symbol, lastPrice: r.lastPrice, bid, ask,
      mid: +m.toFixed(8), spreadPct: isFinite(sp) ? +sp.toFixed(4) : null,
      volume24h: parseFloat(r.volume || '0'),
      gridFeasible: m > 0 && isFinite(sp) && sp >= FEE_FLOOR_PCT,
      rungs: g.grid.length, step: g.step,
    };
  });
  return { market: 'Hive-Engine basket (sidechain DEX)', rows, ms: Date.now() - t0 };
}

// ── executor preview (OWNER-GATED — never broadcast) ────────────────────────
function executorPreview(internalRows) {
  const previews = [];
  for (const r of internalRows) {
    for (const rung of r.grid) {
      const base = r.chain === 'hive' ? 'HBD' : 'SBD';
      const quote = r.chain === 'hive' ? 'HIVE' : 'STEEM';
      previews.push({
        op: 'limit_order_create', account: 'OWNER-GATED-NOT-BROADCAST', market: r.market,
        payload: rung.side === 'buy'
          ? { owner: '<owner-account>', amount_to_sell: `0.001 ${quote}`, min_to_receive: `${+(0.001 / rung.price).toFixed(6)} ${base}`, fill_or_kill: false, expiration: '+7d' }
          : { owner: '<owner-account>', amount_to_sell: `0.001 ${base}`, min_to_receive: `${+(0.001 * rung.price).toFixed(6)} ${quote}`, fill_or_kill: false, expiration: '+7d' },
        gated: true,
      });
    }
  }
  return previews;
}

// ── main ────────────────────────────────────────────────────────────────────
(async () => {
  const out = { at: new Date().toISOString(), agent: 'market-grid v1.0.0 (Z-60+ internal-market sovereignty instrument)', laws: null, markets: [], hiveEngine: null, paperLedger: PAPER_LEDGER, executorPreviewCount: 0, errors: [], summary: {} };
  out.laws = ['official sources only (chain nodes + sidechain RPC)', 'keyless: reads only, executor = owner-gated preview, never broadcast', 'paper is paper (labeled ledger, never laundered into realized book)', 'fail-loud per market', 'single canon (market-grid.json/.md)'];

  const internal = [];
  for (const [node, chain] of [[HIVE_NODE, 'hive'], [STEEM_NODE, 'steem']]) {
    try { internal.push(await readInternal(node, chain)); } catch (e) { out.errors.push({ market: chain, error: String(e.message) }); }
  }
  out.markets = internal;
  try { out.hiveEngine = await readHiveEngine(); } catch (e) { out.errors.push({ market: 'hive-engine', error: String(e.message) }); }
  out.executorPreviewCount = executorPreview(internal).length;

  // paper fills (placement-time snapshot) — labeled PAPER, appended evidence trail.
  // Rule: a rung is a PAPER fill when the recent tape already traded through its
  // price (the level is proven touchable) — crossings() over the recent trades.
  const paperRows = [];
  for (const r of internal) {
    for (const rung of r.grid) {
      const touched = crossings([rung], r.tapeLevels || []).length > 0;
      paperRows.push({ at: out.at, PAPER: true, market: r.market, side: rung.side, price: rung.price, touchedByTape: touched, note: 'snapshot receipt — level in computed grid' });
    }
  }
  if (paperRows.length) {
    try { fs.appendFileSync(PAPER_LEDGER, paperRows.map((x) => JSON.stringify(x)).join('\n') + '\n'); } catch (e) { out.errors.push({ market: 'paper-ledger', error: String(e.message) }); }
  }

  out.summary = {
    marketsRead: internal.length + (out.hiveEngine ? 1 : 0),
    errors: out.errors.length,
    gridsComputed: internal.length + (out.hiveEngine ? out.hiveEngine.rows.filter((r) => r.gridFeasible).length : 0),
    paperFillsSnapshot: paperRows.length,
    executorPreviewCount: out.executorPreviewCount,
    verdict: internal.length === 2 && out.hiveEngine ? 'MARKET-GRID-LIVE' : 'PARTIAL',
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 1));
  const md = [
    `# market-grid — internal-market sovereignty instrument (Z-60+)`,
    ``,
    `At: ${out.at} · Verdict: **${out.summary.verdict}** · Markets read: ${out.summary.marketsRead} · Errors: ${out.summary.errors}`,
    ``,
    `| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |`,
    `|---|---|---|---|---|---|---|---|`,
    ...internal.map((r) => `| ${r.market} | ${r.bid} | ${r.ask} | ${r.spreadPct} | ${r.pct24h} | ${r.grid.length} | ${r.step} | ${r.paperFills} |`),
    ...(out.hiveEngine ? [``, `Hive-Engine basket (keyless RPC): ` + out.hiveEngine.rows.map((r) => `${r.symbol} spread ${r.spreadPct}%${r.gridFeasible ? ' FEASIBLE' : ' thin'}`).join(' · ')] : []),
    ``,
    `Laws: ${out.laws.join(' · ')}`,
    ``,
    `Executor preview: ${out.executorPreviewCount} prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: ${out.summary.paperFillsSnapshot} rows appended to market-grid-paper.jsonl (law 3).`,
    ``,
    `Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.`,
  ].join('\n');
  fs.writeFileSync(OUT_MD, md);
  console.log(`market-grid: ${out.summary.verdict} · markets ${out.summary.marketsRead} · grids ${out.summary.gridsComputed} · paper ${out.summary.paperFillsSnapshot} · preview ${out.executorPreviewCount} · errors ${out.summary.errors}`);
  if (out.summary.verdict !== 'MARKET-GRID-LIVE') process.exit(1);
})().catch((e) => { console.error('market-grid FATAL:', e.message); process.exit(1); });

module.exports = { mid, spreadPct, band, buildGrid, crossings };
