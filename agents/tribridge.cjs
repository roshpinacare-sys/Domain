'use strict';
/**
 * tribridge.cjs — CROSS-CHAIN CONTENT ACTIVATION (Z-23, 2026-09-30).
 *
 * האמת-המיושמת כאן: הצי מחזיק מפתחות-posting חיים על שלוש שרשראות (steem+hive+blurt)
 * ואילו תוכן פורסם רק על steem. הסוכן הזה סוגר את הפער: כל-פוסט-חייל-יומי מופץ
 * ל-hive (חינם, RC) ול-blurt (עמלה ~0.3 BLURT, מוזנת מקופת-הראש בתקרה-קשוחה).
 *
 * דוקטרינה:
 *  - verify-then-sign: קריאה-חוזרת בייטים אחרי כל שידור; בלי קריאה-חוזרת = לא "verified".
 *  - אידמפוטנציה: get_content קודם — קיים = ALREADY (אין כפילויות לעולם).
 *  - fail-soft: הסוכן לעולם לא יוצא בשגיאה שמפילה את הרכבת (exit 0 תמיד).
 *  - אפס-סודות-בפלט/בקבלות. מפתחות מ-SA_FLEET_KEYS (אותו-סוד של שאר-הצי).
 *  - מפתחות-hive/blurt = אותם-WIFs-של-steem (אומתו-בייטים מול key_auths 2026-09-30:
 *    hive 9/10 חיילים · blurt 10/10; tov לא-נמצא-ב-hive ומדולג-בכנות).
 *  - blurt: סבב-שלישי (כל-חייל כל-3-ימים) כדי-שקופת-הדלק-של-הראש (88 BLURT) תספיק
 *    לחודשים-קדימה; מסב-דלק אוטומטי מהראש בתקרה-קשוחה לכל-ריצה.
 */
const steem = require('steem');
const https = require('https');
const fs = require('fs');
const path = require('path');

steem.api.setOptions({ url: 'https://api.steemit.com' });
const ROOT = path.resolve(__dirname, '..');
const OUT = process.env.RECEIPT_OUT || path.join(ROOT, 'agents', 'receipts', 'tribridge-receipt.json');

const STEEM_NODE = 'https://api.steemit.com';
const HIVE_NODES = ['https://api.hive.blog', 'https://hive-api.arcange.eu'];
const BLURT_NODES = ['https://rpc.beblurt.com'];
const HIVE_CHAIN_ID = 'beeab0de00000000000000000000000000000000000000000000000000000000';
const BLURT_CHAIN_ID = 'cd8d90f29ae273abec3eaa7731e25934c63eb654d55080caff2ebb7f5df6381f';
const HIVE_RC_GATE = 15;          // percent
const BLURT_MIN_FUEL = 0.5;       // BLURT liquid needed to attempt a post
const BLURT_FUEL_TOPUP = 1.5;     // BLURT per topup transfer
const BLURT_FUEL_RUN_CAP = 3.0;   // max total topups per run (protect the head fund)
const BLURT_HEAD_FUND_FLOOR = 70; // never drain the head fund below this
const BLURT_CADENCE_DAYS = 3;
const HIVE_OK = new Set(['cashmachine', 'haran', 'israelnews', 'lsa', 'macrame', 'siq', 'wic', 'wog', 'woq']);
const RETIRED = new Set(['ynet']); // operator decision 2026-09-30 — no key, retired
const HEAD = 'headcorner';

function rpcNode(node, method, params, timeout = 20000) {
  const payload = JSON.stringify({ jsonrpc: '2.0', method, params, id: 1 });
  const u = new URL(node);
  return new Promise((resolve, reject) => {
    const req = https.request({ hostname: u.hostname, path: u.pathname || '/', method: 'POST', family: 4, headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }, timeout }, (res) => {
      let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => {
        try { const j = JSON.parse(d); if (j.error) return reject(new Error(j.error.message || 'rpc-error')); resolve(j.result); }
        catch (_) { reject(new Error('bad-rpc ' + String(d).slice(0, 60))); }
      });
    });
    req.on('timeout', () => req.destroy(new Error('timeout'))); req.on('error', reject);
    req.write(payload); req.end();
  });
}
const rcPctOf = (row) => { try { return (parseFloat(row.rc_manabar.current_mana) / parseFloat(row.max_rc)) * 100; } catch (_) { return 0; } };
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function loadKeys() {
  const raw = process.env.SA_FLEET_KEYS || '';
  if (!raw) return null;
  try {
    const map = JSON.parse(Buffer.from(raw, 'base64').toString('utf8'));
    return Object.entries(map).map(([username, wif]) => ({ username, posting: wif }));
  } catch (_) { return null; }
}

function loadHeadActive() {
  const raw = process.env.SA_HEAD_ACTIVE || '';
  if (!raw) return null;
  let dec = raw;
  try { dec = Buffer.from(raw, 'base64').toString('utf8').trim(); } catch (_) {}
  if (dec.startsWith('{')) { try { return JSON.parse(dec).wif || null; } catch (_) {} }
  if (/^[1-9A-HJ-NP-Za-km-z]{51,52}$/.test(dec)) return dec; // plain WIF (base64-decoded)
  try { return JSON.parse(raw).wif || null; } catch (_) { return null; }
}

async function getContent(node, author, permlink) {
  try {
    const r = await rpcNode(node, 'condenser_api.get_content', [author, permlink]);
    return r && r.author ? r : null;
  } catch (_) { return null; }
}

async function signAndBroadcast({ node, chainId, wif, ops }) {
  const dgp = await rpcNode(node, 'condenser_api.get_dynamic_global_properties', []);
  const tx = {
    ref_block_num: dgp.head_block_number & 0xffff,
    ref_block_prefix: Buffer.from(dgp.head_block_id, 'hex').readUInt32LE(4),
    expiration: new Date(new Date(dgp.time + 'Z').getTime() + 90000).toISOString().slice(0, 19),
    operations: ops, extensions: [],
  };
  const prev = steem.config.get('chain_id');
  let signed;
  try { steem.config.set('chain_id', chainId); signed = steem.auth.signTransaction(tx, [wif]); }
  finally { steem.config.set('chain_id', prev); }
  await rpcNode(node, 'condenser_api.broadcast_transaction', [signed]);
}

function crossBody(content, who, permlink) {
  return content.body + '\n\n> Cross-posted from Steem: https://steemit.com/@' + who + '/' + permlink;
}

async function publishCross({ who, wif, node, chainId, content, permlink }) {
  let meta = {};
  try { meta = JSON.parse(content.json_metadata || '{}'); } catch (_) {}
  const tags = Array.isArray(meta.tags) && meta.tags.length ? meta.tags.slice(0, 5) : ['blog'];
  const body = crossBody(content, who, permlink);
  const op = ['comment', {
    parent_author: '', parent_permlink: tags[0],
    author: who, permlink, title: content.title || ('SAOS update ' + permlink),
    body, json_metadata: JSON.stringify({ tags, app: 'saos-tribridge/1', crosspost: { from: 'steem', author: who, permlink } }),
  }];
  await signAndBroadcast({ node, chainId, wif, ops: [op] });
  await sleep(2500);
  const back = await getContent(node, who, permlink);
  if (back && back.body && back.body.slice(0, 120) === body.slice(0, 120)) return { state: 'PUBLISHED-VERIFIED' };
  if (back) return { state: 'PUBLISHED-BODY-MISMATCH' };
  return { state: 'PUBLISHED-READBACK-PENDING' };
}

(async () => {
  const t0 = Date.now();
  const now = new Date();
  const ymd = now.toISOString().slice(0, 10).replace(/-/g, '');
  const receipt = { at: now.toISOString(), agent: 'tribridge', chains: ['hive', 'blurt'], results: [], fuel: [], summary: {} };

  const keys = loadKeys();
  if (!keys) { receipt.error = 'SA_FLEET_KEYS missing/unparseable — nothing signed'; fs.mkdirSync(path.dirname(OUT), { recursive: true }); fs.writeFileSync(OUT, JSON.stringify(receipt, null, 1)); console.log(JSON.stringify({ state: 'no-keys' })); process.exit(0); }

  const roster = keys.filter(k => !RETIRED.has(k.username) && k.username !== HEAD && /^[a-z0-9-]{3,16}$/.test(k.username));
  receipt.roster = roster.map(r => r.username);

  for (const { username: who, posting: wif } of roster) {
    const permlink = 'saos-' + who + '-' + ymd;
    // source of truth: today's steem post (canonical home of content)
    let src = await getContent(STEEM_NODE, who, permlink);
    if (!src || !src.body) { receipt.results.push({ who, op: 'SKIP-NO-SOURCE', note: 'no steem post today' }); continue; }

    // ---- HIVE ----
    if (!HIVE_OK.has(who)) {
      receipt.results.push({ who, chain: 'hive', op: 'SKIP-KEY-UNVERIFIED', note: 'posting authority not ours (byte-verified 09-30)' });
    } else {
      try {
        const rcRow = (await rpcNode(HIVE_NODES[0], 'rc_api.find_rc_accounts', { accounts: [who] })).rc_accounts[0];
        const rc = rcPctOf(rcRow);
        if (rc < HIVE_RC_GATE) {
          receipt.results.push({ who, chain: 'hive', op: 'SKIP-RC-GATE', rcPct: Math.round(rc * 10) / 10 });
        } else {
          const existing = await getContent(HIVE_NODES[0], who, permlink);
          if (existing) receipt.results.push({ who, chain: 'hive', op: 'ALREADY' });
          else {
            const r = await publishCross({ who, wif, node: HIVE_NODES[0], chainId: HIVE_CHAIN_ID, content: src, permlink });
            receipt.results.push({ who, chain: 'hive', op: r.state });
          }
        }
      } catch (e) { receipt.results.push({ who, chain: 'hive', op: 'ERR', msg: String(e.message || e).slice(0, 100) }); }
    }

    // ---- BLURT (cadence: every 3rd day per soldier) ----
    const dayIdx = Math.floor(now.getTime() / 86400000);
    const dueToday = (dayIdx + roster.findIndex(r => r.username === who)) % BLURT_CADENCE_DAYS === 0;
    if (!dueToday) {
      receipt.results.push({ who, chain: 'blurt', op: 'SKIP-CADENCE', note: '1-in-3 rotation (fuel economy)' });
    } else {
      try {
        const acc = (await rpcNode(BLURT_NODES[0], 'condenser_api.get_accounts', [[who]]))[0];
        const bal = parseFloat(acc.balance);
        if (bal < BLURT_MIN_FUEL) receipt.results.push({ who, chain: 'blurt', op: 'SKIP-NO-FUEL', bal });
        else {
          const existing = await getContent(BLURT_NODES[0], who, permlink);
          if (existing) receipt.results.push({ who, chain: 'blurt', op: 'ALREADY' });
          else {
            const r = await publishCross({ who, wif, node: BLURT_NODES[0], chainId: BLURT_CHAIN_ID, content: src, permlink });
            receipt.results.push({ who, chain: 'blurt', op: r.state });
          }
        }
      } catch (e) { receipt.results.push({ who, chain: 'blurt', op: 'ERR', msg: String(e.message || e).slice(0, 100) }); }
    }
  }

  // ---- FUEL MAINTENANCE (head funds blurt posting, bounded, idempotent) ----
  const headWif = loadHeadActive();
  if (headWif) {
    try {
      const headAcc = (await rpcNode(BLURT_NODES[0], 'condenser_api.get_accounts', [[HEAD]]))[0];
      const headBal = parseFloat(headAcc.balance);
      let spent = 0;
      if (headBal - BLURT_FUEL_RUN_CAP >= BLURT_HEAD_FUND_FLOOR) {
        for (const { username: who } of roster) {
          if (spent + BLURT_FUEL_TOPUP > BLURT_FUEL_RUN_CAP) break;
          const acc = (await rpcNode(BLURT_NODES[0], 'condenser_api.get_accounts', [[who]]))[0];
          if (parseFloat(acc.balance) >= BLURT_MIN_FUEL) continue;
          const dgp = await rpcNode(BLURT_NODES[0], 'condenser_api.get_dynamic_global_properties', []);
          const op = ['transfer', { from: HEAD, to: who, amount: BLURT_FUEL_TOPUP.toFixed(3) + ' BLURT', memo: 'saos tri-bridge posting fuel' }];
          const tx = {
            ref_block_num: dgp.head_block_number & 0xffff,
            ref_block_prefix: Buffer.from(dgp.head_block_id, 'hex').readUInt32LE(4),
            expiration: new Date(new Date(dgp.time + 'Z').getTime() + 90000).toISOString().slice(0, 19),
            operations: [op], extensions: [],
          };
          const prev = steem.config.get('chain_id');
          let signed;
          try { steem.config.set('chain_id', BLURT_CHAIN_ID); signed = steem.auth.signTransaction(tx, [headWif]); }
          finally { steem.config.set('chain_id', prev); }
          await rpcNode(BLURT_NODES[0], 'condenser_api.broadcast_transaction', [signed]);
          spent += BLURT_FUEL_TOPUP;
          receipt.fuel.push({ from: HEAD, to: who, amount: BLURT_FUEL_TOPUP, op: 'TRANSFER-BROADCAST' });
          await sleep(1500);
        }
      } else {
        receipt.fuel.push({ op: 'SKIP-FUND-FLOOR', headBal, floor: BLURT_HEAD_FUND_FLOOR });
      }
    } catch (e) { receipt.fuel.push({ op: 'ERR', msg: String(e.message || e).slice(0, 100) }); }
  } else {
    receipt.fuel.push({ op: 'SKIP-NO-HEAD-ACTIVE', note: 'SA_HEAD_ACTIVE absent — no fuel maintenance' });
  }

  // ---- summary (integer-only tallies) ----
  const tally = {};
  for (const r of receipt.results) tally[r.op || 'UNKNOWN'] = (tally[r.op || 'UNKNOWN'] || 0) + 1;
  receipt.summary = { tally, fuelTransfers: receipt.fuel.filter(f => f.op === 'TRANSFER-BROADCAST').length, ms: Date.now() - t0 };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(receipt, null, 1));
  console.log(JSON.stringify({ state: 'ok', summary: receipt.summary }));
  process.exit(0); // fail-soft: always green for the train
})().catch(e => {
  try {
    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    fs.writeFileSync(OUT, JSON.stringify({ at: new Date().toISOString(), agent: 'tribridge', fatal: String(e.message || e).slice(0, 200) }, null, 1));
  } catch (_) {}
  console.log(JSON.stringify({ state: 'fail-soft', msg: String(e.message || e).slice(0, 160) }));
  process.exit(0);
});
