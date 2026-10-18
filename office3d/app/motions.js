/**
 * motions.js — ספריית-התנועה החיה (למידה יישומית מ-Motion2MixamoRig).
 * העיקרון-שאומץ: כל-אווטאר = שלד בסטנדרט mixamorig:*; קליפים הם-נכסים-עצמאיים
 * שמוצמדים-לכל-שלד-תואם (ריטרגטינג שמות-עצמות + הצמדת-גובה-ירכיים) — בדיוק
 * התפוקה שצינור-Motion2MixamoRig מייצר (GLB-ממורקב-מול-Mixamo-skeleton).
 * שכבות-פרוצדורליות (הקלדה/נשימה/מבט) רצות-מעל-הקליפ-הבסיסי — כך-כל-סוכן-נראה-חי
 * גם-בלי-אספקת-mocap חיצונית, והצוות-יכול-להוסיף-קליפים-אמת-בלי-לגעת-בקוד.
 */
import * as THREE from 'three';
import { retargetClip } from '../vendor/utils/retarget.js';

const norm = (n) => (n.startsWith('mixamorig:') ? n : `mixamorig:${n}`);
const B = (name) => `mixamorig:${name}`;

export class MotionLibrary {
  constructor() {
    this.clips = new Map();   // name -> THREE.AnimationClip (normalized mixamorig tracks)
    this.meta = new Map();    // name -> {use, retargetFrom}
  }

  /** קליטת-קליפים מה-GLB של האווטארים (Xbot=7 קליפים, Michelle=SambaDance).
   * manifest אופציונלי: בלעדיו — נכנסים-כל-הקליפים-הממורקבים (העולם-אף-פעם-לא-אילם) */
  ingestGlb(name, gltf, manifest) {
    const embedded = manifest?.embedded || null;
    for (const clip of gltf.animations || []) {
      const entry = embedded ? embedded.find((e) => e.clip === clip.name) : { clip: clip.name, source: name, retargetFrom: 'auto' };
      if (!entry) continue;
      const c = clip.clone();
      c.name = clip.name;
      normalizeClipTimes(c);
      this.clips.set(c.name, c);
      this.meta.set(c.name, entry);
    }
  }

  has(name) { return this.clips.has(name); }
  get(name) { return this.clips.get(name) || null; }

  /** ריטרגט-חוצה-שלד: Michelle(SambaDance) → שלד-Xbot תואם-מידות */
  crossRetarget(fromRig, toRig, clipName) {
    const src = this.clips.get(clipName);
    if (!src || !fromRig?.bones || !toRig?.bones) return null;
    const out = retargetClip(src, fromRig, toRig);
    if (out) { this.clips.set(clipName, out); this.meta.set(clipName, { use: 'חגיגת-קבלה (ריטרגט)', retargetFrom: 'dance' }); }
    return out;
  }
}

/** נירמול-זמני-מסלולים (יש-קליפים-עם-זמנים-קפואים) */
function normalizeClipTimes(clip) {
  let max = 0;
  for (const t of clip.tracks) max = Math.max(max, t.times[t.times.length - 1] || 0);
  if (max > 0) clip.duration = max;
}

/* ── שכבות-פרוצדורליות ─────────────────────────────────────────── */

/** מציאת-עצם-בסיסית-לפי-שם — מנרמל-גם-צורת-מיפוי-המטען (נקודותיים-מוסרות-על-ידי-GLTFLoader) */
export function findBone(root, name) {
  const want = name.startsWith('mixamorig:') ? name : `mixamorig:${name}`;
  const flat = want.replace(':', '');
  let found = null;
  root.traverse((o) => { if (!found && o.isBone && (o.name === want || o.name === name || o.name === flat)) found = o; });
  return found;
}

const _q = new THREE.Quaternion();
const _e = new THREE.Euler();

/** עדכון-שכבות-חיים על-גבי-המיקסר (נקרא-כל-פריים אחרי mixer.update) */
export function applyLifeLayers(agent, t) {
  const rig = agent.rig;
  if (!rig?.bones) return;
  const { hips, spine, head, leftForeArm, rightForeArm, leftArm, rightArm } = rig.bones;

  // נשימה — תמיד (עדין)
  if (spine) {
    const b = Math.sin(t * 1.9 + agent.phase) * 0.035;
    spine.rotation.x += b;
    if (hips) hips.position.y += Math.sin(t * 1.9 + agent.phase) * 0.006;
  }
  const st = agent.state;
  // הקלדה — ידיים-על-המקלדת (רק-בישיבה-עובדת)
  if (st === 'typing' && leftForeArm && rightForeArm && leftArm && rightArm) {
    const k = t * 11 + agent.phase;
    leftForeArm.rotation.x += Math.sin(k) * 0.10 + 0.55;
    rightForeArm.rotation.x += Math.sin(k + 1.7) * 0.10 + 0.55;
    leftArm.rotation.x += 0.28; rightArm.rotation.x += 0.28;
    leftArm.rotation.z += 0.18; rightArm.rotation.z -= 0.18;
    if (head) head.rotation.x += 0.16;
  }
  // מבט — הראש-עוקב-אחרי-המצלמה (עדין, רק-במנוחה/עבודה)
  if (head && (st === 'typing' || st === 'idle')) {
    const cam = agent.camera;
    if (cam) {
      const wp = new THREE.Vector3(); head.getWorldPosition(wp);
      const dir = cam.position.clone().sub(wp);
      const yaw = Math.atan2(dir.x, dir.z) - agent.root.rotation.y;
      const clamped = Math.max(-0.7, Math.min(0.7, Math.atan2(Math.sin(yaw), Math.cos(yaw))));
      head.rotation.y += clamped * 0.35;
      head.rotation.x += 0.06;
    }
  }
  // שינה-כנה — ראש-נשען (רק-כשהמקור-אמת-רדום)
  if (st === 'asleep' && head && spine) {
    head.rotation.x += 0.55; spine.rotation.x += 0.14;
  }
  _q.identity(); _e.set(0, 0, 0); // keep GC quiet
}

/* ── סיווג-מצב-חיים מהאמת ───────────────────────────────────────── */

/**
 * מצב-לסוכן לפי-האמת: פעולה-טרייה → עבודה; כינוס-בשרשרת → כינוס;
 * קבלה-ירוקה-חדשה → חגיגה; מקור-רדום → שינה-כנה; אחרת → מחזור-חיים-עצמאי
 * (פייזות-לא-מסונכרנות — אף-פעם-לא צבא-רובוטים).
 */
export function lifeState(agent, feed, tSec) {
  const fresh = feed?.freshMin;
  if (feed?.dead) return 'asleep';
  if (agent.celebrateUntil > Date.now()) return 'celebrate';
  if (feed?.meetingNow && agent.meetingSeat >= 0) return 'meet';
  if (fresh !== null && fresh <= 40) return (Math.floor(tSec / 45 + agent.phase) % 5) === 0 ? 'walk' : 'typing';
  // מחזור-עצמאי: עבודה/הליכה/מנוחה לפי-פייזה-אישית
  const cyc = Math.floor(tSec / 40 + agent.phase * 3) % 6;
  if (cyc === 0) return 'walk';
  if (cyc === 1) return 'coffee';
  if (cyc === 5) return 'idle';
  return 'typing';
}
