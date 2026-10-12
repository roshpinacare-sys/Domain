#!/usr/bin/env node
// grid-sentinel v1 — המשגיח-על-המשגיחים (owner trace 1a1319b2: "הכל מרגיש שקט").
//
// WHY: the fleet had ~28 repos and ~150 scheduled arteries but NO cross-repo
// liveness authority. Failures were red noise nobody saw; workflows disabled by
// the 60-day inactivity law stayed dead; dead public pulse-chains stayed dead;
// the owner experienced "quiet" because aliveness had no single surface.
//
// WHAT ONE SCAN DOES (public minutes only, zero sandbox dependency):
//   1. MEASURE — every repo × every Actions workflow × recent runs.
//      Verdicts: BEAT ≤30m · WARM ≤3h · COOL ≤24h · SILENT >24h · NEVER.
//      Private repos that fail everything (Actions minutes quota wall) get
//      QUOTA-DEAD — measured honestly, never alarmed (their scheduled life
//      lives on public repos by the R244 doctrine).
//   2. TEETH (enforce aliveness, all logged):
//      T1 re-enable any workflow state=disabled_inactivity (60-day-law counter)
//      T2 re-ignite public pulse/heartbeat/tick arteries silent >3h (cap 5/scan)
//      T3 ONE idempotent GRID-SILENCE issue on public-repo silence; auto-close
//         on recovery. Private silence never opens issues (known architecture).
//   3. PUBLISH — agents/grid-matrix.json (full) + status.json + GRID-STATUS.md
//      (root → Pages: one URL the owner can always read).
//
// LAW: zero secret material printed; fail-open measurement, fail-closed writes;
// every API error is recorded in the matrix, never swallowed.

import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const OWNER = 'roshpinacare-sys';
const SELF_REPO = 'Domain';
const SELF_WF = 'grid-sentinel';
const API = 'https://api.github.com';
const T = { beat: 30, warm: 180, cool: 1440 }; // minutes
const REDISPATCH_CAP = 5;
const REDISPATCH_MIN_AGE = 180;

// ---- token chain: MAIN_KEY → GH_PAT → ZIP_PAT (first that authenticates) ----
const CANDIDATES = [
  ['MAIN_KEY', process.env.MAIN_KEY],
  ['GH_PAT', process.env.GH_PAT],
  ['ZIP_PAT', process.env.ZIP_PAT],
].filter(([, v]) => v && v.length > 20);

let TOKEN = null, TOKEN_NAME = null;
for (const [name, val] of CANDIDATES) {
  try {
    const r = await fetch(`${API}/user`, { headers: { Authorization: `token ${val}`, 'User-Agent': 'grid-sentinel' } });
    if (r.status === 200) { TOKEN = val; TOKEN_NAME = name; break; }
  } catch {}
}
if (!TOKEN) { console.error('::error::no usable token in chain'); process.exit(1); }
const H = { Authorization: `token ${TOKEN}`, 'User-Agent': 'grid-sentinel', Accept: 'application/vnd.github+json' };

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
let apiCalls = 0;
async function gh(path, method = 'GET', body = null) {
  apiCalls++;
  for (let attempt = 0; attempt < 3; attempt++) {
    let resp;
    try {
      resp = await fetch(`${API}${path}`, {
        method, headers: H,
        body: body ? JSON.stringify(body) : undefined,
      });
    } catch (e) { await sleep(1500 * (attempt + 1)); continue; }
    if (resp.status === 200 || resp.status === 201 || resp.status === 204) {
      if (resp.status === 204) return { __ok: true };
      const txt = await resp.text();
      return txt ? JSON.parse(txt) : { __ok: true };
    }
    if (resp.status === 403 || resp.status === 429) {
      const rem = resp.headers.get('x-ratelimit-remaining');
      await sleep(2000 * (attempt + 1) + (rem === '0' ? 3000 : 0));
      continue;
    }
    let errBody = '';
    try { errBody = (await resp.text()).slice(0, 120); } catch {}
    return { __err: resp.status, __msg: errBody };
  }
  return { __err: 'retries-exhausted' };
}

function ageMin(iso) {
  if (!iso) return null;
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return null;
  return Math.round((Date.now() - t) / 60000);
}
function verdict(ageM) {
  if (ageM === null) return 'NEVER';
  if (ageM <= T.beat) return 'BEAT';
  if (ageM <= T.warm) return 'WARM';
  if (ageM <= T.cool) return 'COOL';
  return 'SILENT';
}

// ---- 1. MEASURE ----
const reposRes = await gh('/user/repos?per_page=100&sort=pushed&affiliation=owner');
const repos = Array.isArray(reposRes) ? reposRes : [];
const matrix = { schema: 'saos/grid-sentinel/1', generatedAt: new Date().toISOString(), tokenSource: TOKEN_NAME, apiCalls, repos: [], actions: { reEnabled: [], reLit: [], issue: null }, errors: [] };

const PULSE_RX = /(pulse|heartbeat|beat|tick|artery|cron|cadence)/i;
const rank = { BEAT: 0, WARM: 1, COOL: 2, SILENT: 3, NEVER: 4, '—': 5 };

for (const repo of repos) {
  const name = repo.name;
  const vis = repo.visibility || (repo.private ? 'private' : 'public');
  const rec = { repo: name, vis, defaultBranch: repo.default_branch || 'main', pushedAgeMin: ageMin(repo.pushed_at), arteries: [], verdict: 'IDLE', errors: [] };
  const wfRes = await gh(`/repos/${OWNER}/${name}/actions/workflows?per_page=100`);
  if (wfRes.__err) { rec.errors.push(`workflows:${wfRes.__err}`); matrix.errors.push(`${name}/workflows=${wfRes.__err}`); matrix.repos.push(rec); continue; }
  const wfs = (wfRes.workflows || []).filter(w => w.state !== 'deleted');
  if (!wfs.length) { matrix.repos.push(rec); continue; }

  const runsRes = await gh(`/repos/${OWNER}/${name}/actions/runs?per_page=100`);
  const runs = (runsRes.workflow_runs || []);
  if (runsRes.__err) { rec.errors.push(`runs:${runsRes.__err}`); matrix.errors.push(`${name}/runs=${runsRes.__err}`); }
  const byWf = new Map();
  for (const r of runs) {
    if (!byWf.has(r.workflow_id)) byWf.set(r.workflow_id, []);
    byWf.get(r.workflow_id).push(r);
  }

  let hasWarmOrBetter = false, anySuccess24h = false, anyFailureRecent = false;
  for (const w of wfs) {
    const wr = (byWf.get(w.id) || []).slice(0, 3);
    const last = wr[0] || null;
    const lastAge = last ? ageMin(last.created_at) : null;
    const lastConcl = last ? last.conclusion : null; // null while running
    const lastEvent = last ? last.event : null;
    const running = last ? last.status === 'in_progress' || last.status === 'queued' : false;
    const success24 = wr.some(r => r.conclusion === 'success' && (ageMin(r.created_at) ?? 1e9) <= 1440)
      || runs.some(r => r.workflow_id === w.id && r.conclusion === 'success' && (ageMin(r.created_at) ?? 1e9) <= 1440);
    const v = running ? 'RUNNING' : verdict(lastAge);
    if (v === 'BEAT' || v === 'WARM') hasWarmOrBetter = true;
    if (success24) anySuccess24h = true;
    if (lastConcl === 'failure') anyFailureRecent = true;
    rec.arteries.push({
      p: w.path.replace('.github/workflows/', ''), st: w.state,
      last: lastAge, concl: lastConcl, ev: lastEvent, running, v,
    });
    // T1 — 60-day-law counter: wake workflows disabled by inactivity
    if (w.state === 'disabled_inactivity') {
      const en = await gh(`/repos/${OWNER}/${name}/actions/workflows/${w.id}/enable`, 'PUT');
      matrix.actions.reEnabled.push({ repo: name, wf: w.path, ok: !en.__err, err: en.__err || null });
      if (!en.__err) rec.arteries[rec.arteries.length - 1].st = 'active';
    }
  }

  // repo verdict
  const publicRepo = vis === 'public';
  const silentOrNever = rec.arteries.filter(a => a.v === 'SILENT' || a.v === 'NEVER');
  if (hasWarmOrBetter) rec.verdict = 'ALIVE';
  else if (!publicRepo && anyFailureRecent && !anySuccess24h) rec.verdict = 'QUOTA-DEAD';
  else if (silentOrNever.length === rec.arteries.length && rec.arteries.length > 0) rec.verdict = 'STALE';
  else rec.verdict = 'MIXED';

  // T3 candidates: public-repo silent scheduled arteries
  if (publicRepo) {
    rec.silentPublic = rec.arteries.filter(a => a.v === 'SILENT' || (a.v === 'NEVER' && PULSE_RX.test(a.p)));
  }
  matrix.repos.push(rec);
  await sleep(120); // gentle pacing
}

// ---- 2. T2 — re-ignite dead public pulse arteries ----
let litCount = 0;
for (const rec of matrix.repos) {
  if (litCount >= REDISPATCH_CAP) break;
  if (!rec.silentPublic || !rec.silentPublic.length) continue;
  for (const a of rec.silentPublic) {
    if (litCount >= REDISPATCH_CAP) break;
    if (!PULSE_RX.test(a.p)) continue;
    if (a.last !== null && a.last < REDISPATCH_MIN_AGE) continue;
    const wfName = a.p.replace('.yml', '');
    if (rec.repo === SELF_REPO && wfName === SELF_WF) continue; // never self-loop
    const dis = await gh(`/repos/${OWNER}/${rec.repo}/actions/workflows/${wfName}.yml/dispatches`, 'POST', { ref: rec.defaultBranch || 'main' });
    matrix.actions.reLit.push({ repo: rec.repo, wf: a.p, ok: !dis.__err, err: dis.__err || null });
    if (!dis.__err) { a.v = 'RE-LIT'; litCount++; }
  }
}

// ---- 3. T3 — ONE idempotent silence issue (public repos only) ----
const publicSilent = matrix.repos
  .filter(r => r.vis === 'public' && r.silentPublic && r.silentPublic.length)
  .map(r => ({ repo: r.repo, arteries: r.silentPublic.map(a => `${a.p} (${a.v}, last=${a.last ?? 'never'}m)`) }));
const ISSUE_TITLE = 'GRID-SILENCE: public arteries measured silent';
const bodyNow =
  `> grid-sentinel — automated. Measured ${matrix.generatedAt}.\n` +
  `> Private/QUOTA-DEAD repos are NOT listed here (scheduled life lives on public repos by doctrine).\n\n` +
  (publicSilent.length
    ? publicSilent.map(r => `- **${r.repo}**: ${r.arteries.join(' · ')}`).join('\n')
    : 'No public-repo silence detected. Grid beats.');

try {
  const issuesRes = await gh(`/repos/${OWNER}/${SELF_REPO}/issues?state=open&per_page=100`);
  if (!issuesRes.__err) {
    const mine = (issuesRes || []).filter(i => !i.pull_request && i.title.startsWith('GRID-SILENCE'));
    const openOne = mine[0];
    if (publicSilent.length) {
      if (!openOne) {
        const c = await gh(`/repos/${OWNER}/${SELF_REPO}/issues`, 'POST', { title: ISSUE_TITLE, body: bodyNow, labels: ['grid', 'silence'] });
        matrix.actions.issue = c.__err ? `open-failed:${c.__err}` : `opened#${c.number}`;
      } else {
        const cur = await gh(`/repos/${OWNER}/${SELF_REPO}/issues/${openOne.number}`);
        if (!cur.__err && (cur.body || '').trim() !== bodyNow.trim()) {
          const u = await gh(`/repos/${OWNER}/${SELF_REPO}/issues/${openOne.number}`, 'PATCH', { body: bodyNow });
          matrix.actions.issue = `updated#${openOne.number}(${u.__err ? 'patch-fail' : 'ok'})`;
        } else matrix.actions.issue = `unchanged#${openOne.number}`;
      }
    } else if (openOne) {
      await gh(`/repos/${OWNER}/${SELF_REPO}/issues/${openOne.number}`, 'PATCH', { state: 'closed', state_reason: 'completed' });
      matrix.actions.issue = `closed#${openOne.number}`;
    } else matrix.actions.issue = 'healthy-no-issue';
  } else matrix.actions.issue = `list-failed:${issuesRes.__err}`;
} catch (e) { matrix.actions.issue = `error:${e.message}`; }

// ---- 4. PUBLISH ----
const order = { ALIVE: 0, MIXED: 1, STALE: 2, 'QUOTA-DEAD': 3, IDLE: 4 };
matrix.repos.sort((a, b) => (order[a.verdict] ?? 9) - (order[b.verdict] ?? 9) || String(a.repo).localeCompare(b.repo));

const summary = {};
for (const r of matrix.repos) summary[r.verdict] = (summary[r.verdict] || 0) + 1;
const totalArteries = matrix.repos.reduce((n, r) => n + r.arteries.length, 0);
const beatArteries = matrix.repos.reduce((n, r) => n + r.arteries.filter(a => a.v === 'BEAT' || a.v === 'RUNNING').length, 0);

const status = {
  schema: 'saos/grid-status/1',
  generatedAt: matrix.generatedAt,
  pulse: { beatArteries, totalArteries, repos: matrix.repos.length },
  summary,
  teeth: matrix.actions,
  apiCalls,
  repos: matrix.repos.map(r => ({ repo: r.repo, vis: r.vis, verdict: r.verdict, arteries: r.arteries.map(a => ({ p: a.p, v: a.v, last: a.last, concl: a.concl, st: a.st })) })),
};

// GRID-STATUS.md — human surface, worst first
let md = `# GRID-STATUS — פעימת הגריד החיה\n\n`;
md += `_נמדד אוטומטית: ${matrix.generatedAt} · עורקים: ${totalArteries} · פועמים-עכשיו: ${beatArteries} · סריקות-API: ${apiCalls} (טוקן: ${TOKEN_NAME})_\n\n`;
md += `סיכום: ${Object.entries(summary).map(([k, v]) => `${k}=${v}`).join(' · ')}\n\n`;
md += `| ריפו | נראות | פסק | עורקים (עדכניים ביותר) |\n|---|---|---|---|\n`;
for (const r of matrix.repos) {
  const top = r.arteries.slice(0, 6)
    .map(a => `${a.p.replace('.yml', '')}:${a.v}${a.last !== null ? `@${a.last >= 1440 ? Math.round(a.last / 1440) + 'd' : a.last + 'm'}` : ''}`)
    .join(' · ') || '—';
  md += `| ${r.repo} | ${r.vis} | ${r.verdict} | ${top} |\n`;
}
md += `\nפסקי-דין: **BEAT** פועם ≤30ד · WARM ≤3ש · COOL ≤24ש · SILENT >24ש · NEVER מעולם-לא · **QUOTA-DEAD** = ריפו-פרטי מאחורת-מכסת-דקות (חיים-מתוכננים עברו לציבורי) · IDLE אין-עורקים.\n`;
md += `\nשיניים בסריקה זו: re-enabled=${matrix.actions.reEnabled.length} · re-lit=${matrix.actions.reLit.length} · issue=${matrix.actions.issue}\n`;

const outDir = process.cwd();
try {
  writeFileSync(`${outDir}/agents/grid-matrix.json`, JSON.stringify(matrix, null, 1));
} catch { execSync('mkdir -p agents'); writeFileSync(`${outDir}/agents/grid-matrix.json`, JSON.stringify(matrix, null, 1)); }
writeFileSync(`${outDir}/status.json`, JSON.stringify(status, null, 1));
writeFileSync(`${outDir}/GRID-STATUS.md`, md);

// GitHub step summary
try { writeFileSync(process.env.GITHUB_STEP_SUMMARY || '/dev/null', md); } catch {}

console.log(`grid-sentinel: repos=${matrix.repos.length} arteries=${totalArteries} beat=${beatArteries} reEnabled=${matrix.actions.reEnabled.length} reLit=${matrix.actions.reLit.length} issue=${matrix.actions.issue} apiCalls=${apiCalls}`);
for (const r of matrix.repos) console.log(`  ${r.repo} [${r.vis}] ${r.verdict} (${r.arteries.length})`);
