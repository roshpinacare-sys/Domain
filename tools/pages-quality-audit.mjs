#!/usr/bin/env node
/**
 * pages-quality-audit — משטח-האיכות (W29).
 *   מודד את עמודי-המפתח של האתר בכל ריצה: עומק-תוכן גלוי, תלות-JS,
 *   טריות-נתונים, וקישורים-פנימיים — וכותב quality/report.json + quality/index.html.
 *
 * למה: ה-owner מדד «עמודים נמוכים, נופלים, לא נעקבים». התשובה המבנית:
 * איכות שנמדדת לבד, כל חצי שעה, בפומבי — לא טענה שצריך לסמוך עליה.
 *
 * חוקי-שיפוט (fail-soft, לעולם לא מפיל את הריצה):
 *   FAIL  — עומק גלוי < 150 מילים בעמוד-תוכן, או קובץ חסר
 *   WARN  — טריות-מקור > 6 שעות (למי שמציג נתונים), או עומק 150–400
 *   PASS  — מעבר זה
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SITE = "https://roshpinacare-sys.github.io/Domain/";

/* מפת-עמודי-המפתח: עמוד → המקורות-החיים שהוא אמור לשקף (טריות) */
const PAGE_MAP = {
  "index.html": [],
  "console.html": ["status.json"],
  "money.html": ["moment/moment.json", "agents/money-ledger.json", "dex/state.json"],
  "wallet-truth.html": ["dex/world.json", "dex/deposits.json", "moment/moment.json"],
  "wallet.html": [], // JS-app (peer lane) — exempt from static depth, jsFetches reported
  "press/index.html": ["status.json", "moment/moment.json", "dex/world.json", "weave/vitals.json"],
  "badges.html": ["public/pulse.json"],
  "truth.html": ["truth/latest.json"],
  "products.html": [],
  "deposits.html": ["dex/deposits.json"],
  "sovereign.html": ["mirror.json"],
};

function stripHtml(t) {
  t = t.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  t = t.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  t = t.replace(/<!--[\s\S]*?-->/g, "");
  t = t.replace(/<[^>]+>/g, " ");
  return t.replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function tsOf(o) {
  if (!o || typeof o !== "object") return null;
  const KEY = ["ts", "time", "generatedAt", "publishedAt", "updatedAt", "capturedAt", "at", "timestamp", "derivedAt"];
  let best = null;
  const walk = (x, depth) => {
    if (best || depth > 4 || !x || typeof x !== "object") return;
    for (const [k, v] of Object.entries(x)) {
      if (KEY.includes(k) && typeof v === "string" && /^\d{4}-\d{2}-\d{2}T/.test(v)) {
        const t = new Date(v).getTime();
        if (isFinite(t) && (!best || t > best)) best = t;
      } else if (typeof v === "object") walk(v, depth + 1);
    }
  };
  walk(o, 0);
  return best;
}

function auditPage(page, sources) {
  const abs = path.join(ROOT, page);
  const res = { page, words: 0, jsFetches: 0, dataAgeHours: null, internalLinksBroken: [], verdict: "PASS", issues: [] };
  if (!fs.existsSync(abs)) {
    res.verdict = "FAIL";
    res.issues.push("קובץ חסר");
    return res;
  }
  const html = fs.readFileSync(abs, "utf8");
  const text = stripHtml(html);
  res.words = text.split(/\s+/).filter((w) => w.length > 1).length;
  res.jsFetches = (html.match(/fetch\(/g) || []).length;

  for (const src of sources) {
    const p = path.join(ROOT, src);
    if (!fs.existsSync(p)) {
      res.issues.push(`מקור חסר: ${src}`);
      continue;
    }
    try {
      const ts = tsOf(JSON.parse(fs.readFileSync(p, "utf8")));
      if (ts) {
        const h = (Date.now() - ts) / 3600000;
        if (res.dataAgeHours === null || h > res.dataAgeHours) res.dataAgeHours = Math.round(h * 10) / 10;
      }
    } catch {}
  }

  /* קישורים-פנימיים: רק כאלה שמובילים לקבצים מקומיים */
  const hrefs = [...html.matchAll(/href="([^"#?]+)\.html/g)].map((m) => m[1] + ".html");
  for (const h of hrefs) {
    let clean = h.replace(/^\.\//, "");
    if (/^https?:/.test(clean)) continue;
    /* AGENT4-LINKFIX BEGIN (agent4 · trace 1a15d16ba3498581) — additive.
       תיקון-פגם נמדד: קישור-יחסי נפתר מול תיקיית-העמוד שלו, לא מול שורש-האתר.
       הפגם דגל false-positive על press/index.html (editions/2026-10-21.html
       מומש ל-ROOT/editions/... במקום ROOT/press/editions/...) — וכל עמוד
       בתת-תיקייה היה פגיע לאותה רמאות-מדידה. קישור שמתחיל ב-/ נשאר מול ROOT. */
    let abs;
    if (clean.startsWith("/")) abs = path.join(ROOT, clean.slice(1));
    else abs = path.normalize(path.join(ROOT, path.dirname(page), clean));
    if (!fs.existsSync(abs)) res.internalLinksBroken.push(clean);
    /* AGENT4-LINKFIX END */
  }

  const isToolish = /console|verify|runner-kit|quality/.test(page);
  const isJsApp = res.jsFetches >= 5; // interactive JS product — depth is rendered client-side
  if (res.words < 60 && !isToolish && !isJsApp) {
    res.verdict = "FAIL";
    res.issues.push(`עומק גלוי קריטי: ${res.words} מילים`);
  } else if (res.words < 150 && !isToolish && !isJsApp) {
    res.verdict = "FAIL";
    res.issues.push(`עומק גלוי נמוך: ${res.words} מילים`);
  } else if (res.words < 400 && !isToolish && !isJsApp) {
    res.verdict = "WARN";
    res.issues.push(`עומק בינוני: ${res.words} מילים`);
  }
  if (isJsApp) res.issues.push(`JS-app (${res.jsFetches} fetches) — נבדק לקיום, לא לעומק-סטטי`);
  if (res.dataAgeHours !== null && res.dataAgeHours > 6) {
    res.verdict = res.verdict === "FAIL" ? "FAIL" : "WARN";
    res.issues.push(`נתונים בני ${res.dataAgeHours} שעות (סף 6)`);
  }
  if (res.internalLinksBroken.length) {
    res.verdict = "WARN";
    res.issues.push(`קישורים-פנימיים שבורים: ${res.internalLinksBroken.slice(0, 3).join(", ")}`);
  }
  return res;
}

(async () => {
  const pages = Object.entries(PAGE_MAP).map(([p, srcs]) => auditPage(p, srcs));
  const counts = { PASS: 0, WARN: 0, FAIL: 0 };
  for (const p of pages) counts[p.verdict]++;
  const report = {
    format: "pages-quality/1",
    at: new Date().toISOString(),
    doctrine: "quality that is measured every 30 minutes in public — not a claim to be trusted",
    counts,
    pages,
  };
  fs.mkdirSync(path.join(ROOT, "quality"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "quality", "report.json"), JSON.stringify(report, null, 2));

  /* AGENT4-QUALITY-BADGE BEGIN (agent4 · trace 1a15d16ba3498581) — additive.
     badges.html מכריז על תג-איכות (badge/quality.svg) שמעולם לא נאפה → 404 חי
     (agents/site-audit.json). התיקון-השורש: התג נאפה כאן, מיד אחרי הדוח שהוא מסכם,
     על-ידי בעל-הנתונים עצמו — לא ידנית, לא ערוך-יד. צבע לפי המדידה: FAIL אדום,
     WARN ענבר, PASS ירוק. אפייה-מותנית (כמו bakeIfChanged) כדי לא לרענן סתם. */
  try {
    const badgeEsc = (s) =>
      String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const badgeW = (s) => Math.round(String(s).length * 6.45);
    const c = counts;
    const color = c.FAIL > 0 ? "#b3001b" : c.WARN > 0 ? "#a35b00" : "#1a7f37";
    const qLabel = "SAOS quality";
    const qValue = `${c.PASS} PASS · ${c.WARN} WARN · ${c.FAIL} FAIL`;
    const lw = badgeW(qLabel) + 14;
    const vw = badgeW(qValue) + 14;
    const bw = lw + vw;
    const bh = 20;
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<!-- SAOS measured badge — baked from quality/report.json by pages-quality-audit CI. Do not edit by hand; it is re-baked every run. -->
<svg xmlns="http://www.w3.org/2000/svg" width="${bw}" height="${bh}" role="img" aria-label="${badgeEsc(qLabel)}: ${badgeEsc(qValue)}" viewBox="0 0 ${bw} ${bh}" font-family="Verdana,Geneva,DejaVu Sans,sans-serif">
<linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient>
<clipPath id="r"><rect width="${bw}" height="${bh}" rx="3" fill="#fff"/></clipPath>
<g clip-path="url(#r)">
<rect width="${lw}" height="${bh}" fill="#1d1f24"/>
<rect x="${lw}" width="${vw}" height="${bh}" fill="${color}"/>
<rect width="${bw}" height="${bh}" fill="url(#s)"/>
</g>
<g fill="#fff" text-anchor="middle" font-size="11">
<circle cx="9" cy="${bh / 2}" r="3.2" fill="#2fae63"/>
<text x="${9 + 3.2 + 3.5}" y="${bh / 2 + 3.8}" fill="#c8cdd4" text-anchor="start">${badgeEsc(qLabel)}</text>
<text x="${lw + vw / 2}" y="${bh / 2 + 3.8}" fill="#ffffff">${badgeEsc(qValue)}</text>
</g>
</svg>
`;
    const badgeAbs = path.join(ROOT, "badge", "quality.svg");
    const prev = fs.existsSync(badgeAbs) ? fs.readFileSync(badgeAbs, "utf8") : null;
    if (prev !== svg) fs.writeFileSync(badgeAbs, svg);
  } catch {
    /* fail-soft: התג לעולם לא מפיל את המדידה עצמה */
  }
  /* AGENT4-QUALITY-BADGE END */

  const cls = { PASS: "ok", WARN: "warn", FAIL: "fail" };
  const rows = pages
    .map(
      (p) => `<tr>
  <td><a href="${SITE}${p.page.replace(/index\.html$/, "")}">${esc(p.page)}</a></td>
  <td class="num">${p.words.toLocaleString("en-US")}</td>
  <td class="num">${p.jsFetches}</td>
  <td class="num">${p.dataAgeHours === null ? "—" : p.dataAgeHours + "ש׳"}</td>
  <td class="${cls[p.verdict]}"><b>${p.verdict}</b></td>
  <td>${p.issues.length ? esc(p.issues.join(" · ")) : "—"}</td>
</tr>`
    )
    .join("");

  const pageHtml = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>SAOS · משטח-האיכות · איכות שנמדדת לבד</title>
<meta name="description" content="כל עמודי-המפתח נמדדים אוטומטית כל חצי שעה: עומק-תוכן, טריות-נתונים, קישורים. איכות שאי-אפשר לזייף.">
<style>
:root{--bg:#0b0e11;--card:#12161b;--ink:#e7ecf1;--faint:#8b98a5;--line:#232b33;--ok:#0d9d6d;--warn:#c98a1b;--fail:#c0392b;--gold:#d4a94e}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.75 "Segoe UI",system-ui,-apple-system,"Noto Sans Hebrew",sans-serif}
.wrap{max-width:1060px;margin:0 auto;padding:0 18px}
a{color:#5fb9a0;text-decoration:none}a:hover{text-decoration:underline}
h1{font-size:32px;margin:30px 0 4px}h1 em{color:var(--gold);font-style:normal}
.sub{color:var(--faint);margin:0 0 18px}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px 22px;margin:14px 0}
.tbl{width:100%;border-collapse:collapse;font-size:14px}
.tbl th{text-align:start;color:var(--faint);border-bottom:1px solid var(--line);padding:6px 8px}
.tbl td{border-bottom:1px solid #1a2129;padding:6px 8px}
.num{text-align:end;font-variant-numeric:tabular-nums}
.ok{color:var(--ok)}.warn{color:var(--warn)}.fail{color:var(--fail)}
.ctx{color:var(--faint);font-size:13.5px;border-inline-start:3px solid var(--gold);padding-inline-start:10px}
footer{border-top:1px solid var(--line);padding:18px 0 30px;color:var(--faint);font-size:12px}
</style>
</head>
<body>
<div class="wrap">
  <h1>משטח-<em>האיכות</em></h1>
  <p class="sub">נמדד ב-${new Date().toISOString()} · כל חצי שעה ב-CI · אפס-JavaScript</p>
  <div class="card">
    <p class="ctx">הדוקטרינה: איכות שלא נמדדת היא טענה. כל עמודי-המפתח נמדדים אוטומטית — עומק-תוכן גלוי, תלות-JavaScript (שמתה בדפדפנים), טריות-הנתונים שהעמוד מציג, וקישורים-פנימיים שבורים. כשעמוד נופל — זה נראה כאן בפומבי, מיד. <b>${counts.FAIL} FAIL · ${counts.WARN} WARN · ${counts.PASS} PASS</b> מתוך ${pages.length}.</p>
    <table class="tbl"><thead><tr><th>עמוד</th><th>מילים גלויות</th><th>fetch-JS</th><th>טריות-נתונים</th><th>פסיקה</th><th>ממצאים</th></tr></thead>
    <tbody>${rows}</tbody></table>
    <p class="ctx">קובץ-המדידה הגולמי: <a href="${SITE}quality/report.json">quality/report.json</a> — פתוח לכולם, נכתב על-ידי ה-CI, לא על-ידי מי שרוצה להיראות טוב.</p>
  </div>
</div>
<footer><div class="wrap">SAOS Network · משטח-האיכות · נאפה ב-CI · אפס-JS</div></footer>
</body>
</html>
`;
  fs.writeFileSync(path.join(ROOT, "quality", "index.html"), pageHtml);

  console.log(JSON.stringify({ state: "ok", counts, pages: pages.length }));
  process.exit(0);
})().catch((e) => {
  console.log(JSON.stringify({ state: "fail-soft", msg: String(e.message || e).slice(0, 140) }));
  process.exit(0);
});
