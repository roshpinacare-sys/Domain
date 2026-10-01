'use strict';
/**
 * econ-desk.cjs — Z-28 REAL-ECONOMY DESK (hive, headcorner active authority).
 *
 * Daily self-healing execution loop for the fleet's REAL DEX rail on Hive-Engine:
 *   1. poll the SWAP.HIVE wrapper credit (hiveswap owes headcorner if a verified
 *      deposit is on chain but the token credit has not landed);
 *   2. when funds are in place, place ONE maker-priced market buy in a cheap
 *      wrapped-coin book (SWAP.DOGE / SWAP.LTC chosen by depth);
 *   3. read back the on-chain custom_json with CONTENT matching (R-ECON-2) and
 *      the engine-side settlement (token balance or open order) before claiming;
 *   4. commit a secretless book (econ-book.json/.md) so the economy ledger is
 *      public evidence, not a claim.
 *
 * Every execution verify-then-sign; any failure = honest row + exit 0 (fail-soft).
 * Key use: SA_HEAD_HIVE_ACTIVE51 (uncompressed 51-char form — R-ECON-1/3:
 * compressed hive WIFs cannot be signed by steem-family libs; hive-js + the
 * wif51 form are the only proven path).
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const HEAD = 'headcorner';
const HIVE_NODE = 'https://api.hive.blog';
const HIVE_CHAIN_ID = 'beeab0de00000000000000000000000000000000000000000000000000000000';
const OUT_JSON = process.env.ECON_JSON || path.join(__dirname, 'econ-book.json');
const OUT_MD = path.join(__dirname, 'econ-book.md');
const BUY_TARGETS = ['SWAP.DOGE', 'SWAP.LTC'];       // cheapest routable wrapped books
const MIN_ORDER_HIVE = 0.25;                          // smallest value worth placing

function rpcNode(node, method, params, timeout = 20000) {
  const payload = JSON.stringify({ jsonrpc: '2.0', method, params, id: 1 });
  const u = new URL(node);
  return new Promise((resolve, reject) => {
    const req = https.request({ hostname: u.hostname, path: u.pathname || '/', method: 'POST', family: 4, headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }, timeout }, (res) => {
      let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => {
        try { const j = JSON.parse(d); if (j.error) return reject(new Error(j.error.message || 'rpc-error')); resolve(j.result); }
        catch (_) { reject(new Error('bad-rpc')); }
      });
    });
    req.on('timeout', () => req.destroy(new Error('timeout'))); req.on('error', reject);
    req.write(payload); req.end();
  });
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function heFind(contract, table, query, limit = 10) {
  const payload = JSON.stringify({ jsonrpc: '2.0', method: 'find', params: { contract, table, query, limit, offset: 0 }, id: 1 });
  return new Promise((resolve) => {
    const u = new URL('https://api.hive-engine.com/rpc/contracts');
    const req = https.request({ hostname: u.hostname, path: u.pathname, method: 'POST', family: 4, headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }, timeout: 20000 }, (res) => {
      let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => { try { resolve(JSON.parse(d).result); } catch (_) { resolve(null); } });
    });
    req.on('error', () => resolve(null)); req.on('timeout', () => { req.destroy(); resolve(null); });
    req.write(payload); req.end();
  });
}

async function findOp(opType, matcher, afterMs, tries = 7) {
  for (let i = 0; i < tries; i++) {
    await sleep(5000);
    try {
      const hist = await rpcNode(HIVE_NODE, 'condenser_api.get_account_history', [HEAD, -1, 100]);
      for (const [, ev] of (hist || [])) {
        const [type, body] = ev.op || [];
        if (type !== opType) continue;
        const ts = new Date(ev.timestamp + 'Z').getTime();
        if (ts < afterMs - 25000) continue;
        try { if (matcher(body)) return { block: ev.block, trx: ev.trx_id }; } catch (_) {}
      }
    } catch (_) {}
  }
  return null;
}

// ---- R-ECON-1: hive compressed-WIF -> signable 51-char steem-family WIF ----
// The vault stores headcorner's hive_active as a 52-char compressed WIF
// (L-prefix). steem-family libs cannot sign with it directly. The chain
// authority corresponds to the scalar d = (k*256 + 1) mod N where k is the
// 32-byte payload — re-derived in memory each run; the wif never persists.
function hiveWif51(compressedWif) {
  const bs58 = require('bs58');
  const crypto = require('crypto');
  const N = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141n;
  const raw = bs58.decode(compressedWif);
  if (raw.length === 38 && raw[0] === 0x80 && raw[33] === 0x01) {
    const k = BigInt('0x' + raw.subarray(1, 33).toString('hex'));
    const d = ((k << 8n) + 1n) % N;
    const priv32 = Buffer.from(d.toString(16).padStart(64, '0'), 'hex');
    const body = Buffer.concat([Buffer.from([0x80]), priv32]);
    const cs = crypto.createHash('sha256').update(crypto.createHash('sha256').update(body).digest()).digest().subarray(0, 4);
    return bs58.encode(Buffer.concat([body, cs]));
  }
  if (/^5[1-9A-HJ-NP-Za-km-z]{50}$/.test(compressedWif)) return compressedWif; // already uncompressed
  return null;
}

function loadHeadHiveActive() {
  const raw = process.env.SA_FLEET_KEYS || '';
  if (!raw) return null;
  try {
    const map = JSON.parse(Buffer.from(raw, 'base64').toString('utf8'));
    const h = map[HEAD] || {};
    const cand = h.hive_active || h.active || null; // nested or flat shape
    if (typeof cand !== 'string' || cand.length < 40) return null;
    return hiveWif51(cand);
  } catch (_) { return null; }
}

(async () => {
  const t0 = Date.now();
  const book = { at: new Date(t0).toISOString(), agent: 'econ-desk', chain: 'hive', executor: HEAD, signer: '@hiveio/hive-js', rows: [] };
  const R = (row) => book.rows.push(row);

  const wif = loadHeadHiveActive();
  if (!wif) {
    book.error = 'could not derive headcorner hive wif51 from SA_FLEET_KEYS — nothing signed';
    fs.writeFileSync(OUT_JSON, JSON.stringify(book, null, 1));
    console.log(JSON.stringify({ state: 'no-key' })); process.exit(0);
  }

  let hivejs = null;
  try { hivejs = require('@hiveio/hive-js'); } catch (_) {}
  if (!hivejs) {
    book.error = '@hiveio/hive-js unavailable in runner — cannot sign hive active ops (steem.js is broken for hive assets, R-ECON-3)';
    fs.writeFileSync(OUT_JSON, JSON.stringify(book, null, 1));
    console.log(JSON.stringify({ state: 'no-signer' })); process.exit(0);
  }
  hivejs.api.setOptions({ url: HIVE_NODE, useAppbaseApi: true });
  hivejs.config.set('chain_id', HIVE_CHAIN_ID);

  const bcast = (fn) => new Promise((resolve, reject) => fn((err, res) => (err ? reject(new Error(String(err.message || err).slice(0, 140))) : resolve(res))));

  // ---- authority gate ----
  const pub = hivejs.auth.wifToPublic(wif);
  const acc = (await rpcNode(HIVE_NODE, 'condenser_api.get_accounts', [[HEAD]]))[0];
  const chainAct = acc.active.key_auths[0][0];
  if (pub !== chainAct) {
    book.error = 'active key does not match live authority — refusing to sign';
    fs.writeFileSync(OUT_JSON, JSON.stringify(book, null, 1));
    console.log(JSON.stringify({ state: 'AUTH-MISMATCH' })); process.exit(0);
  }
  book.authority = { verified: true, livePub: chainAct.slice(0, 7) + '…' };
  const hiveBal = parseFloat(acc.balance);

  // ---- step 1: wrapper credit poll ----
  const swapBal = (await heFind('tokens', 'balances', { account: HEAD, symbol: 'SWAP.HIVE' }, 1));
  const swapHive = swapBal && swapBal[0] ? parseFloat(swapBal[0].balance) : 0;
  R({ step: 'wrapper-poll', swapHive: swapHive.toFixed(8), hiveLiquid: hiveBal });
  book.swapHive = swapHive;
  book.hiveLiquid = hiveBal;

  // ---- step 2: place ONE market buy if the wrapper credit is in place ----
  if (swapHive >= MIN_ORDER_HIVE) {
    // pick the target book by live depth (volume), fall back in order
    let picked = null;
    for (const sym of BUY_TARGETS) {
      const m = (await heFind('market', 'metrics', { symbol: sym }, 1))[0];
      if (m && parseFloat(m.lowestAsk) > 0) { picked = { sym, m }; break; }
    }
    if (!picked) R({ step: 'buy', status: 'NO-LIVE-BOOK' });
    else {
      const { sym, m } = picked;
      const ask = m.lowestAsk;
      // maker price: just under the ask (does not cross; sits at the top of the bid side)
      const bidPx = (parseFloat(m.highestBid) || parseFloat(ask) * 0.985);
      const price = bidPx > 0 ? bidPx.toFixed(8) : ask;
      const quantity = (swapHive * 0.95) / parseFloat(price); // leave 5% headroom for fees
      const q = quantity.toFixed(6);
      const before = Date.now();
      try {
        const existing = (await heFind('market', 'buyBook', { account: HEAD, symbol: sym }, 5)) || [];
        if (existing.length) {
          R({ step: 'buy', status: 'ALREADY-OPEN', symbol: sym, openOrders: existing.length });
        } else {
          await bcast((cb) => hivejs.broadcast.customJson(wif, [HEAD], [], 'ssc-mainframe-hive', JSON.stringify({ contractName: 'market', contractAction: 'buy', contractPayload: { symbol: sym, quantity: q, price } }), cb));
          const ev = await findOp('custom_json', (b) => b.id === 'ssc-mainframe-hive' && String(b.json || '').includes('"contractAction":"buy"') && String(b.json || '').includes(sym), before);
          let settled = { tokenBalance: '0', openOrders: 0 };
          for (let i = 0; i < 5; i++) {
            await sleep(6000);
            const b = await heFind('tokens', 'balances', { account: HEAD, symbol: sym }, 1);
            const bk = await heFind('market', 'buyBook', { account: HEAD, symbol: sym }, 5);
            settled = { tokenBalance: b && b[0] ? b[0].balance : '0', openOrders: (bk || []).length };
            if (parseFloat(settled.tokenBalance) > 0 || settled.openOrders > 0) break;
          }
          R({ step: 'buy', status: parseFloat(settled.tokenBalance) > 0 ? 'FILLED' : (settled.openOrders > 0 ? 'ORDER-OPEN' : 'PLACED-UNSETTLED'), symbol: sym, quantity: q, price, ask, onChain: !!ev, ...(ev || {}), ...settled });
        }
      } catch (e) {
        R({ step: 'buy', status: 'ERROR', symbol: sym, error: String(e.message).slice(0, 120) });
      }
    }
  } else {
    R({ step: 'buy', status: 'SKIP-BELOW-MIN', swapHive: swapHive.toFixed(8), min: MIN_ORDER_HIVE, note: 'waiting for the hiveswap wrapper to credit the verified deposit (trx 875404ff2d16f418bd8a86b5cffa6d4e6503e3c1, 0.310 HIVE)' });
  }

  book.summary = { rows: book.rows.length, executed: book.rows.filter((r) => r.status === 'FILLED' || r.status === 'ORDER-OPEN').length, ms: Date.now() - t0 };
  fs.writeFileSync(OUT_JSON, JSON.stringify(book, null, 1));
  const md = [
    '# Econ Book (Z-28 real-economy desk)', '',
    'Updated: ' + book.at + ' UTC. Executor: ' + HEAD + ' (active authority, byte-verified per run). Signer: @hiveio/hive-js (steem.js cannot sign hive asset ops, R-ECON-3). Generated by agents/econ-desk.cjs.', '',
    '| step | status | detail |',
    '|---|---|---|',
    ...book.rows.map((r) => '| ' + r.step + ' | ' + (r.status || r.move || '') + ' | ' + [r.symbol && (r.symbol + ' qty=' + r.quantity + ' @ ' + r.price), r.swapHive && ('SWAP.HIVE=' + r.swapHive), r.note, r.error, r.trx && ('trx ' + r.trx)].filter(Boolean).join(' · ').replace(/\|/g, '/') + ' |'),
    '',
  ].join('\n');
  fs.writeFileSync(OUT_MD, md);
  console.log(JSON.stringify({ state: 'ok', summary: book.summary }));
  process.exit(0);
})().catch((e) => {
  try { fs.writeFileSync(OUT_JSON, JSON.stringify({ at: new Date().toISOString(), agent: 'econ-desk', fatal: String(e.message || e).slice(0, 160) }, null, 1)); } catch (_) {}
  console.log(JSON.stringify({ state: 'fail-soft', msg: String(e.message || e).slice(0, 120) }));
  process.exit(0);
});
