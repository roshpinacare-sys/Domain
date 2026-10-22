#!/usr/bin/env node
/**
 * bake-features — רישום-היכולות החי של הארכיטקטורה על דף-המוצרים (G45).
 *   החוק שנשבר עד-היום: 69 כלים ב-feature_list.json ואפס-הוכחת-שימוש על הדפים הציבוריים.
 *   התיקון: products.html מציג את הרישום המלא — כל feature עם סטטוס, תאריך-נחיתה, וראיות מקושרות.
 *
 * מקורות: קבצים-מקומיים בגיט בלבד (אותו-קומיט — אפס-רשת, keyless, fail-soft):
 *   feature_list.json            — רישום-הכלים (LHE harness protocol)
 *   agents/harness-audit.json    — חותמת-טריות של סורק-ההרנס (אם קיים)
 *
 * חוקי-כנות:
 *  - סטטוס שאינו מוכר נחתם "מתועד" — לעולם לא משודרג בשקט ל"חי".
 *  - ראיות הופכות לקישורים: נתיב-קובץ → blob בגיט · מזהה-ריצה → Actions · URL → URL.
 *  - כתיבה אטומית (tmp+rename) ורק-כשהתוכן באמת השתנה.
 *  - אפס-JavaScript בבלוק המאופה (שיעור-Task 41).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const FEATURES_FILE = path.join(ROOT, "feature_list.json");
const AUDIT_FILE = path.join(ROOT, "agents", "harness-audit.json");
const PAGE = path.join(ROOT, "products.html");
const MARK_START = "<!--CAPABILITIES:START-->";
const MARK_END = "<!--CAPABILITIES:END-->";
const GH = "https://github.com/roshpinacare-sys/Domain";

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* סטטוס-מפה כנה: מה שלא מוכר לא משתדרג בשקט */
const STATUS = {
  LIVE: { he: "חי", cls: "live" },
  done: { he: "בוצע", cls: "done" },
  implemented: { he: "ממומש", cls: "done" },
  shipped: { he: "נשלח", cls: "done" },
  open: { he: "פתוח", cls: "open" },
  documented: { he: "מתועד", cls: "doc" },
};
const stOf = (f) => STATUS[f.status] || STATUS.documented;

/* ראיות → קישורים במעבר-אחד מבוסס-טוקנים (לעולם לא regex-על-פלט-regex — שיעור-הקישורים-השבורים):
 *   "run(s) <id>" → Actions · "block <n>" → steemworld · נתיב-קובץ → blob · URL → URL
 * מבחן-הצלייה 2026-10-21T22:35Z: האפייה מחדש דרסה תיקון-HTML ידני (site-audit FAIL חזר) —
 * הריפוי חייב לחיות כאן, במקור-האפייה עצמו:
 *   (1) קיצור `X.json/.md` → שני-קישורים חיים (שני הקבצים קיימים בעץ — נמדד).
 *   (2) NO_ANCHOR: נתיבים שאין להם קובץ-קבוע בעץ — ללא עוגן, עם הסבר-כנה (אפס-קישור-מת). */
const NO_ANCHOR = {
  "agents/sovereign-pending.json": "תיבת-דואר Tier-E — runtime-only, נדחף רק כשיש דואר; אינו נתיב-קבוע בעץ",
  "scripts/command-guard.sh": "פרוש SUPERSEDED-BY — היורש החי: agents/command-guard.cjs",
};
function linkEvidence(ev) {
  const links = [];
  const put = (html) => `\u0000${links.push(html) - 1}\u0000`;
  const anchor = (p) =>
    NO_ANCHOR[p]
      ? `<code>${p}</code> <em>(${NO_ANCHOR[p]})</em>`
      : `<a href="${GH}/blob/main/${p}" target="_blank" rel="noreferrer"><code>${p}</code></a>`;
  let out = esc(ev)
    .replace(/\bruns?\s+(\d{9,11})\b/gi, (m, id) =>
      put(`<a href="${GH}/actions/runs/${id}" target="_blank" rel="noreferrer">run ${id}</a>`))
    .replace(/\bblock\s+(\d{7,9})\b/gi, (m, n) =>
      put(`<a href="https://steemworld.org/block/${n}" target="_blank" rel="noreferrer">block ${n}</a>`))
    .replace(/(^|[\s(;])((?:agents|scripts|tools|\.github|hub|verify|office)\/[\w./-]+)\.json\/\.md\b/g,
      (m, pre, base) => `${pre}${put(anchor(`${base}.json`))} · ${put(anchor(`${base}.md`))}`)
    .replace(/(^|[\s(;])((?:agents|scripts|tools|\.github|hub|verify|office)\/[\w./-]+\.[\w]{2,6})/g,
      (m, pre, p) => `${pre}${put(anchor(p))}`)
    .replace(/(https?:\/\/[^\s<;)"']+)/g, (m, u) =>
      put(`<a href="${u}" target="_blank" rel="noreferrer">${u.replace(/^https?:\/\//, "").slice(0, 48)}</a>`));
  return out.replace(/\u0000(\d+)\u0000/g, (m, i) => links[Number(i)]);
}

function whenOf(f) {
  const at = f.landed_at || f.ts || f.at || f.landed || null;
  if (!at) return null;
  const d = new Date(at);
  return isNaN(d) ? null : d;
}
const fmtDay = (d) => new Intl.DateTimeFormat("he-IL", { day: "numeric", month: "short", year: "numeric" }).format(d);

/* ------------------------------- bake ----------------------------------- */

function card(f) {
  const st = stOf(f);
  const name = f.name || (f.title || "").split("—")[0].slice(0, 70) || f.id;
  const desc = f.description || f.title || "";
  const when = whenOf(f);
  const deps = (f.dependencies || []).filter(Boolean);
  return `<li class="fb-card" id="${esc(f.id)}">
  <div class="fb-head"><span class="fb-id">${esc(f.id)}</span><h4>${esc(name)}</h4><span class="fb-tag ${st.cls}">${st.he}</span></div>
  <p class="fb-desc">${esc(String(desc).slice(0, 240))}${String(desc).length > 240 ? "…" : ""}</p>
  ${f.evidence ? `<p class="fb-ev"><span class="fb-ev-l">ראיות:</span> ${linkEvidence(f.evidence)}</p>` : ""}
  ${when ? `<p class="fb-when">נחתם ${fmtDay(when)}</p>` : ""}${deps.length ? `<p class="fb-dep">תלויות: ${esc(deps.join(", "))}</p>` : ""}
</li>`;
}

(async () => {
  let feats;
  try {
    feats = JSON.parse(fs.readFileSync(FEATURES_FILE, "utf8")).features;
  } catch (e) {
    console.error(`[bake-features] fail-soft: feature_list.json unreadable — the previous bake stands (${String(e).slice(0, 80)})`);
    process.exit(0); // keyless desks are fail-soft, exit 0
  }

  let auditIso = null;
  try {
    const a = JSON.parse(fs.readFileSync(AUDIT_FILE, "utf8"));
    auditIso = a.at || a.updated || null;
  } catch { /* optional */ }

  const groups = { LIVE: [], done: [], implemented: [], shipped: [], open: [], other: [] };
  for (const f of feats) (groups[f.status] ? groups[f.status] : groups.other).push(f);

  const counts = {
    live: groups.LIVE.length,
    done: groups.done.length + groups.implemented.length + groups.shipped.length,
    open: groups.open.length,
    doc: groups.other.length,
  };

  const order = ["LIVE", "done", "implemented", "shipped", "open", "other"];
  const heOrder = {
    LIVE: "חי · מדידה ציבורית רצה",
    done: "בוצע · עם ראיות בגיט",
    implemented: "ממומש",
    shipped: "נשלח",
    open: "פתוח · היעד הבא",
    other: "רישומי-דור (CR) · מתועדים בשרשרת",
  };

  const baked = new Date().toISOString().slice(0, 16) + "Z";
  const auditLine = auditIso
    ? ` · סריקת-ההרנס האחרונה: <a href="${GH}/blob/main/agents/harness-audit.json" target="_blank" rel="noreferrer">${esc(auditIso.slice(0, 16))}Z</a>`
    : "";

  const section = `${MARK_START}
<section id="capabilities" aria-labelledby="cap-h">
  <div class="wrap">
    <h2 class="sec" id="cap-h">רישום-היכולות המלא · ${feats.length} כלים בארכיטקטורה</h2>
    <p class="sub">כל כלי שנבנה בארכיטקטורה, מוצג כאן מהרישום המכונה בגיט (feature_list.json — חלק מפרוטוקול-ההרנס של הבית): סטטוס כנה, ראיות מקושרות לקוד ולריצות, ותאריך-חתימה. אין כאן כלי שנוסף מתוך נימוס, ואין כלי שנמחק מהרישום כשהוא נכשל. הבלוק נאפה אוטונומית ב-CI כל שעה — הארכיטקטורה מראה את עצמה גם בלי שום בן-אדם בחדר.</p>
    <div class="fb-strip" role="list" aria-label="סיכום רישום-היכולות">
      <span class="fb-pill live"><b>${counts.live}</b> חיים · ריצה מדודה</span>
      <span class="fb-pill done"><b>${counts.done}</b> בוצעו · ראיות בגיט</span>
      <span class="fb-pill open"><b>${counts.open}</b> פתוחים · היעד-הבא</span>
      <span class="fb-pill doc"><b>${counts.doc}</b> מתועדים · רישומי-דור</span>
      <span class="fb-pill when">נאפה ${esc(baked)} מהרישום בגיט${auditLine}</span>
    </div>
    ${order.filter((k) => groups[k].length).map((k) => {
      const st = stOf(groups[k][0]);
      return `<details class="fb-grp" ${k === "LIVE" ? "open" : ""}>
      <summary><span class="fb-tag ${st.cls}">${groups[k].length} ${k === "LIVE" ? "חיים" : k === "other" ? "רישומי-דור" : heOrder[k].split(" ·")[0]}</span><span class="fb-grp-t">${esc(heOrder[k])}</span></summary>
      <ul class="fb-grid">${groups[k].map(card).join("\n")}</ul>
    </details>`;
    }).join("\n")}
    <p class="fb-law">חוק-הרישום: הרישום חי ב-<a href="${GH}/blob/main/feature_list.json" target="_blank" rel="noreferrer">feature_list.json</a> בגיט — הקוד הוא האמת, הדף רק מציג אותו. כלי שנוסף שם מופיע כאן באפייה הבאה, בלי יד אנושית.</p>
  </div>
</section>
${MARK_END}`;

  /* splice — בין #infra ל-#law */
  let html;
  try {
    html = fs.readFileSync(PAGE, "utf8");
  } catch (e) {
    console.error(`[bake-features] fail-soft: products.html unreadable (${String(e).slice(0, 60)})`);
    process.exit(0);
  }

  const styles = `<style id="fb-styles">
.fb-strip{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px}
.fb-pill{font-size:12.5px;border:1px solid var(--line);background:var(--panel);border-radius:999px;padding:6px 13px;color:var(--dim)}
.fb-pill b{color:var(--text);font-size:14px}
.fb-pill.live{border-color:var(--acc-line);background:var(--acc-bg);color:var(--acc-bright)}
.fb-pill.when{margin-inline-start:auto;color:var(--faint);font-size:11.5px}
.fb-grp{background:var(--panel);border:1px solid var(--line);border-radius:var(--r);padding:14px 18px;margin-bottom:12px}
.fb-grp summary{cursor:pointer;display:flex;align-items:center;gap:10px;list-style:none;min-height:44px}
.fb-grp summary::-webkit-details-marker{display:none}
.fb-grp summary::after{content:"▾";color:var(--faint);margin-inline-start:auto;transition:transform .2s}
.fb-grp[open] summary::after{transform:rotate(180deg)}
.fb-grp-t{font-size:13px;color:var(--dim)}
.fb-grid{list-style:none;display:grid;grid-template-columns:1fr;gap:12px;padding:12px 0 4px}
@media(min-width:820px){.fb-grid{grid-template-columns:1fr 1fr}}
.fb-card{border:1px solid var(--line);border-radius:var(--r-sm);padding:13px 15px;background:var(--panel2);display:flex;flex-direction:column;gap:7px;min-width:0;max-width:100%}
.fb-desc,.fb-ev{overflow-wrap:anywhere;min-width:0} /* mobile-390 measured 00:35Z: long unbroken evidence tokens (agents/…,agents/…) blew grid min-width:auto → RTL left-overflow 118px */
.fb-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.fb-id{font-family:var(--mono);font-size:10.5px;color:var(--faint);direction:ltr}
.fb-head h4{font-size:14.5px;font-weight:800;letter-spacing:-.2px;flex:1;min-width:0}
.fb-tag{font-size:10px;font-weight:700;border-radius:999px;padding:2px 8px;border:1px solid var(--line2);background:var(--bg2);color:var(--dim);white-space:nowrap}
.fb-tag.live{border-color:var(--acc-line);background:var(--acc-bg);color:var(--acc-bright)}
.fb-tag.done{border-color:var(--acc-line);color:var(--acc-bright)}
.fb-tag.open{border-color:rgba(161,98,7,.4);background:rgba(161,98,7,.07);color:var(--amber)}
.fb-desc{font-size:12.5px;line-height:1.65;color:var(--dim);direction:ltr;unicode-bidi:plaintext;text-align:start}
.fb-ev{font-size:11.5px;line-height:1.7;color:var(--faint);direction:ltr;unicode-bidi:plaintext;text-align:start}
.fb-ev-l{direction:rtl;unicode-bidi:isolate}
.fb-ev code{font-family:var(--mono);font-size:10.5px;background:var(--bg2);border:1px solid var(--line);border-radius:4px;padding:0 4px}
.fb-when,.fb-dep{font-size:10.5px;color:var(--faint)}
.fb-law{font-size:12px;color:var(--faint);border-top:1px dashed var(--line2);padding-top:12px;margin-top:6px;line-height:1.7}
</style>`;

  /* סגנון עודכן תמיד (אם קיים — מוחלף; אם לא — נוסף אחרי ה-<style> האחרון ב-head) */
  const styleRe = /<style id="fb-styles">[\s\S]*?<\/style>/;
  if (styleRe.test(html)) html = html.replace(styleRe, styles);
  else html = html.replace("</head>", `${styles}\n</head>`);

  if (html.includes(MARK_START) && html.includes(MARK_END)) {
    const re = new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}`);
    html = html.replace(re, section);
  } else {
    /* נחתך לפני סעיף-החוק — עוגן יציב */
    const anchor = html.indexOf('<section id="law"');
    if (anchor === -1) {
      console.error("[bake-features] fail-soft: no anchor section found — the previous bake stands");
      process.exit(0);
    }
    html = html.slice(0, anchor) + section + "\n\n" + html.slice(anchor);
  }

  /* atomic write-on-change */
  if (html !== fs.readFileSync(PAGE, "utf8")) {
    const tmp = PAGE + ".tmp";
    fs.writeFileSync(tmp, html);
    fs.renameSync(tmp, PAGE);
    console.log(`[bake-features] baked ${feats.length} capabilities → products.html (live:${counts.live} done:${counts.done} open:${counts.open} doc:${counts.doc})`);
  } else {
    console.log("[bake-features] no-change — the previous bake stands");
  }
})();
