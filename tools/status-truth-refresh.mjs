#!/usr/bin/env node
/**
 * status-truth-refresh — G76-f (owner directive §5, trace wave G76).
 *
 * WHY: the status trackers (status.json, quality/report.json) are rewritten by
 * cloud beats (grid-sentinel, pages-quality-gate), but the Oct-26 truth-refresh
 * directive requires an independent, deterministic MEASURE-NOW pass that (a)
 * recomputes the trackers from live sources, (b) stamps every published field
 * with provenance (source + timestamp), and (c) never fabricates: any field it
 * cannot measure is null with a reason.
 *
 * WHAT IT DOES (read-only against GitHub — zero teeth):
 *   1. MEASURE the fleet exactly like grid-sentinel measures it (repos ×
 *      workflows × runs, same verdict thresholds), but WITHOUT enforcement:
 *      no workflow enable, no dispatch, no issue writes. Enforcement stays
 *      owned by the cloud grid-sentinel; this tool records its beats instead.
 *   2. MEASURE the named cloud beats: network-census + grid-sentinel +
 *      pages-quality-gate (Domain), swallow-watch + identity-guard
 *      (roshpinacare-sys.github.io), and the liveness-host life-pulse beat
 *      (last commit touching receipts/fleet-activity.json on the front door).
 *   3. CROSS-CHECK cloud HEAD (API) vs local rev-parse for both owned repos.
 *   4. WRITE status.json (same schema saos/grid-status/1 + additive
 *      `provenance` block), agents/grid-matrix.json, GRID-STATUS.md, and a
 *      receipt receipts/status-truth-refresh/<date>.json.
 *   5. QUALITY: re-run the canonical measured generator
 *      tools/pages-quality-audit.mjs (local page measurement), then add an
 *      additive `provenance` key to quality/report.json.
 *
 * LAWS: token never printed (name only); fail-closed writes (no measurement →
 * no tracker overwrite); every number is measured or null-with-reason.
 *
 * Zero dependencies. Run: node tools/status-truth-refresh.mjs
 */
import { execSync } from 'node:child_process';
import { writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OWNER = 'roshpinacare-sys';
const API = 'https://api.github.com';
const T = { beat: 30, warm: 180, cool: 1440 }; // minutes — same thresholds as grid-sentinel
const BEAT_WFS = {
  Domain: ['network-census.yml', 'grid-sentinel.yml', 'pages-quality-gate.yml'],
  'roshpinacare-sys.github.io': ['swallow-watch.yml', 'identity-guard.yml'],
};

// ---- token chain (never printed; only the env name is recorded) ----
const CANDIDATES = [
  ['GH_TOKEN', process.env.GH_TOKEN],
  ['GITHUB_TOKEN', process.env.GITHUB_TOKEN],
  ['MAIN_KEY', process.env.MAIN_KEY],
  ['GH_PAT', process.env.GH_PAT],
  ['ZIP_PAT', process.env.ZIP_PAT],
].filter(([, v]) => v && v.length > 20);

let TOKEN = null, TOKEN_NAME = null;
for (const [name, val] of CANDIDATES) {
  try {
    const r = await fetch(`${API}/user`, { headers: { Authorization: `token ${val}`, 'User-Agent': 'status-truth-refresh' } });
    if (r.status === 200) { TOKEN = val; TOKEN_NAME = name; break; }
  } catch {}
}
if (!TOKEN) {
  console.error('status-truth-refresh: fail-closed — no usable token in chain; trackers left untouched');
  process.exit(1);
}
const H = { Authorization: `token ${TOKEN}`, 'User-Agent': 'status-truth-refresh', Accept: 'application/vnd.github+json' };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let apiCalls = 0;
async function gh(path) {
  apiCalls++;
  for (let attempt = 0; attempt < 3; attempt++) {
    let resp;
    try {
      resp = await fetch(`${API}${path}`, { headers: H });
    } catch { await sleep(1500 * (attempt + 1)); continue; }
    if (resp.status === 200) {
      const txt = await resp.text();
      return txt ? JSON.parse(txt) : { __err: 'empty-body' };
    }
    if (resp.status === 403 || resp.status === 429) {
      const rem = resp.headers.get('x-ratelimit-remaining');
      await sleep(2000 * (attempt + 1) + (rem === '0' ? 3000 : 0));
      continue;
    }
    return { __err: resp.status };
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

const measuredAt = new Date().toISOString();

// ---- 1. MEASURE the fleet (read-only; same logic as grid-sentinel minus teeth) ----
const reposRes = await gh('/user/repos?per_page=100&sort=pushed&affiliation=owner');
if (reposRes.__err) {
  console.error(`status-truth-refresh: fail-closed — /user/repos ${reposRes.__err}; trackers left untouched`);
  process.exit(1);
}
const repos = Array.isArray(reposRes) ? reposRes : [];
const matrix = {
  schema: 'saos/grid-sentinel/1',
  generator: 'tools/status-truth-refresh.mjs',
  generatedAt: measuredAt,
  tokenSource: TOKEN_NAME,
  apiCalls,
  repos: [],
  actions: { reEnabled: [], reLit: [], issue: 'measure-only: enforcement owned by the cloud grid-sentinel (no teeth fired locally)' },
  errors: [],
};

for (const repo of repos) {
  const name = repo.name;
  const vis = repo.visibility || (repo.private ? 'private' : 'public');
  const rec = { repo: name, vis, defaultBranch: repo.default_branch || 'main', pushedAgeMin: ageMin(repo.pushed_at), arteries: [], verdict: 'IDLE', errors: [] };
  const wfRes = await gh(`/repos/${OWNER}/${name}/actions/workflows?per_page=100`);
  if (wfRes.__err) {
    rec.errors.push(`workflows:${wfRes.__err}`);
    matrix.errors.push(`${name}/workflows=${wfRes.__err}`);
    matrix.repos.push(rec);
    continue;
  }
  const wfs = (wfRes.workflows || []).filter((w) => w.state !== 'deleted');
  if (!wfs.length) { matrix.repos.push(rec); continue; }

  const runsRes = await gh(`/repos/${OWNER}/${name}/actions/runs?per_page=100`);
  const runs = runsRes.workflow_runs || [];
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
    const lastConcl = last ? last.conclusion : null;
    const running = last ? last.status === 'in_progress' || last.status === 'queued' : false;
    const success24 = wr.some((r) => r.conclusion === 'success' && (ageMin(r.created_at) ?? 1e9) <= 1440)
      || runs.some((r) => r.workflow_id === w.id && r.conclusion === 'success' && (ageMin(r.created_at) ?? 1e9) <= 1440);
    const v = running ? 'RUNNING' : verdict(lastAge);
    if (v === 'BEAT' || v === 'WARM') hasWarmOrBetter = true;
    if (success24) anySuccess24h = true;
    if (last && last.conclusion === 'failure') anyFailureRecent = true;
    rec.arteries.push({ p: w.path.replace('.github/workflows/', ''), st: w.state, last: lastAge, concl: lastConcl, running, v });
  }

  const publicRepo = vis === 'public';
  const silentOrNever = rec.arteries.filter((a) => a.v === 'SILENT' || a.v === 'NEVER');
  if (hasWarmOrBetter) rec.verdict = 'ALIVE';
  else if (!publicRepo && anyFailureRecent && !anySuccess24h) rec.verdict = 'QUOTA-DEAD';
  else if (silentOrNever.length === rec.arteries.length && rec.arteries.length > 0) rec.verdict = 'STALE';
  else rec.verdict = 'MIXED';

  matrix.repos.push(rec);
  await sleep(120);
}

// ---- 2. MEASURE the named cloud beats ----
const beats = { measuredAt, sources: 'GET /repos/:owner/:repo/actions/workflows/:wf/runs + commits API; liveness beat = life-pulse commit on front-door main', beats: {} };
for (const [repo, wfs] of Object.entries(BEAT_WFS)) {
  for (const wf of wfs) {
    const r = await gh(`/repos/${OWNER}/${repo}/actions/workflows/${wf}/runs?per_page=1`);
    const run = r.workflow_runs && r.workflow_runs[0];
    beats.beats[`${repo}/${wf}`] = run
      ? { status: run.status, conclusion: run.conclusion, createdAt: run.created_at, runNumber: run.run_number, runId: run.id, url: run.html_url }
      : { status: null, conclusion: null, createdAt: null, reason: r.__err ? `api-${r.__err}` : 'no-runs' };
    await sleep(120);
  }
}
// liveness-host beat = newest life-pulse commit (front door), plus engine/hosts truth
// from the published receipts/fleet-activity.json that the pulse carries.
const ghioRuns = await gh(`/repos/${OWNER}/${'roshpinacare-sys.github.io'}/commits?path=receipts/fleet-activity.json&per_page=1`);
const pulseC = Array.isArray(ghioRuns) ? ghioRuns[0] : null;
let fleetActivity = null, fleetActivityResult = null;
try { fleetActivity = JSON.parse(readFileSync(join(ROOT, '..', 'roshpinacare-sys.github.io', 'receipts', 'fleet-activity.json'), 'utf8')); fleetActivityResult = 'local-sibling-checkout'; } catch {}
if (!fleetActivity) {
  const raw = await fetch('https://raw.githubusercontent.com/roshpinacare-sys/roshpinacare-sys.github.io/main/receipts/fleet-activity.json', { headers: { 'User-Agent': 'status-truth-refresh' } });
  if (raw.status === 200) { try { fleetActivity = JSON.parse(await raw.text()); fleetActivityResult = 'raw.githubusercontent (published)'; } catch {} }
  else fleetActivityResult = `unreachable (${raw.status})`;
}
beats.beats['liveness-host/life-pulse'] = pulseC
  ? {
      lastPulseCommit: pulseC.sha,
      lastPulseAt: pulseC.commit.committer.date,
      message: pulseC.commit.message.split('\n')[0].slice(0, 140),
      ageMin: ageMin(pulseC.commit.committer.date),
      engineUp: fleetActivity ? fleetActivity.engine?.up ?? null : null,
      hostsAlive: fleetActivity && Array.isArray(fleetActivity.hosts) ? fleetActivity.hosts.filter((h) => h.alive).length : null,
      hostsTotal: fleetActivity && Array.isArray(fleetActivity.hosts) ? fleetActivity.hosts.length : null,
      activityGeneratedAt: fleetActivity ? fleetActivity.generatedAt ?? null : null,
      activitySource: fleetActivityResult,
      source: 'commits API (path=receipts/fleet-activity.json) + published receipts/fleet-activity.json',
    }
  : { lastPulseCommit: null, reason: ghioRuns.__err ? `api-${ghioRuns.__err}` : 'no-commits' };

// ---- 3. CROSS-CHECK cloud HEAD vs local for the two owned repos ----
const headCheck = {};
for (const repo of ['Domain', 'roshpinacare-sys.github.io']) {
  const localPath = repo === 'Domain' ? ROOT : join(ROOT, '..', 'roshpinacare-sys.github.io');
  let local = null;
  try { local = execSync('git rev-parse HEAD', { cwd: localPath }).toString().trim(); } catch {}
  const c = await gh(`/repos/${OWNER}/${repo}/commits?per_page=1`);
  const cloud = Array.isArray(c) && c[0] ? { sha: c[0].sha, at: c[0].commit.committer.date, msg: c[0].commit.message.split('\n')[0].slice(0, 120) } : null;
  headCheck[repo] = { cloud, local, cloudEqualsLocal: cloud && local ? cloud.sha === local : null, reason: !cloud ? `api-${c.__err || 'unknown'}` : !local ? 'local-git-unavailable' : null };
  await sleep(120);
}

// ---- 4. PUBLISH status.json + matrix + GRID-STATUS.md (same schema as grid-sentinel) ----
const order = { ALIVE: 0, MIXED: 1, STALE: 2, 'QUOTA-DEAD': 3, IDLE: 4 };
matrix.repos.sort((a, b) => (order[a.verdict] ?? 9) - (order[b.verdict] ?? 9) || String(a.repo).localeCompare(b.repo));
const summary = {};
for (const r of matrix.repos) summary[r.verdict] = (summary[r.verdict] || 0) + 1;
const totalArteries = matrix.repos.reduce((n, r) => n + r.arteries.length, 0);
const beatArteries = matrix.repos.reduce((n, r) => n + r.arteries.filter((a) => a.v === 'BEAT' || a.v === 'RUNNING').length, 0);
const reposPublic = matrix.repos.filter((r) => r.vis === 'public').length;

const status = {
  schema: 'saos/grid-status/1',
  generatedAt: measuredAt,
  pulse: { beatArteries, totalArteries, repos: matrix.repos.length, reposPublic },
  summary,
  teeth: matrix.actions,
  apiCalls,
  provenance: {
    generator: 'tools/status-truth-refresh.mjs',
    mode: 'measure-only recompute (read-only GitHub API; teeth deliberately not fired — cloud grid-sentinel owns enforcement)',
    measuredAt,
    tokenSource: TOKEN_NAME,
    sources: {
      fleetScan: `GET /user/repos?per_page=100&sort=pushed&affiliation=owner + per-repo workflows+runs (measured ${measuredAt})`,
      verdicts: 'grid-sentinel thresholds: BEAT≤30m · WARM≤180m · COOL≤1440m · SILENT>1440m · RUNNING live',
      beats: 'GET /repos/roshpinacare-sys/{repo}/actions/workflows/{wf}/runs + commits API; liveness beat = last life-pulse commit',
      headCheck: 'cloud commits API vs local git rev-parse',
    },
    beats: beats.beats,
    headCheck,
    failHonest: {
      note: 'any unmeasurable field is null with a reason; nothing fabricated',
      reposWithErrors: matrix.errors.length ? matrix.errors : null,
    },
  },
  repos: matrix.repos.map((r) => ({ repo: r.repo, vis: r.vis, verdict: r.verdict, arteries: r.arteries.map((a) => ({ p: a.p, v: a.v, last: a.last, concl: a.concl, st: a.st })) })),
};

let md = `# GRID-STATUS — פעימת הגריד החיה\n\n`;
md += `_נמדד אוטומטית: ${measuredAt} · עורקים: ${totalArteries} · פועמים-עכשיו: ${beatArteries} · מאגרים: ${matrix.repos.length} (ציבוריים: ${reposPublic}) · סריקות-API: ${apiCalls} (טוקן: ${TOKEN_NAME}) · מחולל: status-truth-refresh (מדידה-בלבד, ללא-שיניים)_\n\n`;
md += `סיכום: ${Object.entries(summary).map(([k, v]) => `${k}=${v}`).join(' · ')}\n\n`;
md += `| ריפו | נראות | פסק | עורקים (עדכניים ביותר) |\n|---|---|---|---|\n`;
for (const r of matrix.repos) {
  const top = r.arteries.slice(0, 6)
    .map((a) => `${a.p.replace('.yml', '')}:${a.v}${a.last !== null ? `@${a.last >= 1440 ? Math.round(a.last / 1440) + 'd' : a.last + 'm'}` : ''}`)
    .join(' · ') || '—';
  md += `| ${r.repo} | ${r.vis} | ${r.verdict} | ${top} |\n`;
}
md += `\nפסקי-דין: **BEAT** פועם ≤30ד · WARM ≤3ש · COOL ≤24ש · SILENT >24ש · NEVER מעולם-לא · **QUOTA-DEAD** = ריפו-פרטי מאחורת-מכסת-דקות · IDLE אין-עורקים.\n`;
md += `\nדופקי-ענן נמדדים (G76-f): ${Object.entries(beats.beats).map(([k, v]) => `${k}=${v.conclusion ?? v.status ?? '—'}@${v.createdAt ?? v.lastPulseAt ?? '—'}`).join(' · ')}\n`;

writeFileSync(join(ROOT, 'agents', 'grid-matrix.json'), JSON.stringify(matrix, null, 1));
writeFileSync(join(ROOT, 'status.json'), JSON.stringify(status, null, 1));
writeFileSync(join(ROOT, 'GRID-STATUS.md'), md);

// ---- 5. QUALITY: canonical local audit + additive provenance ----
let quality = { state: 'skipped', reason: null };
try {
  execSync('node tools/pages-quality-audit.mjs', { cwd: ROOT, stdio: 'pipe', timeout: 120000 });
  const qPath = join(ROOT, 'quality', 'report.json');
  const q = JSON.parse(readFileSync(qPath, 'utf8'));
  q.provenance = {
    generator: 'tools/pages-quality-audit.mjs (canonical measured generator)',
    refreshedBy: 'tools/status-truth-refresh.mjs',
    measuredAt: q.at,
    sources: 'local page files + their declared live sources (see pages array: words/jsFetches/dataAgeHours/internalLinksBroken measured per page)',
  };
  writeFileSync(qPath, JSON.stringify(q, null, 2));
  quality = { state: 'ok', counts: q.counts, pages: q.pages.length, at: q.at };
} catch (e) {
  quality = { state: 'fail-honest', reason: String(e.message || e).slice(0, 200) };
}

// ---- 6. RECEIPT ----
const day = measuredAt.slice(0, 10);
const receipt = {
  schema: 'saos/status-truth-refresh/1',
  at: measuredAt,
  task: 'G76-f — status truth refresh 2026-10-26 (owner directive §5)',
  written: {
    'status.json': { generatedAt: measuredAt, summary, pulse: status.pulse, source: 'live GitHub API fleet scan (read-only)' },
    'quality/report.json': quality,
    'agents/grid-matrix.json': { repos: matrix.repos.length, errors: matrix.errors.length },
    'GRID-STATUS.md': { measuredAt },
  },
  beats: beats.beats,
  headCheck,
  provenanceLaw: 'every field measured from a named source with its timestamp; null + reason where unmeasurable',
  tokenSource: TOKEN_NAME,
  apiCalls,
};
writeFileSync(join(ROOT, 'receipts', `status-truth-refresh-${day}.json`), JSON.stringify(receipt, null, 2));

console.log(JSON.stringify({
  state: 'ok',
  measuredAt,
  summary,
  pulse: status.pulse,
  quality,
  beats: Object.fromEntries(Object.entries(beats.beats).map(([k, v]) => [k, v.conclusion ?? v.status ?? (v.lastPulseAt ? `pulse@${v.lastPulseAt}` : null)])),
  headCheck: Object.fromEntries(Object.entries(headCheck).map(([k, v]) => [k, v.cloudEqualsLocal])),
  apiCalls,
}));
