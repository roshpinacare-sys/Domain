#!/usr/bin/env node
/**
 * site-auditor.mjs — מציל-האתר הציבורי (site integrity twin).
 *
 * נולד מרפובליקה-מדידה (roast הנדסי 2026-10-12, 75 עמודים נסרקו ידנית):
 *  · קישורים-מתים על-פני-השטח הציבורי (TruthRail-פנטום, lighthouse-404,
 *    קבלת-steemworld מתה על 5 עמודים, דוחות-פיקטיביים, receipt-פנטום,
 *    manifest חסר) — הצטברו בשקט כי אף-חיישן לא מדד אותם. החיישן הזה הוא התשובה.
 *
 * חוקי-האמת:
 *  · נמדד מה שהמבקר רואה — האתר החי ב-Pages, לא ה-checkout.
 *  · קישור-פנימי 404/403/5xx = FINDING. קישור-חוץ 404 = FINDING (עמוד מת);
 *    403/429/502/timeout חוץ = EXTERNAL-BLOCKED (רמז, לא נפילה — אנטי-בוט שלהם).
 *  · 429/503 מפני-ה-github.com-שלנו עצמו = חנק-מדידה (rate-limit) — מקבל-ריטרי-אמיתי
 *    (3-ניסיונות · נסיגה) ואם-נשאר — TRANSIENT: נרשם-ונראה אבל-לא-מוכר-כעמוד-מת.
 *    מדידה שלנו לא תיתן-אזעקת-שווא (נמדד 10:33: 429-על-commits-page = FAIL-שווא).
 *  · קישורים שנבנים ב-JS ('+esc(..)+' / ${..}) מסוננים — הם לא href-אמיתי ב-DOM.
 *  · פסק-כן תמיד: exit 0; ה-verdict נושא את האמת; FAIL לעולם לא מוסתר.
 */
import { execSync } from 'child_process';
import fs from 'fs';

const OWNER = 'roshpinacare-sys';
const REPO = 'Domain';
const PAGES = `https://${OWNER}.github.io/${REPO}/`;
const UA_BROWSER = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36';
const UA_OURS = 'saos-site-auditor/1 (+https://github.com/roshpinacare-sys)';

const pages = execSync('git ls-tree -r HEAD --name-only', { encoding: 'utf8' })
  .split('\n')
  .filter((p) => p.endsWith('.html') && !p.startsWith('office3d/'));

const inProject = (h) =>
  !h ||
  h.startsWith('#') ||
  h.startsWith('data:') ||
  h.startsWith('mailto:') ||
  h.startsWith('javascript:') ||
  h.startsWith("'") ||
  h.startsWith('"') ||
  h.includes('${') ||
  h.includes("'+") ||
  h.includes('esc(') ||
  h === './';

const isOurs = (u) =>
  u.startsWith(PAGES) ||
  u.startsWith(`https://github.com/${OWNER}/`) ||
  u.startsWith(`https://${OWNER}.github.io/`);

async function probe(url) {
  const ours = isOurs(url);
  const throttled = (s) => s === 429 || s === 503;
  const ua = ours ? UA_OURS : UA_BROWSER; // אנטי-בוט של צד-ג' לא יזייף FINDING שלנו
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const r = await fetch(url, {
        headers: { 'user-agent': ua, accept: '*/*' },
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
      });
      // 404/410 = מצאו-עמוד-מת באמת (גם אצל צד-ג'); שאר-הכישלונות אצל חוץ =
      // חסימת-בוט/רשת ולא בהכרח עמוד-מת. 429/503 אצלנו = חנק-מדידה — ריטרי-אמיתי.
      if (r.ok) return { status: r.status, cls: 'ok' };
      if (r.status === 404 || r.status === 410) return { status: r.status, cls: 'finding' };
      if (throttled(r.status)) {
        if (attempt < 3) {
          await new Promise((res) => setTimeout(res, 3000 + attempt * 2000));
          continue;
        }
        return { status: r.status, cls: 'transient' };
      }
      if (ours) return { status: r.status, cls: 'finding' };
      if (attempt === 3) return { status: r.status, cls: 'external-blocked' };
    } catch (e) {
      if (ours && attempt === 3) return { status: 0, cls: 'finding', err: String(e && e.message).slice(0, 120) };
      if (attempt === 3) return { status: 0, cls: 'external-blocked', err: String(e && e.message).slice(0, 120) };
    }
    await new Promise((res) => setTimeout(res, 1500));
  }
}

const verdict = {
  schema: 'site-audit/1',
  at: new Date().toISOString(),
  scope: `live-pages:${PAGES}`,
  pagesScanned: pages.length,
  summary: { findings: 0, externalBlocked: 0, transientBlocked: 0, checked: 0 },
  findings: [],
  externalBlocked: [],
  transientBlocked: [],
};

const urlIndex = new Map(); // url -> sources[]
for (const page of pages) {
  const live = `${PAGES}${page}`;
  let html = '';
  try {
    const r = await fetch(live, { headers: { 'user-agent': UA_OURS }, signal: AbortSignal.timeout(20000) });
    if (!r.ok) {
      verdict.findings.push({ code: r.status, url: live, sources: ['<self>'], note: 'the page itself does not serve' });
      continue;
    }
    html = await r.text();
  } catch (e) {
    verdict.findings.push({ code: 0, url: live, sources: ['<self>'], note: String(e && e.message).slice(0, 120) });
    continue;
  }
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  const baseDir = page.includes('/') ? page.slice(0, page.lastIndexOf('/') + 1) : '';
  for (const h of refs) {
    if (inProject(h)) continue;
    let u;
    try {
      u = new URL(h, `${PAGES}${baseDir}`).toString();
    } catch {
      continue;
    }
    u = u.split('#')[0];
    if (!u || u.startsWith('mailto:')) continue;
    if (!urlIndex.has(u)) urlIndex.set(u, []);
    const srcs = urlIndex.get(u);
    if (srcs[srcs.length - 1] !== page && srcs.length < 8) srcs.push(page);
  }
}

const urls = [...urlIndex.keys()].sort();
for (const u of urls) {
  const res = await probe(u);
  if (res.cls === 'ok') continue;
  const entry = { code: res.status, url: u, sources: urlIndex.get(u) };
  if (res.err) entry.note = res.err;
  if (res.cls === 'finding') verdict.findings.push(entry);
  else if (res.cls === 'transient') verdict.transientBlocked.push(entry);
  else verdict.externalBlocked.push(entry);
  await new Promise((res) => setTimeout(res, 250)); // מנומס עם צד-ג'
}

verdict.summary.checked = urls.length;
verdict.summary.findings = verdict.findings.length;
verdict.summary.externalBlocked = verdict.externalBlocked.length;
verdict.summary.transientBlocked = verdict.transientBlocked.length;
verdict.overall = verdict.findings.length === 0 ? 'PASS' : 'FAIL';
verdict.note =
  '404 פנימי/חוץ = עמוד-מת (FINDING). 403/429/502 אצל צד-ג = חסימת-בוט (רמז בלבד). ' +
  '429/503 מפני-ה-github.com-שלנו = חנק-מדידה (TRANSIENT — ריטרי-3 ואז רשום-בלי-הכשל). ' +
  'קישורים הנבנים ב-JS בזמן-ריצה אינם נסרקים כאן — הם אינם href סטטי.';

fs.writeFileSync('agents/site-audit.json', JSON.stringify(verdict, null, 1) + '\n');
console.log(`site-audit: ${verdict.overall} · pages=${verdict.pagesScanned} checked=${verdict.summary.checked} findings=${verdict.summary.findings} extBlocked=${verdict.summary.externalBlocked}`);
for (const f of verdict.findings) console.log(`  FINDING ${f.code} ${f.url}`);
process.exit(0);
