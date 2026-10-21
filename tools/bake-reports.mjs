#!/usr/bin/env node
/**
 * bake-reports — אינדוקס-הדוחות-החיים על reports.html (G46 · lane domain-front).
 *   הפער שנמדד: 9 קבצי STATE-REPORT-*.md יושבים-בגיט (מדידה-יומית של רופא-הצי) —
 *   ואף אחד מהם לא ממופה על הדף הציבורי; הטבלה הציגה רק-4-שורות-ארכיון-סגור.
 *
 * מקורות: קבצים-מקומיים בגיט בלבד (אותו-קומיט — אפס-רשת, keyless, fail-soft):
 *   STATE-REPORT-*.md — הדוחות היומיים של רופא-הצי (קריאה-בלבד מהשרשרת · אפס-סודות)
 *
 * חוקי-כנות:
 *  - כל-מספר נכרה מהקובץ-עצמו · מה שלא-נמדד-בדוח לא מוצג (אין-אומדן, אין-המצאה).
 *  - אם ערכי-המדידה זהים-בין-דוחות — כתוב-בגלוי "מצב-יציב/דומם", לא מדומה-כתנועה.
 *  - דוח שנכשל-parse מוצג-כשורה-כנה ("דוח-לא-קריאה") ולא מושמט-בשקט.
 *  - כתיבה-אטומית (tmp+rename) ורק-כשהתוכן-באמת-השתנה · אפס-JavaScript-בבלוק (שיעור-Task 41).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PAGE = path.join(ROOT, "reports.html");
const MARK_START = "<!--REPORTS:START-->";
const MARK_END = "<!--REPORTS:END-->";
const GH = "https://github.com/roshpinacare-sys/Domain";
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ---- parse one report -------------------------------------------------- */
function parseReport(file) {
  const day = file.match(/STATE-REPORT-(\d{8})\.md$/);
  if (!day) return null;
  const d = `${day[1].slice(0, 4)}-${day[1].slice(4, 6)}-${day[1].slice(6, 8)}`;
  const out = { file, day: d, url: `${GH}/blob/main/${file}` };
  let txt = null;
  try { txt = fs.readFileSync(path.join(ROOT, file), "utf8"); } catch { return { ...out, broken: true }; }
  try {
    out.measured = (/\bנמדד:\s*(\S{10,32}?Z)\b/.exec(txt) || [])[1] || null;
    out.spNet = (/\*\*סה"כ SP נטו:\s*([\d.,]+)\*\*/.exec(txt) || [])[1] || null;
    const vp = (/VP≥90%:\s*(\d+)\s*\/\s*(\d+)/.exec(txt) || []);
    out.vp90 = vp.length === 3 ? `${vp[1]}/${vp[2]}` : null;
    out.coverage = (/כיסוי-קהל\s*([\d.]+)%/.exec(txt) || [])[1] || null;
    out.sbdPending = (/[פ]נדינג[^:]*:\s*[≈~]?\s*([\d.]+)\s*SBD/.exec(txt) || [])[1] || null;
    out.steemLiquid = (/STEEM נזיל בצי:\s*([\d.,]+|0)/.exec(txt) || [])[1] || null;
    /* הפער-הכן-הראשון תחת "פערים-כנים" */
    const g = (/##\s*פערים-כנים\s*\n([\s\S]*?)(?:\n##\s|$)/.exec(txt) || [])[1];
    if (g) {
      const line = g.split("\n").map((l) => l.trim()).find((l) => l.startsWith("-") && l.slice(1).trim());
      out.gap = line ? line.slice(1).trim().slice(0, 130) : null;
    }
    /* טביעת-אצבע של המדידה — לזיהוי-כן של מצב-דומם */
    out.fp = JSON.stringify([out.spNet, out.vp90, out.coverage, out.sbdPending, out.steemLiquid, out.gap]);
    return Object.values(out).some((v) => v !== null && v !== undefined) ? out : { ...out, broken: true };
  } catch { return { ...out, broken: true }; }
}

/* ---- main -------------------------------------------------------------- */
(async () => {
  let files;
  try {
    files = fs.readdirSync(ROOT).filter((f) => /^STATE-REPORT-\d{8}\.md$/.test(f)).sort();
  } catch (e) {
    console.error(`[bake-reports] fail-soft: cannot list STATE-REPORT files (${String(e).slice(0, 60)})`);
    process.exit(0);
  }
  if (!files.length) { console.log("[bake-reports] no STATE-REPORT files — previous bake stands"); process.exit(0); }

  const reps = files.map(parseReport).filter(Boolean).sort((a, b) => b.day.localeCompare(a.day));
  const broken = reps.filter((r) => r.broken);
  const good = reps.filter((r) => !r.broken);

  /* זיהוי-כן של מצב-דומם: כמה דוחות-רצופים-מהחדש חולקים-טביעת-מדידה-זהה */
  let flatRun = 1;
  for (let i = 1; i < good.length; i++) {
    if (good[i].fp === good[0].fp) flatRun++; else break;
  }
  const flatNote = good.length >= 2 && flatRun >= 2
    ? `<p class="rpt-flat">כנות-מדידה: ערכי-המדידה <b>זהים</b> לאורך <b>${flatRun}</b> דוחות-רצופים — רופא-הצי רץ-יומית ומדווח על מצב-רשת דומם. יציבות היא-מדידה, לא-המצאה · תנועה-חוזרת-תשתקף-כאן-באפייה-הבאה.</p>`
    : "";

  const latest = good[0] || null;
  const pills = latest
    ? `<div class="rpt-strip">
  <span class="rpt-pill ok"><b>${reps.length}</b> דוחות-חיים בגיט</span>
  ${latest.spNet ? `<span class="rpt-pill"><b>${esc(latest.spNet)}</b> SP נטו · המדידה-האחרונה</span>` : ""}
  ${latest.vp90 ? `<span class="rpt-pill"><b>${esc(latest.vp90)}</b> VP≥90% מתוך-הצי</span>` : ""}
  ${latest.coverage !== null && latest.coverage !== undefined ? `<span class="rpt-pill"><b>${esc(latest.coverage)}%</b> כיסוי-קהל · כן</span>` : ""}
  <span class="rpt-pill when">נאפה מהקבצים-עצמם · אותו-קומיט</span>
</div>`
    : "";

  const rows = reps.map((r) => {
    if (r.broken) {
      return `<tr><td class="rdate">${esc(r.day)}</td><td class="rsum" colspan="4">דוח-לא-קריאה באפייה-זו — לא מוסתר, לא משוחזר מהזיכרון · <a href="${r.url}" target="_blank" rel="noreferrer">המקור בגיט</a></td></tr>`;
    }
    return `<tr>
  <td class="rdate"><a href="${r.url}" target="_blank" rel="noreferrer">${esc(r.day)}</a></td>
  <td class="rdate">${r.measured ? esc(String(r.measured).replace("T", " ").slice(0, 19)) : "—"}</td>
  <td class="rnum">${r.spNet ? esc(r.spNet) : "—"}${r.vp90 ? ` · VP90 ${esc(r.vp90)}` : ""}</td>
  <td class="rnum">${r.sbdPending ? `${esc(r.sbdPending)} SBD פנדינג` : "—"}${r.steemLiquid ? ` · ${esc(r.steemLiquid)} STEEM נזיל` : ""}</td>
  <td class="rsum">${r.gap ? esc(r.gap) : "אין-פער-רשום-בדוח"}</td>
</tr>`;
  }).join("\n");

  const baked = new Date().toISOString().slice(0, 16) + "Z";
  const section = `${MARK_START}
<div class="card" id="rpt-live">
  <h2>הדוחות-החיים בגיט · מדד-יומי של רופא-הצי</h2>
  ${pills}
  ${flatNote}
  <div style="overflow-x:auto">
    <table>
      <thead>
        <tr><th>תאריך</th><th>נמדד (UTC)</th><th>הון-הרשת</th><th>כלכלה</th><th>פער-כן מהדוח</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
  <p class="note">כל-שורה נכרית-בזמן-אפייה מהקובץ-עצמו באותו-קומיט (<a href="${GH}/blob/main/STATE-REPORT-20261020.md" target="_blank" rel="noreferrer">דוגמה-מקור</a>) · אין-מספר-שנכתב-ביד · דוח-שלא-נפרש-מוצג-כך-בגלוי. הטבלה-ההיסטורית-למטה-היא-הארכיון-הסגור-של-מתקפת-החשיפה — נשארת-כעדות, בלי-שחזור-מזויף. מאפה ${esc(baked)}.</p>
</div>
${MARK_END}`;

  let html;
  try { html = fs.readFileSync(PAGE, "utf8"); } catch (e) {
    console.error(`[bake-reports] fail-soft: reports.html unreadable (${String(e).slice(0, 60)})`);
    process.exit(0);
  }

  const styles = `<style id="rpt-styles">
.rpt-strip{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}
.rpt-pill{font-size:12.5px;border:1px solid var(--border);background:var(--panel2);border-radius:999px;padding:6px 13px;color:var(--mut)}
.rpt-pill b{color:var(--tx);font-size:14px}
.rpt-pill.ok{border-color:rgba(212,175,55,.45);color:var(--gold)}
.rpt-pill.when{margin-inline-start:auto;color:var(--dim);font-size:11.5px}
.rpt-flat{font-size:12.5px;color:var(--mut);border:1px dashed var(--border2);border-radius:10px;padding:10px 14px;margin:0 0 14px;line-height:1.75}
.rpt-flat b{color:var(--tx)}
.rnum{font-family:var(--mono);direction:ltr;unicode-bidi:embed;white-space:nowrap;font-size:12.5px}
#rpt-live td a{color:var(--gold)}
</style>`;

  const styleRe = /<style id="rpt-styles">[\s\S]*?<\/style>/;
  if (styleRe.test(html)) html = html.replace(styleRe, styles);
  else html = html.replace("</head>", `${styles}\n</head>`);

  if (html.includes(MARK_START) && html.includes(MARK_END)) {
    const re = new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}`);
    html = html.replace(re, section);
  } else {
    /* נחתך-לפני-הכרטיס-ההיסטורי — הארכיון-נשאר-מתחת-לאינדקס-החי */
    const anchor = html.indexOf('<div class="card">');
    if (anchor === -1) { console.error("[bake-reports] fail-soft: no anchor found — previous bake stands"); process.exit(0); }
    html = html.slice(0, anchor) + section + "\n\n" + html.slice(anchor);
  }

  /* עדכון-הפניית-הערת-הארכיון: "האמת-החיה" כוללת-כעת-גם-את-האינדוקס-למעלה */
  html = html.replace(
    "מאז, האמת-החיה של הצי מתפרסמת אוטומטית כל-~17 דקות",
    "מאז, הדוחות-היומיים-החיים ממופים-למעלה-מהקבצים-בגיט והאמת-הרציפה מתפרסמת אוטומטית כל-~17 דקות",
  );

  if (html !== fs.readFileSync(PAGE, "utf8")) {
    const tmp = PAGE + ".tmp";
    fs.writeFileSync(tmp, html);
    fs.renameSync(tmp, PAGE);
    console.log(`[bake-reports] baked ${reps.length} reports → reports.html (latest ${latest?.day} · flat-run ${flatRun})`);
  } else {
    console.log("[bake-reports] no-change — the previous bake stands");
  }
})();
