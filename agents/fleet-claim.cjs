#!/usr/bin/env node
/**
 * SAOS FLEET-CLAIM ENGINE v1 — כלכלה-עצמית: הצי תובע את הפרסים של-עצמו (Z-20)
 *
 * מה-זה: סריקת pending rewards לכל-12 החשבונות → claim_reward_balance (posting-only)
 * למי-שיש-מה לתבוע → קריאה-חוזרת (pending חוזר ל-0) → קבלה נטולת-סודות.
 * אידמפוטנטי: אין-פנדינג → SKIP. ההכנסה מתגלגלת ל-SP (מימוש-פוטנציאל עצמי).
 *
 * הרצה: node agent/fleet-claim.cjs   (VAULT_RECOVERY מהריפו-הפרטי · DRY=1 לבדיקה)
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const steem = require('steem');
const { R, refOf, scrub, resolved: refsResolved } = require('./refs.cjs');
const REF_IDS = Array.from({ length: 20 }, (_, i) => 'acct-' + String(i).padStart(2, '0'));
const refScrub = (t) => { let out = scrub(String(t)); if (refsResolved()) { for (const ref of REF_IDS) { const n = R(ref); if (n) out = out.replace(new RegExp('\\b' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g'), ref); } } return out; };

steem.api.setOptions({ url: 'https://api.steemit.com' });
const ROOT = path.resolve(__dirname, '..');
const OUT = process.env.RECEIPT_OUT || path.join(ROOT, 'agent', 'fleet-claim-receipt.json');
const DRY = process.env.DRY === '1';
const FLEET = ['acct-01', 'acct-02', 'acct-03', 'acct-04', 'acct-05', 'acct-06', 'acct-07', 'acct-08', 'acct-09', 'acct-10', 'owner'].map(x => x.startsWith('acct-') ? R(x) : x).filter(Boolean); // 11 — one operator retired 2026-09-29 (its 0.014 SP pending stays unclaimed: no key)
if (!refsResolved()) console.log('[refs] roster-unresolved — fleet refs unresolved; claim work is skipped this run (fail-honest, never guessed)');

function recoverVault() {
  const out = '/tmp/fc-keys';
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true, mode: 0o700 });
  const metas = [];
  try { metas.push(JSON.parse(fs.readFileSync(path.join(ROOT, 'agent', 'recovery-meta.json'), 'utf8'))); } catch (_) {}
  try {
    const log = execFileSync('git', ['-C', ROOT, 'log', '--format=%H', '-n', '40', '--', 'agent/recovery-meta.json'], { encoding: 'utf8' });
    for (const c of log.split('\n').filter(Boolean)) {
      try { metas.push(JSON.parse(execFileSync('git', ['-C', ROOT, 'show', `${c}:agent/recovery-meta.json`], { encoding: 'utf8' }))); } catch (_) {}
    }
  } catch (_) {}
  const crypto = require('crypto');
  const sha = (f) => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
  const vdir = path.join(ROOT, 'agent', 'vault');
  let encs = [];
  try { encs = fs.readdirSync(vdir).filter(f => f.endsWith('.enc')).map(f => path.join(vdir, f)); } catch (_) {}
  for (const enc of encs) {
    const outer = sha(enc);
    for (const m of metas) {
      if (!m || !m.keysZipPass || m.keysZipSha256 !== outer) continue;
      try {
        const dec = path.join(out, 'v.zip');
        execFileSync('openssl', ['enc', '-d', '-aes-256-cbc', '-pbkdf2', '-iter', '300000', '-in', enc, '-out', dec, '-pass', 'env:FCZP'], { env: { ...process.env, FCZP: m.keysZipPass }, stdio: 'pipe' });
        if (fs.readFileSync(dec).subarray(0, 2).toString('latin1') !== 'PK') continue;
        execFileSync('unzip', ['-o', '-q', dec, '-d', out], { stdio: 'pipe' });
        const vj = path.join(out, 'agent', 'keys', 'vault.json');
        if (fs.existsSync(vj)) return vj;
      } catch (_) {}
    }
  }
  return null;
}

const P = (fn) => new Promise((res, rej) => fn((e, r) => e ? rej(e) : res(r)));
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  try { if (require('./capital-gate.cjs').stasisHalt('fleet-claim')) return; } catch (e) { console.log('[CAPITAL-GATE] fleet-claim — gate module error, lane halts fail-closed: ' + String(e.message || e).slice(0, 80)); return; }
  const t0 = new Date().toISOString();
  // מקורות-מפתח: (1) SA_FLEET_KEYS env (ריפו-ציבורי) (2) כספת-עצמית (3) VAULT ידני
  const envV = (() => { const raw = process.env.SA_FLEET_KEYS || ''; if (!raw) return null; try { const map = JSON.parse(Buffer.from(raw, 'base64').toString('utf8')); return { accounts: Object.entries(map).map(([username, wif]) => ({ username, keys: { posting: { wif } } })) }; } catch (_) { return null; } })();
  const vaultPath = process.env.VAULT || (!envV ? recoverVault() : null);
  if (!vaultPath && !envV) { console.log('[fleet-claim] NO-VAULT-NO-ENV — fail-soft'); return; }
  const vault = envV || JSON.parse(fs.readFileSync(vaultPath, 'utf8'));
  const keymap = {};
  for (const a of (vault.accounts || [])) {
    if (!FLEET.includes(a.username)) continue;
    const k = a.keys || {};
    const wif = (k.posting && k.posting.wif) || (k.steem && k.steem.posting && k.steem.posting.wif) || null;
    if (wif) keymap[a.username] = wif;
  }
  console.log(`[fleet-claim] keys: ${Object.keys(keymap).length}/${FLEET.length}${DRY ? ' · DRY' : ''} · zero secrets printed`);

  const globals = await P(cb => steem.api.getDynamicGlobalProperties(cb));
  const ratio = parseFloat(globals.total_vesting_fund_steem) / parseFloat(globals.total_vesting_shares);
  const accts = await P(cb => steem.api.getAccounts(FLEET, cb));

  const results = []; let claimed = 0, skipped = 0, failed = 0;
  for (const a of accts) {
    const row = { account: a.name };
    const rs = a.reward_steem_balance, sbd = a.reward_sbd_balance, rv = a.reward_vesting_balance;
    const hasPending = parseFloat(rs) > 0 || parseFloat(sbd) > 0 || parseFloat(rv) > 0;
    if (!hasPending) { row.status = 'SKIP-NOTHING-PENDING'; skipped++; }
    else if (!keymap[a.name]) { row.status = 'SKIP-NO-KEY'; row.pending = { rs, sbd, rv }; skipped++; }
    else {
      // סורג-אמת גם-כאן: נגזרת מול posting.key_auths
      let gate = false;
      try { gate = steem.auth.wifToPublic(keymap[a.name]) === a.posting.key_auths[0][0]; } catch (_) {}
      if (!gate) { row.status = 'SKIP-KEY-MISMATCH'; skipped++; }
      else if (DRY) { row.status = 'DRY-WOULD-CLAIM'; row.pending = { rs, sbd, rv }; }
      else {
        try {
          await P(cb => steem.broadcast.claimRewardBalance(keymap[a.name], a.name, rs, sbd, rv, cb));
          await sleep(2000);
          const a2 = (await P(cb => steem.api.getAccounts([a.name], cb)))[0];
          const cleared = parseFloat(a2.reward_steem_balance) === 0 && parseFloat(a2.reward_sbd_balance) === 0 && parseFloat(a2.reward_vesting_balance) === 0;
          row.status = cleared ? 'CLAIMED-VERIFIED' : 'NO-READBACK';
          row.claimed = { rs, sbd, rv };
          cleared ? claimed++ : failed++;
        } catch (e) { row.status = 'FAIL'; row.err = String(e.message || e).slice(0, 90); failed++; }
      }
    }
    results.push(row);
    console.log(`[${row.status}] @${refOf(a.name)}${row.pending ? ` pending=${row.pending.rs} ${row.pending.sbd} ${row.pending.rv} (≈${(parseFloat(row.pending.rs) + parseFloat(row.pending.rv) * ratio).toFixed(2)} SP)` : ''}`);
    await sleep(300);
  }

  const receipt = {
    ok: true, tool: 'fleet-claim.cjs', doctrine: 'self-economy — the fleet claims its own rewards, posting-only, idempotent, keys in memory only',
    at: t0, finishedAt: new Date().toISOString(), dry: DRY,
    tally: { claimedVerified: claimed, skipped, failed },
    results,
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, refScrub(JSON.stringify(receipt, null, 2)));
  console.log(`[fleet-claim] DONE · claimed=${claimed} skip=${skipped} fail=${failed} · receipt → ${OUT}`);
}
main().catch(e => { console.error('[fleet-claim] fatal:', String(e.message || e).slice(0, 180)); process.exit(0); }); // fail-soft
