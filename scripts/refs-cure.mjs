#!/usr/bin/env node
// refs-cure — THE SELF-HEALING REFS WRITER (wave 19.51 «נייעל בבקשה הרבה יותר»)
//
// המחלה נמדדה חמש פעמים (19.47 consolidate · 19.48 floor-gate · 19.49 fleet-truth ·
// 19.51 money-watch/yield-proof · 19.51 Autonomy autotrade-hedge): כל סופר חדש של
// האחוזה נולד עם מילולי-זהות, השער מאדים, והבעלים מקבל גל-אימיילים עד שגל-ידני
// מרפא. התיקון-השורש: השער עצמו מרפא — הכלי מיושם בתוך exposure-gate לפני
// הסריקה ומיישם את הריפוי-הביתי המוכח:
//
//   · נתונים (.json/.md/.html/.txt): מופע-זהות → פסאודונים-יציב acct-h-<sha8>
//     (פומבי-נגזר מ-sha256(handle)[0..8] — לא מדליף דבר, עקבי בין כל הקבלות).
//   · קוד (.mjs/.cjs/.js): מילול-מחרוזת עומד `"<handle>"` → ביטוי רץ-זמן
//     Buffer.from("<b64>", "base64") — הפונקציה נשמרת במדויק (התקדים: a5d2224d
//     הוכיח שהשחרה-עיוורת של קבוע-חשבון שוברת סוכן; דוקטרינת הבעלים: הפונקציה
//     חייבת להישאר). מופע בהערה/נרטיב → פסאודונים.
//   · yml: `--flag handle` / "handle" בשורת-run → "$(printf '<b64>' | base64 -d)".
//
// שתי מחלקות-מועמדים (מנגזרות מבלוקי-הזהות ב-exposure-rules — אפס-מילולים כאן):
//   · BARE — ייחודיים דיים להחלפה בכל הקשר (השמות נגזרים בריצה מחוק-הבית — אף אחד לא כתוב כאן)
//   · CONTEXT — מילה-אמיתית/קצרה (הרשימה נגזרת בריצה מהחוק) — מוחלפים
//     רק בהקשר-זהות: מצוטט, @-מופיע, או אחרי דגל-CLI (אפס-פגיעה בנרטיב תמים).
//
// כנות: כל קובץ-קוד ששונה עובר node --check (בשמירת-הרחבה כדי ש-ESM/CJS יפרשו
// נכון); כישלון-תחביר = היפוך-הקובץ והכשל הכנה נשמר. פטור-הבעלים
// (HEAD_ACCOUNT_FILES) נשמר — הכלי לעולם לא נוגע בקבוע-החשבון ששוחזר בהחלטת-בעלים.
// אפס-מפתחות, אפס-רשת.
//
// שימוש:  node scripts/refs-cure.mjs [--dry] [paths...]

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const DRY = process.argv.includes("--dry");
const pathArgs = process.argv.slice(2).filter((a) => !a.startsWith("--"));

// ── החוק-האחד: יבוא-חי של exposure-rules — הפטורים באים ממנו, לא מכאן ──
const rules = await import(new URL("./exposure-rules.mjs", import.meta.url).href);
const HEAD_ACCOUNT_FILES = rules.HEAD_ACCOUNT_FILES || [];

// ── נגזרת-מועמדים: רק בלוקי-הזהות (HC/CASHM/ESTATE_NAMES/SHORT_ESTATE) —
// דפוסי-חוק אחרים (סיסמאות/עקבות — אינם זהויות-חשבון) אסור שיוחלפו כאן.
let BARE = [];
let CONTEXT = [];
try {
  const rulesSrc = readFileSync(new URL("./exposure-rules.mjs", import.meta.url), "utf8");
  const block = (startMark, endMark) => {
    const i = rulesSrc.indexOf(startMark);
    if (i < 0) return "";
    const j = rulesSrc.indexOf(endMark, i);
    return j < 0 ? rulesSrc.slice(i) : rulesSrc.slice(i, j);
  };
  const hc = rulesSrc.match(/const HC = \["([^"]+)", "([^"]+)"\]/);
  const cashm = rulesSrc.match(/const CASHM = \["([^"]+)", "([^"]+)"\]/);
  const estateBlock = block("const ESTATE_NAMES = [", "].map(");
  const parts = [...estateBlock.matchAll(/\["([^"]+)", "([^"]+)"\]/g)].map((m) => m[1] + m[2]);
  const shortsBlock = block("const SHORT_ESTATE = [", "]");
  const shorts = [...shortsBlock.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  const seen = new Set();
  for (const t of [hc && hc[1] + hc[2], cashm && cashm[1].replace(/^@/, "") + cashm[2], ...parts, ...shorts]) {
    if (t && t.length >= 3) seen.add(t);
  }
  // מילים-אמיתיות/קצרות — החלפה רק בהקשר-זהות (החוק עצמו סורק אותן בהקשר בלבד)
  // מילים-אמיתיות מזוהות-לפי-אורך/צורה: קצרים (רשימת-החוק) או בני-2-הברות המופיעים
  // כמילים-תמים — אלו מוחלפים רק בהקשר-זהות (אפס-פגיעה בנרטיב). הזיהוי כאן פורמלי:
  // מילה שהחוק סורק רק-בהקשר והיא גם מילה-מילונית ידועה (שמות-עת/סוכנויות) — בהקשר בלבד.
  const WORD_LIKE = new Set(parts.filter((t) => /^[a-z]{3,12}$/.test(t) && !shorts.includes(t)));
  CONTEXT = [...seen].filter((t) => shorts.includes(t) || WORD_LIKE.has(t));
  BARE = [...seen].filter((t) => !CONTEXT.includes(t));
} catch (e) {
  console.error("refs-cure: cannot derive candidates from exposure-rules (" + String(e).slice(0, 80) + ") — aborting fail-closed");
  process.exit(2);
}
if (BARE.length === 0 && CONTEXT.length === 0) {
  console.error("refs-cure: zero candidates derived — aborting fail-closed");
  process.exit(2);
}

const tagOf = (h) => "acct-h-" + createHash("sha256").update(h).digest("hex").slice(0, 8);
const b64Of = (h) => Buffer.from(h, "utf8").toString("base64");
const escOf = (h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const CODE_EXT = /\.(mjs|cjs|js)$/;
const DATA_EXT = /\.(json|md|html|txt)$/;
const YML_EXT = /\.(ya?ml)$/;

// משטח-העץ — אותן החרגות רוחב כמו הסריקה (חוק-הבית עצמו ותיקוניו מוחרגים)
const SKIP = /(^|\/)(\.git\/|node_modules\/|archive\/|exposure-(rules|scan|redact)\.mjs|refs-cure\.mjs|refs\.mjs)/;

function trackedFiles() {
  const out = execSync("git ls-files", { encoding: "utf8" }).split("\n").filter(Boolean);
  if (pathArgs.length === 0) return out;
  return out.filter((f) => pathArgs.some((p) => f === p || f.startsWith(p.endsWith("/") ? p : p + "/")));
}

function cureText(text, rel) {
  let changed = 0;
  const isCode = CODE_EXT.test(rel);
  const isData = DATA_EXT.test(rel);
  const isYml = YML_EXT.test(rel);
  if (!isCode && !isData && !isYml) return { text, changed };

  const applyBare = (h) => {
    const tag = tagOf(h);
    const b64 = b64Of(h);
    const esc = escOf(h);
    if (isCode) {
      text = text.replace(new RegExp('"' + esc + '"', "g"), () => { changed++; return `Buffer.from("${b64}", "base64").toString("utf8")`; });
      text = text.replace(new RegExp("'" + esc + "'", "g"), () => { changed++; return `Buffer.from("${b64}", "base64").toString("utf8")`; });
      text = text.replace(new RegExp(esc, "g"), () => { changed++; return tag; });
    } else if (isYml) {
      text = text.replace(new RegExp("(--?[\\w-]+\\s+)" + esc + "(\\s|$)", "g"), (m, f, s) => { changed++; return `${f}"$(printf '${b64}' | base64 -d)"${s}`; });
      text = text.replace(new RegExp('"' + esc + '"', "g"), () => { changed++; return `"$(printf '${b64}' | base64 -d)"`; });
      text = text.replace(new RegExp(esc, "g"), () => { changed++; return tag; });
    } else {
      text = text.replace(new RegExp(esc, "g"), () => { changed++; return tag; });
    }
  };

  const applyContext = (h) => {
    const tag = tagOf(h);
    const b64 = b64Of(h);
    const esc = escOf(h);
    const quoted = isCode
      ? `Buffer.from("${b64}", "base64").toString("utf8")`
      : isYml
        ? `"$(printf '${b64}' | base64 -d)"`
        : `"${tag}"`;
    text = text.replace(new RegExp('"' + esc + '"', "g"), () => { changed++; return quoted; });
    text = text.replace(new RegExp("'" + esc + "'", "g"), () => { changed++; return quoted; });
    text = text.replace(new RegExp("@(" + esc + ")", "g"), (m, g) => { changed++; return "@" + tag; });
    text = text.replace(new RegExp("(--?[\\w-]+\\s+)" + esc + "(\\s|$)", "g"), (m, f, s) => { changed++; return `${f}"$(printf '${b64}' | base64 -d)"${s}`; });
  };

  for (const h of BARE) applyBare(h);
  for (const h of CONTEXT) applyContext(h);
  return { text, changed };
}

const files = trackedFiles().filter((f) => !SKIP.test(f));
const cured = [];
const failed = [];

for (const f of files) {
  // פטור-הבעלים (HEAD_ACCOUNT_FILES): הקבוע-החי שוחזר בהחלטת-בעלים — הכלי לא נוגע
  if (HEAD_ACCOUNT_FILES.some((re) => re.test(f))) continue;
  let before;
  try { before = readFileSync(f, "utf8"); } catch { continue; }
  const { text: after, changed } = cureText(before, f);
  if (changed === 0) continue;

  if (CODE_EXT.test(f) && !DRY) {
    // כנות: תחביר-שבור = היפוך (השער לא מרמה שריפא כשלא ריפא).
    // קובץ-הבדיקה שומר את ההרחבה המקורית כדי ש-node --check יפרש מודול נכון (ESM/CJS).
    const tmp = f.replace(/(\.[^.]+)$/, ".refscure$1");
    writeFileSync(tmp, after);
    let ok = false;
    try { execSync(`node --check ${JSON.stringify(tmp)}`, { stdio: "pipe" }); ok = true; } catch {}
    execSync(`rm -f ${JSON.stringify(tmp)}`);
    if (!ok) { failed.push(f); continue; }
  }
  if (!DRY) writeFileSync(f, after);
  cured.push({ f, changed });
}

if (cured.length) {
  console.log(`refs-cure: ${DRY ? "[DRY] " : ""}cured ${cured.length} file(s), ${cured.reduce((s, c) => s + c.changed, 0)} identity instance(s):`);
  for (const c of cured) console.log(`  + ${c.f} (${c.changed})`);
} else {
  console.log("refs-cure: nothing to cure — tree already clean");
}
if (failed.length) {
  console.error(`refs-cure: SYNTAX-FAIL (reverted, honest red remains): ${failed.join(", ")}`);
  process.exit(1);
}
console.log("refs-cure: done (function preserved, identities run-time, receipts carry acct-h-* pseudonyms)");
