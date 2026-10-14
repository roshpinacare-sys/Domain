#!/usr/bin/env node
/**
 * site-auditor.mjs — מציל-האתר הציבורי (site integrity twin).
 *
 * נולד מרפובליקה-מדידה (roast הנדסי 2026-10-12, 75 עמודים נסרקו ידנית):
 *  · קישורים-מתים על-פני-השטח הציבורי (TruthRail-פנטום, lighthouse-404,
 *    קבלת-steemworld מתה על 5 עמודים, דוחות-פיקטיביים, receipt-פנטום,
 *    manifest חסר) — הצטברו בשקט כי אף-חיישן לא מדד אותם. החיישן הזה הוא התשובה.
 *
 * R75 · חוק-מות-הסוכנים (2026-10-14, "הריבונות נשארת בלעדיכם"):
 *  · בדיקות שסוכנים חזרו עליהן ידנית בכל-גל (איזון-תגיות, סינטקס-סקריפט,
 *    parity-של-sitemap, בריאות-גמלות, canonical מועתק, מדדי-אמת דו-ספריים)
 *  · מקודדות כאן כסוללה-מבנית — האורגניזם מריץ אותן על עצמו בכל-push ויומית,
 *    עם קבלה חתומה, לנצח, בלי סשן-סוכן. סוכן שעוזב לא משאיר חור.
 *
 * חוקי-האמת:
 *  · נמדד מה שהמבקר רואה — האתר החי ב-Pages, לא ה-checkout (קישורים);
 *    הסוללה-המבנית נמדדת מה-checkout (אמת-קובץ, דטרמיניסטית, בלי רשת).
 *  · קישור-פנימי 404/403/5xx = FINDING. קישור-חוץ 404 = FINDING (עמוד מת);
 *    403/429/502/timeout חוץ = EXTERNAL-BLOCKED (רמז, לא נפילה — אנטי-בוט שלהם).
 *  · 429/503 מפני-ה-github.com-שלנו עצמו = חנק-מדידה (rate-limit) — מקבל-ריטרי-אמיתי
 *    (3-ניסיונות · נסיגה) ואם-נשאר — TRANSIENT: נרשם-ונראה אבל-לא-מוכר-כעמוד-מת.
 *    מדידה שלנו לא תיתן-אזעקת-שווא (נמדד 10:33: 429-על-commits-page = FAIL-שווא).
 *  · קישורים שנבנים ב-JS ('+esc(..)+' / ${..}) מסוננים — הם לא href-אמיתי ב-DOM.
 *  · פסק-כן תמיד: exit 0; ה-verdict נושא את האמת; FAIL לעולם לא מוסתר.
 *    (יוצאת-אחת: ‎--structural-only = בדיקה-מקומית-מהירה בלי רשת — מדפיס
 *    ולא כותב קבלה; exit 2 = יש ממצאים. הקבלה נכתבת רק מריצה מלאה.)
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

// ═══════════════════════════════════════════════════════════════════════════
// R75 · הסוללה-המבנית — אמת-קובץ, דטרמיניסטית, בלי רשת. רצה תמיד, גם כשהרשת מתה.
// ═══════════════════════════════════════════════════════════════════════════

const STRUCT_RULES = ['R-BALANCE', 'R-SCRIPT', 'R-CANONICAL', 'R-STUB', 'R-SITEMAP', 'R-TRUTH'];
const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const RAW_TAGS = new Set(['script', 'style', 'textarea', 'title']);
const FINDINGS_CAP = 24;

function checkBalance(html, file, push) {
  const stack = [];
  // comments ו-doctype קודמים לתגיות; תג-פתיחה תופס מאפיינים מצוטטים (כולל > בתוך מרכאות)
  const re = /<!--[\s\S]*?-->|<!doctype[^>]*>|<([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^"'>])*)>|<\/([a-zA-Z][a-zA-Z0-9-]*)>/gi;
  let m;
  while ((m = re.exec(html))) {
    if (m[1]) {
      const name = m[1].toLowerCase();
      const attrs = m[2] || '';
      if (RAW_TAGS.has(name)) {
        // raw text — דלג אל מעבר לתג-הסגירה שלו (התנהגות-דפדפן)
        const cm = html.slice(re.lastIndex).match(new RegExp(`</${name}\\s*>`, 'i'));
        if (!cm) { push(file, 'R-BALANCE', `<${name}> never closed`); return; }
        re.lastIndex += cm.index + cm[0].length;
        continue;
      }
      if (!VOID_TAGS.has(name) && !/\/\s*$/.test(attrs)) stack.push(name);
    } else if (m[3]) {
      const name = m[3].toLowerCase();
      const idx = stack.lastIndexOf(name);
      if (idx === -1) { push(file, 'R-BALANCE', `stray </${name}>`); continue; }
      if (idx !== stack.length - 1) {
        const unclosed = stack.slice(idx + 1).filter((t) => !VOID_TAGS.has(t));
        if (unclosed.length) push(file, 'R-BALANCE', `</${name}> closes over unclosed <${unclosed.join(',')}>`);
      }
      stack.length = idx;
    }
  }
  if (stack.length) push(file, 'R-BALANCE', `unclosed <${[...new Set(stack)].join(',')}> at EOF`);
}

function checkScripts(html, file, push) {
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
  let m, n = 0;
  while ((m = re.exec(html))) {
    const attrs = m[1] || '';
    if (/\ssrc\s*=/i.test(attrs)) continue; // חוץ — לא כאן
    const t = ((attrs.match(/type\s*=\s*["']?([^"'\s>]+)/i) || [])[1] || '').toLowerCase();
    if (t && t !== 'text/javascript' && t !== 'application/javascript') continue; // module/ld+json/importmap/template
    const body = m[2] || '';
    if (!body.trim()) continue;
    n++;
    try {
      new Function(body);
    } catch (e) {
      push(file, 'R-SCRIPT', `syntax: ${String(e && e.message).slice(0, 140)}`);
    }
  }
  return n;
}

function checkCanonical(html, file, push) {
  if (file === '404.html') return; // העמוד של-כל-ה-404 — ה-canonical שלו לשורש בכוונה
  const m = html.match(/<link[^>]*rel=["']canonical["'][^>]*>/i);
  if (!m) return;
  const href = (m[0].match(/href=["']([^"']+)["']/i) || [])[1];
  if (!href) { push(file, 'R-CANONICAL', 'canonical tag without href'); return; }
  if (href.startsWith('https://roshpinacare-sys.github.io/Console/')) return; // מראה — ה-canonical שלה למקור-האמת בכוונה (חוק-המראות)
  // index.html (שורש או תיקייה) מוגש כ-URL-ספרייה — ה-canonical מדבר על ה-URL, לא על הקובץ
  const expected = file === 'index.html' ? PAGES : PAGES + (file.endsWith('/index.html') ? file.slice(0, -'index.html'.length) : file);
  if (href !== expected) push(file, 'R-CANONICAL', `canonical ${href} ≠ ${expected}`);
}

function checkStub(html, file, push, tree) {
  const rm = html.match(/<meta[^>]*http-equiv=["']refresh["'][^>]*>/i);
  if (!rm) return false;
  // חילוץ-content עמיד למרכאות-פנימיות (url='x.html' בתוך content="...")
  const cc = rm[0].match(/content\s*=\s*"([^"]*)"/i) || rm[0].match(/content\s*=\s*'([^']*)'/i);
  const content = cc ? (cc[1] !== undefined ? cc[1] : '') : '';
  const raw = (content.match(/url=\s*["']?([^;"'>]+)["']?/i) || [])[1];
  if (!/name=["']robots["'][^>]*noindex|content=["'][^"']*noindex/i.test(html)) push(file, 'R-STUB', 'redirect stub without noindex');
  if (!raw) { push(file, 'R-STUB', 'refresh without url= target'); return true; }
  // יעד-יחסי נפתר מול תיקיית-ה-stub (התנהגות-דפדפן); ספרייה נפתרת ל-index.html
  let path;
  try {
    const u = new URL(raw, PAGES + (file.includes('/') ? file.slice(0, file.lastIndexOf('/') + 1) : ''));
    path = decodeURIComponent(u.href.startsWith(PAGES) ? u.href.slice(PAGES.length) : u.href);
  } catch { push(file, 'R-STUB', `unresolvable refresh target ${raw}`); return true; }
  const exists = tree.has(path) || (path.endsWith('/') && tree.has(path + 'index.html'));
  if (!exists) { push(file, 'R-STUB', `refresh target ${path} not in tree`); return true; }
  const cm = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  if (cm && cm[1] !== PAGES + path) push(file, 'R-STUB', `canonical ${cm[1]} ≠ refresh target ${PAGES + path}`);
  return true;
}

function checkSitemap(tree, indexable, push) {
  if (!fs.existsSync('sitemap.xml')) { push('sitemap.xml', 'R-SITEMAP', 'missing'); return; }
  const xml = fs.readFileSync('sitemap.xml', 'utf8');
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  for (const u of locs) {
    if (!u.startsWith(PAGES)) continue;
    const p = decodeURIComponent(u.slice(PAGES.length));
    if (!tree.has(p)) push('sitemap.xml', 'R-SITEMAP', `lists ${p} — not in tree`);
  }
  const listed = new Set(locs.filter((u) => u.startsWith(PAGES)).map((u) => decodeURIComponent(u.slice(PAGES.length))));
  for (const p of indexable) if (!listed.has(p)) push(p, 'R-SITEMAP', 'indexable page missing from sitemap.xml');
}

function checkTruth(tree, read, push) {
  // דוקטרינת דו-הספרים (R74): דלת-הכסף והארנק חייבים לשאת את מדדי-האמת — לנצח.
  const must = [
    ['money.html', ['id="sim-saos"', 'R74']],
    ['wallet.html', ['id="truth-banner"', 'R74']],
  ];
  for (const [f, sigs] of must) {
    if (!tree.has(f)) { push(f, 'R-TRUTH', 'truth surface missing from tree'); continue; }
    let html = '';
    try { html = read(f); } catch { push(f, 'R-TRUTH', 'unreadable'); continue; }
    for (const s of sigs) if (!html.includes(s)) push(f, 'R-TRUTH', `signature gone: ${s}`);
  }
}

function runStructuralBattery() {
  const tracked = execSync('git ls-tree -r HEAD --name-only', { encoding: 'utf8' }).split('\n').filter(Boolean);
  const tree = new Set(tracked);
  const htmlPages = tracked.filter((p) => p.endsWith('.html') && !p.startsWith('office3d/'));
  const read = (p) => fs.readFileSync(p, 'utf8');
  const list = [];
  const push = (file, rule, note) => {
    if (list.length < FINDINGS_CAP) list.push({ rule, file, note });
  };
  let scriptCount = 0;
  const indexable = [];
  let stubs = 0;
  for (const f of htmlPages) {
    let html;
    try { html = read(f); } catch { push(f, 'R-BALANCE', 'unreadable file'); continue; }
    checkBalance(html, f, push);
    scriptCount += checkScripts(html, f, push);
    const isStub = checkStub(html, f, push, tree);
    if (isStub) { stubs++; continue; } // canonical של גמלה = היעד שלה בכוונה
    checkCanonical(html, f, push);
    if (f !== '404.html' && !/<meta[^>]*noindex[^>]*>/i.test(html)) indexable.push(f);
  }
  checkSitemap(tree, indexable, push);
  checkTruth(tree, read, push);
  return { checked: htmlPages.length, scriptCount, indexed: indexable.length, stubs, list, capped: list.length >= FINDINGS_CAP };
}
// canonical של index.html בתיקייה = URL הספרייה (מנורמל פעמיים: גם בצד ההשוואה של sitemap)

const STRUCTURAL_ONLY = process.argv.includes('--structural-only');
const structural = runStructuralBattery();
verdict.structural = {
  checked: structural.checked,
  scriptsSyntaxChecked: structural.scriptCount,
  indexed: structural.indexed,
  stubs: structural.stubs,
  rules: STRUCT_RULES,
  findings: structural.list.length,
  ...(structural.capped ? { capped: true } : {}),
};
if (STRUCTURAL_ONLY) {
  console.log(`structural-only: pages=${structural.checked} scripts=${structural.scriptCount} indexed=${structural.indexed} stubs=${structural.stubs} findings=${structural.list.length}${structural.capped ? ' (CAPPED)' : ''}`);
  for (const f of structural.list) console.log(`  ${f.rule} ${f.file}: ${f.note}`);
  process.exit(structural.list.length ? 2 : 0);
}
verdict.findings.push(...structural.list);

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
verdict.summary.structuralFindings = structural.list.length;
verdict.summary.externalBlocked = verdict.externalBlocked.length;
verdict.summary.transientBlocked = verdict.transientBlocked.length;
verdict.overall = verdict.findings.length === 0 ? 'PASS' : 'FAIL';
verdict.note =
  'קישורים = אמת-חיה ב-Pages: 404 פנימי/חוץ = עמוד-מת (FINDING); 403/429/502 אצל צד-ג = חסימת-בוט (רמז בלבד); ' +
  '429/503 מפני-ה-github.com-שלנו = חנק-מדידה (TRANSIENT — ריטרי-3 ואז רשום-בלי-הכשל). ' +
  'קישורים הנבנים ב-JS בזמן-ריצה אינם נסרקים כאן — הם אינם href סטטי. ' +
  'structural = אמת-checkout בלי רשת (R75): ' + STRUCT_RULES.join('·') + ' — החוקים ב-agents/SELF-CHECKS.md.';

fs.writeFileSync('agents/site-audit.json', JSON.stringify(verdict, null, 1) + '\n');
console.log(`site-audit: ${verdict.overall} · pages=${verdict.pagesScanned} checked=${verdict.summary.checked} findings=${verdict.summary.findings} extBlocked=${verdict.summary.externalBlocked}`);
for (const f of verdict.findings) console.log(`  FINDING ${f.rule ? `${f.rule} ${f.file}: ${f.note}` : `${f.code} ${f.url}`}`);
process.exit(0);
