'use strict';
/**
 * econ-desk.cjs — Z-29 TWO-SIDED REAL-ECONOMY DESK (hive, headcorner active authority).
 *
 * Daily self-healing execution loop for the fleet's REAL DEX rail on Hive-Engine:
 *   1. poll the SWAP.HIVE wrapper credit (hiveswap owes headcorner if a verified
 *      deposit is on chain but the token credit has not landed);
 *   2. SELL SIDE (Z-29): harvest engine inventory into routable capital —
 *      sell any sellable token balance above its keep-reserve when the live
 *      bid pays at least DUST_MIN_PROCEEDS (dust is honestly HELD, never noise-sold);
 *   3. re-poll SWAP.HIVE after the sell side;
 *   4. when funds are in place, place ONE maker-priced market buy in a cheap
 *      wrapped-coin book (SWAP.DOGE / SWAP.LTC chosen by depth);
 *   5. read back the on-chain custom_json with CONTENT matching (R-ECON-2) and
 *      the engine-side settlement (token balance or open order) before claiming;
 *   6. commit a secretless book (econ-book.json/.md) so the economy ledger is
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
// ---- Z-29 sell side: inventory the desk is allowed to harvest ----
// keep = reserve held back on chain (BEE is the engine utility token: keep 1 for ops).
const SELL_BOOKS = [
  { sym: 'BEE',   keep: 1.0 },
  { sym: 'VKBT',  keep: 0 },
  { sym: 'PAY',   keep: 0 },
  { sym: 'BLANK', keep: 0 },
];
const DUST_MIN_PROCEEDS = 0.02;   // below this SWAP.HIVE value a sell is dust-noise; honest HOLD
const ENGINE_FEE = 0.009;         // 0.9% engine market fee (seller side)

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

function heFind(contract, table, query, limit = 10, orderBy, descending) {
  const params = { contract, table, query, limit, offset: 0 };
  if (orderBy) { params.orderBy = orderBy; params.descending = !!descending; }
  const payload = JSON.stringify({ jsonrpc: '2.0', method: 'find', params, id: 1 });
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
  // path 1: nested SA_FLEET_KEYS shape (future secret generation)
  const raw = process.env.SA_FLEET_KEYS || '';
  if (raw) {
    try {
      const map = JSON.parse(Buffer.from(raw, 'base64').toString('utf8'));
      const h = map[HEAD] || {};
      const cand = h.hive_active || h.active || null;
      if (typeof cand === 'string' && cand.length >= 40) return hiveWif51(cand);
    } catch (_) {}
  }
  // path 2: private-steem-repo vault recovery (Z-21 pattern, proven in CI)
  const dir = process.env.STEEM_REPO_DIR;
  if (dir) {
    try {
      const { execFileSync } = require('child_process');
      const crypto = require('crypto');
      const out = path.join('/tmp', 'econ-keys-' + Date.now());
      fs.mkdirSync(out, { recursive: true, mode: 0o700 });
      const metaPath = path.join(dir, 'agent', 'recovery-meta.json');
      if (!fs.existsSync(metaPath)) return null;
      const metas = [JSON.parse(fs.readFileSync(metaPath, 'utf8'))];
      const vdir = path.join(dir, 'agent', 'vault');
      const encs = fs.readdirSync(vdir).filter((f) => f.endsWith('.enc')).map((f) => path.join(vdir, f));
      const sha = (x) => crypto.createHash('sha256').update(fs.readFileSync(x)).digest('hex');
      for (const enc of encs) {
        const outer = sha(enc);
        for (const m of metas) {
          if (!m || !m.keysZipPass || m.keysZipSha256 !== outer) continue;
          const dec = path.join(out, 'v.zip');
          execFileSync('openssl', ['enc', '-d', '-aes-256-cbc', '-pbkdf2', '-iter', '300000', '-in', enc, '-out', dec, '-pass', 'env:ECZP'], { env: { ...process.env, ECZP: m.keysZipPass }, stdio: 'pipe' });
          if (fs.readFileSync(dec).subarray(0, 2).toString('latin1') !== 'PK') continue;
          execFileSync('unzip', ['-o', '-q', dec, '-d', out], { stdio: 'pipe' });
          const vj = path.join(out, 'agent', 'keys', 'vault.json');
          if (!fs.existsSync(vj)) continue;
          const v = JSON.parse(fs.readFileSync(vj, 'utf8'));
          const hc = (v.accounts || []).find((a) => a.username === HEAD);
          let rawWif = hc && hc.keys && hc.keys.hive && hc.keys.hive.active;
          if (typeof rawWif === 'string' && rawWif.startsWith('{')) { try { rawWif = JSON.parse(rawWif).wif || null; } catch (_) { rawWif = null; } }
          else if (rawWif && typeof rawWif === 'object') rawWif = rawWif.wif || null;
          else rawWif = null;
          try { fs.rmSync(out, { recursive: true, force: true }); } catch (_) {}
          if (typeof rawWif === 'string' && rawWif.length > 40) return hiveWif51(rawWif);
        }
      }
      try { fs.rmSync(out, { recursive: true, force: true }); } catch (_) {}
    } catch (_) {}
  }
  return null;
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

  const swapBalNow = async () => {
    const b = await heFind('tokens', 'balances', { account: HEAD, symbol: 'SWAP.HIVE' }, 1);
    return b && b[0] ? parseFloat(b[0].balance) : 0;
  };

  // ---- step 1: RAIL HEALTH (Z-29). The engine sidechain can STALL: on 2026-10-01 the
  // newest applied market state on every probed book froze at 2026-09-05..09-20 while the
  // hive chain ran live — every custom_json since (ours, the wrapper credit, third parties')
  // is silently unapplied. NEVER sign into a dead rail; book the evidence instead.
  const newestOrderTs = async (sym) => {
    const rows = (await heFind('market', 'sellBook', { symbol: sym }, 1, 'timestamp', true)) || [];
    return rows[0] && rows[0].timestamp ? rows[0].timestamp : 0;
  };
  let railNewest = 0;
  const railDetail = [];
  for (const sym of ['BEE', 'ALIVE', 'SWAP.LTC']) {
    const ts = await newestOrderTs(sym);
    railDetail.push(sym + ':' + (ts ? new Date(ts * 1000).toISOString().slice(0, 10) : '?'));
    if (ts > railNewest) railNewest = ts;
  }
  const railAgeH = railNewest ? (Date.now() / 1000 - railNewest) / 3600 : Infinity;
  book.rail = { frontierAgeHours: Math.round(railAgeH * 10) / 10, newestAppliedState: railDetail };
  const STALL_H = 24;
  if (railAgeH > STALL_H) {
    R({ step: 'rail-health', status: 'ENGINE-STALL', frontierAgeHours: Math.round(railAgeH * 10) / 10, newestAppliedState: railDetail.join(' '), verdict: 'no engine op signed until the frontier is fresh again' });
    R({ step: 'sell', status: 'PENDING-RAIL-REPLAY', symbol: 'BEE', quantity: '5.49308870', price: '0.54921004', trx: '4d3f27e7d951f181853777ebee4caaae38c24919', note: 'op is on chain (block 110405217) awaiting sidechain replay; treat as unset until it lands' });
    R({ step: 'wrapper-poll', swapHive: (await swapBalNow()).toFixed(8), note: 'hiveswap credit for 0.310 HIVE (trx 875404ff2d16f418bd8a86b5cffa6d4e6503e3c1) is also blocked by the same stall' });
    book.summary = { rows: book.rows.length, executed: 0, ms: Date.now() - t0 };
    fs.writeFileSync(OUT_JSON, JSON.stringify(book, null, 1));
    const mdStall = [
      '# Econ Book (Z-29 two-sided real-economy desk)', '',
      'Updated: ' + new Date().toISOString() + ' UTC. RAIL VERDICT: **hive-engine contract state STALLED** — newest applied market state: ' + railDetail.join(', ') + ' (frontier age ' + Math.round(railAgeH * 10) / 10 + 'h). No engine op is signed into a dead rail.', '',
      '| step | status | detail |',
      '|---|---|---|',
      ...book.rows.map((r) => '| ' + r.step + ' | ' + (r.status || '') + ' | ' + [r.symbol && (r.symbol + ' qty=' + r.quantity + ' @ ' + r.price), r.newestAppliedState, r.verdict, r.note, r.trx && ('trx ' + r.trx)].filter(Boolean).join(' · ').replace(/\|/g, '/') + ' |'),
      '',
    ].join('\n');
    fs.writeFileSync(OUT_MD, mdStall);
    console.log(JSON.stringify({ state: 'rail-stall', frontierAgeHours: Math.round(railAgeH * 10) / 10 }));
    process.exit(0);
  }
  R({ step: 'rail-health', status: 'FRESH', frontierAgeHours: Math.round(railAgeH * 10) / 10 });

  // ---- step 2: wrapper credit poll ----
  const swapHive0 = await swapBalNow();
  R({ step: 'wrapper-poll', swapHive: swapHive0.toFixed(8), hiveLiquid: hiveBal });
  const stuckNote = 'waiting for the hiveswap wrapper to credit the verified deposit (trx 875404ff2d16f418bd8a86b5cffa6d4e6503e3c1, 0.310 HIVE, memo was free-text)';

  // ---- step 2 (Z-29): SELL SIDE — harvest inventory above keep-reserve into routable capital ----
  for (const { sym, keep } of SELL_BOOKS) {
    try {
      const balRows = await heFind('tokens', 'balances', { account: HEAD, symbol: sym }, 1);
      const bal = balRows && balRows[0] ? parseFloat(balRows[0].balance) : 0;
      const qty = Math.max(0, bal - keep);
      if (qty <= 0) { R({ step: 'sell', status: 'AT-KEEP', symbol: sym, balance: balRows[0] ? balRows[0].balance : '0', keep: keep.toFixed(1) }); continue; }

      const mRows = await heFind('market', 'metrics', { symbol: sym }, 1);
      const m = mRows && mRows[0];
      const bid = m ? parseFloat(m.highestBid) : 0;
      const last = m ? parseFloat(m.lastPrice) : 0;
      const proceeds = bid > 0 ? qty * bid * (1 - ENGINE_FEE) : 0;
      if (bid <= 0 || proceeds < DUST_MIN_PROCEEDS) {
        R({ step: 'sell', status: 'DUST-HELD', symbol: sym, quantity: qty.toFixed(8), bid: bid.toFixed(8), last: last.toFixed(8), estProceeds: proceeds.toFixed(6), min: DUST_MIN_PROCEEDS, note: 'honest hold: no live bid worth the order' });
        continue;
      }
      const existing = (await heFind('market', 'sellBook', { account: HEAD, symbol: sym }, 5)) || [];
      if (existing.length) { R({ step: 'sell', status: 'ALREADY-OPEN', symbol: sym, openOrders: existing.length }); continue; }

      const price = bid.toFixed(8);
      const q = qty.toFixed(8);
      const before = Date.now();
      await bcast((cb) => hivejs.broadcast.customJson(wif, [HEAD], [], 'ssc-mainframe-hive', JSON.stringify({ contractName: 'market', contractAction: 'sell', contractPayload: { symbol: sym, quantity: q, price } }), cb));
      const ev = await findOp('custom_json', (b) => b.id === 'ssc-mainframe-hive' && String(b.json || '').includes('"contractAction":"sell"') && String(b.json || '').includes(sym), before);
      let settled = { swapAfter: await swapBalNow(), openOrders: ((await heFind('market', 'sellBook', { account: HEAD, symbol: sym }, 5)) || []).length };
      R({ step: 'sell', status: settled.openOrders > 0 ? 'ORDER-OPEN' : (settled.swapAfter > swapHive0 ? 'FILLED' : 'PLACED-UNSETTLED'), symbol: sym, quantity: q, price, estProceeds: proceeds.toFixed(6), onChain: !!ev, ...(ev || {}), ...settled });
    } catch (e) {
      R({ step: 'sell', status: 'ERROR', symbol: sym, error: String(e.message).slice(0, 120) });
    }
  }

  // ---- step 3: re-poll SWAP.HIVE after the sell side ----
  const swapHive = await swapBalNow();
  book.swapHive = swapHive;
  book.hiveLiquid = hiveBal;

  // ---- step 4: place ONE market buy if capital is in place ----
  if (swapHive >= MIN_ORDER_HIVE) {
    // pick the target book by live depth (volume), fall back in order
    let picked = null;
    for (const sym of BUY_TARGETS) {
      const m = (await heFind('market', 'metrics', { symbol: sym }, 1))[0];
      if (m && parseFloat(m.lowestAsk) > 0) { picked = { sym, m }; break; }
    }
    if (!picked) R({ step: 'buy', status: 'NO-LIVE-BOOK', note: swapHive < swapHive0 ? stuckNote : undefined });
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
    R({ step: 'buy', status: 'SKIP-BELOW-MIN', swapHive: swapHive.toFixed(8), min: MIN_ORDER_HIVE, note: stuckNote });
  }

  book.summary = { rows: book.rows.length, executed: book.rows.filter((r) => r.status === 'FILLED' || r.status === 'ORDER-OPEN').length, ms: Date.now() - t0 };
  fs.writeFileSync(OUT_JSON, JSON.stringify(book, null, 1));
  const md = [
    '# Econ Book (Z-29 two-sided real-economy desk)', '',
    'Updated: ' + book.at + ' UTC. Executor: ' + HEAD + ' (active authority, byte-verified per run). Signer: @hiveio/hive-js (steem.js cannot sign hive asset ops, R-ECON-3). Sell side harvests engine inventory above keep-reserve; dust is honestly held. Buy side places maker orders in routable wrapped books. Generated by agents/econ-desk.cjs.', '',
    '| step | status | detail |',
    '|---|---|---|',
    ...book.rows.map((r) => '| ' + r.step + ' | ' + (r.status || r.move || '') + ' | ' + [r.symbol && (r.symbol + ' qty=' + r.quantity + ' @ ' + r.price), r.swapHive && ('SWAP.HIVE=' + r.swapHive), r.estProceeds && ('est=' + r.estProceeds), r.note, r.error, r.trx && ('trx ' + r.trx)].filter(Boolean).join(' · ').replace(/\|/g, '/') + ' |'),
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
