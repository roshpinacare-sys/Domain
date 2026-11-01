#!/usr/bin/env node
/**
 * TWIN-ISSUE-GATE (R22, CR-0051; one-voice law 2026-11-01) — the twin-audit alarm.
 *
 * WHY THIS FILE EXISTS: the old gate was inline bash with embedded node -e JS. The JS
 * used BACKTICKS inside a double-quoted bash string — bash executed them as command
 * substitution and the step died with `syntax error near unexpected token 'done'`.
 * Result: the watchdog DETECTED a real regression (money-console-domain lost evidence)
 * on its first scheduled run and could never tell anyone — alarm silenced since day one.
 * Lesson booked: an alarm built of quoting tricks is not an alarm, it is a liability.
 *
 * ONE-VOICE LAW (2026-11-01, mirrors exposure-gate wave 19.5x):
 *   The first gate (R22→10-31) POSTed a NEW issue on EVERY failing run — 20+ duplicate
 *   issues (#10, #79, #80, #81, ...) for one unchanged root cause. An alarm that spawns
 *   a duplicate every day is notification noise, not an alarm.
 *   Now: ONE rolling issue per title-prefix — comment on repeat (oldest open issue is
 *   the canonical thread; newer duplicates are closed as dupes), close on recovery.
 *
 * LAWS:
 *  · reads the marker file (path from TWIN_ISSUE_MARKER, default /tmp/twin-issue.json)
 *  · marker missing            → "no gate marker", exit 0 (clean run)
 *  · marker unparseable        → FAIL LOUD (exit 1) — a corrupt alarm is a defect
 *  · fire=false                → close every open twin-audit gate issue (recovery receipt), exit 0
 *  · fire=true                 → build the body (buildIssueBody, exported for E42);
 *                                oldest open gate issue = canonical thread → comment there;
 *                                any OTHER open gate issues → closed as duplicates;
 *                                none open → POST one new issue;
 *                                GH_TOKEN first, ZIP_PAT fallback;
 *  · both tokens fail          → honest recorded line, exit 0 (the committed report is
 *                                the receipt; the next scheduled run retries the alarm)
 *  · zero secret material is ever printed; tokens are read from env only
 */
const fs = require('fs');
const https = require('https');

const MARKER = process.env.TWIN_ISSUE_MARKER || '/tmp/twin-issue.json';
const TITLE_PREFIX = 'twin-audit: near-duplication detected';

/** pure: marker → { fire, title, body } | null (no-fire) — exported for E42 */
function buildIssueBody(marker) {
  if (!marker || typeof marker !== 'object') throw new Error('marker-not-an-object');
  const unknown = Array.isArray(marker.unknownNearDups) ? marker.unknownNearDups : [];
  const lost = Array.isArray(marker.lostEvidence) ? marker.lostEvidence : [];
  if (!marker.fire) return null;
  const lines = [];
  for (const u of unknown) {
    const page = u && u.page ? String(u.page) : 'unknown-page';
    const j = u && u.jaccard5 !== undefined ? String(u.jaccard5) : '?';
    lines.push('- UNKNOWN near-dup pair: "' + page + '" at Jaccard ' + j);
  }
  for (const l of lost) lines.push('- DIFFERENTIATED pair lost its capability evidence: "' + String(l) + '"');
  const body = 'twin-audit ' + new Date().toISOString().slice(0, 10) + '\n\n' +
    (lines.length ? lines.join('\n') : '- gate fired with no rows (defect in the audit writer)') +
    '\n\nRegistry: agents/twin-registry.json. Fix = give each side one distinct real function, then register it.\n' +
    '\n_One-voice law: this thread updates instead of spawning duplicates; it closes only when a scan is clean._';
  return {
    fire: true,
    title: TITLE_PREFIX + ' ' + new Date().toISOString().slice(0, 10),
    body,
  };
}

function ghRequest(token, path, method, payload) {
  return new Promise((resolve) => {
    const body = payload ? JSON.stringify(payload) : null;
    const headers = {
      'User-Agent': 'saos-twin-issue-gate', Accept: 'application/vnd.github+json',
      Authorization: 'token ' + token,
    };
    if (body) { headers['Content-Type'] = 'application/json'; headers['Content-Length'] = Buffer.byteLength(body); }
    const req = https.request({ hostname: 'api.github.com', path, method, headers, timeout: 20000 }, (res) => {
      let data = '';
      res.on('data', (c) => { data += c; });
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', (e) => resolve({ status: 0, error: String(e.message || e).slice(0, 90) }));
    if (body) req.write(body);
    req.end();
  });
}

/** oldest-first list of OPEN issues whose title starts with the gate prefix */
async function listOpenGateIssues(token, repo) {
  const out = [];
  for (let page = 1; page <= 3; page++) {
    const r = await ghRequest(token, '/repos/' + repo + '/issues?state=open&per_page=100&page=' + page, 'GET');
    if (r.status !== 200) return { status: r.status, issues: out };
    let rows = [];
    try { rows = JSON.parse(r.data); } catch (_) { return { status: r.status, issues: out }; }
    for (const i of rows) {
      if (i && typeof i.title === 'string' && i.title.startsWith(TITLE_PREFIX)) {
        out.push({ number: i.number, title: i.title, created_at: i.created_at });
      }
    }
    if (rows.length < 100) break;
  }
  out.sort((a, b) => String(a.created_at).localeCompare(String(b.created_at)));
  return { status: 200, issues: out };
}

async function main() {
  if (!fs.existsSync(MARKER)) { console.log('no gate marker'); return 0; }
  let marker;
  try { marker = JSON.parse(fs.readFileSync(MARKER, 'utf8')); }
  catch (e) { console.error('GATE-DEFECT: marker unparseable (' + String(e.message).slice(0, 90) + ') — failing loud, an unreadable alarm is a defect'); return 1; }
  const built = buildIssueBody(marker);
  const repo = process.env.GITHUB_REPOSITORY || 'roshpinacare-sys/Domain';

  const u = (marker.unknownNearDups || []).length, l = (marker.lostEvidence || []).length;

  if (!built) {
    // clean scan — close every open gate issue (recovery receipt)
    for (const token of [process.env.GH_TOKEN, process.env.ZIP_PAT]) {
      if (!token) continue;
      const list = await listOpenGateIssues(token, repo);
      if (list.status !== 200) { console.log('gate clean, but issue-list probe failed (HTTP ' + list.status + ') — recovery-close deferred to next run'); continue; }
      let closed = 0;
      for (const issue of list.issues) {
        const c = await ghRequest(token, '/repos/' + repo + '/issues/' + issue.number, 'PATCH', {
          state: 'closed',
          state_reason: 'completed',
        });
        if (c.status === 200) closed++;
      }
      if (list.issues.length) console.log('gate clean — recovery: closed ' + closed + '/' + list.issues.length + ' open twin-audit gate issue(s)');
      else console.log('gate clean - no issue (' + u + ' unknown near-dups, lostEvidence ' + l + '), nothing open to close');
      return 0;
    }
    console.log('gate clean, no token available to close recovered issues — the committed report is the receipt');
    return 0;
  }

  // fire path — one-voice: comment on the OLDEST open gate issue; close duplicates; create only if none open
  for (const token of [process.env.GH_TOKEN, process.env.ZIP_PAT]) {
    if (!token) continue;
    const list = await listOpenGateIssues(token, repo);
    if (list.status === 200 && list.issues.length > 0) {
      const canonical = list.issues[0];
      const c = await ghRequest(token, '/repos/' + repo + '/issues/' + canonical.number + '/comments', 'POST', { body: built.body });
      if (c.status === 201) {
        console.log('one-voice: commented on existing gate issue #' + canonical.number + ' (no new issue spawned)');
        for (const dup of list.issues.slice(1)) {
          const d = await ghRequest(token, '/repos/' + repo + '/issues/' + dup.number, 'PATCH', {
            state: 'closed', state_reason: 'not_planned',
          });
          if (d.status === 200) console.log('duplicate gate issue #' + dup.number + ' closed (one-voice law)');
        }
        return 0;
      }
      console.log('comment attempt failed (HTTP ' + c.status + (c.error ? ' ' + c.error : '') + ')');
    }
    const r = await ghRequest(token, '/repos/' + repo + '/issues', 'POST', { title: built.title, body: built.body });
    if (r.status === 201) { console.log('issue opened (first open gate thread)'); return 0; }
    console.log('issue attempt failed (HTTP ' + r.status + (r.error ? ' ' + r.error : '') + ')');
  }
  console.log('could not file the alarm with either token - recorded honestly here; the committed report is the receipt');
  return 0;
}

if (require.main === module) main().then((c) => process.exit(c)).catch((e) => { console.error('gate crashed:', String(e.message || e).slice(0, 120)); process.exit(1); });
module.exports = { buildIssueBody, TITLE_PREFIX };
