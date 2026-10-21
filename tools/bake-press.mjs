#!/usr/bin/env node
/**
 * bake-press — עיתון-הצי היומי (roadmap B של Task 44).
 *   אופה press/index.html — מהדורה יומית קריאה-אנושית מהמדידות החיות.
 *
 * מקורות-ציבוריים בלבד (keyless, אפס-סודות):
 *   FleetHQ raw office/state/office-state.json   — כתבה-ראשית: המשרד החי
 *   Domain status.json                            — מערכת: דופק-הצי
 *   Domain moment/moment.json                     — מוסף-כלכלה
 *   Domain feature_list.json                      — מוסף-הכלים: רישום-היכולות (G45)
 *   Domain agents/market-grid.json + arb-mesh.json + mm-volume.json — מוסף-השוק
 *   Domain agents/money-ledger.json + econ-book.json               — מוסף-הכסף
 *   Domain agents/fill-ledger.json                — מוסף-המילויים
 *   Domain mirror.json                            — מראת-השרשרת
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

// retry ×3 — שיעור 2026-10-21: כשל-רגעי (fetch בזמן-commit של הצי / קצבת-CDN)
// נחרת לתוך מהדורה ככשל-קבוע; ניסיון-חוזר מונע אפיית-שקר.
async function jget(url, timeoutMs = 12000) {
  let lastErr = null;
  for (let i = 0; i < 3; i++) {
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), timeoutMs);
    try {
      const r = await fetch(url + `?t=${Date.now()}`, { headers: H, cache: "no-store", signal: ac.signal });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return JSON.parse(await r.text()); // raw מחזיר text/plain גם ל-JSON תקני
    } catch (e) {
      lastErr = e;
      if (i < 2) await new Promise((res) => setTimeout(res, 400 * (i + 1)));
    } finally {
      clearTimeout(t);
    }
  }
  throw lastErr;
}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* סולם-נסיונות + נפילה-מקומית (שיעור-Z14: מקור-ציבורי רעב לא יכול להשתיק כתבה.
 * אם הרשת לא ענתה אבל הקובץ קיים בקומיט הנוכחי — נמדד מהעותק המקומי, וזה נאמר בגלוי) */
async function jgetL(url, localPath = null, timeoutMs = 12000) {
  let lastErr;
  for (let round = 0; round < 2; round++) {
    try {
      const v = await jget(url, timeoutMs);
      v.__src = "live";
      return v;
    } catch (e) {
      lastErr = e;
      if (round === 0) await new Promise((r) => setTimeout(r, 1500));
    }
  }
  if (localPath) {
    try {
      const v = JSON.parse(fs.readFileSync(localPath, "utf8"));
      v.__src = "commit-copy";
      return v;
    } catch { /* fallthrough */ }
  }
  throw lastErr;
}
const srcNote = (v) => v && v.__src === "commit-copy" ? "נמדד מהעותק המאופה בגיט (אותו-קומיט) — הרשת לא ענתה באפייה זו" : null;

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
    const s = await jgetL(PAGES("status.json"), path.join(__dirname, "..", "status.json"));
    fleetIso = s.generatedAt;
    const p = s.pulse || {};
    const sum = s.summary || {};
    summaryRow = Object.entries(sum)
      .map(([k, v]) => `<span class="chip ${k === "ALIVE" ? "ok" : ""}">${esc(k)} ${esc(v)}</span>`)
      .join(" ");
    fleetHtml = `
  <p class="lead">${esc(p.beatArteries ?? "?")}/${esc(p.totalArteries ?? "?")} עורקים פעמו עכשיו על פני <b>${esc(p.repos ?? "?")}</b> repos.</p>
  <p class="chips">${summaryRow || ""}</p>
  ${srcNote(s) ? `<p class="sub warn">${esc(srcNote(s))}</p>` : ""}
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

  /* 7) מוסף-הכלים — רישום-היכולות (G45: הדפים מוכיחים את הארכיטקטורה) */
  let toolsHtml = NOT_MEASURED, toolsIso = null;
  try {
    const fl = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "feature_list.json"), "utf8")).features;
    toolsIso = new Date().toISOString();
    const live = fl.filter((f) => f.status === "LIVE").length;
    const done = fl.filter((f) => ["done", "implemented", "shipped"].includes(f.status)).length;
    const open = fl.filter((f) => f.status === "open").length;
    const doc = fl.length - live - done - open;
    const rungs = fl.filter((f) => !f.status && (f.title || "").startsWith("Fleet Rung")).slice(-3).reverse();
    toolsHtml = `
  <p class="lead"><b>${fl.length} כלים</b> רשומים בארכיטקטורה: <b class="ok">${live} חיים</b> · ${done} בוצעו-עם-ראיות · ${open} פתוחים · ${doc} מתועדים.</p>
  ${rungs.length ? `<ul class="posts">${rungs.map((f) => `<li><span class="tagc">${esc(f.cr || "CR")}</span> ${esc((f.title || "").split("—")[0].replace(/^Fleet Rung \d+: /, "").slice(0, 60))} <span class="dim">· הדור-החדש ברישום</span></li>`).join("")}</ul>` : ""}
  <p class="sub">הרישום המלא — כל כלי עם סטטוס, ראיות מקושרות ותאריך — חי ב<a href="${SITE}products.html#capabilities">קטלוג-היכולות בדף-המוצרים</a>. הדף הזה מוכיח את העבודה, לא מספר עליה.</p>`;
  } catch (e) {
    toolsHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 8) מוסף-השוק — הספר הפנימי, המש, וכיול-הגודל */
  let mktHtml = NOT_MEASURED, mktIso = null;
  try {
    const mg = await jgetL(PAGES("agents/market-grid.json"), path.join(__dirname, "..", "agents", "market-grid.json"));
    const am = await jgetL(PAGES("agents/arb-mesh.json"), path.join(__dirname, "..", "agents", "arb-mesh.json"));
    const mm = await jgetL(PAGES("agents/mm-volume.json"), path.join(__dirname, "..", "agents", "mm-volume.json"));
    mktIso = [mg.at, am.at, mm.at].filter(Boolean).sort().reverse()[0] || null;
    const m = (mg.markets || [])[0] || {};
    const cal = mm.calibration || {};
    mktHtml = `
  <p class="lead">הספר הפנימי ${esc(m.market || "SBD/STEEM")}: פיזור <b>${esc((m.spreadPct ?? 0).toFixed(3))}%</b> · חגורה ${esc((m.band?.low ?? 0).toFixed(5))}–${esc((m.band?.high ?? 0).toFixed(5))}</p>
  <ul>
    <li>רשת-הארביטראז: <b>${esc(am.verdict || "?")}</b> · מצב ${esc(am.mode || "?")} · ${esc((am.laws || []).length)} חוקים חיים${am.stasisHalted ? " · <b class=\"warn\">STASIS-עוצר</b>" : ""}</li>
    <li>כיול-גודל על מילויים אמיתיים: ${esc((cal.avgSizePriorSbd ?? 0).toFixed(3))}→<b>${esc((cal.avgSizeCalibratedSbd ?? 0).toFixed(3))} SBD</b> ממוצע למילוי (n=${esc(cal.avgSizeCalibratedN ?? "?")} · lift ${esc(Math.round(cal.liftPct ?? 0))}%)</li>
    <li>ממול-הנפח: <b>${esc((mm.verdict || "?").slice(0, 30))}</b> · ${esc((mm.doctrine || []).length)} סעיפי-דוקטרינה</li>
  </ul>
  <p class="sub">המכונה ממתינה מתחת לרצפה כשאין פער — זו החוק עובד, לא תקלה. כל מילוי אמיתי נרשם בספר-המילויים.</p>`;
  } catch (e) {
    mktHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 9) מוסף-הכסף — האוצר האמיתי מהספר-החי */
  let moneyHtml = NOT_MEASURED, moneyIso = null;
  try {
    const ml = await jgetL(PAGES("agents/money-ledger.json"), path.join(__dirname, "..", "agents", "money-ledger.json"));
    const eb = await jgetL(PAGES("agents/econ-book.json"), path.join(__dirname, "..", "agents", "econ-book.json"));
    moneyIso = [ml.updated, eb.at].filter(Boolean).sort().reverse()[0] || null;
    const b = ml.book || {};
    const hist = ml.history || [];
    moneyHtml = `
  <p class="lead">האוצר מהספר-החי: <b>${esc(b.headSteemStake || "?")}</b> · ${esc(b.headSteemLiquid || "0 STEEM")} נזיל · חוב ${esc(b.headSteemDebt || "0")}</p>
  <ul>
    <li>HIVE: ${esc(b.headHive?.liquid || "0")} נזיל · ${esc(b.headHive?.effStake || "?")} HP · RC ${esc(b.headHive?.rcPct ?? "?")}% · TRON ${esc(b.tron?.trx || "?")}</li>
    <li>הכלכלה הפנימית (econ-engine/2): <b>${esc((eb.day24?.transactions ?? 0).toLocaleString("en-US"))}</b> התנהלויות ביממה = ${esc((eb.day24?.mwu ?? 0).toLocaleString("en-US"))} mWU · סה\"כ לכל-החיים ${esc((eb.totals?.tx ?? 0).toLocaleString("en-US"))} tx</li>
    ${hist.length ? `<li>היסטוריית-ספר: ${esc(hist.length)} רשומות · הספר מדווח גם על אפסים וחובות — לא רק על הישגים</li>` : ""}
  </ul>
  <p class="sub">יומן-הכסף המלא חי ב<a href="${SITE}money.html">נתיב-הכסף</a>. אפס-סודות: כתובות מוסקרות, יתרות גלויות.</p>`;
  } catch (e) {
    moneyHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 10) מוסף-המילויים — ספר-המילויים האמיתי */
  let fillsHtml = NOT_MEASURED, fillsIso = null;
  try {
    const fl = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "agents", "fill-ledger.json"), "utf8"));
    const runs = Array.isArray(fl) ? fl : fl.runs || [];
    const last = runs[runs.length - 1] || {};
    fillsIso = last.ts || null;
    const inv = last.inventory || {};
    const recentFills = runs.slice(-30).reverse().find((r) => (r.new_fills || []).length) || null;
    fillsHtml = `
  <p class="lead"><b>${esc(inv.n_fills ?? "?")}</b> מילויים מצטברים בספר · הריצה האחרונה: <b>${esc(last.mode || "?")}</b> (${esc(last.head || "?")})</p>
  <ul>
    <li>מלאי-הספר: ${esc((inv.qty ?? 0).toLocaleString("en-US"))} יחידות · עלות ${esc((inv.cost ?? 0).toLocaleString("en-US"))} · ריאליזציה ${esc((inv.realized ?? 0).toLocaleString("en-US"))} (יחידות-הספר, לא המרה-מטבעית)</li>
    ${recentFills ? `<li>המילוי-האחרון בריצה: ${esc(recentFills.ts?.slice(0, 16) || "?")}Z · ${esc((recentFills.new_fills || []).length)} מילויים בריצה</li>` : "<li>הריצות-האחרונות: אפס-מילויים חדשים — הספר רץ ומודד, הפער מחכה לרצפה</li>"}
    <li>${esc(runs.length)} ריצות-מדידה ביומן · מנוע שקט הוא מנוע ששומר — לא מנוע מת</li>
  </ul>
  <p class="sub">מקור: agents/fill-ledger.json בגיט — המספרים מהריצות-האמיתיות, לא מתוכנית-עסקית.</p>`;
  } catch (e) {
    fillsHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 11) מראת-השרשרת — העדויות החתומות */
  let mirrorHtml = NOT_MEASURED, mirrorIso = null;
  try {
    const mv = await jgetL(PAGES("mirror.json"), path.join(__dirname, "..", "mirror.json"));
    mirrorIso = mv.generatedAt;
    const st = mv.stats || {};
    const vit = st.vitality || {};
    mirrorHtml = `
  <p class="lead"><b>${esc((st.attestations ?? 0).toLocaleString("en-US"))}</b> עדויות חתומות · <b>${esc((st.checkpoints ?? 0).toLocaleString("en-US"))}</b> נקודות-צ'ק · ${esc(st.agents ?? "?")} חותמים</p>
  <ul>
    <li>ביממה-האחרונה: ${esc(vit.atts24h ?? "?")} עדויות · ${esc(vit.signers24h ?? "?")} חותמים פעילים · ${esc(vit.checkpoints24h ?? "?")} נקודות</li>
    <li>מעמד-אימות: ${esc(st.attByStatus?.VERIFIED ?? 0)} VERIFIED · ${esc(st.attByStatus?.UNMEASURED ?? 0)} לא-נמדד — מדווח בגלוי</li>
  </ul>
  <p class="sub">מראת-השרשרת נגזרת מהעוגנים הציבוריים בלבד — אפס-מפתחות, אפס-סודות, הקריאה-חזרה היא האמת.</p>`;
  } catch (e) {
    mirrorHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 7) מוסף-הריבונות — סוכן-4: ראיות-ארכיטקטורה חיות (גשר-הראיות של הרשת עצמה) */
  let sovHtml = NOT_MEASURED, sovIso = null;
  try {
    const ev = await jget(PAGES("press/evidence.json"));
    sovIso = ev.generatedAt;
    const s = ev.sources || {};
    const parts = [];
    if (s.capability?.available) parts.push(`<li>מטריצת-יכולות: <b>${esc(s.capability.pass)}</b>/<b>${esc((s.capability.pass ?? 0) + (s.capability.fail ?? 0))}</b> עוברות (${esc(s.capability.verdict ?? "?")}) — הארכיטקטורה נבדקת מול-עצמה</li>`);
    if (s.schedules?.available) parts.push(`<li>אוטונומיה מתוזמנת: <b>${esc(s.schedules.enabled)}</b>/<b>${esc(s.schedules.total)}</b> תזמונים חיים · הצלחה <b>${esc(s.schedules.successRate ?? "?")}%</b> מ-<b>${esc(s.schedules.runsTotal)}</b> ריצות</li>`);
    if (s.ledger?.available) parts.push(`<li>הפנקס החתום: seq <b>${esc(s.ledger.seq)}</b> · <b>${esc(s.ledger.settles24h)}</b> התיישבויות ב-24ש׳ · עמלות-24ש׳ <b>$${esc(s.ledger.fees24hUsd)}</b> (מיקרו-סנט אמיתי)</li>`);
    if (s.market?.available) parts.push(`<li>השוק החי: <b>${esc(s.market.trades)}</b> עסקאות · ספרד <b>${esc(s.market.spreadBps ?? "?")}</b> bps · שולחן-שוק <b class="${s.market.deskOn ? "ok" : "warn"}">${s.market.deskOn ? "פועל" : "כבוי"}</b></li>`);
    if (s.treasury?.available) parts.push(`<li>אוצרה: עמלות-לכל-החיים <b>$${esc(s.treasury.feesUsd)}</b> · סטייק נעול <b>${esc(Math.round((s.treasury.stakedQuote ?? 0) / 1e6))}</b> USDS</li>`);
    if (s.council?.available) parts.push(`<li>מועצת-הריבון: ההחלטה האחרונה <b>${esc(s.council.kind)}</b> · סה\"כ <b>${esc(s.council.decisionsTotal)}</b> החלטות מתועדות</li>`);
    if (s.secretsGate?.available) parts.push(`<li>שער-סודות: <b class="${s.secretsGate.verdict === "CLEAN" ? "ok" : "warn"}">${esc(s.secretsGate.verdict)}</b> על <b>${esc(s.secretsGate.filesScanned)}</b> קבצים — אף-מפתח לא נדחף</li>`);
    if (s.ownerMemory?.available) parts.push(`<li>זיכרון-בעלים: <b>${esc(s.ownerMemory.directives)}</b> הנחיות חתומות-עקבה · אחרונה <code>${esc(String(s.ownerMemory.lastTrace ?? "").slice(0, 16))}</code></li>`);
    if (s.oracle?.available) parts.push(`<li>עוגן-אורקל: ${esc(s.oracle.pair ?? "?")} <b>${esc(s.oracle.price ?? "?")}</b> (${esc(s.oracle.source ?? "?")})</li>`);
    const unavailable = Object.entries(s).filter(([, v]) => !v?.available).map(([k]) => k);
    const honest = unavailable.length ? `<p class="sub">לא נמדד הרצה זו: ${esc(unavailable.join(", "))} — מדווח בכנות, לא מושלם.</p>` : `<p class="sub">כל-9 המקורות השיבו. אימות-אחרי-פרסום נעשה על-ידי הרשת בעצמה (runner preset pages-evidence).</p>`;
    sovHtml = `<ul>${parts.join("")}</ul>${honest}`;
    if (!parts.length) sovHtml = NOT_MEASURED;
  } catch (e) {
    sovHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* 8) ארכיון-המהדורות — עיתון אמיתי שומר את מהדורותיו */
  let archHtml = "";
  const edDir = path.join(__dirname, "..", "press", "editions");
  let edFiles = [];
  try { edFiles = fs.readdirSync(edDir).filter((f) => /^\d{4}-\d{2}-\d{2}\.html$/.test(f)).sort().reverse(); } catch { /* first bake */ }
  const edList = edFiles.slice(0, 14);
  archHtml = edList.length
    ? `<ul class="posts">${edList.map((f) => `<li><a href="editions/${f}" style="direction:ltr;unicode-bidi:embed">${f.replace(".html", "")}</a></li>`).join("")}</ul><p class="sub">מהדורת-היום נשמרת אוטומטית כאן ומוחלפת כל-אפייה של אותו-יום; 14 מהדורות אחרונות מוצגות.</p>`
    : `<p class="na">אין עדיין ארכיון — המהדורה של היום תישמר כאן באפייה ראשונה.</p>`;

  /* W29 graft 1) שולחן-השווקים — מחיר-אמת חוץ משלושה מקורות בלתי-תלויים */
  let deskHtml = NOT_MEASURED, deskIso = null;
  try {
    const px = [];
    try { const b = await jget("https://api.binance.com/api/v3/ticker/24hr?symbol=STEEMUSDT", 9000); if (b?.lastPrice) px.push({ venue: "Binance STEEM/USDT", price: +b.lastPrice, chg: +b.priceChangePercent, vol: +b.quoteVolume }); } catch {}
    try { const g = await jget("https://api.coingecko.com/api/v3/simple/price?ids=steem&vs_currencies=usd&include_24hr_change=true", 9000); if (g?.steem?.usd) px.push({ venue: "CoinGecko STEEM/USD", price: g.steem.usd, chg: g.steem.usd_24h_change, vol: null }); } catch {}
    try { const p = await jget("https://api.coinpaprika.com/v1/tickers/steem-steem", 9000); if (p?.quotes?.USD?.price) px.push({ venue: "Coinpaprika STEEM/USD", price: p.quotes.USD.price, chg: p.quotes.USD.percent_change_24h, vol: p.quotes.USD.volume_24h }); } catch {}
    if (!px.length) throw new Error("no external venue answered");
    deskIso = new Date().toISOString();
    const prices = px.map((r) => r.price).sort((a, b) => a - b);
    const med = prices[Math.floor(prices.length / 2)];
    const chgs = px.map((r) => r.chg).filter((c) => typeof c === "number").sort((a, b) => a - b);
    const medChg = chgs.length ? chgs[Math.floor(chgs.length / 2)] : null;
    const spreadBps = prices.length >= 2 ? Math.round(((prices[prices.length - 1] - prices[0]) / med) * 10000) : null;
    deskHtml = `
  <p class="lead">STEEM נסחר סביב <b>$${med.toFixed(5)}</b> (חציון ${px.length} מקורות-ציבוריים, רגע-האפייה) — ${medChg === null ? "שינוי-24ש׳ לא נמדד" : `${medChg >= 0 ? "עלייה" : "ירידה"} של ${Math.abs(medChg).toFixed(2)}% ב-24 השעות`}.</p>
  <table class="tbl"><thead><tr><th>מקור</th><th>מחיר</th><th>24ש׳</th><th>היקף</th></tr></thead><tbody>
  ${px.map((r) => `<tr><td>${esc(r.venue)}</td><td class="num">$${r.price.toFixed(5)}</td><td class="num ${r.chg >= 0 ? "ok" : "fail"}">${r.chg >= 0 ? "+" : ""}${r.chg.toFixed(2)}%</td><td class="num">${r.vol ? "$" + Math.round(r.vol).toLocaleString("en-US") : "—"}</td></tr>`).join("")}
  </tbody></table>
  ${spreadBps !== null ? `<p class="sub">פער-בין-מקורות ${spreadBps}bps — ${spreadBps <= 100 ? "שוק עקבי, המחיר אמין" : "פער רחב — נזהרים במסקנות"}. הפער בין המחיר החוץ הזה לבין הספר הפנימי («מוסף-השוק» למטה) הוא בדיוק המרווח שהשוק שלנו מנסה לסגור.</p>` : ""}`;
  } catch (e) {
    deskHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* W29 graft 2) גל-העדים — קווי-העגינה על השרשרת */
  let weaveHtml = NOT_MEASURED, weaveIso = null;
  try {
    const v = await jgetL(PAGES("weave/vitals.json"), path.join(__dirname, "..", "weave", "vitals.json"));
    weaveIso = v.generatedAt;
    const s = v.summary || {};
    let census = null;
    try { census = await jgetL(PAGES("weave/census.json"), path.join(__dirname, "..", "weave", "census.json")); } catch {}
    const rec = census?.recent || {};
    weaveHtml = `
  <p class="lead">קווי-עדות: <b>${s.up ?? "?"}/${s.lines ?? "?"}</b> חיים · פסיקה-גרועה <b>${s.worstLatencyMs ?? "—"}ms</b> · מצב: <b class="${v.verdict === "LIVE" ? "ok" : "warn"}">${esc(v.verdict || "—")}</b></p>
  <ul>
    ${census ? `<li>מפקד-העגינה (45 יום): «${esc(census.verdict || "—")}» · ב-26 השעות האחרונות <b>${rec.anchorsInWindow ?? "—"}</b> עגינות, פער-מרבי ${rec.maxGapMinutes ?? "—"} דק׳</li>` : ""}
    ${census?.freshness ? `<li>טריות-העדות האחרונה: ${census.freshness.latestAgeHours?.toFixed?.(1) ?? "?"} ש׳ (סף ${census.freshness.thresholdHours ?? "?"} ש׳)</li>` : ""}
  </ul>
  <p class="sub">גל-העדים הוא קו-ההגנה של האמת: כל רגע-מצב נחתם על שרשרת ציבורית, והמפקד קורא את השרשרת ישירות — לא את הספרים שלנו.</p>`;
  } catch (e) {
    weaveHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* W29 graft 3) סיקור-ה-DEX — הרשת שלנו + חומת-ההפקדות עם txids */
  let dexHtml = NOT_MEASURED, dexIso = null;
  try {
    const w = await jgetL(PAGES("dex/world.json"), path.join(__dirname, "..", "dex", "world.json"));
    dexIso = w.publishedAt;
    const st = w.state || {};
    let deps = [];
    try { const d = await jgetL(PAGES("dex/deposits.json"), path.join(__dirname, "..", "dex", "deposits.json")); deps = Array.isArray(d?.deposits) ? d.deposits : []; } catch {}
    const totalSteem = deps.filter((x) => x.asset === "STEEM").reduce((a, x) => a + (+x.amount || 0), 0);
    dexHtml = `
  <p class="lead">הרשת שלנו בגובה <b>#${typeof st.height === "number" ? st.height.toLocaleString("en-US") : "—"}</b> · <b>${typeof st.fills === "number" ? st.fills.toLocaleString("en-US") : "—"}</b> מילויים · <b>${typeof st.swaps === "number" ? st.swaps.toLocaleString("en-US") : "—"}</b> המרות · ${st.tps ?? "—"} tx/שנ׳.</p>
  ${deps.length ? `
  <p class="sub">חומת-ההפקדות: <b>${deps.length}</b> הפקדות · סך <b>${totalSteem.toFixed(2)} STEEM</b> — כל אחת עם txid לאימות על השרשרת:</p>
  <table class="tbl"><thead><tr><th>txid</th><th>כמות</th><th>אל</th><th>מתי</th></tr></thead><tbody>
  ${deps.slice(0, 5).map((d) => `<tr><td class="mono"><a href="https://steemblockexplorer.com/tx/${esc(d.txid)}" target="_blank" rel="noreferrer">${esc(String(d.txid).slice(0, 10))}…</a></td><td class="num">${(+d.amount).toFixed(2)} ${esc(d.asset)}</td><td>${esc(d.to)}</td><td>${esc(ago(new Date(+d.ts).toISOString()) || "—")}</td></tr>`).join("")}
  </tbody></table>` : `<p class="na">הפקדות: אין נתון במהדורה זו — הלדגר הציבורי ריק או לא השיב.</p>`}
  <p class="sub">זה השוק שנבנה על הרשת של עצמנו: ספר דו-צדדי רב-גופי מול כסף-אמיתי חוץ, עם הפקדות שניתן לאמת txid-by-txid בלי לסמוך על מילה שלנו.</p>`;
  } catch (e) {
    dexHtml = `${NOT_MEASURED}<!-- ${esc(String(e.message || e).slice(0, 80))} -->`;
  }

  /* W29 graft 4) מגמות-בין-מהדורות — זיכרון-מהדורות */
  let prevEd = null;
  const statePath = path.join(__dirname, "..", "press", "edition-state.json");
  try { prevEd = JSON.parse(fs.readFileSync(statePath, "utf8")); } catch {}
  const edNow = { at: new Date().toISOString(), steemUsd: null, depositsCount: null, worldHeight: null, fillsTotal: null };
  try { const w = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "dex", "world.json"), "utf8")); edNow.worldHeight = w?.state?.height ?? null; edNow.fillsTotal = w?.state?.fills ?? null; } catch {}
  try { const d = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "dex", "deposits.json"), "utf8")); edNow.depositsCount = Array.isArray(d?.deposits) ? d.deposits.length : null; } catch {}
  {
    const px2 = [];
    try { const b = await jget("https://api.binance.com/api/v3/ticker/price?symbol=STEEMUSDT", 8000); if (b?.price) px2.push(+b.price); } catch {}
    try { const g = await jget("https://api.coingecko.com/api/v3/simple/price?ids=steem&vs_currencies=usd", 8000); if (g?.steem?.usd) px2.push(+g.steem.usd); } catch {}
    if (px2.length) { px2.sort((a, b) => a - b); edNow.steemUsd = px2[Math.floor(px2.length / 2)]; }
  }
  const trendChip = (label, p, c, d = 5) => {
    if (typeof p !== "number" || typeof c !== "number" || !isFinite(p) || !isFinite(c)) return "";
    const diff = c - p;
    if (Math.abs(diff) < Math.pow(10, -d) / 2) return `<span class="chip">${esc(label)} יציב</span>`;
    const up = diff > 0;
    return `<span class="chip ${up ? "up" : "down"}">${esc(label)} ${up ? "▲" : "▼"} ${Math.abs(diff).toFixed(d)} מאז המהדורה הקודמת</span>`;
  };
  const trendChips = prevEd ? [trendChip("STEEM", prevEd.steemUsd, edNow.steemUsd), trendChip("הפקדות", prevEd.depositsCount, edNow.depositsCount, 0), trendChip("גובה-רשת", prevEd.worldHeight, edNow.worldHeight, 0), trendChip("מילויים", prevEd.fillsTotal, edNow.fillsTotal, 0)].filter(Boolean) : [];
  try {
    const prevJson = fs.existsSync(statePath) ? fs.readFileSync(statePath, "utf8") : null;
    if (prevJson !== JSON.stringify(edNow, null, 2)) fs.writeFileSync(statePath, JSON.stringify(edNow, null, 2));
  } catch { /* state never breaks the edition */ }

  /* W29 graft 5) פינת-הכנות — טבלת-כל-המקורות של המהדורה */
  const stampState = (iso, slaMin) => !iso ? ["FAIL", "—"] : (ago(iso) !== null && (Date.now() - new Date(iso).getTime()) / 60000 <= slaMin ? ["OK", ago(iso)] : ["STALE", ago(iso)]);
  const edSources = [
    ["Binance/CoinGecko/Coinpaprika", deskIso, 10, "שולחן-השווקים"],
    ["FleetHQ office-state", officeIso, 130, "המשרד החי"],
    ["status.json", fleetIso, 240, "דופק-הצי"],
    ["moment/moment.json", momIso, 90, "הרגע הכלכלי"],
    ["feature_list.json", toolsIso, 2880, "מוסף-הכלים"],
    ["agents/market-grid+arb-mesh+mm-volume", mktIso, 720, "מוסף-השוק"],
    ["agents/money-ledger+econ-book", moneyIso, 720, "מוסף-הכסף"],
    ["agents/fill-ledger.json", fillsIso, 1560, "מוסף-המילויים"],
    ["weave/vitals.json", weaveIso, 360, "גל-העדים"],
    ["dex/world.json", dexIso, 480, "סיקור-ה-DEX"],
    ["mirror.json", mirrorIso, 360, "מראת-השרשרת"],
    ["content/published.json", chainIso, 2880, "בשרשרת"],
    ["agents/recruitment.json", recIso, 5760, "מודעות-הגיוס"],
    ["agents/ventures.json", venIso, 5760, "מוסף-המיזמים"],
    ["press/evidence.json", sovIso, 1560, "מוסף-הריבונות"],
  ];
  const edRows = edSources.map(([n, iso, sla, note]) => {
    const [stt, ag] = stampState(iso, sla);
    return `<tr><td>${esc(n)}</td><td class="${stt === "OK" ? "ok" : stt === "STALE" ? "warn" : "fail"}">${stt}</td><td class="num">${ag}</td><td>${esc(note || "")}</td></tr>`;
  }).join("");
  const edFails = edSources.filter((r) => stampState(r[1], r[2])[0] !== "OK").length;
  const honestyHtml = `<article class="card wide">
    <h2>פינת-הכנות<span class="kick">בין-טענות-לאמת · כל מקורות המהדורה, כולל הכישלונות</span></h2>
    <p class="lead">עיתון שלא מפרסם את כשלונות-המדידה של עצמו הוא יחסות-ציבור, לא עיתון. לפניכם כל מקור שהמהדורה ניסתה:</p>
    <table class="tbl"><thead><tr><th>מקור</th><th>מצב</th><th>טריות</th><th>תפקיד</th></tr></thead><tbody>${edRows}</tbody></table>
    <p class="ctx">${edFails ? `<b>${edFails} מקורות לא השיבו או השיבו ישן</b> — הכתבות שלהם מסומנות «לא נמדד» ולא הומצאו. זו המדיניות.` : `כל המקורות השיבו טריים במהדורה זו.`} אפס-JavaScript · אפס-סודות · כל ערך עם קישור-מקור.</p>
  </article>`;

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
/* W29 union graft: table + honesty + trends styling */
.tbl{width:100%;border-collapse:collapse;font-size:12.5px;margin:4px 0}
.tbl th{text-align:start;color:var(--faint);font-weight:600;border-bottom:1px solid var(--line);padding:4px 6px}
.tbl td{border-bottom:1px solid #eee9e4;padding:4px 6px;color:var(--dim)}
.num{text-align:end;font-variant-numeric:tabular-nums}
.mono{font-family:ui-monospace,Menlo,Consolas,monospace;direction:ltr;text-align:start}
.ctx{color:var(--dim);font-size:12.5px;border-inline-start:3px solid var(--acc-line);padding-inline-start:10px;line-height:1.7}
.card.wide{grid-column:1/-1}
.fail{color:#b3261e;font-weight:700}
.chip.up{background:var(--acc-bg);border-color:var(--acc-line);color:var(--acc-bright)}
.chip.down{background:#fbeae7;border-color:#e7c4bd;color:#b3261e}
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
    <a href="${SITE}badges.html"><img src="${SITE}badge/price.svg" alt="STEEM price"></a>
  </div>
  ${trendChips.length ? `<div class="chips" style="justify-content:center;padding:6px 0 0">${trendChips.join("")}</div>` : ""}
  <section class="grid">
    ${sec("המשרד החי", "כתבה-ראשית · FleetHQ office-state", officeHtml, "https://raw.githubusercontent.com/roshpinacare-sys/FleetHQ/main/office/state/office-state.json", officeIso).replace('class="card"', 'class="card lead-card"')}
    ${sec("דופק-הצי", "מערכת · status.json", fleetHtml, "https://roshpinacare-sys.github.io/Domain/status.json", fleetIso)}
    ${sec("הרגע הכלכלי", "moment-watch · R62", momHtml, "https://roshpinacare-sys.github.io/Domain/moment/moment.json", momIso)}
    ${sec("מוסף-הכלים", "רישום-היכולות · feature_list.json", toolsHtml, "https://roshpinacare-sys.github.io/Domain/feature_list.json", toolsIso)}
    ${sec("מוסף-השוק", "הספר הפנימי · grid + mesh + volume", mktHtml, "https://roshpinacare-sys.github.io/Domain/agents/market-grid.json", mktIso)}
    ${sec("מוסף-הכסף", "האוצר מהספר-החי · money-ledger + econ-book", moneyHtml, "https://roshpinacare-sys.github.io/Domain/agents/money-ledger.json", moneyIso)}
    ${sec("מוסף-המילויים", "ספר-המילויים · fill-ledger", fillsHtml, "https://roshpinacare-sys.github.io/Domain/agents/fill-ledger.json", fillsIso)}
    ${sec("מראת-השרשרת", "העדויות החתומות · mirror", mirrorHtml, "https://roshpinacare-sys.github.io/Domain/mirror.json", mirrorIso)}
    ${sec("בשרשרת", "מוסף-הפרסומים", chainHtml, "https://roshpinacare-sys.github.io/Domain/content/published.json", chainIso)}
    ${sec("מודעות-הגיוס", "לוח-התפקידים של האורגניזם", recHtml, "https://roshpinacare-sys.github.io/Domain/agents/recruitment.json", recIso)}
    ${sec("מוסף-המיזמים", "venture-desk", venHtml, "https://roshpinacare-sys.github.io/Domain/agents/ventures.json", venIso)}
    ${sec("מוסף-הריבונות", "סוכן-4 · ראיות-ארכיטקטורה חיות · 9 מקורות", sovHtml, "https://roshpinacare-sys.github.io/Domain/press/evidence.json", sovIso)}
    ${sec("ארכיון-המהדורות", "עיתון-אמיתי שומר את ההיסטוריה שלו", archHtml, "https://roshpinacare-sys.github.io/Domain/press/editions/", new Date().toISOString())}
    ${sec("שולחן-השווקים", "מחיר-אמת · שלושה מקורות בלתי-תלויים · W29", deskHtml, "https://api.binance.com/api/v3/ticker/24hr?symbol=STEEMUSDT", deskIso)}
    ${sec("גל-העדים", "עגינות-שרשרת · weave · W29", weaveHtml, "https://roshpinacare-sys.github.io/Domain/weave/vitals.json", weaveIso)}
    ${sec("סיקור-ה-DEX", "השוק על הרשת שלנו · W29", dexHtml, "https://roshpinacare-sys.github.io/Domain/dex/world.json", dexIso).replace('class="card"', 'class="card wide"')}
    ${honestyHtml}
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
  // ארכיון: מהדורת-היום נשמרת תמיד (אותו-יום מוחלף — ההיסטוריה היומית נשמרת-לעד)
  try {
    const today = new Date().toISOString().slice(0, 10);
    fs.mkdirSync(edDir, { recursive: true });
    const edAbs = path.join(edDir, `${today}.html`);
    const edTmp = `${edAbs}.tmp-${process.pid}`;
    // wave-19.49 refs-cure: an edition copy is its own public URL — self-canonical + og:url,
    // so the site-auditor's R-CANONICAL stays green on every future edition (writer cured, not patched).
    const edUrl = `${SITE}press/editions/${today}.html`;
    const edPage = page
      .replace(`<link rel="canonical" href="${SITE}press/">`, `<link rel="canonical" href="${edUrl}">`)
      .replace(`<meta property="og:url" content="${SITE}press/">`, `<meta property="og:url" content="${edUrl}">`);
    fs.writeFileSync(edTmp, edPage);
    fs.renameSync(edTmp, edAbs);
    // wave-19.49: register the edition in sitemap.xml (idempotent, atomic, never breaks the bake)
    try {
      const smAbs = path.join(__dirname, "..", "sitemap.xml");
      let sm = fs.readFileSync(smAbs, "utf8");
      if (!sm.includes(`press/editions/${today}.html`)) {
        sm = sm.replace("</urlset>", `  <url><loc>${edUrl}</loc><lastmod>${today}</lastmod></url>\n</urlset>`);
        const smTmp = `${smAbs}.tmp-${process.pid}`;
        fs.writeFileSync(smTmp, sm);
        fs.renameSync(smTmp, smAbs);
      }
    } catch { /* sitemap registration never breaks the edition */ }
  } catch { /* archive never breaks the edition */ }
  console.log(JSON.stringify({ state: "ok", press: "baked", bytes: page.length }));
})().catch((e) => {
  console.log(JSON.stringify({ state: "fail-soft", msg: String(e.message || e).slice(0, 140) }));
  process.exit(0);
});
