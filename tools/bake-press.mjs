#!/usr/bin/env node
/**
 * bake-press — עיתון-הצי היומי (roadmap B של Task 44).
 *   אופה press/index.html — מהדורה יומית קריאה-אנושית מהמדידות החיות.
 *
 * מקורות-ציבוריים בלבד (keyless, אפס-סודות):
 *   FleetHQ raw office/state/office-state.json   — כתבה-ראשית: המשרד החי
 *   Domain status.json                            — מערכת: דופק-הצי
 *   Domain moment/moment.json                     — מוסף-כלכלה
 *   Domain content/published.json                 — מוסף-השרשרת (כותרות-בלבד לפי מדיניות-החשיפה)
 *   Domain agents/recruitment.json                — מודעות-הגיוס
 *   Domain agents/ventures.json                   — מוסף-המיזמים
 *
 * חוקי-כנות:
 *  - מקור שנכשל → הכתבה נפתחת ב"לא נמדד במהדורה זו" — לעולם לא מספר-מזויף.
 *  - אפס-JavaScript בעמוד המאופה: HTML סטטי לחלוטין (שיעור-Task 41 — שום-סקריפט שיכול למות ב-parse).
 *  - כתיבה אטומית (tmp+rename) ורק-כשהתוכן באמת השתנה.
 *  - כל כתבה חותמת מאיפה היא באה ומתי נמדדה.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OWNER = "roshpinacare-sys";
const RAW = (repo, p) => `https://raw.githubusercontent.com/${OWNER}/${repo}/main/${p}`;
const PAGES = (p) => `https://${OWNER}.github.io/Domain/${p}`;
const SITE = `https://${OWNER}.github.io/Domain/`;
const H = { "User-Agent": "bake-press", Accept: "application/vnd.github+json" };

async function jget(url, timeoutMs = 12000) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const r = await fetch(url + `?t=${Date.now()}`, { headers: H, cache: "no-store", signal: ac.signal });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return JSON.parse(await r.text()); // raw מחזיר text/plain גם ל-JSON תקני
  } finally {
    clearTimeout(t);
  }
}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function ago(iso) {
  if (!iso) return null;
  const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (m < 60) return `${m} דק׳`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} ש׳`;
  return `${Math.floor(h / 24)} ימ׳`;
}

/* ----------------------------- section bakers ----------------------------- */

function sec(title, kicker, bodyHtml, source, measuredIso) {
  const when = measuredIso ? `נמדד לפני ${ago(measuredIso)}` : "לא נמדד במהדורה זו";
  return `<article class="card">
  <h2>${esc(title)}<span class="kick">${esc(kicker)}</span></h2>
  ${bodyHtml}
  <div class="src">מקור: <a href="${source}" target="_blank" rel="noreferrer">${source.replace(/^https?:\/\//, "").slice(0, 64)}</a> · ${esc(when)}</div>
</article>`;
}

const NOT_MEASURED = `<p class="na">לא נמדד במהדורה זו — המקור הציבורי לא השיב. אין אומדן, אין המצאה.</p>`;

/* --------------------------------- main ----------------------------------- */

(async () => {
  const dayHe = new Intl.DateTimeFormat("he-IL", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jerusalem" }).format(new Date());

  /* 1) כתבה-ראשית — המשרד החי */
  let officeHtml = NOT_MEASURED, officeIso = null;
  try {
    const o = await jget(RAW("FleetHQ", "office/state/office-state.json"));
    officeIso = o.capturedAt;
    const ageM = Math.round((Date.now() - new Date(o.capturedAt).getTime()) / 60000);
    const live = o.connected === true && ageM <= 130;
    const shifts = (o.statusHe && /\((\d+) משמרות/.exec(o.statusHe))?.[1] ?? "?";
    officeHtml = `
  <p class="lead">${esc(o.statusHe || "מדידת-משרד")}</p>
  <ul>
    <li><b>${shifts}</b> משמרות שעבדו בפועל ודיווחו</li>
    <li>המדידה האחרונה: <b>לפני ${ago(o.capturedAt)}</b> (${esc(o.capturedAt)})</li>
    <li>חוק-החדר (130 דק׳): <b class="${live ? "ok" : "warn"}">${live ? "בתוך-החוק — פורמן חי" : `מחוץ-לחוק (${ageM} דק׳)`}</b></li>
  </ul>`;
  } catch (e) {
    officeHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 2) מערכת — דופק-הצי */
  let fleetHtml = NOT_MEASURED, fleetIso = null, summaryRow = "";
  try {
    const s = await jget(PAGES("status.json"));
    fleetIso = s.generatedAt;
    const p = s.pulse || {};
    const sum = s.summary || {};
    summaryRow = Object.entries(sum)
      .map(([k, v]) => `<span class="chip ${k === "ALIVE" ? "ok" : ""}">${esc(k)} ${esc(v)}</span>`)
      .join(" ");
    fleetHtml = `
  <p class="lead">${esc(p.beatArteries ?? "?")}/${esc(p.totalArteries ?? "?")} עורקים פעמו עכשיו על פני <b>${esc(p.repos ?? "?")}</b> repos.</p>
  <p class="chips">${summaryRow || ""}</p>
  <p class="sub">עורק = סוכן-משימה מתוזמן. "פעם" = הרצה אמיתית בחלון-המדידה — לא הצהרה.</p>`;
  } catch (e) {
    fleetHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 3) מוסף-כלכלה — moment-watch */
  let momHtml = NOT_MEASURED, momIso = null;
  try {
    const m = await jget(PAGES("moment/moment.json"));
    momIso = m.publishedAt;
    const bps = m.liveBook?.bidSurplusBps;
    const dir = typeof bps === "number" ? (bps >= 0 ? `+${bps}` : `${bps}`) : "?";
    momHtml = `
  <p class="lead">steem-edge: <b>${esc(dir)} bps</b> · משטר: <b>${esc(m.regime?.label ?? "?")}</b></p>
  <ul>
    <li>STEEM ${esc((m.market?.steemUsd ?? 0).toFixed(5))}$ (${esc((m.market?.steem24h ?? 0) >= 0 ? "+" : "")}${esc((m.market?.steem24h ?? 0).toFixed(2))}% ב-24h) · BTC ${esc(Math.round(m.market?.btcUsd ?? 0).toLocaleString("en-US"))}$</li>
    <li>פחד-וחמדנות: ${esc(m.market?.fearGreed?.value ?? "?")} — ${esc(m.market?.fearGreed?.label ?? "?")}</li>
  </ul>
  <p class="sub">קריאת-רגע שנמדדת כל 30 דק׳ ומנוקדת רק אחרי-האופק. אימון-כמדידה, לעולם לא הבטחה.</p>`;
  } catch (e) {
    momHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 4) מוסף-השרשרת — מה פורסם באמת */
  let chainHtml = NOT_MEASURED, chainIso = null;
  try {
    const pub = await jget(PAGES("content/published.json"));
    chainIso = pub.generatedAt;
    const posts = (pub.posts || []).slice(0, 8);
    chainHtml = posts.length
      ? `<ul class="posts">${posts
          .map(
            (p) => `<li><span class="tagc">${esc(p.chain)}</span> ${esc(p.title)} <span class="dim">· לפני ${ago(p.at) ?? "?"}</span></li>`
          )
          .join("")}</ul><p class="sub">כותרות בלבד לפי מדיניות-החשיפה הציבורית — הקבלות המלאות חתומות בשרשרת.</p>`
      : `<p class="na">אין פרסומים במאגר הציבורי כרגע.</p>`;
  } catch (e) {
    chainHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 5) מודעות-הגיוס */
  let recHtml = NOT_MEASURED, recIso = null;
  try {
    const r = await jget(PAGES("agents/recruitment.json"));
    recIso = r.generatedAt || r.at;
    const roles = r.roles || [];
    const open = roles.filter((x) => x.status !== "FILLED");
    recHtml = roles.length
      ? `<p class="lead"><b>${open.length}</b> תפקידים פתוחים מתוך ${roles.length} מוגדרים.</p><ul class="posts">${open
          .map((x) => `<li><span class="tagc open">${esc(x.status || "OPEN")}</span> ${esc(x.title?.he || x.title?.en || x.id)} <span class="dim">· ${esc(String(x.contract || "").slice(0, 90))}…</span></li>`)
          .join("")}</ul><p class="sub">מועמדות: דרך issues בריפו בלבד. תפקיד PROPOSED = הגדרה בהמתנה למימוש.</p>`
      : `<p class="na">אין לוח-תפקידים מוגדר כרגע.</p>`;
  } catch (e) {
    recHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 6) מוסף-המיזמים */
  let venHtml = NOT_MEASURED, venIso = null;
  try {
    const v = await jget(PAGES("agents/ventures.json"));
    venIso = v.generatedAt || v.at;
    const surf = v.ledger?.earnSurfaces || {};
    const sw = surf.v2MarketRealizedLifetime?.swaphive;
    const usd = surf.v2MarketRealizedLifetime?.usd;
    const oracle = v.ledger?.oracle;
    const honest = oracle && !/unreachable/i.test(String(oracle)) ? esc(String(oracle).slice(0, 60)) : "האורקל לא השיב הרצה זו — מדווח בכנות, בלי אומדן";
    venHtml = `
  <p class="lead">שוק v2 — מסחר ממומש לכל-החיים: <b>${esc(sw ?? "—")}</b> HIVE (${esc(usd ?? "—")}$) על <b>${esc(surf.v2MarketRealizedLifetime?.fills ?? "—")}</b> ביצועים.</p>
  <ul><li>אורקל-KPI: ${honest}</li><li>השוואת-מחירים חיה: HIVE ${esc(surf.priceOracle?.hive ?? "—")}$ · STEEM ${esc(surf.priceOracle?.steem ?? "—")}$ · BLURT ${esc(surf.priceOracle?.blurt ?? "—")}$</li></ul>
  <p class="sub">sums לכל-החיים אינם קצב-יומי — הקצב מגיע רק מהאורקל (חוק earn-governor v1.1).</p>`;
  } catch (e) {
    venHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* ------------------------------- the page -------------------------------- */

  const page = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>עיתון-הצי · מהדורת ${dayHe} · SAOS Network</title>
<meta name="description" content="העיתון היומי של רשת SAOS — כל כתבה נאפית ממדידות-ציבוריות חיות: המשרד, הצי, השוק, השרשרת, הגיוס והמיזמים. בלי JavaScript, בלי סודות, בלי המצאות.">
<meta name="theme-color" content="#09090b">
<link rel="canonical" href="${SITE}press/">
<link rel="alternate" type="application/atom+xml" href="${SITE}feed.xml" title="עדכוני הצי (Atom)">
<meta property="og:type" content="website">
<meta property="og:site_name" content="SAOS Network">
<meta property="og:title" content="עיתון-הצי · מהדורת ${dayHe}">
<meta property="og:description" content="עיתון שנכתב על-ידי מכונה שמודדת את עצמה בפומבי — ומודה כשהיא לא מצליחה למדוד.">
<meta property="og:url" content="${SITE}press/">
<meta property="og:image" content="${SITE}assets/og-cover.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8' fill='none' stroke='%2310b981' stroke-width='1.8' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='12' r='3' fill='none' stroke='%2310b981' stroke-width='1.8'/%3E%3C/svg%3E">
<style>
:root{ --bg:#f5f3f1; --panel:#fff; --line:#e6e2dd; --acc:#0d9d6d; --acc-bright:#0b8a60; --acc-bg:rgba(13,157,109,.07); --acc-line:rgba(13,157,109,.30); --text:#1d1d1f; --dim:#57534e; --faint:#8a8580; --sans:-apple-system,'Segoe UI',Roboto,'Helvetica Neue','Noto Sans Hebrew',Arial,sans-serif; --r:14px; --r-sm:10px; }
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--text);font-family:var(--sans);min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:var(--acc-bright);text-decoration:none}a:hover{text-decoration:underline}
.wrap{max-width:860px;margin:0 auto;padding:0 18px}
header.site{position:sticky;top:0;z-index:50;background:rgba(245,243,241,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.hd{height:58px;display:flex;align-items:center;gap:12px}
.brand{font-weight:700;font-size:15px}.brand small{display:block;font-weight:500;font-size:10.5px;color:var(--faint)}
.mast{padding:36px 0 8px;text-align:center;border-bottom:3px double var(--line2,#c9c2ba)}
.mast h1{font-size:clamp(30px,6vw,46px);font-weight:900;letter-spacing:-1px}
.mast h1 em{font-style:normal;color:var(--acc-bright)}
.mast .date{color:var(--dim);font-size:14px;margin-top:6px}
.mast .laws{color:var(--faint);font-size:12px;margin:8px 0 16px}
.grid{display:grid;gap:16px;padding:24px 0 10px}
@media(min-width:760px){.grid{grid-template-columns:1fr 1fr}.card.lead-card{grid-column:1/-1}}
.card{background:var(--panel);border:1px solid var(--line);border-radius:var(--r);padding:20px;display:flex;flex-direction:column;gap:10px}
.card h2{font-size:17px;font-weight:800}
.card h2 .kick{display:block;font-size:11.5px;font-weight:500;color:var(--faint);margin-top:2px}
.lead{font-size:15px;line-height:1.75}
.card ul{list-style:none;display:flex;flex-direction:column;gap:6px}
.card li{font-size:13.5px;color:var(--dim);line-height:1.65}
.card li b{color:var(--text)}
.ok{color:var(--acc-bright);font-weight:700}.warn{color:#a16207;font-weight:700}
.chips{display:flex;flex-wrap:wrap;gap:6px}
.chip{background:var(--acc-bg);border:1px solid var(--acc-line);color:var(--acc-bright);border-radius:999px;padding:2px 10px;font-size:11.5px;font-weight:650}
.chip:not(.ok){background:#f1efec;border-color:var(--line);color:var(--dim)}
.posts li{border-inline-start:2px solid var(--acc-line);padding-inline-start:10px}
.tagc{display:inline-block;background:#141a20;color:#c8e8d8;border-radius:5px;font-size:10.5px;padding:1px 7px;font-weight:700;letter-spacing:.5px}
.tagc.open{background:var(--acc);color:#fff}
.dim{color:var(--faint);font-size:12px}
.sub{color:var(--faint);font-size:12px;line-height:1.7}
.na{color:var(--faint);font-size:13.5px;font-style:italic}
.src{font-size:11px;color:var(--faint);margin-top:auto;padding-top:6px;border-top:1px dashed var(--line)}
.src a{direction:ltr;unicode-bidi:embed}
.strip{display:flex;gap:14px;align-items:center;justify-content:center;flex-wrap:wrap;padding:14px 0 4px}
.strip img{height:20px}
footer{border-top:1px solid var(--line);padding:18px 0 30px;color:var(--faint);font-size:12px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px}
</style>
</head>
<body>
<header class="site"><div class="wrap hd">
  <a href="${SITE}index.html" style="color:inherit"><span class="brand">SAOS Network<small>ריבונות עם קבלות</small></span></a>
  <nav style="margin-inline-start:auto;display:flex;gap:14px;font-size:13px">
    <a href="${SITE}feed.xml">Atom</a>
    <a href="${SITE}badges.html">תגי-הוכחה</a>
    <a href="${SITE}office3d/">המשרד החי</a>
  </nav>
</div></header>
<main class="wrap">
  <section class="mast">
    <h1>עיתון-<em>הצי</em></h1>
    <div class="date">מהדורת ${dayHe}</div>
    <div class="laws">נכתב על-ידי האורגניזם עצמו · כל מספר נמדד ממקור-ציבורי ברגע-האפייה · מקור שלא השיב מדווח בכנות ולא מומצא · אפס-JavaScript — שום-דבר שיכול למות בדפדפן שלך</div>
  </section>
  <div class="strip">
    <a href="${SITE}badges.html"><img src="${SITE}badge/office.svg" alt="SAOS office"></a>
    <a href="${SITE}badges.html"><img src="${SITE}badge/fleet.svg" alt="SAOS fleet"></a>
    <a href="${SITE}badges.html"><img src="${SITE}badge/edge.svg" alt="steem-edge"></a>
  </div>
  <section class="grid">
    ${sec("המשרד החי", "כתבה-ראשית · FleetHQ office-state", officeHtml, "https://raw.githubusercontent.com/roshpinacare-sys/FleetHQ/main/office/state/office-state.json", officeIso).replace('class="card"', 'class="card lead-card"')}
    ${sec("דופק-הצי", "מערכת · status.json", fleetHtml, "https://roshpinacare-sys.github.io/Domain/status.json", fleetIso)}
    ${sec("הרגע הכלכלי", "moment-watch · R62", momHtml, "https://roshpinacare-sys.github.io/Domain/moment/moment.json", momIso)}
    ${sec("בשרשרת", "מוסף-הפרסומים", chainHtml, "https://roshpinacare-sys.github.io/Domain/content/published.json", chainIso)}
    ${sec("מודעות-הגיוס", "לוח-התפקידים של האורגניזם", recHtml, "https://roshpinacare-sys.github.io/Domain/agents/recruitment.json", recIso)}
    ${sec("מוסף-המיזמים", "venture-desk", venHtml, "https://roshpinacare-sys.github.io/Domain/agents/ventures.json", venIso)}
  </section>
</main>
<footer><div class="wrap" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px">
  <span>SAOS Network · עיתון-הצי — נאפה ב-CI, keyless</span>
  <span><a href="${SITE}truth.html">הקבלות</a> · <a href="${SITE}badges.html">תגי-הוכחה</a> · <a href="${SITE}feed.xml">RSS/Atom</a> · <a href="${SITE}sitemap.html">מפת-האתר</a></span>
</div></footer>
</body>
</html>
`;

  const abs = path.join(__dirname, "..", "press", "index.html");
  try {
    const prev = fs.readFileSync(abs, "utf8");
    if (prev === page) {
      console.log(JSON.stringify({ state: "ok", press: "same" }));
      return;
    }
  } catch { /* first bake */ }
  const tmp = `${abs}.tmp-${process.pid}`;
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(tmp, page);
  fs.renameSync(tmp, abs);
  console.log(JSON.stringify({ state: "ok", press: "baked", bytes: page.length }));
})().catch((e) => {
  console.log(JSON.stringify({ state: "fail-soft", msg: String(e.message || e).slice(0, 140) }));
  process.exit(0);
});
