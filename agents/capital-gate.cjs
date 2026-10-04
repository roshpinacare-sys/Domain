'use strict';
/**
 * CAPITAL-GATE — שער-המחשבה-לפני-חתימה (owner directive 2026-10-04, IM trace 1a108e28015b0451)
 * ═══════════════════════════════════════════════════════════════════════════════════════════
 * הבעלים מדד חי ומצא: האוטונומיה רצה "בלי שכל ואינטילגנציה" — כולל האצלות-SP אוטומטיות
 * ל-hcsoldier1/2/3 (חשבונות שאין לאף-אחד את המפתחות שלהם — LOST-NO-CUSTODY, קבלה
 * מדודה 2026-10-04) ופלאפינג-האצלות באותו-יום מכמה-כותבים בלי תיאום.
 *
 * החוק החדש (מהיום): כל-חותם-על-השרשרת חייב לעבור שלושה-שערים לפני-חתימה:
 *   1. STASIS   — אם הבלם-החירום פעיל → יציאה-בריאה (no-op) עם שורת-קבלה קולחת.
 *   2. ROSTER   — כל-יעד-הון חייב להיות ברוסטר-הקנון (fleet-roster.json); יעד-אסור
 *                 או-לא-מוכר → REFUSED עם נימוק (קבלה-כנה, לעולם לא דילוג-שקט).
 *   3. JOURNAL  — כל-החלטת-הון נרשמת ל-receipts/capital-decisions.jsonl (מה/למה/כמה).
 *
 * אפס-סודות: המודול קורא קבצי-מדיניות בלבד — לעולם לא נוגע במפתחות ולא מדפיס חומר-רגיש.
 * fail-closed: רוסטר-חסר = כל-היעדים נדחים (מעולם לא "תן-לכל-אחד").
 */

const fs = require('fs');
const path = require('path');

const AG = __dirname;
const STASIS_FILE = path.join(AG, 'STASIS.json');
const ROSTER_FILE = path.join(AG, 'fleet-roster.json');
const JOURNAL = path.join(AG, 'receipts', 'capital-decisions.jsonl');

/** מצב-הבלם (fail-closed: קריאה-כושלת לא מבטלת בלם קיים — קוראים שוב-ושוב בכל-ריצה). */
function stasisState() {
  try { return JSON.parse(fs.readFileSync(STASIS_FILE, 'utf8')); } catch (_) { return { active: false, unreadable: true }; }
}

/** true אם הבלם פעיל — הקורא חייב לצאת 0 (no-op בריא) מיד. */
function stasisHalt(tool) {
  const s = stasisState();
  if (s.active !== true) return false;
  console.log(`[CAPITAL-GATE] STASIS-HALT ${tool} · reason: ${s.reason || 'unspecified'} · since ${s.since || '?'}`);
  return true;
}

/** הרוסטר-הקנון; null = לא-זמין (השוער נכשל-סגור). */
function loadRoster() {
  try { return JSON.parse(fs.readFileSync(ROSTER_FILE, 'utf8')); } catch (_) { return null; }
}

/**
 * שוער-יעדים: מחזיר {allowed, refused, rosterLoaded}.
 * refused תמיד כולל נימוק מפורש — הסוכן חייב לדווח ולא להעלים.
 */
function guardTargets(tool, targets) {
  const list = (targets || []).map((t) => String(t || '').toLowerCase()).filter(Boolean);
  const out = { allowed: [], refused: [], rosterLoaded: false };
  const roster = loadRoster();
  if (!roster) {
    console.log(`[CAPITAL-GATE] REFUSED ${tool} → ALL targets · reason: canonical roster unavailable (fail-closed)`);
    out.refused = list.map((name) => ({ name, reason: 'roster-unavailable' }));
    return out;
  }
  out.rosterLoaded = true;
  const banned = new Map((roster.bannedCapital || []).map((b) => [String(b.name || '').toLowerCase(), b.reason || 'banned']));
  const fleet = new Set((roster.steemFleet || []).map((n) => String(n).toLowerCase()));
  for (const name of list) {
    if (banned.has(name)) out.refused.push({ name, reason: 'banned: ' + banned.get(name) });
    else if (fleet.has(name)) out.allowed.push(name);
    else out.refused.push({ name, reason: 'not-in-canonical-roster' });
  }
  for (const x of out.refused) console.log(`[CAPITAL-GATE] REFUSED ${tool} → @${x.name} · ${x.reason}`);
  return out;
}

/** יומן-ההחלטות — שורה-אחת לכל-הכרעת-הון (מה/למה/תוצאה). אפס-סודות. */
function journal(tool, row) {
  try {
    fs.mkdirSync(path.dirname(JOURNAL), { recursive: true });
    fs.appendFileSync(JOURNAL, JSON.stringify({ at: new Date().toISOString(), tool, ...row }) + '\n');
  } catch (_) { /* יומן לא יפיל ריצה — אבל כל-שאר השערים כן */ }
}

module.exports = { stasisState, stasisHalt, loadRoster, guardTargets, journal, STASIS_FILE, ROSTER_FILE, JOURNAL };
