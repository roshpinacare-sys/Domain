#!/usr/bin/env node
/**
 * autonomy-guardian.mjs — השומר-חוצה-הריפו [t15 · agent-9 · owner order:
 * "מפעיל הכל... שלא יעלם לנו... לא סגירה המנעות ונעילה"]
 * ═══════════════════════════════════════════════════════════════════════════
 * WHY THIS EXISTS (measured 2026-10-18 ~06:15 UTC): a mass-closure event
 * disabled 42/50 workflows in the Autonomy repo (state disabled_manually)
 * while the owner sleeps. Every Autonomy-side watcher was disabled WITH the
 * things it watches — the immune system itself was attacked. The backstop
 * must live OUTSIDE the thing it guards: this guardian runs in Domain and
 * revives Autonomy from across the repo boundary.
 *
 * LAW — REVIVE-ONLY AUTHORITY (owner standing order):
 *   · it may only ENABLE (life-giving); it NEVER disables anything
 *   · only paths starting .github/workflows/ are touched; forks never
 *   · after reviving, it re-fires the artery-pacer chain (the heartbeat)
 *   · fail-honest receipts: 403 (token scope) is recorded LOUDLY, never silent
 *
 * Token ladder: SBX_FLEET_PAT → GH_PAT → ZIP_PAT (first that can list
 * Autonomy's workflows wins; a token that cannot is recorded and skipped).
 *
 *   node scripts/autonomy-guardian.mjs   (live: census → revive → re-fire)
 *   env: GUARDIAN_TARGET (default roshpinacare-sys/Autonomy)
 */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const ROOT = process.env.GITHUB_WORKSPACE || resolve(join(dirname(fileURLToPath(import.meta.url)), '..'));
const TARGET = process.env.GUARDIAN_TARGET || 'roshpinacare-sys/Autonomy';
const API = 'https://api.github.com';
const RECEIPTS = join(ROOT, 'receipts', 'autonomy-guardian');
const nowIso = () => new Date().toISOString();
const MAX_REVIVE = 60;

const scrub = s => String(s ?? '').replace(/https?:\/\/[^\s"']*:[^\s"']*@[^\s"']*/g, '<redacted-cred-url>').slice(0, 300);
const gh = token => ({ Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'user-agent': 'saos-autonomy-guardian' });

/** token ladder — the first token that can LIST the target's workflows is the working one */
export async function pickToken(candidates, fetchImpl = fetch) {
  for (const c of candidates) {
    if (!c?.token) continue;
    try {
      const r = await fetchImpl(`${API}/repos/${TARGET}/actions/workflows?per_page=1`, { headers: gh(c.token), signal: AbortSignal.timeout(15000) });
      if (r.ok) return { token: c.token, name: c.name };
    } catch { /* next token */ }
  }
  return null;
}

/** census — list all workflows, split repo-owned disabled from fork paths (never touched) */
export async function censusDisabled(token, fetchImpl = fetch) {
  const out = { active: 0, disabled: [], forkDisabled: 0, error: null };
  try {
    for (let page = 1; page <= 5; page++) {
      const res = await fetchImpl(`${API}/repos/${TARGET}/actions/workflows?per_page=100&page=${page}`, { headers: gh(token), signal: AbortSignal.timeout(20000) });
      if (!res.ok) { out.error = `census http ${res.status}`; break; }
      const j = await res.json();
      for (const w of j?.workflows ?? []) {
        if (w.state === 'active') { out.active++; continue; }
        if (String(w.path || '').startsWith('@@FORK@@')) { out.forkDisabled++; continue; }
        if (String(w.path || '').startsWith('.github/workflows/')) out.disabled.push({ id: w.id, name: w.name, path: w.path, state: w.state });
      }
      const total = j?.total_count ?? 0;
      if (page * 100 >= total) break;
    }
  } catch (err) { out.error = String(err?.message || err).slice(0, 160); }
  return out;
}

/** revive — the only mutation this organ holds: PUT /enable (never disable) */
export async function revive(disabled, token, fetchImpl = fetch, cap = MAX_REVIVE) {
  const out = { revived: [], failed: [], truncated: Math.max(0, disabled.length - cap) };
  for (const w of disabled.slice(0, cap)) {
    try {
      const r = await fetchImpl(`${API}/repos/${TARGET}/actions/workflows/${w.id}/enable`, { method: 'PUT', headers: gh(token), signal: AbortSignal.timeout(15000) });
      if (r.status === 204) out.revived.push(w.path);
      else out.failed.push({ path: w.path, status: r.status });
    } catch (err) {
      out.failed.push({ path: w.path, status: 0, note: String(err?.message || err).slice(0, 100) });
    }
  }
  return out;
}

/** re-fire the heartbeat chain after revival (pacer self-chains from there) */
export async function refirePacer(token, fetchImpl = fetch) {
  try {
    const res = await fetchImpl(`${API}/repos/${TARGET}/actions/workflows/artery-pacer.yml/dispatches`, { method: 'POST', headers: gh(token), body: JSON.stringify({ ref: 'main' }), signal: AbortSignal.timeout(15000) });
    return { ok: res.status === 204, status: res.status };
  } catch (err) { return { ok: false, status: 0, note: String(err?.message || err).slice(0, 100) }; }
}

function appendBoundedLedger(dir, entry, cap = 200) {
  mkdirSync(dir, { recursive: true });
  const p = join(dir, 'ledger.jsonl');
  let lines = [];
  if (existsSync(p)) lines = readFileSync(p, 'utf8').split('\n').filter(Boolean);
  lines.push(JSON.stringify(entry));
  writeFileSync(p, lines.slice(-cap).join('\n') + '\n');
}

export async function live() {
  const receipt = {
    schema: 'autonomy-guardian/1', at: nowIso(), ok: false, organ: 'autonomy-guardian',
    target: TARGET, law: 'revive-only — enable is life, disable forbidden forever',
    checked: 0, revived: [], failed: [], refired: null, reasons: [],
  };
  const candidates = [
    { name: 'SBX_FLEET_PAT', token: process.env.SBX_FLEET_PAT },
    { name: 'GH_PAT', token: process.env.GH_PAT },
    { name: 'ZIP_PAT', token: process.env.ZIP_PAT },
  ];
  try {
    const pick = await pickToken(candidates);
    if (!pick) {
      receipt.reasons.push('no token could list the target — guard stood down HONESTLY (check PAT scopes; never fake success)');
    } else {
      receipt.tokenUsed = pick.name;
      const census = await censusDisabled(pick.token);
      receipt.checked = census.active + census.disabled.length;
      if (census.error) receipt.reasons.push(`census: ${census.error}`);
      if (census.disabled.length > 0) {
        const rev = await revive(census.disabled, pick.token);
        receipt.revived = rev.revived;
        receipt.failed = rev.failed;
        if (rev.revived.length) receipt.reasons.push(`REVIVED ${rev.revived.length} workflows in ${TARGET} (mass-closure defense)`);
        if (rev.failed.length) receipt.reasons.push(`revive failures: ${rev.failed.length} — loud, never silent`);
        // only re-fire when something was revived (restart the killed chain)
        if (rev.revived.length) {
          receipt.refired = await refirePacer(pick.token);
        }
      }
      receipt.ok = census.error === null;
      if (census.disabled.length === 0) receipt.reasons.push('all clear — every workflow active (honest no-op beat)');
    }
  } catch (err) {
    receipt.defect = true;
    receipt.reasons.push(`organ defect: ${scrub(String(err?.stack || err))}`);
  }
  receipt.doneAt = nowIso();
  mkdirSync(RECEIPTS, { recursive: true });
  writeFileSync(join(RECEIPTS, 'latest.json'), JSON.stringify(receipt, null, 2) + '\n');
  appendBoundedLedger(RECEIPTS, {
    at: receipt.doneAt, ok: receipt.ok, checked: receipt.checked,
    revived: receipt.revived, failed: receipt.failed?.length ?? 0,
    refired: receipt.refired?.ok ?? null, tokenUsed: receipt.tokenUsed ?? null,
  });
  console.log(`[guardian] ok=${receipt.ok} checked=${receipt.checked} revived=${receipt.revived.length} failed=${receipt.failed?.length ?? 0}`);
  return receipt;
}

export async function selftest() {
  const results = [];
  const t = (name, cond) => results.push({ name, pass: !!cond });
  // census with stubbed API
  const cs = await censusDisabled('tok', async (url) => {
    if (url.includes('page=1')) return { ok: true, status: 200, json: async () => ({
      total_count: 3,
      workflows: [
        { id: 1, name: 'a', path: '.github/workflows/a.yml', state: 'active' },
        { id: 2, name: 'b', path: '.github/workflows/b.yml', state: 'disabled_manually' },
        { id: 3, name: 'fork', path: '@@FORK@@/c.yml', state: 'disabled_inactivity' },
      ],
    }) };
    return { ok: true, status: 200, json: async () => ({ total_count: 3, workflows: [] }) };
  });
  t('census active counted', cs.active === 1);
  t('census repo disabled found', cs.disabled.length === 1 && cs.disabled[0].id === 2);
  t('census fork counted never listed', cs.forkDisabled === 1);
  // revive honors revive-only law
  const putted = [];
  const rev = await revive(cs.disabled, 'tok', async (url, init) => {
    if (init?.method === 'PUT') { putted.push(url); return { status: 204 }; }
    return { status: 400 };
  });
  t('revive enables disabled', putted.length === 1 && rev.revived.length === 1);
  t('revive never touches fork', !putted.some(u => u.includes('c.yml')));
  const revFail = await revive([{ id: 5, path: 'x.yml' }], 'tok', async () => ({ status: 403 }));
  t('revive 403 loud fail-honest', revFail.failed.length === 1 && revFail.failed[0].status === 403);
  // token ladder
  const pick = await pickToken([
    { name: 'bad', token: 't1' },
    { name: 'good', token: 't2' },
  ], async (url) => (url.includes('?per_page=1') ? { ok: false, status: 403 } : { ok: false, status: 403 }));
  t('token ladder exhausted honestly', pick === null);
  const pick2 = await pickToken([
    { name: 'bad', token: 't1' },
    { name: 'good', token: 't2' },
  ], async (url, init) => {
    const h = init?.headers?.Authorization || '';
    return h.includes('t2') ? { ok: true, status: 200 } : { ok: false, status: 403 };
  });
  t('token ladder skips rejected', pick2?.name === 'good');
  // refire
  const rf = await refirePacer('tok', async (url, init) => (init?.method === 'POST' ? { status: 204 } : { status: 400 }));
  t('refire dispatches pacer', rf.ok === true && rf.status === 204);
  return { ok: results.every(r => r.pass), results };
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  if (process.argv.includes('--selftest')) {
    const r = await selftest();
    if (process.env.SELFTEST_VERBOSE) for (const x of r.results) console.log(`${x.pass ? 'PASS' : 'FAIL'} ${x.name}`);
    console.log(`autonomy-guardian selftest: ${r.ok ? 'PASS' : 'FAIL'} (${r.results.length} checks)`);
    process.exit(r.ok ? 0 : 1);
  } else {
    const r = await live();
    process.exit(r.defect ? 2 : 0);
  }
}
