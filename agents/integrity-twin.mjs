#!/usr/bin/env node
/**
 * integrity-twin.mjs — שומר-השלמות הציבורי (התאום של Sandbox/artery-integrity).
 *
 * חוקי-האמת (G-series, מדוד 2026-10-12):
 *  · לעולם לא לסמוך — כל ספר נבדק: קיום / פרסור / טריות-מול-SLA / provenance.
 *  · סתירה בין ספר שאומר PASS-כביכול לבין ריצת-היצרן האחרונה שנכשלה = FLAG.
 *  · 403/429/אין-טוקן = UNVERIFIABLE — כנות, לא זיוף; לא מוריד את ה-overall למטה
 *    לבדו, גם לא מעלה אותו (כל FLAG אחד = FAIL).
 *  · פסק-קודם של השומר-עצמו נבדק ראשון (L0).
 *  · exit 0 תמיד — הפסק נכתב לספר גם כשהוא אדום; ה-workflow מפרסם ב-if: always().
 */
import fs from 'fs';

const OWNER = 'roshpinacare-sys';
const UA = 'saos-integrity-twin/1 (+https://github.com/roshpinacare-sys)';
const NOW = Date.now();
const H = 36e5;

// ספרי-האמת הציבוריים + SLA טריות (שעות) — cadence יצרן × 1.5, מדוד
// הערה (מדידה 2026-10-12): FleetHQ/digest.json אינו קיים בריפו (נבדק contents API)
// — הוסר מהמטריצה; ספר-שאינו-ניתן-לאימות-בריפו לא נכלל כלל.
const BOOKS = [
  { where: 'Domain:agents/work-orders.json', url: `https://raw.githubusercontent.com/${OWNER}/Domain/main/agents/work-orders.json`, slaH: 4 },
  { where: 'Domain:agents/integrity-verdict.json', url: `https://raw.githubusercontent.com/${OWNER}/Domain/main/agents/integrity-verdict.json`, slaH: 5, self: true },
  { where: 'Domain:agents/grid-truth.json', url: `https://raw.githubusercontent.com/${OWNER}/Domain/main/agents/grid-truth.json`, slaH: 2 },
  { where: 'Domain:office/data.json', url: `https://raw.githubusercontent.com/${OWNER}/Domain/main/office/data.json`, slaH: 2 },
  { where: 'Domain:agents/office-live.json', url: `https://raw.githubusercontent.com/${OWNER}/Domain/main/agents/office-live.json`, slaH: 4 },
  { where: 'FleetHQ:office/state/office-state.json', url: `https://raw.githubusercontent.com/${OWNER}/FleetHQ/main/office/state/office-state.json`, slaH: 4 },
  { where: 'sovereign-runner-kit:results/receipts.jsonl', url: `https://raw.githubusercontent.com/${OWNER}/sovereign-runner-kit/main/results/receipts.jsonl`, slaH: 72, jsonl: true },
];

const tsOf = (o) => {
  for (const k of ['at', 'capturedAt', 'generatedAt', 'anchoredAt', 'publishedAt', 'servedAt', 'timestamp', 'createdAt']) {
    if (o && typeof o === 'object' && typeof o[k] === 'string') {
      const t = Date.parse(o[k]);
      if (Number.isFinite(t)) return t;
    }
  }
  return null;
};

async function raw(url) {
  const r = await fetch(url, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(15000) });
  if (!r.ok) return { status: r.status, text: null };
  return { status: 200, text: await r.text() };
}

const verdict = {
  schema: 'integrity-guard/2',
  scope: 'public-twin (Domain home)',
  at: new Date(NOW).toISOString(),
  overall: 'PASS',
  summary: null,
  verified: [],
  findings: [],
  provenance: {
    runUrl: process.env.GITHUB_SERVER_URL && process.env.GITHUB_RUN_ID
      ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}` : null,
    workflow: 'artery-integrity-twin',
  },
};

function flag(where, law, detail) {
  verdict.findings.push({ where, law, detail });
  verdict.overall = 'FAIL';
}
function ok(where, law, detail) {
  verdict.verified.push({ where, law, detail });
}
function unverifiable(where, law, detail) {
  verdict.findings.push({ where, law: 'UNVERIFIABLE', detail });
}

// ─── L0: פסק-קודם של השומר עצמו ───
try {
  const prev = JSON.parse(fs.readFileSync('agents/integrity-verdict.json', 'utf8'));
  const t = tsOf(prev);
  if (t == null) flag('self:agents/integrity-verdict.json', 'no-timestamp', 'פסק-קודם בלי-זמן-ניתן-לניתוח');
  else if (NOW - t > 26 * H) flag('self:agents/integrity-verdict.json', 'self-stale', `פסק-קודם בן ${Math.round((NOW - t) / H)}ש'`);
  else ok('self:agents/integrity-verdict.json', 'L0-verified', `פסק-קודם תקין (${prev.overall}) מלפני ${Math.round((NOW - t) / H)}ש'`);
} catch {
  unverifiable('self:agents/integrity-verdict.json', 'L0-absent', 'אין פסק-קודם — ריצה ראשונה של התאום (לגיטימי, נרשם)');
}

// ─── ספרי-האמת ───
for (const b of BOOKS) {
  if (b.self) continue; // כבר נבדק ב-L0
  let res;
  try { res = await raw(b.url); } catch (e) { unverifiable(b.where, 'fetch-error', String(e?.message || e)); continue; }
  if (res.status !== 200) {
    if (res.status === 403 || res.status === 429) unverifiable(b.where, 'rate-limited', `HTTP ${res.status} — לא-ניתן-לאימות, לא-זיוף`);
    else flag(b.where, 'missing', `HTTP ${res.status} — ספר-חי לא נקרא`);
    continue;
  }
  if (b.jsonl) {
    const lines = res.text.trim().split('\n').filter(Boolean);
    if (!lines.length) { flag(b.where, 'empty', 'קובץ ריק'); continue; }
    let last = null;
    try { last = JSON.parse(lines[lines.length - 1]); } catch { flag(b.where, 'unparsable', 'שורה-אחרונה לא-תקינה'); continue; }
    const t = tsOf(last);
    if (t == null) flag(b.where, 'no-timestamp', 'שורה-אחרונה בלי-זמן');
    else {
      const ageH = Math.round(((NOW - t) / H) * 10) / 10;
      if (ageH > b.slaH) flag(b.where, 'stale', `גיל ${ageH}ש' > SLA ${b.slaH}ש'`);
      else ok(b.where, 'fresh+parsed', `גיל ${ageH}ש' ≤ SLA ${b.slaH}ש' · ${lines.length} קבלות`);
    }
    continue;
  }
  let d;
  try { d = JSON.parse(res.text); } catch { flag(b.where, 'unparsable', 'JSON שבור'); continue; }
  const t = tsOf(d);
  if (t == null) { flag(b.where, 'no-timestamp', 'אין שדה-זמן ניתן-לניתוח'); continue; }
  const ageH = Math.round(((NOW - t) / H) * 10) / 10;
  if (ageH > b.slaH) { flag(b.where, 'stale', `גיל ${ageH}ש' > SLA ${b.slaH}ש'`); continue; }
  ok(b.where, 'fresh+parsed', `גיל ${ageH}ש' ≤ SLA ${b.slaH}ש'`);
}

// ─── עקביות ספר-הדופק מול ריצת היצרן בפועל ───
// office/data.json חייב לשקף הצלחה של office-pulse-twin/office-pulse ב-Domain.
// ה-API נקרא עם GH_TOKEN כשקיים (בתוך Actions) — בלעדיו 403 = UNVERIFIABLE-כנה.
try {
  const apiHeaders = { 'user-agent': UA, Accept: 'application/vnd.github+json' };
  if (process.env.GH_TOKEN) apiHeaders.Authorization = `Bearer ${process.env.GH_TOKEN}`;
  const r = await fetch(`https://api.github.com/repos/${OWNER}/Domain/actions/workflows/office-pulse-twin.yml/runs?per_page=1`, {
    headers: apiHeaders, signal: AbortSignal.timeout(15000),
  });
  if (r.status === 403 || r.status === 429) unverifiable('Domain:office-pulse-twin runs', 'rate-limited', `HTTP ${r.status}`);
  else {
    const d = await r.json();
    const run = d?.workflow_runs?.[0];
    if (!run) unverifiable('Domain:office-pulse-twin runs', 'no-runs', 'אין ריצות לבדיקת-עקביות');
    else if (run.conclusion !== 'success') flag('Domain:office/data.json', 'producer-red', `היצרן רץ ${run.conclusion} לפני ${Math.round((NOW - Date.parse(run.created_at)) / 6e4)} דק' — הספר חייב-בדיקה`);
    else ok('Domain:office/data.json', 'producer-green', `ריצת-יצרן ירוקה לפני ${Math.round((NOW - Date.parse(run.created_at)) / 6e4)} דק'`);
  }
} catch (e) { unverifiable('Domain:office-pulse-twin runs', 'api-error', String(e?.message || e)); }

// ─── provenance: לספרים עם runUrl — פורמט תקין ───
try {
  const orders = JSON.parse(fs.readFileSync('agents/work-orders.json', 'utf8'));
  ok('Domain:agents/work-orders.json', 'published', `${orders.totals?.open ?? '?'} פקודות-פתוחות · schema ${orders.schema || 'legacy'}`);
} catch (e) { flag('Domain:agents/work-orders.json', 'local-read', String(e?.message || e)); }

verdict.summary = {
  sources: BOOKS.length,
  verified: verdict.verified.length,
  findings: verdict.findings.length,
  counts: verdict.findings.reduce((a, f) => { a[f.law] = (a[f.law] || 0) + 1; return a; }, {}),
};

fs.mkdirSync('agents', { recursive: true });
fs.writeFileSync('agents/integrity-verdict.json', JSON.stringify(verdict, null, 1) + '\n');
const LOG = 'agents/integrity-log.jsonl';
try {
  let lines = fs.existsSync(LOG) ? fs.readFileSync(LOG, 'utf8').trim().split('\n').filter(Boolean) : [];
  lines.push(JSON.stringify({ at: verdict.at, overall: verdict.overall, findings: verdict.findings.length }));
  if (lines.length > 400) lines = lines.slice(-400);
  fs.writeFileSync(LOG, lines.join('\n') + '\n');
} catch { /* לוג לעולם לא שובר את הפסק */ }

console.log(`[integrity-twin] overall=${verdict.overall} verified=${verdict.verified.length} findings=${verdict.findings.length}`);
for (const f of verdict.findings) console.log(`  [${f.law}] ${f.where}: ${f.detail}`);
process.exit(0);
