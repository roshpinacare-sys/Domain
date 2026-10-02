#!/usr/bin/env node
/**
 * economy-engine.mjs — Task 15-c: the autonomous daily economy engine (steem curation leg).
 *
 * Owner directive: "the simulated economy must become REAL step by step — many more trades,
 * many ways to inject liquidity, the network devices must run sovereign/autonomous/AUTOMATIC".
 *
 * This script is the daily autonomous engine. It runs inside a GitHub Actions runner (public
 * Domain repo workflow `economy-engine.yml`) that ALSO holds a private checkout of the `steem`
 * repo — the ONLY place key material lives (sealed custody). Nothing secret ever reaches Domain.
 *
 * Pipeline (fail-honest at every step — a failure exits nonzero so the workflow goes red):
 *   (a) read fleet truth from the private steem checkout (agent/lib/fleet-roster.cjs)
 *   (b) open the key seal IN-RUNNER per keys_zip_v2.cjs doctrine (AES-256-CBC, pbkdf2-300k,
 *       passphrase from committed custody metadata agent/recovery-meta.json — the passphrase is
 *       itself committed IN THE PRIVATE REPO by design: "זה אצלך בקבצים לא אצלי" Task 117p8).
 *       Sha gates: outer == keysZipSha256, inner == keysZipInnerSha256.
 *   (c) verify every account's posting authority LIVE against the chain before any broadcast
 *   (d) deterministically pick up to N quality candidate posts (niche allowlist, min length,
 *       likes/comment ratio, exclude our fleet + already-voted + recent-vote cooldown)
 *   (e) broadcast ONE 100% curation vote per account (curation = zero principal at risk;
 *       no funds move; this is the only broadcast op this engine is allowed)
 *   (f) read back the real txids from account history (steem-js exposes no txid — 14-c doctrine)
 *   (g) write a receipt JSON into the steem checkout (agent/receipts/)
 *   (h) optionally push the receipt (PUSH_RECEIPT=true; pull --rebase first, NEVER force)
 *   (i) print a SHAPE-ONLY summary (accounts, txids, counts — never any key material)
 *
 * Env knobs (all optional unless noted):
 *   STEEM_DIR      path to private steem checkout           (default: <cwd>/steem)
 *   STEEMJS_DIR    dir whose node_modules has steem@0.7.11  (default: <script dir>)
 *   DRY_RUN        'true' (default) = no broadcast, plan-only receipt
 *   ENGINE_MAX_VOTES     max accounts to vote this run     (default 5)
 *   ENGINE_ACCOUNTS      comma override of account order   (default: deterministic daily rotation)
 *   ENGINE_MIN_HOURS_BETWEEN_VOTES  account cooldown       (default 20 — makes daily runs safe)
 *   ENGINE_TAGS    comma override of niche tag allowlist
 *   PUSH_RECEIPT   'true' = git commit+push receipt into the steem repo
 *
 * HARD DISCIPLINE: never touch ynet* / tov-hive / owner-only rows (roster control flags are
 * enforced); never print or log any private material (public-key fingerprints only); no market
 * or broadcast ops except votes (the ladder report is a separate read-only tool).
 */
'use strict';

import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const SCRIPT_DIR = path.dirname(new URL(import.meta.url).pathname);
const STEEM_DIR = process.env.STEEM_DIR || path.join(process.cwd(), 'steem');
const STEEMJS_DIR = process.env.STEEMJS_DIR || SCRIPT_DIR;
const DRY_RUN = String(process.env.DRY_RUN || 'true').toLowerCase() === 'true';
const PUSH_RECEIPT = String(process.env.PUSH_RECEIPT || 'false').toLowerCase() === 'true';
const MAX_VOTES = Math.max(1, Math.min(5, parseInt(process.env.ENGINE_MAX_VOTES || '5', 10)));
const MIN_HOURS_BETWEEN_VOTES = parseFloat(process.env.ENGINE_MIN_HOURS_BETWEEN_VOTES || '20');
const ACCOUNTS_OVERRIDE = (process.env.ENGINE_ACCOUNTS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
const TAG_OVERRIDE = (process.env.ENGINE_TAGS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);

const NICHE_TAGS = TAG_OVERRIDE.length ? TAG_OVERRIDE : [
  'opensource', 'linux', 'ubuntu', 'debian', 'python', 'programming', 'javascript',
  'technology', 'science', 'education', 'tutorial', 'software',
];
const RPCS = (process.env.ENGINE_RPC || 'https://api.steemit.com,https://api.justyy.com,https://steemapi.boylikegirl.wtf,https://steem.fans')
  .split(',').map((s) => s.trim().replace(/\/$/, '')).filter(Boolean);

/** Accounts we never touch, by name pattern (belt-and-braces on top of roster flags). */
const NEVER_TOUCH = [/^ynet/, /^tov-hive/];
const WEIGHT = 10000; // 100% — curation only, per doctrine
const MIN_BODY_CHARS = 500;
const MIN_TITLE_CHARS = 10;
const MIN_NET_VOTES = 3;
const MAX_CHILDREN = 100;
const MIN_LIKES_PER_COMMENT = 0.5;   // effectivelikes/comment ratio floor
const MIN_AUTHOR_REP = 45;           // spam guard
const MAX_POST_AGE_DAYS = 6;         // leave the payout window margin (7d)
const NODES_FOR_READBACK = 4;

const nowIso = () => new Date().toISOString();
const fp = (pub) => (pub && pub.length > 12 ? pub.slice(0, 8) + '…' + pub.slice(-4) : '??');
function die(msg) { console.error('ENGINE-FAIL: ' + msg); process.exit(1); }
function log(msg) { console.log('[economy-engine] ' + msg); }

// ─────────────────────────── steem-js (CJS via createRequire) ───────────────────────────
const reqSteem = createRequire(path.join(STEEMJS_DIR, 'engine-require-base.js'));
let steem;
try { steem = reqSteem('steem'); } catch (e) { die('steem-js not resolvable from STEEMJS_DIR=' + STEEMJS_DIR + ' (' + e.message + ')'); }
steem.api.setOptions({ url: RPCS[0] }); // broadcast signs locally; any condenser node relays it

// ─────────────────────────── roster (fleet truth, zero secrets) ───────────────────────────
const reqSteemRepo = createRequire(path.join(STEEM_DIR, 'roster-require-base.js'));
let rosterMod;
try { rosterMod = reqSteemRepo(path.join(STEEM_DIR, 'agent', 'lib', 'fleet-roster.cjs')); } catch (e) {
  die('fleet-roster.cjs not loadable from STEEM_DIR (commit exists? ' + e.message + ')');
}
const fleet = rosterMod.roster();
const fleetRows = rosterMod.rows().filter((r) => r.chain === 'steem');
log('fleet truth: source=' + fleet.source + ' accounts=' + fleet.accounts.length + ' activeFleet=' + fleet.activeFleet);

/** steem rows the fleet doctrine allows for economic use. */
const ALLOWED_ROW_NAMES = new Set(
  fleetRows.filter((r) => r.control === 'full' && r.economicUse === true).map((r) => (r.account || '').toLowerCase())
);
if (ALLOWED_ROW_NAMES.size === 0) die('roster grants zero full-control steem rows — refusing to operate');

// ─────────────────────────── condenser JSON-RPC with fallback ───────────────────────────
let rpcIdx = 0;
async function rpc(body) {
  let lastErr = null;
  for (let attempt = 0; attempt < RPCS.length * 2; attempt++) {
    const url = RPCS[rpcIdx % RPCS.length];
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const j = await res.json();
      if (j.error) throw new Error('rpc-error: ' + (j.error.message || JSON.stringify(j.error)).slice(0, 120));
      // advance the rotating cursor so the next call starts on a healthy node
      rpcIdx = (rpcIdx + 1) % RPCS.length;
      return j.result;
    } catch (e) {
      lastErr = e;
      rpcIdx = (rpcIdx + 1) % RPCS.length;
    }
  }
  throw new Error('all RPC nodes failed (' + (lastErr && lastErr.message) + ')');
}
const condenser = (method, params) => rpc({ jsonrpc: '2.0', id: 1, method: 'condenser_api.' + method, params });

// ─────────────────────────── (b) seal → posting keys (in-runner only) ───────────────────────────
/** Opens the committed key seal inside a 0700 temp dir. Returns { wifByAccount, materialDir, openedAt }. */
function openSeal() {
  const metaPath = path.join(STEEM_DIR, 'agent', 'recovery-meta.json');
  if (!fs.existsSync(metaPath)) die('custody metadata absent in private checkout: agent/recovery-meta.json');
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  if (!meta.keysZipPass || !meta.keysZipFile || !meta.keysZipSha256) die('custody metadata incomplete (keysZip*)');
  const sealPath = path.join(STEEM_DIR, meta.keysZipFile);
  if (!fs.existsSync(sealPath)) die('seal absent: ' + meta.keysZipFile);

  const outerSha = crypto.createHash('sha256').update(fs.readFileSync(sealPath)).digest('hex');
  if (outerSha !== meta.keysZipSha256) die('seal outer sha256 MISMATCH vs custody metadata — refusing');
  if (!meta.keysZipInnerSha256) die('custody metadata missing keysZipInnerSha256');

  const work = fs.mkdtempSync(path.join(os.tmpdir(), 'econ-seal-'));
  fs.chmodSync(work, 0o700);
  const innerZip = path.join(work, 'inner.zip');
  execFileSync('openssl', ['enc', '-d', '-aes-256-cbc', '-pbkdf2', '-iter', '300000', '-in', sealPath, '-out', innerZip, '-pass', 'env:ECON_ZP'], {
    stdio: 'pipe', env: { ...process.env, ECON_ZP: meta.keysZipPass },
  });
  const head = fs.readFileSync(innerZip).subarray(0, 2).toString('latin1');
  if (head !== 'PK') die('decrypted payload is not a zip (PK header missing) — seal/custody mismatch');
  const innerSha = crypto.createHash('sha256').update(fs.readFileSync(innerZip)).digest('hex');
  if (innerSha !== meta.keysZipInnerSha256) die('seal inner sha256 MISMATCH vs custody metadata — refusing');
  execFileSync('unzip', ['-q', '-o', innerZip, '-d', work], { stdio: 'pipe' });
  fs.rmSync(innerZip, { force: true }); // no plaintext archive lingering

  const vaultPath = path.join(work, 'agent', 'keys', 'vault.json');
  if (!fs.existsSync(vaultPath)) die('materialized vault.json absent from seal — cannot operate');
  const vault = JSON.parse(fs.readFileSync(vaultPath, 'utf8'));

  // soldiers: {role:{wif}} shape; the head (revived 09-29): chain-keyed {steem:{role:{wif}}} shape
  const wifByAccount = {};
  for (const a of vault.accounts || []) {
    const k = a.keys || {};
    const posting = (k.posting && k.posting.wif) || (k.steem && k.steem.posting && k.steem.posting.wif) || null;
    if (posting) wifByAccount[(a.username || '').toLowerCase()] = posting;
  }

  // doctrine fallback for the head: 2018 sheet oracle (13-a proved exactly one line matches live)
  const sheetPath = path.join(work, 'agent', 'keys', 'hed-soldiers-source.txt');
  const sheetLines = fs.existsSync(sheetPath)
    ? fs.readFileSync(sheetPath, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l.length >= 20)
    : [];

  const openedAt = nowIso();
  return { wifByAccount, sheetLines, work, openedAt, outerShaOk: true, innerShaOk: true };
}

/** Resolve posting WIF for an account: vault first, then the 2018-sheet oracle (head). */
function resolvePostingWif(account, seal, chainAuths) {
  const vaultWif = seal.wifByAccount[account];
  const livePubs = chainAuths.map((x) => x.toLowerCase());
  if (vaultWif) {
    try {
      const pub = steem.auth.wifToPublic(vaultWif);
      if (livePubs.includes(pub.toLowerCase())) return { wif: vaultWif, source: 'vault', pub };
    } catch (_) { /* fall through to oracle */ }
  }
  for (let i = 0; i < seal.sheetLines.length; i++) {
    try {
      const wif = steem.auth.getPrivateKeys(account, seal.sheetLines[i], ['posting']).posting;
      const pub = steem.auth.wifToPublic(wif);
      if (livePubs.includes(pub.toLowerCase())) return { wif, source: 'sheet:line' + (i + 1), pub };
    } catch (_) { /* try next line */ }
  }
  return null;
}

// ─────────────────────────── (c) live posting-auth verification + health ───────────────────────────
function repFromRaw(raw) {
  const r = Number(raw);
  if (!isFinite(r) || r <= 0) return 25;
  return Math.max(25, Math.round((Math.log10(r) - 9) * 9 + 25));
}

async function verifyAccounts(candidates) {
  const props = await condenser('get_dynamic_global_properties', []);
  const headTime = Date.parse(props.time);
  const out = [];
  for (const name of candidates) {
    if (NEVER_TOUCH.some((re) => re.test(name))) { out.push({ account: name, verdict: 'skip-never-touch' }); continue; }
    if (!ALLOWED_ROW_NAMES.has(name)) { out.push({ account: name, verdict: 'skip-roster-not-full-control' }); continue; }
    const accs = await condenser('get_accounts', [[name]]);
    const acc = accs && accs[0];
    if (!acc) { out.push({ account: name, verdict: 'skip-account-missing' }); continue; }
    const pubKeys = (acc.posting && acc.posting.key_auths ? acc.posting.key_auths : []).map((k) => k[0]);
    const resolved = resolvePostingWif(name, seal, pubKeys);
    if (!resolved) { out.push({ account: name, verdict: 'skip-no-posting-key-matches-live-auth' }); continue; }
    // voting manabar (max = 10 × vests-micros, regen over 5 days — steem source semantics)
    const vestsMicros = Math.round(parseFloat(acc.vesting_shares) * 1e6);
    const maxMana = 10 * vestsMicros;
    const vm = acc.voting_manabar || { current_mana: 0, last_update_time: 0 };
    const elapsed = Math.max(0, headTime / 1000 - Number(vm.last_update_time || 0));
    const vpMana = Math.min(maxMana, Number(vm.current_mana || 0) + maxMana * (elapsed / 432000));
    const vpPct = maxMana > 0 ? (vpMana / maxMana) * 100 : 0;
    out.push({
      account: name,
      verdict: 'ok',
      pubFp: fp(resolved.pub),
      keySource: resolved.source,
      vpPct: Math.round(vpPct * 100) / 100,
      rep: repFromRaw(acc.reputation),
    });
  }
  return out;
}

// ─────────────────────────── (d) deterministic candidate selection ───────────────────────────
/** Vote history via get_account_history — condenser retired get_account_votes ("no longer
 *  supported" on api.steemit.com + api.justyy.com, verified live 2026-10-02), so the cooldown
 *  and already-voted gates read real vote ops from account history instead. FAIL-HONEST:
 *  throws on total node failure and the caller must exclude the account from broadcasting —
 *  an unreadable history must never default to "never voted". Normalized {authorperm,weight,time}. */
async function accountVoteHistory(name) {
  let lastErr = null;
  // condenser nodes cap get_account_history at 100 (verified live 2026-10-02 on api.steemit.com +
  // api.justyy.com: "upper limit is 100") — try 100 first, larger windows only if a node allows
  for (const size of [100, 200, 500]) {
    try {
      const hist = await condenser('get_account_history', [name, -1, size]);
      if (!Array.isArray(hist)) throw new Error('non-array account history');
      const votes = [];
      for (const entry of hist) {
        const ev = entry && entry[1];
        if (!ev || !ev.op || ev.op[0] !== 'vote') continue;
        const v = ev.op[1] || {};
        if ((v.voter || '').toLowerCase() !== name) continue;
        votes.push({ authorperm: (v.author || '').toLowerCase() + '/' + v.permlink, weight: Number(v.weight), time: ev.timestamp });
      }
      return votes;
    } catch (e) { lastErr = e; }
  }
  throw new Error('account history unreadable on all nodes (' + (lastErr && lastErr.message) + ')');
}

/** Content-farm detector: production-line authors publish near-daily at fixed times.
 *  Returns posts the author made in the last 96h (from their own blog feed); -1 = probe failed. */
async function authorRecentPostCount(author) {
  try {
    const blog = await condenser('get_discussions_by_blog', [{ tag: author, limit: 10 }]);
    const own = (blog || []).filter((x) => (x.author || '').toLowerCase() === author.toLowerCase());
    return own.filter((x) => Date.parse(x.created) > Date.now() - 96 * 3600 * 1000).length;
  } catch (_) { return -1; }
}

async function fetchCandidatePool() {
  const props = await condenser('get_dynamic_global_properties', []);
  const headMs = Date.parse(props.time);
  const seen = new Map();
  for (const tag of NICHE_TAGS) {
    for (const sort of ['get_discussions_by_created', 'get_discussions_by_hot']) {
      try {
        const posts = await condenser(sort, [{ tag, limit: 20 }]);
        for (const p of posts || []) {
          if (!p || seen.has(p.author + '/' + p.permlink)) continue;
          seen.set(p.author + '/' + p.permlink, p);
        }
      } catch (_) { /* a niche tag failing on one node must not kill the cycle */ }
    }
  }
  const fleetSet = new Set(fleet.accounts.map((a) => a.toLowerCase()));
  const pool = [];
  for (const [authorperm, p] of seen) {
    if (p.depth !== 0) continue;
    const author = (p.author || '').toLowerCase();
    if (fleetSet.has(author)) continue;
    if (NEVER_TOUCH.some((re) => re.test(author))) continue;
    const ageDays = (headMs - Date.parse(p.created)) / 86400000;
    if (!(ageDays >= 0 && ageDays <= MAX_POST_AGE_DAYS)) continue;
    if ((p.title || '').length < MIN_TITLE_CHARS) continue;
    const bodyChars = Number(p.body_length || (p.body || '').length);
    if (bodyChars < MIN_BODY_CHARS) continue;
    // steem nodes stopped returning net_votes — derive effectivelikes from active_votes weights
    const av = Array.isArray(p.active_votes) ? p.active_votes : [];
    const posVotes = av.filter((v) => Number(v.percent) > 0).length;
    const netVotes = Number.isFinite(Number(p.net_votes)) ? Number(p.net_votes) : posVotes;
    if (netVotes < MIN_NET_VOTES) continue;
    const children = Number(p.children || 0);
    if (children > MAX_CHILDREN) continue;
    if (netVotes / Math.max(children, 1) < MIN_LIKES_PER_COMMENT) continue;
    if (repFromRaw(p.author_reputation) < MIN_AUTHOR_REP) continue;
    const payoutAt = Date.parse(p.cashout_time || p.created);
    if (!(payoutAt > headMs + 12 * 3600 * 1000)) continue; // still inside the payout window
    pool.push({
      author: p.author,
      permlink: p.permlink,
      authorperm,
      titleShape: (p.title || '').slice(0, 60) + ((p.title || '').length > 60 ? '…' : ''),
      niche: p.category || '',
      ageDays: Math.round(ageDays * 10) / 10,
      netVotes,
      children,
      bodyChars,
    });
  }
  // deterministic order: underserved quality first (fewest effective likes), then freshest, then permlink asc
  pool.sort((x, y) => (x.netVotes - y.netVotes) || (y.ageDays - x.ageDays) || (x.authorperm < y.authorperm ? -1 : 1));
  return pool;
}

// ─────────────────────────── (e) broadcast ───────────────────────────
function broadcastVote(wif, voter, author, permlink, weight) {
  return new Promise((resolve, reject) => {
    steem.broadcast.vote(wif, voter, author, permlink, weight, (err, result) => {
      if (err) reject(err); else resolve(result);
    });
  });
}

// ─────────────────────────── (f) txid read-back from account history ───────────────────────────
async function readBackTxid(voter, author, permlink) {
  // account-history indexing can lag a relaying node by tens of seconds — keep probing
  for (const attempt of [1, 2, 3, 4, 5, 6]) {
    try {
      const hist = await condenser('get_account_history', [voter, -1, 100]); // nodes cap this call at 100
      for (let i = (hist || []).length - 1; i >= 0; i--) {
        const entry = hist[i];
        const ev = entry && entry[1];
        if (!ev || !ev.op || ev.op[0] !== 'vote') continue;
        const v = ev.op[1] || {};
        if ((v.voter || '').toLowerCase() === voter && (v.author || '').toLowerCase() === author.toLowerCase() && v.permlink === permlink) {
          return { txid: ev.trx_id, block: ev.block, histIndex: entry[0] };
        }
      }
    } catch (_) { /* rotate to next node implicitly */ }
    await new Promise((r) => setTimeout(r, attempt * 5000));
  }
  return null;
}

// ─────────────────────────── (h) receipt push (rebase-first, never force) ───────────────────────────
function pushReceipt(receiptPath, commitMsg) {
  const rel = path.relative(STEEM_DIR, receiptPath);
  execFileSync('git', ['add', rel], { cwd: STEEM_DIR, stdio: 'pipe' });
  execFileSync('git', ['commit', '-m', commitMsg], { cwd: STEEM_DIR, stdio: 'pipe' });
  execFileSync('git', ['pull', '--rebase', 'origin', 'main'], { cwd: STEEM_DIR, stdio: 'pipe' });
  execFileSync('git', ['push', 'origin', 'main'], { cwd: STEEM_DIR, stdio: 'pipe' });
}

// ═══════════════════════════════ MAIN ═══════════════════════════════
const seal = openSeal();
const utcDate = new Date().toISOString().slice(0, 10);
// collision-safe receipt naming: same-day reruns get -r2, -r3… (no receipt is ever overwritten)
let receiptName = utcDate + '-economy-engine' + (DRY_RUN ? '-dryrun' : '') + '.json';
for (let n = 2; fs.existsSync(path.join(STEEM_DIR, 'agent', 'receipts', receiptName)); n++) {
  receiptName = utcDate + '-economy-engine' + (DRY_RUN ? '-dryrun' : '') + '-r' + n + '.json';
}
const receiptPath = path.join(STEEM_DIR, 'agent', 'receipts', receiptName);

// account order: override, else deterministic daily rotation over roster order
let accountOrder = ACCOUNTS_OVERRIDE.length ? ACCOUNTS_OVERRIDE : fleet.accounts.map((a) => a.toLowerCase()).filter((a) => a !== 'ynet');
if (!ACCOUNTS_OVERRIDE.length) {
  const day = Math.floor(Date.parse(new Date().toISOString().slice(0, 10) + 'T00:00:00Z') / 86400000);
  const off = day % accountOrder.length;
  accountOrder = accountOrder.slice(off).concat(accountOrder.slice(0, off));
}
log('mode=' + (DRY_RUN ? 'DRY-RUN (no broadcast)' : 'REAL (votes will be broadcast)') + ' · maxVotes=' + MAX_VOTES + ' · accountOrder=' + accountOrder.slice(0, MAX_VOTES).join(','));

// (c) live verification first — we only keep accounts that verify + are healthy
const verified = await verifyAccounts(accountOrder.slice(0, MAX_VOTES * 2));
const healthy = verified.filter((v) => v.verdict === 'ok' && v.vpPct >= 5);
for (const v of verified) {
  if (v.verdict !== 'ok') log('account ' + v.account + ': ' + v.verdict);
  else log('account ' + v.account + ': verified ' + v.keySource + ' pub=' + v.pubFp + ' vp=' + v.vpPct + '% rep=' + v.rep);
}

// vote-history gates: per-post already-voted + account cooldown (fail-honest — see accountVoteHistory)
const voteHistories = new Map();
const historyDead = new Set();
for (const v of healthy) {
  try { voteHistories.set(v.account, await accountVoteHistory(v.account)); }
  catch (e) { historyDead.add(v.account); log('account ' + v.account + ': vote-history unreadable — excluded from broadcasting this run (' + String(e.message).slice(0, 100) + ')'); }
}

const pool = await fetchCandidatePool();
log('candidate pool: ' + pool.length + ' posts passed the deterministic quality gate (from ' + NICHE_TAGS.length + ' niche tags)');

const used = new Set();
const usedAuthors = new Set();
const rejectedAuthors = new Set();
const plans = [];
const skips = [];
const candidateRejects = [];
let cadenceProbes = 0;
for (const v of healthy) {
  if (plans.length >= MAX_VOTES) break;
  if (historyDead.has(v.account)) { skips.push({ account: v.account, reason: 'vote-history-unavailable-no-broadcast-allowed' }); continue; }
  const hist = voteHistories.get(v.account) || [];
  // cooldown: skip accounts that already voted too recently (daily-safe by design)
  const lastVoteAt = hist.reduce((acc, x) => (x.time && Date.parse(x.time) > acc ? Date.parse(x.time) : acc), 0);
  const hoursSince = lastVoteAt ? (Date.now() - lastVoteAt) / 3600000 : Infinity;
  if (hoursSince < MIN_HOURS_BETWEEN_VOTES) { skips.push({ account: v.account, reason: 'cooldown-last-vote-' + Math.round(hoursSince * 10) / 10 + 'h-ago' }); continue; }
  const alreadyVoted = new Set(hist.filter((x) => Number(x.weight) > 0).map((x) => x.authorperm.toLowerCase()));
  // first candidate that is fresh for this account, not used this run, from an un-planned author,
  // and from an author that is not a production-line farm (≥4 posts/96h cadence gate)
  let pick = null;
  for (const c of pool) {
    if (used.has(c.authorperm) || alreadyVoted.has(c.authorperm.toLowerCase())) continue;
    if (usedAuthors.has(c.author.toLowerCase()) || rejectedAuthors.has(c.author.toLowerCase())) continue;
    if (cadenceProbes < 12) {
      cadenceProbes++;
      const recent = await authorRecentPostCount(c.author);
      if (recent >= 4) {
        rejectedAuthors.add(c.author.toLowerCase());
        candidateRejects.push({ author: c.author, authorperm: c.authorperm, reason: 'content-farm-cadence-' + recent + '-posts-in-96h' });
        continue;
      }
    }
    pick = c;
    break;
  }
  if (!pick) { skips.push({ account: v.account, reason: 'no-fresh-candidate-not-already-voted' }); continue; }
  used.add(pick.authorperm);
  usedAuthors.add(pick.author.toLowerCase());
  plans.push({ account: v.account, pubFp: v.pubFp, keySource: v.keySource, vote: pick });
}

const receipt = {
  engine: 'economy-engine v1 (Task 15-c)',
  at: nowIso(),
  mode: DRY_RUN ? 'dry-run' : 'real-votes',
  chain: 'steem',
  fleetTruth: { source: fleet.source, activeFleet: fleet.activeFleet },
  seal: {
    opened: true, outerShaGate: 'ok', innerShaGate: 'ok', openedAt: seal.openedAt,
    note: 'keys_zip_v2 doctrine (AES-256-CBC pbkdf2-300k) opened in-runner from private checkout; material never leaves the runner, never enters Domain',
  },
  nicheTags: NICHE_TAGS,
  candidatePoolSize: pool.length,
  verifiedAccounts: verified.map((v) => ({ account: v.account, verdict: v.verdict, pubFp: v.pubFp || null, keySource: v.keySource || null, vpPct: v.vpPct ?? null })),
  plans: plans.map((p) => ({
    account: p.account,
    voterPubFp: p.pubFp,
    keySource: p.keySource,
    weight: WEIGHT,
    author: p.vote.author,
    permlink: p.vote.permlink,
    candidateShape: { niche: p.vote.niche, ageDays: p.vote.ageDays, netVotes: p.vote.netVotes, children: p.vote.children, bodyChars: p.vote.bodyChars, titleShape: p.vote.titleShape },
  })),
  skips,
  candidateRejects,
  results: [],
  costs: { principalAtRisk: 0, liquidSpent: 0, orders: 0, note: 'curation votes only — zero principal at risk; no market ops' },
  dryRunState: { DRY_RUN: DRY_RUN, note: DRY_RUN ? 'no broadcast performed' : 'votes broadcast with verified posting keys only' },
};

if (!DRY_RUN) {
  for (const p of plans) {
    try {
      const wif = resolvePostingWif(p.account, seal, (await condenser('get_accounts', [[p.account]]))[0].posting.key_auths.map((k) => k[0]));
      if (!wif) throw new Error('posting key stopped matching live auth — refusing to broadcast');
      await broadcastVote(wif.wif, p.account, p.vote.author, p.vote.permlink, WEIGHT);
      const rb = await readBackTxid(p.account, p.vote.author, p.vote.permlink);
      receipt.results.push({ account: p.account, author: p.vote.author, permlink: p.vote.permlink, weight: WEIGHT, broadcast: 'ok', txid: rb ? rb.txid : null, txidBlock: rb ? rb.block : null, readBack: rb ? 'account-history' : 'pending-not-found-in-50-latest-ops' });
      log('VOTED ' + p.account + ' → @' + p.vote.author + '/' + p.vote.permlink.slice(0, 28) + '… txid=' + (rb ? rb.txid : 'PENDING'));
    } catch (e) {
      // the tx may have landed even if the relaying node errored — read back before declaring failure
      const rb = await readBackTxid(p.account, p.vote.author, p.vote.permlink);
      receipt.results.push({
        account: p.account, author: p.vote.author, permlink: p.vote.permlink,
        broadcast: rb ? 'ok-after-error' : 'FAILED',
        txid: rb ? rb.txid : null, txidBlock: rb ? rb.block : null,
        readBack: rb ? 'account-history' : null,
        errorShape: String(e && e.message).slice(0, 160),
      });
      log('BROADCAST ' + (rb ? 'landed despite node error' : 'FAILED') + ' for ' + p.account + ': ' + String(e && e.message).slice(0, 120));
    }
  }
  const ok = receipt.results.filter((r) => r.broadcast === 'ok' || r.broadcast === 'ok-after-error');
  log('real cycle done: broadcast ok=' + ok.length + '/' + plans.length + ' · txids read back=' + ok.filter((r) => r.txid).length);
  if (plans.length === 0) {
    log('real cycle: zero PLANNED votes (cooldown/dedupe/history gates) — honest no-op cycle, not a failure');
  } else if (ok.length === 0) {
    die('zero votes succeeded in a REAL run with ' + plans.length + ' plans — failing honestly (check accounts/RC/keys)');
  }
} else {
  log('dry-run: ' + plans.length + ' planned votes, none broadcast');
}

fs.mkdirSync(path.dirname(receiptPath), { recursive: true });
fs.writeFileSync(receiptPath, JSON.stringify(receipt, null, 2) + '\n');
log('receipt written: agent/receipts/' + receiptName);

if (PUSH_RECEIPT) {
  const nVotes = receipt.results.filter((r) => r.broadcast === 'ok' || r.broadcast === 'ok-after-error').length;
  const msg = 'economy-engine: ' + nowIso() + ' · ' + (DRY_RUN ? 'dry-run plan' : nVotes + ' votes') + ' · txids inside';
  try {
    pushReceipt(receiptPath, msg);
    log('receipt pushed to steem (pull --rebase first, no force)');
  } catch (e) {
    die('receipt push failed: ' + String(e && e.message).slice(0, 160));
  }
}

// (i) SHAPE-ONLY summary — accounts, counts, txids. No keys, no secret-shaped strings.
console.log('SUMMARY ' + JSON.stringify({
  mode: receipt.mode, accounts: receipt.plans.map((p) => p.account), voted: receipt.results.filter((r) => r.broadcast === 'ok' || r.broadcast === 'ok-after-error').map((r) => ({ account: r.account, txid: r.txid })),
  skipped: skips.length, candidatePool: pool.length, receipt: 'agent/receipts/' + receiptName, pushed: PUSH_RECEIPT,
}));
