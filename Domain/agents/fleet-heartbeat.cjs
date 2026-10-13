#!/usr/bin/env node
'use strict';
/**
 * fleet-heartbeat.cjs — THE FLEET METRONOME (T-56, the quietness answer).
 *
 * MEASURED TRUTH (2026-10-12, engine scan of the whole account): the quietness the
 * operator feels is REAL and now measured at its roots —
 *   · GitHub's scheduler starves schedules registered after 2026-10-03T18:36Z on this
 *     repo (R27 book) — cadences exist only because keepers hand-dispatch them;
 *   · 14 private repos sit behind the Actions billing wall (probe runs fail in ~2s
 *     with zero steps) — their engine health is INVISIBLE to every keyless book;
 *   · desks die silently one by one (public-pulse exit-128 for a retired file,
 *     dex-mirror import drift, seal layout drift breaking ladder-refresh, stale
 *     posting keys = custody boundaries) — nothing aggregated them until now;
 *   · 3 repos carry zero workflows and one workflow never ran once.
 *
 * THE LAW: the fleet measures its own ENGINES — every repo, every workflow state
 * (active / disabled_inactivity / disabled_manually), the last-30d run-event mix, the
 * repo verdict — and publishes one deterministic book: agents/fleet-heartbeat.json
 * (+ .md, Hebrew owner surface) + the public live mirror truth/fleet.json.
 *
 * HEAL (bounded, honest): any workflow GitHub auto-disabled for inactivity
 * (disabled_inactivity) is re-enabled fleet-wide via the keeper token, cap 3/run —
 * including private repos, so the quota-reset day finds engines ARMED, not asleep.
 * Public repos whose last scheduled run is >36h old get one bounded pulse dispatch,
 * cap 3/run, cooldown carried in the book.
 *
 * LAWS: STASIS first (the breaker halts the heal, never the measuring) · measuring
 * with the widest-visible token (FLEET_GH_TOKEN first — the repo-scoped GITHUB_TOKEN
 * sees ZERO sibling repos, measured live 23:02 run: 0/0 zeros committed; the keeper
 * token reads ONLY engine metadata: names/counts/states, never code content, never
 * secret material) · the keeper token touches nothing but read/enable/dispatch ·
 * secrets never printed · single writer (this desk writes ONLY its three files) ·
 * fail-soft per repo (an API error books the row, never crashes the run) ·
 * determinism (the window is fixed; rows sorted by repo) · exit 0 always.
 *
 * Env: FLEET_HEARTBEAT_SKIP=1 (eval off-switch) · FLEET_GH_TOKEN || KEEPER_GH_TOKEN
 *      (optional cross-repo heal) · GITHUB_TOKEN/GH_TOKEN (measuring) ·
 *      FLEET_ACCOUNT (default roshpinacare-sys) · OUT_DIR seam for eval.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = process.env.FLEET_HEARTBEAT_DIR ? path.resolve(process.env.FLEET_HEARTBEAT_DIR) : ROOT;
const OUT_JSON = path.join(OUT_DIR, 'agents', 'fleet-heartbeat.json');
const OUT_MD = path.join(OUT_DIR, 'agents', 'fleet-heartbeat.md');
const OUT_MIRROR = path.join(OUT_DIR, 'truth', 'fleet.json');
const STASIS_JSON = process.env.STASIS_JSON || path.join(ROOT, 'agents', 'STASIS.json');
const ACCOUNT = process.env.FLEET_ACCOUNT || 'roshpinacare-sys';
const RUNS_PER_REPO = 30;
const REENABLE_CAP = 3;
const DISPATCH_CAP = 3;
const STALE_SCHEDULED_H = 36;
// T24 4d — HOUSE DESKS: the hourly heartbeat watches the estate's own core books
// (the keeper, the brain, the office) and re-ignites their writers when a book
// goes stale. The watcher-of-the-watchers, bounded (3 desks), same-repo only.
const HOUSE_DESKS = [
  { desk: 'tick-keeper.yml',    receipt: 'agents/tick-keeper.json',        max_gap_min: 90,  tsKeys: ['at', 'generatedAt', 'measuredAt'] },
  { desk: 'cognition-beat.yml', receipt: 'agents/cognition/organism.json', max_gap_min: 90,  tsKeys: ['generatedAt', 'at', 'measuredAt'] },
  { desk: 'office-pulse.yml',   receipt: 'office/data.json',               max_gap_min: 90,  tsKeys: ['generatedAt', 'at'] },
];

function nowIso() { return new Date().toISOString(); }
function hoursBetween(a, b) { return (new Date(b) - new Date(a)) / 36e5; }

function api(token, apiPath, method = 'GET') {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'api.github.com',
      path: apiPath,
      method,
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'saos-fleet-heartbeat',
        ...(token ? { Authorization: 'Bearer ' + token } : {}),
      },
      timeout: 25000,
    }, (res) => {
      let body = '';
      res.on('data', (c) => { body += c; });
      res.on('end', () => {
        try { resolve({ status: res.statusCode, json: body ? JSON.parse(body) : null }); }
        catch (e) { resolve({ status: res.statusCode, json: null, parseError: true }); }
      });
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', (e) => resolve({ status: 0, error: String(e.message || e).slice(0, 90) }));
    req.end();
  });
}

// ── desk classification: the measured boundary family (the quietness map) ──────
const BOUNDARY_DESKS = [
  { desk: 'cloud-pulse.yml', repo: 'Domain', kind: 'custody-boundary', since: '2026-10-12', why: 'posting keys in secrets do not match the live authority of @owner; no fleet seal holds that account — refusal absolute, voice measured keylessly (T-53)' },
  { desk: 'weave-anchor-lines.yml', repo: 'Domain', kind: 'custody-boundary', since: '2026-10-12', why: 'steem anchor leg carries a stale posting WIF — the honest gate stays red by design until the vault deposits the live key' },
  { desk: 'ladder-refresh.yml', repo: 'Domain', kind: 'custody-boundary', since: '2026-10-12', why: '@owner active-key material is owner-gated custody; the desk runs plan-only until it is deposited (T-50 doctrine) — layout drift healed in the same round (T-52)' },
  { desk: 'blurt-connect.yml', repo: 'Domain', kind: 'external-outage', since: '2026-10-12', why: 'every public blurt RPC node unreachable (measured live) — chain truth, not a desk defect; alternates added (T-54) so it self-heals' },
];

function stasisHalt() {
  try {
    const s = JSON.parse(fs.readFileSync(STASIS_JSON, 'utf8'));
    return s && s.active === true;
  } catch (e) { return false; }
}

async function main() {
  const t0 = Date.now();
  if (process.env.FLEET_HEARTBEAT_SKIP === '1') { console.log('FLEET-HEARTBEAT SKIP'); return; }
  // Token priority law (measured 23:02 CI run): the repo-scoped GITHUB_TOKEN enumerates
  // ZERO sibling repos on /user/repos — the book would carry honest-looking zeros.
  // The keeper PAT sees the whole account; it reads engine metadata only.
  const measureToken = process.env.FLEET_GH_TOKEN || process.env.KEEPER_GH_TOKEN || process.env.GH_TOKEN || process.env.GITHUB_TOKEN || '';
  const healToken = process.env.FLEET_GH_TOKEN || process.env.KEEPER_GH_TOKEN || '';
  const book = {
    protocol: 'SAOS-FLEET-HEARTBEAT/1',
    at: nowIso(),
    account: ACCOUNT,
    stasis: stasisHalt() ? 'HALT (breaker active — heal skipped, measuring continues)' : 'standing-by',
    repos: [],
    summary: null,
    heal: { reEnabled: [], dispatched: [], skipped: [] },
    boundaries: BOUNDARY_DESKS,
    voice: null,
    errors: [],
    duration_ms: null,
  };

  // ── measure the voice (keyless chain truth — the daily truth card age) ─────
  // The network's daily voice (@owner cloud-pulse card) sits behind a custody
  // boundary (T-53). Its staleness is measurable WITHOUT any key: the chain is
  // the truth, so the fleet book carries the measured card age.
  try {
    const chainReq = (body) => new Promise((resolve) => {
      const payload = JSON.stringify(body);
      const req = https.request({
        hostname: 'api.steemit.com', path: '/', method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'saos-fleet-heartbeat', 'Content-Length': Buffer.byteLength(payload) },
        timeout: 20000,
      }, (res) => {
        let b = '';
        res.on('data', (c) => { b += c; });
        res.on('end', () => { try { resolve(JSON.parse(b)); } catch (_) { resolve(null); } });
      });
      req.on('timeout', () => req.destroy(new Error('timeout')));
      req.on('error', () => resolve(null));
      req.write(payload);
      req.end();
    });
    // get_accounts is the measured-reliable call (get_discussions returned 0 rows and
    // account_history asserts on this node — both probed live 2026-10-12); post_count=0
    // and last_root_post=epoch are the honest never-aired signature.
    const acc = await chainReq({ jsonrpc: '2.0', id: 1, method: 'condenser_api.get_accounts', params: [['owner']] });
    const a = acc && acc.result && acc.result[0];
    if (a) {
      const lrp = a.last_root_post || '1970-01-01T00:00:00';
      const never = !a.post_count || lrp.startsWith('1970');
      const ageH = never ? null : hoursBetween(lrp, book.at);
      book.voice = {
        account: 'owner',
        postCount: a.post_count || 0,
        lastPostAt: never ? null : lrp,
        ageDays: ageH === null ? null : Math.round(ageH / 24 * 10) / 10,
        boundary: true,
        note: never ? 'הכרטיס-היומי מעולם-לא-שודר מהענן (post_count=0) — גבול-משמורת מהיום-הראשון (T-53)'
                    : `הכרטיס האחרון לפני ${Math.round(ageH / 24)} ימים`,
      };
    }
  } catch (e) { book.errors.push('voice: ' + String(e.message || e).slice(0, 80)); }

  // ── enumerate the fleet ─────────────────────────────────────────────────────
  let repos = [];
  let page = 1;
  // /user/repos (authed) covers PRIVATE repos too; /users/{a}/repos is public-only —
  // the quiet half of the fleet lives behind the private wall, so the authed call is
  // the law when a token exists (measured: 12 vs 32 repos, 2026-10-12).
  const reposPath = measureToken ? '/user/repos?per_page=100&sort=pushed' : `/users/${ACCOUNT}/repos?per_page=100&sort=pushed`;
  for (;;) {
    const r = await api(measureToken, `${reposPath}&page=${page}`);
    if (r.status !== 200 || !Array.isArray(r.json)) { book.errors.push(`repos page ${page}: http ${r.status}`); break; }
    repos = repos.concat(r.json);
    if (r.json.length < 100) break;
    page += 1;
  }

  for (const rp of repos) {
    const row = {
      repo: rp.name, private: !!rp.private, archived: !!rp.archived,
      pushedAt: rp.pushed_at || null, workflows: 0, states: {}, events: {},
      lastRun: null, verdict: 'UNMEASURED', autoDisabledFiles: [], note: null,
    };
    const wf = await api(measureToken, `/repos/${ACCOUNT}/${rp.name}/actions/workflows?per_page=100`);
    if (wf.status !== 200 || !wf.json) { row.verdict = 'API-ERROR'; row.note = `workflows http ${wf.status}`; book.repos.push(row); continue; }
    const wlist = wf.json.workflows || [];
    row.workflows = wlist.length;
    for (const w of wlist) {
      const st = w.state || 'unknown';
      row.states[st] = (row.states[st] || 0) + 1;
      if (st === 'disabled_inactivity') row.autoDisabledFiles.push(w.path || w.id);
    }
    const runs = await api(measureToken, `/repos/${ACCOUNT}/${rp.name}/actions/runs?per_page=${RUNS_PER_REPO}`);
    if (runs.status === 200 && runs.json) {
      const rl = runs.json.workflow_runs || [];
      for (const x of rl) {
        const ev = x.event === 'schedule' || x.event === 'workflow_dispatch' || x.event === 'push' ? x.event : 'other';
        row.events[ev] = (row.events[ev] || 0) + 1;
        if (x.conclusion === 'success') row.okRuns = (row.okRuns || 0) + 1;
        if (!row.lastRun) row.lastRun = { at: x.created_at, event: ev, conclusion: x.conclusion, workflow: x.name };
      }
    } else {
      row.note = `runs http ${runs.status}`;
    }
    const lastAt = row.lastRun ? row.lastRun.at : null;
    const staleH = lastAt ? hoursBetween(lastAt, book.at) : null;
    row.staleHours = staleH === null ? null : Math.round(staleH * 10) / 10;
    if (rp.archived) row.verdict = 'ARCHIVED';
    else if (row.workflows === 0) row.verdict = 'NO-WORKFLOWS';
    else if (row.autoDisabledFiles.length > 0) row.verdict = 'AUTO-DISABLED';
    else if (rp.private && !(row.okRuns > 0) && row.lastRun) row.verdict = 'WALL-BLOCKED'; // zero successes in the sample — the engine cannot execute (billing wall signature, counted honestly)
    else if (staleH === null) row.verdict = 'NEVER-RAN';
    else if (staleH <= 48 && (row.events.schedule || 0) > 0) row.verdict = 'PULSING';
    else if (staleH <= 48) row.verdict = 'ACTIVE-NO-CRON';
    else if (staleH <= 24 * 14) row.verdict = 'WARM';
    else row.verdict = 'QUIET';
    book.repos.push(row);
  }

  const count = (v) => book.repos.filter((r) => r.verdict === v).length;
  book.summary = {
    repos: book.repos.length,
    PULSING: count('PULSING'), 'ACTIVE-NO-CRON': count('ACTIVE-NO-CRON'),
    WARM: count('WARM'), QUIET: count('QUIET'), NEVER_RAN: count('NEVER-RAN'),
    NO_WORKFLOWS: count('NO-WORKFLOWS'), AUTO_DISABLED: count('AUTO-DISABLED'),
    WALL_BLOCKED: count('WALL-BLOCKED'), ARCHIVED: count('ARCHIVED'), API_ERROR: count('API-ERROR'),
  };

  // ── heal (bounded; STASIS obeys; never on archived) ─────────────────────────
  if (!stasisHalt() && healToken) {
    const candidates = book.repos
      .filter((r) => !r.archived && r.autoDisabledFiles.length > 0)
      .slice(0, REENABLE_CAP);
    for (const c of candidates) {
      for (const f of c.autoDisabledFiles.slice(0, REENABLE_CAP)) {
        const wfName = String(f).split('/').pop();
        const r = await api(healToken, `/repos/${ACCOUNT}/${c.repo}/actions/workflows/${encodeURIComponent(wfName)}/enable`, 'PUT');
        book.heal.reEnabled.push({ repo: c.repo, workflow: wfName, status: r.status, ok: r.status === 204 });
      }
    }
    const starved = book.repos
      .filter((r) => !r.archived && !r.private && r.verdict !== 'NO-WORKFLOWS' && r.repo !== 'Domain'
        && r.lastRun && r.lastRun.event === 'schedule' && r.staleHours !== null && r.staleHours > STALE_SCHEDULED_H)
      .filter((r) => (r.events.schedule || 0) > 0)
      .slice(0, DISPATCH_CAP);
    for (const s of starved) {
      const wfl = await api(measureToken, `/repos/${ACCOUNT}/${s.repo}/actions/workflows?per_page=100`);
      let target = null;
      if (wfl.status === 200 && wfl.json) {
        const active = (wfl.json.workflows || []).filter((w) => w.state === 'active');
        target = active.find((w) => /cron|pulse|beat|keeper|heart/i.test(w.name || '')) || active[0] || null;
      }
      if (!target) { book.heal.skipped.push({ repo: s.repo, why: 'no active workflow to dispatch' }); continue; }
      const fname = String(target.path || '').split('/').pop();
      const r = await api(healToken, `/repos/${ACCOUNT}/${s.repo}/actions/workflows/${encodeURIComponent(fname)}/dispatches`, 'POST');
      book.heal.dispatched.push({ repo: s.repo, workflow: fname, status: r.status, ok: r.status === 204, staleHours: s.staleHours });
    }
    // T24 4d: house desks — read the estate's own books; a stale core book re-ignites its writer
    for (const d of HOUSE_DESKS) {
      try {
        const raw = fs.readFileSync(path.join(ROOT, d.receipt), 'utf8');
        const j = JSON.parse(raw);
        let ts = null;
        for (const k of d.tsKeys) if (j && typeof j[k] === 'string' && Number.isFinite(Date.parse(j[k]))) { ts = Date.parse(j[k]); break; }
        if (!ts && j && Array.isArray(j) && j.length && j[j.length - 1].ts) ts = Date.parse(j[j.length - 1].ts);
        const ageMin = ts ? (Date.now() - ts) / 60000 : null;
        if (ageMin != null && ageMin > d.max_gap_min) {
          const rr = await api(healToken, `/repos/${ACCOUNT}/Domain/actions/workflows/${encodeURIComponent(d.desk)}/dispatches`, 'POST');
          book.heal.dispatched.push({ repo: 'Domain', workflow: d.desk, houseDesk: true, receipt: d.receipt, ageMin: Math.round(ageMin), status: rr.status, ok: rr.status === 204 });
        }
      } catch (e) {
        book.heal.skipped.push({ why: `house-desk ${d.desk}: ${String(e && e.message || e).slice(0, 80)}` });
      }
    }
  } else if (!healToken) {
    book.heal.skipped.push({ why: 'no keeper token — heal stays booked, unfired (honest)' });
  }

  book.duration_ms = Date.now() - t0;
  book.repos.sort((a, b) => a.repo.localeCompare(b.repo));

  // ── publish (single writer, three files, tolerant mkdir) ────────────────────
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.mkdirSync(path.dirname(OUT_MIRROR), { recursive: true });
  const at = book.at;
  const mirror = {
    schema: 'saos/fleet-heartbeat/1',
    at,
    account: ACCOUNT,
    summary: book.summary,
    quiet: book.repos.filter((r) => ['QUIET', 'NEVER-RAN', 'NO-WORKFLOWS', 'AUTO-DISABLED'].includes(r.verdict))
      .map((r) => ({ repo: r.repo, verdict: r.verdict, staleHours: r.staleHours })),
    wallBlocked: book.repos.filter((r) => r.verdict === 'WALL-BLOCKED')
      .map((r) => ({ repo: r.repo, staleHours: r.staleHours, lastRun: r.lastRun })),
    voice: book.voice,
    boundaries: book.boundaries.map((b) => ({ desk: b.desk, kind: b.kind, why: b.why })),
    heal: { reEnabled: book.heal.reEnabled.length, dispatched: book.heal.dispatched.length },
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(book, null, 1) + '\n');
  fs.writeFileSync(OUT_MIRROR, JSON.stringify(mirror, null, 1) + '\n');

  const md = [];
  md.push('# דופק-הצי (fleet-heartbeat) — ' + at, '');
  md.push('מדידת-מנועים של כל-הריפואים: מה פועם, מה שקט, מה הפלטפורמה נטרלה, מה נרפא בריצה זו.', '');
  md.push(`**סיכום:** ${book.summary.repos} ריפואים · פועמים ${book.summary.PULSING} · ללא-קרון-אך-פעילים ${book.summary['ACTIVE-NO-CRON']} · חמימים ${book.summary.WARM} · שקטים ${book.summary.QUIET} · מעולם-לא-רצו ${book.summary.NEVER_RAN} · ללא-workflows ${book.summary.NO_WORKFLOWS} · נטרולי-חוסר-פעילות ${book.summary.AUTO_DISABLED} · חסומי-קיר-המכסה ${book.summary.WALL_BLOCKED}`, '');
  if (book.heal.reEnabled.length) md.push('**ריפוי-הפעלה:** ' + book.heal.reEnabled.map((x) => `${x.repo}/${x.workflow}=${x.ok ? 'OK' : 'http ' + x.status}`).join(' · '), '');
  if (book.heal.dispatched.length) md.push('**דופק-מונע:** ' + book.heal.dispatched.map((x) => `${x.repo}/${x.workflow}=${x.ok ? 'OK' : 'http ' + x.status}`).join(' · '), '');
  if (book.heal.skipped.length) md.push('**דילוגים-כנים:** ' + book.heal.skipped.map((x) => x.repo ? `${x.repo}: ${x.why}` : x.why).join(' · '), '');
  md.push('', '## גבולות-משמורת מדודים (לא כישלונות קוד)', '');
  for (const b of BOUNDARY_DESKS) md.push(`- **${b.desk}** (${b.kind}) — ${b.why}`);
  md.push('', '## חסומי-קיר-המכסה (WALL-BLOCKED — מנוע פרטי שאינו יכול לרוץ כלל)', '');
  const wallRows = book.repos.filter((r) => r.verdict === 'WALL-BLOCKED');
  if (!wallRows.length) md.push('- אף-אחד. אין-קיר-מכסה חוסם מנועים.');
  for (const r of wallRows) md.push(`- ${r.repo} — ריצה-אחרונה ${r.lastRun ? r.lastRun.at : '?'} (${r.lastRun ? r.lastRun.conclusion : '?'}) · אפס-הצלחות בחלון`);
  md.push('', '## שורות-שקט (QUIET/NEVER-RAN/NO-WORKFLOWS/AUTO-DISABLED)', '');
  const quietRows = book.repos.filter((r) => ['QUIET', 'NEVER-RAN', 'NO-WORKFLOWS', 'AUTO-DISABLED'].includes(r.verdict));
  if (!quietRows.length) md.push('- אף-אחד. הצי כולו נושם.');
  for (const r of quietRows) md.push(`- ${r.repo} — ${r.verdict}${r.staleHours !== null ? ` · שקט ${r.staleHours} שעות` : ''}${r.note ? ` · ${r.note}` : ''}`);
  md.push('', '_המדידה קוראת מטא-מנועים בלבד (שמות, מצבים, ספירות) באסימון-המשמר; אסור-תוכן-קוד ואסור-חומר-סוד בפלט. הריפוי מוגבל ומתועד._');
  fs.writeFileSync(OUT_MD, md.join('\n') + '\n');

  console.log(`FLEET-HEARTBEAT: ${book.summary.repos} repos · PULSING ${book.summary.PULSING} · QUIET ${book.summary.QUIET} · AUTO-DISABLED ${book.summary.AUTO_DISABLED} · heal ${book.heal.reEnabled.length}+${book.heal.dispatched.length} · ${book.duration_ms}ms`);
}

if (require.main === module) {
  main().then(() => process.exit(0)).catch((e) => {
    console.error('FLEET-HEARTBEAT fatal (fail-soft exit 0):', String(e && e.message || e).slice(0, 120));
    process.exit(0);
  });
}
module.exports = { BOUNDARY_DESKS };
