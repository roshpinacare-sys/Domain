#!/usr/bin/env node
/**
 * execution-ledger-freshness.mjs — פעימת-רענון פנקס-הביצוע (wave #82 · trace 1a178c614313ad05)
 * ═══════════════════════════════════════════════════════════════════════════════════════════
 * החוק: אסור-לזייף-טריות. שדה `at` מתקדם רק כשקיימת ראיה-טרייה מדודה:
 *   (1) הקומיט-האחרון של הריפו הזה (GitHub API) — טרי-מתחת לסף, וחדש-מה-`at` הנוכחי.
 *   (2) הריצה-המוצלחת-האחרונה של saos-dex · dex-beat (GitHub API) — אותם-תנאים.
 * אין-ראיה-טרייה → "stale-but-no-fresh-evidence" → לא-נוגעים-בכלום, exit 0.
 * עדכון-כירורגי: רק `at` + `freshness.verifiedAt` (סימון-ראיה חי בהודעת-הקומיט וביומן-הריצה).
 * אפס-תלות-חוץ · כל-שגיאת-API = fail-soft עם יומן-כנה, exit 0 תמיד.
 *
 * Flags:  --dry-run   (מודד ומדווח, לא-כותב)
 * Env:    GITHUB_TOKEN (אופציונלי — מעלה-מכסת-API), GITHUB_REPOSITORY, GITHUB_OUTPUT, LEDGER_FILE (לבדיקה)
 */
import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';

const OWNER = 'roshpinacare-sys';
const REPO = (process.env.GITHUB_REPOSITORY || `${OWNER}/Domain`).split('/')[1] || 'Domain';
const FILE = process.env.LEDGER_FILE || 'execution-state.json';
const DRY = process.argv.includes('--dry-run');
const API = 'https://api.github.com';
const TOKEN = process.env.GITHUB_TOKEN || '';

function log(m) { console.log('[ledger-freshness] ' + m); }
function nowIso() { return new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'); }
function ageHours(iso) { return (Date.now() - Date.parse(iso)) / 36e5; }

async function gh(path) {
  const headers = { 'Accept': 'application/vnd.github+json', 'User-Agent': 'execution-ledger-freshness' };
  if (TOKEN) headers.Authorization = 'Bearer ' + TOKEN;
  const r = await fetch(API + path, { headers });
  if (!r.ok) throw new Error('GitHub API ' + path + ' → HTTP ' + r.status);
  return r.json();
}

// ── 1. קריאת-הפנקס ──────────────────────────────────────────────────────────
let state, raw;
try {
  raw = readFileSync(FILE, 'utf8');
  state = JSON.parse(raw);
} catch (e) {
  log('state file unreadable (' + e.message + ') — honest no-op');
  process.exit(0);
}

const staleAfter = (state.freshness && Number(state.freshness.staleAfterHours)) || 48;
const atMs = Date.parse(state.at || '');
if (!atMs) {
  log('state.at unparseable — honest no-op (cannot measure staleness without fabricating)');
  process.exit(0);
}
const ageH = (Date.now() - atMs) / 36e5;
log(`at=${state.at} · age=${ageH.toFixed(2)}h · staleAfter=${staleAfter}h (from the file itself)`);
if (ageH < staleAfter) {
  log('fresh — no action (exit 0)');
  process.exit(0);
}
log('STALE — measuring fresh evidence: latest commit of ' + OWNER + '/' + REPO + ' + latest successful saos-dex/dex-beat run');

// ── 2. ראיה (1): הקומיט-האחרון בריפו-הזה ────────────────────────────────────
let commitEv = null;
try {
  const c = await gh(`/repos/${OWNER}/${REPO}/commits?per_page=1`);
  if (Array.isArray(c) && c[0]) {
    const date = c[0].commit.committer.date;
    commitEv = { sha: c[0].sha, date, ageH: ageHours(date) };
  } else {
    log('evidence-1: repo has zero commits? (unexpected) — honest gap');
  }
} catch (e) {
  log('evidence-1 (repo latest commit) API error: ' + e.message + ' — fail-soft');
}

// ── 3. ראיה (2): הריצה-המוצלחת-האחרונה של dex-beat ב-saos-dex ────────────────
let beatEv = null;
try {
  const runs = await gh(`/repos/${OWNER}/saos-dex/actions/workflows/dex-beat.yml/runs?status=success&per_page=1`);
  const r0 = (runs.workflow_runs || [])[0];
  if (r0) {
    const date = r0.run_started_at || r0.created_at;
    beatEv = { id: r0.id, url: r0.html_url, date, ageH: ageHours(date) };
  } else {
    log('evidence-2: zero successful dex-beat runs recorded — honest gap');
  }
} catch (e) {
  log('evidence-2 (dex-beat latest success) API error: ' + e.message + ' — fail-soft');
}

// ── 4. פסק-הדין: ראיה-טרייה = חדשה-מה-`at` וגם-צעירה-מהסף ───────────────────
const freshEnough = (ev) => ev && ev.ageH < staleAfter && Date.parse(ev.date) > atMs;
if (!freshEnough(commitEv)) {
  log('stale-but-no-fresh-evidence: repo-commit evidence ' +
    (commitEv ? 'inconclusive (age=' + commitEv.ageH.toFixed(1) + 'h, date=' + commitEv.date + ')' : 'unavailable') +
    ' — no at-bump (zero fabrication), exit 0');
  process.exit(0);
}
if (!freshEnough(beatEv)) {
  log('stale-but-no-fresh-evidence: dex-beat evidence ' +
    (beatEv ? 'inconclusive (age=' + beatEv.ageH.toFixed(1) + 'h, date=' + beatEv.date + ', run=' + beatEv.id + ')' : 'unavailable') +
    ' — no at-bump (zero fabrication), exit 0');
  process.exit(0);
}

const now = nowIso();
const evidence = 'commit ' + commitEv.sha.slice(0, 12) + ' (' + commitEv.date + ') · dex-beat run ' + beatEv.id + ' (' + beatEv.date + ')';
log('FRESH EVIDENCE measured: ' + evidence);

if (DRY) {
  log('dry-run: would set at=' + now + ' + freshness.verifiedAt=' + now + ' (no write)');
  process.exit(0);
}

// ── 5. עדכון-כירורגי על-הטקסט-הגולמי: רק `at` + `freshness.verifiedAt` ───────
function surgicalUpdate(text, stamp) {
  let atCount = 0;
  let out = text.replace(/^ "at": "[^"]*"/m, () => { atCount++; return ' "at": "' + stamp + '"'; });
  if (atCount !== 1) return { ok: false, why: 'top-level at field matched ' + atCount + ' times (need exactly 1) — aborting write' };
  if (/"verifiedAt": "/.test(out)) {
    let vCount = 0;
    out = out.replace(/"verifiedAt": "[^"]*"/, () => { vCount++; return '"verifiedAt": "' + stamp + '"'; });
    if (vCount !== 1) return { ok: false, why: 'existing verifiedAt matched ' + vCount + ' times (need exactly 1) — aborting write' };
  } else {
    let sCount = 0;
    out = out.replace(/^(\s*"staleAfterHours": \d+,)$/m, (_, line) => { sCount++; return line + '\n  "verifiedAt": "' + stamp + '",'; });
    if (sCount !== 1) return { ok: false, why: 'staleAfterHours anchor matched ' + sCount + ' times (need exactly 1) — aborting write' };
  }
  try {
    const parsed = JSON.parse(out);
    if (parsed.at !== stamp || (parsed.freshness || {}).verifiedAt !== stamp) {
      return { ok: false, why: 'post-write self-check failed (fields did not take) — aborting write' };
    }
  } catch (e) {
    return { ok: false, why: 'post-write JSON parse failed (' + e.message + ') — aborting write' };
  }
  return { ok: true, text: out };
}

const res = surgicalUpdate(raw, now);
if (!res.ok) {
  log('surgical write refused: ' + res.why + ' — file untouched, exit 0');
  process.exit(0);
}
writeFileSync(FILE, res.text);
log('at + freshness.verifiedAt set to ' + now + ' — evidence pointer lands in the commit message + run log');

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, 'evidence=' + evidence + '\n');
  appendFileSync(process.env.GITHUB_OUTPUT, 'bumpedAt=' + now + '\n');
}
log('done (exit 0)');
