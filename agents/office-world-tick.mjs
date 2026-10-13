#!/usr/bin/env node
/**
 * office-world-tick — פעימת-העולם הקנונית של מפקדת הצי.
 *
 * למה זה קיים: המשרד הוא עולם מתמשך, לא סימולציה שנולדת מחדש בכל פתיחת דף.
 * המצב-הקנוני של העולם חי כאן, ב-Domain הציבורי (office/world-state.json),
 * ומותקדם כל 10 דק' לפי זמן-עולם אמיתי — בלי שום תלות בסנדבוקס. כל צופה
 * (דפדפן, שירות-השידור) ממשיך את העולם מהסניפשוט האחרון.
 *
 * מה קורה כאן:
 *   1. קריאת office/world-state.json (עותק-מקומי טרי מ-checkout).
 *   2. התקדמות לפי הפרש-זמן אמיתי (עד 3ש סגירת-פער, צעדי 2ש — מנוע אחד
 *      עם שירות-השידור ועם הדפדפן: office/engine.mjs).
 *   3. כתיבה חזרה + יומן-זנב (office/world-journal.jsonl, 60 שורות אחרונות).
 *
 * כנות: אי-התאמת מנורסיון = יציאה 1 (fail loud) — העולם לא מדולג בשקט.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ENGINE_ID, ENGINE_VERSION, fromJSON, advanceWorld, phaseOf } from '../office/engine.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '..');
const WORLD = path.join(ROOT, 'office', 'world-state.json');
const JOURNAL = path.join(ROOT, 'office', 'world-journal.jsonl');

const MAX_CATCHUP_MS = 3 * 3600 * 1000;
const STEP_SEC = 2;

function fail(msg) {
  console.error('[office-world-tick] FAIL:', msg);
  process.exit(1);
}

let raw;
try { raw = JSON.parse(fs.readFileSync(WORLD, 'utf8')); } catch (e) { fail('world-state unreadable: ' + e.message); }

const beforeT = typeof raw.t === 'number' ? raw.t : Date.parse(raw.t);
if (!Number.isFinite(beforeT)) fail('world-state has no parsable t');
const gapMs = Date.now() - beforeT;
if (gapMs < 0) {
  // שעון-עתיד = אין נסיגה בעולם; כותבים בחזרה כמו-שהוא ומסיימים בכנות
  console.log(`[office-world-tick] clock-skew: world t is ${Math.round(-gapMs / 1000)}s ahead — no rewind, nothing to advance`);
  process.exit(0);
}

let w;
try { w = fromJSON(raw); } catch (e) { fail('engine rejected world: ' + e.message); }

const r = advanceWorld(w, Date.now(), { maxCatchupMs: MAX_CATCHUP_MS, stepSec: STEP_SEC });
const phase = phaseOf(w.t).he;

w.t = Date.now(); w.at = new Date(w.t).toISOString(); w.generatedAt = w.at; // 4b: every reader (t|at|generatedAt) reads a live ts - no guardian misreads fresh as stale
fs.writeFileSync(WORLD, JSON.stringify(w));

// יומן-זנב: האירועים האחרונים עם הקשר-הפעימה (לצופים ולתחקיר)
let lines = [];
try { lines = fs.readFileSync(JOURNAL, 'utf8').split('\n').filter(Boolean); } catch { /* קובץ חדש */ }
const evs = (w.events || []).slice(-12).map((e) => ({
  at: new Date(e.ts).toISOString(), who: e.who, text: e.text,
}));
lines.push(JSON.stringify({
  at: new Date(w.t).toISOString(), advMin: Math.round(r.advancedMs / 60000), steps: r.steps, phase, evs,
}));
while (lines.length > 60) lines.shift();
fs.writeFileSync(JOURNAL, lines.join('\n') + '\n');

console.log(`[office-world-tick] advanced ${Math.round(r.advancedMs / 1000)}s (gap ${Math.round(gapMs / 60000)}min) in ${r.steps} steps → phase "${phase}" · world t=${new Date(w.t).toISOString()} · engine v${ENGINE_VERSION}`);
