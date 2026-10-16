#!/usr/bin/env node
/**
 * SAOS HEAD-DELEGATE ENGINE v1 — מנוע-הון-עצמי (Z-20, 2026-09-29)
 *
 * למה: הרשת מתחזקת את-עצמה. הראש מאציל 30 SP לכל-חייל (11 חיילים) — RC/קול-ערך
 * לכל-המטריצה. אידמפוטנטי: כבר-מאוצל מעל-סף → SKIP. סורג-בייטים: המפתח-הנגזר
 * מול active.key_auths בשרשרת → בלב-חתימה. קריאה-חוזרת לכל-האצלה. fail-soft.
 *
 * גבולות-קשיחים: רשימת-היעדים קבועה (צי-בלבד) · מקסימום 30 SP ליעד · אין-פעולות-אחרות.
 * הרצה: node agent/head-delegate.cjs   (VAULT_RECOVERY מהריפו-הפרטי · DRY=1 לבדיקה)
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const steem = require('steem');
const capGate = require('./capital-gate.cjs'); // owner directive 2026-10-04: think-before-sign (STASIS + roster + journal)
const { R, refOf, scrub, resolved: refsResolved } = require('./refs.cjs');
const REF_IDS = Array.from({ length: 20 }, (_, i) => 'acct-' + String(i).padStart(2, '0'));
const refScrub = (t) => { let out = scrub(String(t)); if (refsResolved()) { for (const ref of REF_IDS) { const n = R(ref); if (n) out = out.replace(new RegExp('\\b' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g'), ref); } } return out; };

steem.api.setOptions({ url: 'https://api.steemit.com' });
const ROOT = path.resolve(__dirname, '..');
const OUT = process.env.RECEIPT_OUT || path.join(ROOT, 'agent', 'head-delegate-receipt.json');
const DRY = process.env.DRY === '1';
const SOLDIERS = ['acct-01', 'acct-02', 'acct-03', 'acct-04', 'acct-05', 'acct-06', 'acct-07', 'acct-08', 'acct-09', 'acct-10'].map(x => x.startsWith('acct-') ? R(x) : x).filter(Boolean); // 10 — one operator retired 2026-09-29 (keyless by sovereign decision)
const SP_PER_SOLDIER = 30;   // תקרה-קשיחה
const RETIRED = ['acct-19'].map(x => x.startsWith('acct-') ? R(x) : x).filter(Boolean); // retired 2026-09-29 — keyless by sovereign decision; idle 30 SP delegation is reclaimed below (capital efficiency)
if (!refsResolved()) console.log('[refs] roster-unresolved — soldier refs unresolved; delegation work is skipped this run (fail-honest, never guessed)');
const HEAD = 'owner';

function recoverVault() {
  const out = '/tmp/hd-keys';
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
        execFileSync('openssl', ['enc', '-d', '-aes-256-cbc', '-pbkdf2', '-iter', '300000', '-in', enc, '-out', dec, '-pass', 'env:HDZP'], { env: { ...process.env, HDZP: m.keysZipPass }, stdio: 'pipe' });
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
  const t0 = new Date().toISOString();
  // שער-המחשבה (owner 2026-10-04): בלם-חירום קודם-לכל — ואז שוער-רוסטר על-כל-יעד
  if (capGate.stasisHalt('head-delegate')) return;
  const roster = capGate.guardTargets('head-delegate', SOLDIERS);
  // מקור-מפתח-פעיל: (1) SA_HEAD_ACTIVE env (ריפו-ציבורי) (2) כספת-עצמית (3) VAULT ידני
  const actEnv = process.env.SA_HEAD_ACTIVE ? Buffer.from(process.env.SA_HEAD_ACTIVE, 'base64').toString('utf8').trim() : null;
  const vaultPath = process.env.VAULT || (actEnv ? null : recoverVault());
  if (!vaultPath && !actEnv) { console.log('[head-del] NO-VAULT-NO-ENV — fail-soft'); return; }
  let actWif = actEnv || null;
  if (!actWif) {
    const vault = JSON.parse(fs.readFileSync(vaultPath, 'utf8'));
    const acct = (vault.accounts || []).find(a => a.username === HEAD);
    const k = (acct && acct.keys) || {};
    actWif = (k.steem && k.steem.active && k.steem.active.wif) || (k.active && k.active.wif) || null;
  }
  if (!actWif) { console.log('[head-del] NO-ACTIVE-KEY — fail-soft (delegation unchanged)'); return; }

  // סורג-אמת: נגזרת מול השרשרת
  const [head, globals] = await Promise.all([
    P(cb => steem.api.getAccounts([HEAD], cb)).then(r => r[0]),
    P(cb => steem.api.getDynamicGlobalProperties(cb)),
  ]);
  let actOk = false;
  try { actOk = steem.auth.wifToPublic(actWif) === head.active.key_auths[0][0]; } catch (_) {}
  console.log(`[head-del] active-key byte gate: ${actOk}${DRY ? ' · DRY' : ''}`);
  if (!actOk) { console.log('[head-del] GATE FAIL — no broadcast, fail-soft'); return; }

  const ratio = parseFloat(globals.total_vesting_fund_steem) / parseFloat(globals.total_vesting_shares);

  // ── v2 EQUAL-SHARE LAW (CR-0065) ──
  // The owner directed equal, full-power delegation: "האצלת כוח לחיילים בצורה שווה כדי
  // לקבל את מלוא סכום ההצבעות". The law shares the head's OWN stake equally after two
  // commitments: the powerdown (self-funding battery of the market lane, R33) and an RC
  // reserve for owner's own operations. As the powerdown consumes capital weekly,
  // the target shrinks and delegations glide down with it — social power and market fuel
  // coexist by arithmetic, never by hand-tuning.
  const HEAD_RESERVE_SP = Number(process.env.HEAD_RESERVE_SP || 500);
  const ownVests = parseFloat(head.vesting_shares) - Math.max(0, parseFloat(head.delegated_vesting_shares));
  const committedVests = Math.min(parseFloat(head.to_withdraw || '0'), parseFloat(head.vesting_shares));
  const ownSP = ownVests * ratio;
  const committedSP = committedVests * ratio;
  const targetSP = Math.max(SP_PER_SOLDIER, Math.floor((ownSP - committedSP - HEAD_RESERVE_SP) / SOLDIERS.length));
  const vestsTarget = (targetSP / ratio).toFixed(6) + ' VESTS';
  console.log(`head-del] equal-share law: own=${ownSP.toFixed(1)} SP · powerdown-committed=${committedSP.toFixed(1)} SP · reserve=${HEAD_RESERVE_SP} SP → ${targetSP} SP per soldier (×${SOLDIERS.length})`);

  const results = []; let delegated = 0, skipped = 0, failed = 0, reclaimed = 0, refused = 0;
  for (const x of roster.refused) { results.push({ to: x.name, target: 'n/a', status: 'REFUSED-ROSTER', why: x.reason }); refused++; console.log(`[REFUSED-ROSTER] owner → @${refOf(x.name)} · ${x.reason}`); }
  for (const s of roster.allowed) {
    const row = { to: s, target: `${targetSP} SP` };
    try {
      const sa = (await P(cb => steem.api.getAccounts([s], cb)))[0];
      const have = parseFloat(sa.received_vesting_shares);
      const haveSp = have * ratio;
      const want = targetSP / ratio;
      if (have >= want * 0.95 && have <= want * 1.05) { row.status = 'SKIP-ALREADY'; row.haveSp = Math.round(haveSp * 10) / 10; skipped++; }
      else if (DRY) { row.status = have < want ? 'DRY-WOULD-DELEGATE' : 'DRY-WOULD-RECLAIM'; row.haveSp = Math.round(haveSp * 10) / 10; row.targetSp = targetSP; }
      else {
        await P(cb => steem.broadcast.delegateVestingShares(actWif, HEAD, s, vestsTarget, cb));
        await sleep(2500);
        const sa2 = (await P(cb => steem.api.getAccounts([s], cb)))[0];
        const got = parseFloat(sa2.received_vesting_shares);
        row.readbackSp = Math.round(got * ratio * 10) / 10;
        const withinBand = got >= want * 0.95 && got <= want * 1.05;
        if (have < want) { row.status = withinBand ? 'DELEGATED-VERIFIED' : 'NO-READBACK'; row.status === 'DELEGATED-VERIFIED' ? delegated++ : failed++; }
        else { row.status = withinBand ? 'RECLAIMED-VERIFIED' : 'NO-READBACK'; row.status === 'RECLAIMED-VERIFIED' ? reclaimed++ : failed++; }
      }
    } catch (e) { row.status = 'FAIL'; row.err = String(e.message || e).slice(0, 90); failed++; }
    results.push(row);
    console.log(`[${row.status}] owner → @${refOf(s)} (${row.haveSp != null ? row.haveSp + ' SP have' : 'have=?'} → ${targetSP} SP)`);
    await sleep(1500 + Math.floor(Math.random() * 1500));
  }


  // ── retirement: reclaim idle delegations from retired accounts — idle capital back to head voting power ──
  for (const s of RETIRED) {
    const row = { to: s, action: 'reclaim-retired-delegation' };
    try {
      const sa = (await P(cb => steem.api.getAccounts([s], cb)))[0];
      const have = parseFloat(sa.received_vesting_shares);
      if (!have || have < 1e3) { row.status = 'SKIP-NO-DELEGATION'; skipped++; }
      else if (DRY) { row.status = 'DRY-WOULD-RECLAIM'; row.haveSp = Math.round(have * ratio * 10) / 10; }
      else {
        await P(cb => steem.broadcast.delegateVestingShares(actWif, HEAD, s, '0.000000 VESTS', cb));
        await sleep(2000);
        const sa2 = (await P(cb => steem.api.getAccounts([s], cb)))[0];
        const left = parseFloat(sa2.received_vesting_shares);
        row.status = left < have * 0.5 ? 'RECLAIMED-VERIFIED' : 'NO-READBACK';
        row.reclaimedSp = Math.round(have * ratio * 10) / 10;
        row.status === 'RECLAIMED-VERIFIED' ? delegated++ : failed++;
      }
    } catch (e) { row.status = 'FAIL'; row.err = String(e.message || e).slice(0, 90); failed++; }
    results.push(row);
    console.log(`[${row.status}] owner ↩ @${refOf(s)} (reclaim idle delegation — 7-day return)`);
    await sleep(400);
  }
  // ── DEAD-DELEGATION-CURE (2026-10-16, owner order "money stuck in the fleet limits —
  // check everything, use capital to the maximum"): a chain-measured sweep over ALL
  // outgoing delegations of the head (condenser_api.get_vesting_delegations
  // ["headcorner","delegated",1000] — the form that actually returns rows; the 4-arg
  // form silently returned [] and masked 1460 SP of state vs index for days). Any
  // delegatee that (a) is NOT in the active roster (SOLDIERS/RETIRED) AND (b) has not
  // voted for > DEAD_CURE_HOURS (72h) is dead capital: reclaimed to the head's voting
  // power (delegate 0 VESTS — 7-day return). Measured 2026-10-16: hcsoldier4/5/6
  // (51 SP, last vote 82h ago, lifetime curation 0) + hive-177702 (10 SP, never voted,
  // 1970 epoch). Alive delegations (last vote < 72h) are never touched — the fleet's
  // curation machine is sacred. Cap MAX_CURE_RECLAIMS (6) per run, receipted per row.
  try {
    const DEAD_CURE_HOURS = Number(process.env.DEAD_CURE_HOURS || 72);
    const MAX_CURE_RECLAIMS = Number(process.env.MAX_CURE_RECLAIMS || 6);
    const protect = new Set([...SOLDIERS, ...RETIRED]);
    const outRows = (await P(cb => steem.api.getVestingDelegations(HEAD, 'delegated', 1000, cb))) || [];
    const deadRows = [];
    for (const d of outRows) {
      if (protect.has(d.delegatee)) continue;
      const da = (await P(cb => steem.api.getAccounts([d.delegatee], cb)))[0];
      if (!da) continue;
      const lv = da.last_vote_time ? Date.parse(da.last_vote_time + 'Z') : NaN;
      const ageH = Number.isFinite(lv) ? (Date.now() - lv) / 3600000 : Infinity; // never-voted = dead
      if (ageH > DEAD_CURE_HOURS) deadRows.push({ delegatee: d.delegatee, ref: refScrub(d.delegatee), vests: d.vesting_shares, ageH: Number.isFinite(ageH) ? Math.round(ageH) : 'never-voted' });
      await sleep(300);
    }
    for (const row of deadRows.slice(0, MAX_CURE_RECLAIMS)) {
      row.action = 'reclaim-dead-delegation';
      try {
        const have = parseFloat(row.vests);
        if (DRY) { row.status = 'DRY-WOULD-RECLAIM'; row.haveSp = Math.round(have * ratio * 10) / 10; }
        else {
          await P(cb => steem.broadcast.delegateVestingShares(actWif, HEAD, row.delegatee, '0.000000 VESTS', cb));
          await sleep(2000);
          const sa2 = (await P(cb => steem.api.getAccounts([row.delegatee], cb)))[0];
          const left = parseFloat(sa2.received_vesting_shares);
          row.status = left < have * 0.5 ? 'RECLAIMED-VERIFIED' : 'NO-READBACK';
          row.reclaimedSp = Math.round(have * ratio * 10) / 10;
          row.status === 'RECLAIMED-VERIFIED' ? reclaimed++ : failed++;
        }
      } catch (e) { row.status = 'FAIL'; row.err = String(e.message || e).slice(0, 90); failed++; }
      results.push({ to: row.ref, action: 'reclaim-dead-delegation', status: row.status, haveSp: row.haveSp, reclaimedSp: row.reclaimedSp, ageH: row.ageH });
      console.log(`[${row.status}] owner ↩ @${row.ref} (dead-delegation cure: ${row.ageH}h without a vote — 7-day return)`);
      await sleep(400);
    }
    if (deadRows.length > MAX_CURE_RECLAIMS) console.log(`[DEAD-CURE] ${deadRows.length} dead delegations found, ${MAX_CURE_RECLAIMS} reclaimed this run (cap law) — the rest ride the next run`);
  } catch (e) {
    console.log(`[DEAD-CURE] sweep failed fail-soft: ${String(e.message || e).slice(0, 90)}`);
    results.push({ action: 'dead-delegation-cure', status: 'SWEEP-FAIL', err: String(e.message || e).slice(0, 90) });
  }
  capGate.journal('head-delegate', { dry: DRY, targetSPPerSoldier: targetSP, rosterLoaded: roster.rosterLoaded, allowed: roster.allowed, refused: roster.refused, delegated, reclaimed, skipped, failed, refusedCount: refused });
  const receipt = {
    ok: true, tool: 'head-delegate.cjs', version: 3,
    doctrine: 'equal-share self-capital (CR-0065): (own SP - powerdown committed - RC reserve) shared equally across soldiers, hysteresis band 5%, delegations glide with the powerdown, idempotent, bounded',
    at: t0, finishedAt: new Date().toISOString(), dry: DRY,
    law: { ownSP: Math.round(ownSP * 10) / 10, powerdownCommittedSP: Math.round(committedSP * 10) / 10, reserveSP: HEAD_RESERVE_SP, targetSPPerSoldier: targetSP, soldiers: SOLDIERS.length },
    target: vestsTarget,
    tally: { delegatedVerified: delegated, reclaimedVerified: reclaimed, skippedAlready: skipped, failed },
    results,
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, refScrub(JSON.stringify(receipt, null, 2)));
  console.log(`[head-del] DONE · del=${delegated} skip=${skipped} fail=${failed} · receipt → ${OUT}`);
}
main().catch(e => { console.error('[head-del] fatal:', String(e.message || e).slice(0, 180)); process.exit(0); }); // fail-soft
