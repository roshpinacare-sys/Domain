// DEX-MIRROR — סוכן שיקוף הספר החי לבית Domain (R63)
//
// הבעיה שנמדדה בשטח: דפי הכסף וה-defi של הבית החדש קוראים את
// dex/grid.json, dex/world.json, dex/state.json, dex/credits.json ואת
// dex/portfolio.json בנתיב יחסי — אבל ב-Domain אף מכונה לא ריעננה אותם
// מאז ההעברה. המנוע מפרסם את פעימותיו (dex-beat/grid-beat) ל-Console
// החיה, והעתקים ב-Domain קפאו: grid.json בן יום, world/state/credits
// בני שעות. אתר שמציג אתמול כאילו הוא עכשיו היא השקר העמוק ביותר
// שאתר נתונים יכול לספר. שער 11 של מכונת האמת מודד את זה באדום;
// הסוכן הזה הוא הריפוי: שיקוף שעתי של הספר החי מהמראה הציבורית של
// Console — קריאה חסרת-מפתחות של קבצים ציבוריים, כתיבה ל-repo שלנו.
//
// דוקטרינת כנות:
//   - כל קובץ נבדק לפני כתיבה: JSON תקין + חותמת-זמן קריאה + גיל < 48ש'.
//     מקור מעופש/שבור לא נכתב — העותק הקיים נשמר והכישלון נרשם בכנות.
//   - כתיבה רק כשיש שינוי אמיתי (בתים) — בלי קומיטים ריקים.
//   - אפס מפתחות, אפס הזנקות: הסוכן רואה ומשקף, לא חותם ולא מזיז.
//
// תזמון: שעתי :52 UTC ('52 * * * *' — משבצת minute-map.json) — הכרעת-R67-C [zai-15c, 2026-10-12]:
// הדיאטה-היומית (R67-C) על מראה-ציבורית-חסרת-מפתחות חסכה-אפס-דקות (תקדים R68-E) והיומי 12:50 לא-ירה כלל ב-10-11
// (run 38071927915 סטה +4.7ש׳; אפס-יריות למחרת) — חוק-הטריות 24ש׳ נשבר. השעתי סובל-סטיות-GitHub בלי-לשבור-חוק,
// והמשבצת :52 פנויה. רישום-מלא בכותרת dex-mirror.yml. (13-a תיקן-תיעוד בלבד; 15c הכריע-בגבולות-האצלה trace 1a1…4671.)

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { scrub } from "./refs.mjs"; // exposure law: mirrored books never carry estate names
// 25-a fix: this import used to be "./agents/refs.mjs" — the script itself LIVES
// in agents/, so the resolver looked for agents/agents/refs.mjs and EVERY beat
// died with ERR_MODULE_NOT_FOUND before mirroring a single file (measured in
// /tmp/local-beats.log 20:52Z). One directory too many.

const SRC = "https://roshpinacare-sys.github.io/Console/dex";
// 25-a: same-box local-first freshness. The public mirror (Pages) can only be
// as fresh as the last PUSH — and the estate currently has no valid push PAT,
// so Pages can lag hours behind the live producer running on this very box.
// The producer's own output file (Console/dex/*.json) is on disk here: when it
// is FRESHER than Pages, mirror from it. Nothing is invented — the freshest
// measured copy of the same published book wins, and the source is logged.
const HOME = process.env.HOME || "";
const CONSOLE_DEX = process.env.CONSOLE_DEX_DIR || (HOME ? `${HOME}/estate/Console/dex` : null);
const OUT_DIR = "dex";
const FILES = ["grid.json", "world.json", "state.json", "credits.json", "portfolio.json",
               "onramp.json", "showcase.json", "relay.json", "money.json"]; // 13-a: סגירת פער 528ש' (WO-unwired-dex-mirror P1) — העותקים ב-Domain קפאו ב-09-19 כי הרשימה דילגה עליהם; 10-12: money.json נוסף — המקור (money-watch 2ש') טרי אבל העותק ב-Domain קפא כי הרשימה עדיין דילגה עליו (נמדד: מקור 23:52 מול עותק 20:29 אחרי ריצת-מראה 01:06 שהעתיקה 7 קבצים ודילגה עליו)
const MAX_SOURCE_AGE_H = 48; // מקור מעופש מזה = צינור מת, לא משקפים אותו

const r2 = (v) => Math.round(v * 100) / 100;

function timestampOf(doc) {
  // grid/world/state/credits: publishedAt בשורש. portfolio: generatedAt (epoch-ms)
  // בתוך אובייקט portfolio. onramp: onramp.at (ISO). showcase: at (epoch-ms בשורש).
  // relay: relay.lastActivityAt (epoch-ms). כל-הצורות נתמכות בכנות (13-a:
  // הצורות של onramp/showcase/relay נמדדו חי מול המקור ב-Console — ראה WO-unwired-dex-mirror).
  if (doc.publishedAt) return Date.parse(doc.publishedAt);
  if (doc.generatedAt) return Date.parse(doc.generatedAt);
  if (doc.portfolio && doc.portfolio.generatedAt) return Number(doc.portfolio.generatedAt);
  if (doc.onramp && doc.onramp.at) return Date.parse(doc.onramp.at);
  if (typeof doc.at === "number") return doc.at;
  if (doc.relay && typeof doc.relay.lastActivityAt === "number") return doc.relay.lastActivityAt;
  return NaN;
}

let updated = 0, kept = 0, warned = 0;
const lines = [];

for (const f of FILES) {
  // candidate 1: the public mirror (GitHub = storage)
  let best = null, bestTs = NaN, bestSrc = null;
  const url = `${SRC}/${f}?t=${Date.now()}`;
  try {
    const r = await fetch(url, { headers: { "User-Agent": "dex-mirror" } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const doc = await r.json();
    const ts = timestampOf(doc);
    if (Number.isFinite(ts)) { best = doc; bestTs = ts; bestSrc = "pages"; }
    else lines.push(`WARN ${f}: pages copy has no parseable timestamp`);
  } catch (e) {
    lines.push(`WARN ${f}: pages source unreadable (${String(e.message).slice(0, 60)})`);
  }
  // candidate 2: the local producer's own published output (same box, no push needed)
  if (CONSOLE_DEX && existsSync(`${CONSOLE_DEX}/${f}`)) {
    try {
      const ldoc = JSON.parse(readFileSync(`${CONSOLE_DEX}/${f}`, "utf8"));
      const lts = timestampOf(ldoc);
      if (Number.isFinite(lts) && (!best || lts > bestTs)) { best = ldoc; bestTs = lts; bestSrc = "console-local"; }
    } catch { lines.push(`WARN ${f}: local Console copy unreadable — skipped`); }
  }
  if (!best) {
    warned++;
    lines.push(`WARN ${f}: no readable source (pages + local) - current copy kept`);
    continue;
  }
  const ts = bestTs, doc = best;
  const ageH = (Date.now() - ts) / 3.6e6;
  if (ageH > MAX_SOURCE_AGE_H) {
    warned++;
    lines.push(`WARN ${f}: freshest source (${bestSrc}) ${r2(ageH)}h old (> ${MAX_SOURCE_AGE_H}h) - a dying pipeline is not mirrored, current copy kept`);
    continue;
  }
  const local = `${OUT_DIR}/${f}`;
  let changed = true;
  if (existsSync(local)) {
    try {
      changed = JSON.stringify(JSON.parse(readFileSync(local, "utf8"))) !== JSON.stringify(doc);
    } catch { changed = true; /* local copy corrupt - replace it */ }
  }
  if (changed) {
    writeFileSync(local, scrub(JSON.stringify(doc, null, 1)) + "\n");
    updated++;
    lines.push(`MIRRORED ${f}: ${r2(ageH)}h old via ${bestSrc}, bytes written (refs-scrubbed)`);
  } else {
    kept++;
    lines.push(`OK ${f}: identical to the live mirror (${r2(ageH)}h old via ${bestSrc})`);
  }
}

console.log(`[dex-mirror] updated=${updated} kept=${kept} warned=${warned} source=${SRC}`);
for (const l of lines) console.log(`[dex-mirror] ${l}`);
// יציאה ירוקה גם כשמקור מזהיר: המכונה חיה, האמת על המקור נרשמת למעלה
// ושער 11 של מכונת האמת יאדים ספר שמוגש מעופש.
