#!/usr/bin/env node
/**
 * bake-wallet — ארנק-אמת (W29, union-edition).
 *   אופה wallet-truth.html — עמוד-אמת אפס-JavaScript של נתיב-הכסף וההפקדות.
 *
 * היסטוריית-יוניון (מדידת W29): wallet.html המקורי נשבר (63 מילים גלויות על relay לוקאלי).
 * סוכן-עמית בנה מחדש את wallet.html כמכונה אינטראקטיבית שקוראת שרשרת-ציבורית ישירות —
 * הם הבעלים של wallet.html. התיקון המשלים כאן: עמוד-אמת אפס-JS שתמיד נרנדר — נתיב-הכסף,
 * מצב-הרשת, חומת-ההפקדות עם txids, והגופים הציבוריים — הכל מהלדגרים המחויבים בגיט.
 *
 * מקורות (keyless):
 *   Domain dex/world.json          — מצב-הרשת (גובה, fills, swaps, tps)
 *   Domain dex/deposits.json       — חומת-ההפקדות עם txids אמיתיים
 *   Domain moment/moment.json      — מחירי-אמת (steemUsd, sbdUsd, btcUsd) + הספר החי
 *   steem wallets-public.json      — כתובות-ציבור של הגופים (מה-ענף saos-cockpit)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OWNER = "roshpinacare-sys";
const PAGES = (p) => `https://${OWNER}.github.io/Domain/${p}`;
const SITE = PAGES("");

async function jget(url, timeoutMs = 12000) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const r = await fetch(url + `?t=${Date.now()}`, { headers: { "User-Agent": "bake-wallet", Accept: "application/vnd.github+json" }, cache: "no-store", signal: ac.signal });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return JSON.parse(await r.text());
  } finally {
    clearTimeout(t);
  }
}
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fmt = (n, d = 4) => (typeof n === "number" && isFinite(n) ? n.toFixed(d) : "—");
function ago(iso) {
  if (!iso) return "—";
  const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (m < 60) return `לפני ${m} דק׳`;
  const h = Math.floor(m / 60);
  if (h < 24) return `לפני ${h} ש׳`;
  return `לפני ${Math.floor(h / 24)} ימ׳`;
}

(async () => {
  const [world, dep, mom, wallets] = await Promise.all([
    jget(PAGES("dex/world.json")).catch(() => null),
    jget(PAGES("dex/deposits.json")).catch(() => null),
    jget(PAGES("moment/moment.json")).catch(() => null),
    jget("https://raw.githubusercontent.com/roshpinacare-sys/steem/saos-cockpit/sovereign/node/wallets-public.json").catch(() => null),
  ]);

  const st = world?.state || {};
  const deps = Array.isArray(dep?.deposits) ? dep.deposits : [];
  const mk = mom?.market || {};
  const book = mom?.liveBook || {};
  const agents = Array.isArray(wallets?.agents) ? wallets.agents : [];
  const totalSteem = deps.filter((d) => d.asset === "STEEM").reduce((a, d) => a + (+d.amount || 0), 0);
  const totalSbd = deps.filter((d) => d.asset === "SBD").reduce((a, d) => a + (+d.amount || 0), 0);

  const depsRows = deps
    .slice(0, 10)
    .map(
      (d) => `<tr>
  <td class="mono"><a href="https://steemblockexplorer.com/tx/${esc(d.txid)}" target="_blank" rel="noreferrer">${esc(String(d.txid).slice(0, 14))}…</a></td>
  <td class="num">${fmt(+d.amount, 2)} ${esc(d.asset)}</td>
  <td>${esc(d.to)}</td>
  <td>${esc(d.from || "—")}</td>
  <td class="num">${d.conf ?? "—"}</td>
  <td>${esc(ago(new Date(+d.ts).toISOString()))}</td>
</tr>`
    )
    .join("");

  const walletRows = agents
    .map((a) => {
      const name = a.name || a.id || "?";
      const keys = a.keys ? Object.keys(a.keys) : Array.isArray(a.publicKeys) ? a.publicKeys.map((k) => k.type || k.name || "?") : [];
      return `<tr><td><b>${esc(name)}</b></td><td>${keys.length ? esc(keys.join(", ")) : "—"}</td><td>${esc(a.role || a.note || "")}</td></tr>`;
    })
    .join("");

  const page = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>SAOS · ארנק-אמת · נתיב-הכסף בכתב · אפס-JavaScript</title>
<meta name="description" content="עמוד-האמת של הארנק — הפקדות עם txid, מצב-שרשת חי, נתיב-הכסף מחוץ-לרשת ועד הספר הפנימי. אפוי מלדגרים ציבוריים, תמיד נרנדר, אפס-JavaScript. הארנק האינטראקטיבי חי ב-wallet.html.">
<style>
:root{--bg:#0b0e11;--card:#12161b;--ink:#e7ecf1;--faint:#8b98a5;--line:#232b33;--ok:#0d9d6d;--warn:#c98a1b;--gold:#d4a94e}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.75 "Segoe UI",system-ui,-apple-system,"Noto Sans Hebrew",sans-serif}
.wrap{max-width:1060px;margin:0 auto;padding:0 18px}
a{color:#5fb9a0;text-decoration:none}a:hover{text-decoration:underline}
header.site{border-bottom:1px solid var(--line);background:#0d1116}
.hd{display:flex;align-items:center;gap:10px;padding:14px 0}
.brand{font-weight:800;font-size:18px}.brand small{display:block;font-weight:400;color:var(--faint);font-size:11px}
h1{font-size:34px;margin:30px 0 4px}h1 em{color:var(--gold);font-style:normal}
.sub{color:var(--faint);margin:0 0 18px}
/* W30: real AI-generated money-path art — the vault river */
.whero{position:relative;border:1px solid var(--line);border-radius:14px;overflow:hidden;margin:14px 0;background:#0d0b08}
.whero img{display:block;width:100%;max-height:300px;object-fit:cover;object-position:center 45%}
.whero figcaption{position:absolute;inset-inline:0;bottom:0;padding:12px 18px;font-size:13px;color:#f3e6c4;background:linear-gradient(180deg,rgba(10,8,5,0),rgba(10,8,5,.85));line-height:1.7}
.whero figcaption b{color:var(--gold)}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px 22px;margin:14px 0}
h2{margin:0 0 10px;font-size:21px}
.kick{display:block;font-size:11.5px;color:var(--gold);font-weight:600;letter-spacing:.4px}
.lead{font-size:17px;margin:0 0 10px}
.tbl{width:100%;border-collapse:collapse;margin:10px 0;font-size:14px}
.tbl th{text-align:start;color:var(--faint);font-weight:600;border-bottom:1px solid var(--line);padding:6px 8px}
.tbl td{border-bottom:1px solid #1a2129;padding:6px 8px;vertical-align:top}
.num{text-align:end;font-variant-numeric:tabular-nums}
.mono{font-family:ui-monospace,Menlo,Consolas,monospace;direction:ltr;text-align:start}
.ok{color:var(--ok)}.warn{color:var(--warn)}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:10px 0}
.kpi{border:1px solid var(--line);border-radius:12px;padding:12px 14px;background:#0e1318}
.kpi b{display:block;font-size:22px;font-variant-numeric:tabular-nums}
.kpi span{color:var(--faint);font-size:12px}
.path{display:flex;flex-wrap:wrap;gap:8px;align-items:stretch;margin:12px 0}
.stop{flex:1 1 180px;border:1px solid var(--line);border-radius:12px;padding:12px 14px;background:#0e1318;position:relative}
.stop b{color:var(--gold);display:block;font-size:13px;margin-bottom:4px}
.stop p{margin:0;font-size:13.5px;color:var(--ink)}
.stop .in{position:absolute;inset-inline-start:-10px;top:50%;transform:translateY(-50%);color:var(--gold);font-size:16px}
.ctx{color:var(--faint);font-size:13.5px;border-inline-start:3px solid var(--gold);padding-inline-start:10px;margin:10px 0 0}
.na{color:var(--faint);font-style:italic}
.src{margin-top:12px;padding-top:10px;border-top:1px dashed var(--line);color:var(--faint);font-size:12px}
footer{border-top:1px solid var(--line);padding:18px 0 30px;color:var(--faint);font-size:12px}
footer .wrap{display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px}
@media(max-width:760px){h1{font-size:26px}}
</style>
</head>
<body>
<header class="site"><div class="wrap hd">
  <a href="${SITE}index.html" style="color:inherit"><span class="brand">SAOS Network<small>ריבונות עם קבלות</small></span></a>
  <nav style="margin-inline-start:auto;display:flex;gap:14px;font-size:13px">
    <a href="${SITE}press/">עיתון-הצי</a>
    <a href="${SITE}money.html">נתיב-הכסף</a>
    <a href="${SITE}truth.html">הקבלות</a>
    <a href="${SITE}quality/">משטח-האיכות</a>
  </nav>
</div></header>
<main class="wrap">
  <h1>ארנק-<em>אמת</em> · בכתב</h1>
  <p class="sub">עמוד-האמת האפס-JS של הארנק — תמיד נרנדר, גם בלי שום סקריפט · הארנק האינטראקטיבי (חתימה במכשיר): <a href="wallet.html">wallet.html</a> · אפוי ב-${new Date().toISOString()} · כל עובדה מלדגר ציבורי מחויב-בגיט עם קישור-מקור</p>

  <figure class="whero">
    <img src="${SITE}assets/art/art-money.jpg" alt="נהר-זהב זורם אל כספת-אבן בקניון אובסידיאן — נוצר במנוע-יצירת-תמונות AI של הארכיטקטורה, 2026-10-21" loading="lazy">
    <figcaption><b>נהר-הזהב אל הכספת</b> — התמונה הזו לא נקנתה ולא צולמה: נוצרה על-ידי מנוע-ה-AI של הארכיטקטורה ב-2026-10-21 · provenance חתום ב-git (<span dir="ltr">assets/art/</span>). היכולת מוכחת בכל עמוד.</figcaption>
  </figure>

  <div class="card">
    <h2>נתיב-הכסף<span class="kick">מכסף-חוץ ועד הספר הפנימי — ארבע תחנות, כולן נמדדות</span></h2>
    <div class="path">
      <div class="stop"><b>1 · שווקים חיצוניים</b><p>STEEM = $${fmt(mk.steemUsd, 5)} · SBD = $${fmt(mk.sbdUsd, 4)} · BTC = $${typeof mk.btcUsd === "number" ? mk.btcUsd.toLocaleString("en-US") : "—"}<br><span class="warn">${esc(ago(mom?.publishedAt))} מ-moment-watch</span></p></div>
      <div class="stop"><b>2 · פאריטי-הצלב</b><p>1 STEEM ≈ ${fmt(mom?.paritySbdPerSteem, 5)} SBD במחירי-חוץ — זה קו-המחיר של כסף אמיתי, לא שלנו</p></div>
      <div class="stop"><b>3 · הספר החי שלנו</b><p>bid ${fmt(book.bestBid, 5)} / ask ${fmt(book.bestAsk, 5)} · ${esc(book.levels ?? "—")} רמות · עודף-בידים ${fmt(book.bidSurplusBps, 1)}bps</p></div>
      <div class="stop"><b>4 · הפקדות על השרשרת</b><p>${deps.length} הפקדות רשומות · ${fmt(totalSteem, 2)} STEEM + ${fmt(totalSbd, 2)} SBD — כל אחת עם txid</p></div>
    </div>
    <p class="ctx">נתיב-הכסף הוא התשובה לשאלה «לאן זה הולך»: כסף-חוץ קובע את הפאריטי, הפאריטי מאתגר את הספר הפנימי, והפקדות אמיתיות על השרשרת סוגרות את הלולאה. שום תחנה לא נלקחת על אמונה.</p>
  </div>

  <div class="card">
    <h2>מצב-הרשת<span class="kick">dex/world.json — הרשת שמריצה את השוק שלנו</span></h2>
    <div class="kpis">
      <div class="kpi"><b>#${typeof st.height === "number" ? st.height.toLocaleString("en-US") : "—"}</b><span>גובה-שרשרת</span></div>
      <div class="kpi"><b>${typeof st.fills === "number" ? st.fills.toLocaleString("en-US") : "—"}</b><span>מילויים מצטברים</span></div>
      <div class="kpi"><b>${typeof st.swaps === "number" ? st.swaps.toLocaleString("en-US") : "—"}</b><span>המרות</span></div>
      <div class="kpi"><b>${st.tps ?? "—"}</b><span>tx/שנ׳ עכשיו</span></div>
      <div class="kpi"><b>${typeof st.opsTotal === "number" ? st.opsTotal.toLocaleString("en-US") : "—"}</b><span>פעולות מצטברות</span></div>
    </div>
    <div class="src">מקור: <a href="${PAGES("dex/world.json")}" target="_blank" rel="noreferrer">dex/world.json</a> · ${esc(ago(world?.publishedAt))}</div>
  </div>

  <div class="card">
    <h2>חומת-ההפקדות<span class="kick">עד 10 ההפקדות האחרונות — txid לבדיקה על השרשרת</span></h2>
    ${deps.length ? `<table class="tbl"><thead><tr><th>txid</th><th>כמות</th><th>אל</th><th>מ</th><th>אישורים</th><th>מתי</th></tr></thead><tbody>${depsRows}</tbody></table>` : `<p class="na">לא נמדד — קובץ ההפקדות הציבורי ריק או לא השיב באפייה זו. אין אומדן, אין המצאה.</p>`}
    <div class="src">מקור: <a href="${PAGES("dex/deposits.json")}" target="_blank" rel="noreferrer">dex/deposits.json</a> · ${esc(ago(dep?.updatedAt))}</div>
  </div>

  <div class="card">
    <h2>הגופים הציבוריים<span class="kick">wallets-public.json — מה שפתוח לעין כל, בלי סודות</span></h2>
    ${agents.length ? `<table class="tbl"><thead><tr><th>גוף</th><th>מפתחות-ציבור</th><th>תפקיד</th></tr></thead><tbody>${walletRows}</tbody></table>` : `<p class="na">ספר-הכתובות הציבורי לא השיב באפייה זו — מדווח בכנות ולא מומצא.</p>`}
    <p class="ctx">מדיניות-חשיפה: יתרות-מסחר פרטיות ומפוקחות ב-<a href="${SITE}console.html">קונסול המפעיל</a> — בעמוד הציבורי מפורסמות רק כתובות ומפתחות-ציבור. ההיפוך הזה הוא הכוונה: הכול שאפשר לאמת — פומבי; הכול שמסוכן — לא נוגעים.</p>
    <div class="src">מקור: <a href="https://github.com/roshpinacare-sys/steem/blob/saos-cockpit/sovereign/node/wallets-public.json" target="_blank" rel="noreferrer">steem/saos-cockpit · wallets-public.json</a> · ${esc(ago(wallets?.derivedAt))}</div>
  </div>

  <div class="card">
    <h2>איך מאמתים כל טענה בעמוד הזה<span class="kick">מדריך-אימות פומבי · ארבע שאלות שכל קורא צריך לשאול</span></h2>
    <p class="lead">עמוד-אמת שלא ניתן לאימות הוא רק עוד טענה. הנה בדיוק איך מאמתים כל מספר כאן, בעצמכם, בלי לסמוך עלינו ובלי כלים מיוחדים:</p>
    <ol style="line-height:2;font-size:14.5px">
      <li><b>הפקדה ספציפית?</b> לחצו על ה-txid בטבלת חומת-ההפקדות. זה פותח את סורק-הבלוקים הציבורי של Steem, ושם תראו את הפעולה על השרשרת עצמה: הסכום, השולח, הנמען, והחותמת-הזמן. מה שנמדד כאן ומה שנמדד שם חייבים להיות אותו דבר.</li>
      <li><b>מצב-הרשת?</b> קישור-המקור מתחת ללוח מוביל קובץ-JSON חי שמוגש מ-GitHub Pages ציבורי. הגובה, המילויים, ההמרות והתפוקה — הכל שם בפתוח, עם חותמת-הזמן של הפרסום.</li>
      <li><b>המחירים והספר?</b> נתיב-הכסף מציג שלוש שכבות: מחירי-חוץ (מקור ציבורי שלא אנחנו כותבים אותו), פאריטי-הצלב שנגזר מהם באריתמטיקה פשוטה, והספר הפנימי שלנו. הפאריטי אפשר לחשב במחשבון: SBD-לדולר חלקי STEEM-לדולר.</li>
      <li><b>הכותבים עצמם?</b> כל עמוד בבית הזה נאפה ב-CI פומבי מקבצי-לדגר שמחויבים בגיט. היסטוריית-הגיט היא פנקס-האמת: אפשר לראות כל אפייה, מתי היא נכתבה, ומי כתבה אותה.</li>
    </ol>
    <p class="ctx">הדוקטרינה: קבלות, לא הבטחות. אם מספר כאן לא עומד באימות — זו מצאה-שורש, ויש לכם את הקישורים להוכיח את זה בפומבי.</p>
  </div>

  <div class="card">
    <h2>שאלות שנשאלות<span class="kick">תשובות ישירות, בלי עטיפות</span></h2>
    <dl style="line-height:1.9;font-size:14.5px">
      <dt><b>איפה היתרות החיות של הארנקות?</b></dt>
      <dd>נמדדות ומוצגות בקונסול המפעיל (<a href="${SITE}console.html">console.html</a>) לפי מדיניות-החשיפה המוצהרת: מה ששאפשר לאמת בפומבי פומבי, ומה שנמצא בסיכון-תפעולי לא מתפרסם. העמוד הזה לא מחזיק יתרות כי הוא לא המשטח שלהן, לא כי הן לא קיימות.</dd>
      <dt><b>למה העמוד הזה אפס-JavaScript?</b></dt>
      <dd>כי עמוד-אמת שתלוי בסקריפט נופל ביחד עם הסקריפט. האפייה ב-CI שופכת את הנתונים ל-HTML סטטי: העמוד נרנדר בכל דפדפן, בכל מצב, גם כש-JavaScript מנוטרל לגמרי. הגרסה האינטראקטיבית קיימת בנפרד ומקושרת למעלה.</dd>
      <dt><b>מה קורה כשמקור ציבורי לא עונה?</b></dt>
      <dd>האפייה כושלת-ברכות: הסעיף מוצג כ«לא נמדד» והאפייה ממשיכה. שום מספר לא מומצא כדי למלא טבלה. ראו פינת-הכנות בהמשך.</dd>
      <dt><b>למה הפקדה לא מופיעה מיד?</b></dt>
      <dd>האפייה רצה בקדנס מתוזמן וההפקדות נקראות מהשרשרת הציבורית עם דרישת-אישורים. הפער בין הפעולה על השרשרת לבין הופעתה כאן הוא פער-קדנס מוצהר, לא פער-אמת.</dd>
    </dl>
  </div>

  <div class="card">
    <h2>מה לא כאן — ולמה<span class="kick">פינת-הכנות של הארנק</span></h2>
    <ul>
      <li>יתרות-חיות לכל גוף — נמדדות בקונסול המפעיל (פרטי לפי מדיניות), לא מומצאות כאן.</li>
      <li>עסקאות-ביצוע חיות — מוצגות בקבלות המנוע וב-<a href="${SITE}receipts/">קבלות</a>, לא משוערכות כאן.</li>
      <li>מפתחות פרטיים — לעולם לא. לא כאן ולא בשום עמוד ציבורי.</li>
    </ul>
  </div>
</main>
<footer><div class="wrap">
  <span>SAOS Network · ארנק-אמת — נאפה ב-CI, keyless, אפס-JS</span>
  <span><a href="${SITE}money.html">נתיב-הכסף</a> · <a href="${SITE}press/">עיתון-הצי</a> · <a href="${SITE}truth.html">הקבלות</a> · <a href="${SITE}feed.xml">Atom</a></span>
</div></footer>
</body>
</html>
`;

  const abs = path.join(__dirname, "..", "wallet-truth.html");
  try {
    if (fs.readFileSync(abs, "utf8") === page) {
      console.log(JSON.stringify({ state: "ok", wallet: "same" }));
      return;
    }
  } catch {}
  const tmp = `${abs}.tmp-${process.pid}`;
  fs.writeFileSync(tmp, page);
  fs.renameSync(tmp, abs);
  console.log(JSON.stringify({ state: "ok", wallet: "baked", bytes: page.length }));
})().catch((e) => {
  console.log(JSON.stringify({ state: "fail-soft", msg: String(e.message || e).slice(0, 140) }));
  process.exit(0);
});
