/**
 * retarget.js — ריטרגטינג-קליפים חוצה-שלד בסטנדרט Mixamo (יישום-דפדפן של
 * עיקרון-Motion2MixamoRig): מקור-ומטרה משתפים-שמות-עצמות mixamorig:*.
 * נמדד-חי (t11): מסלולי-מיקום-של-ירכיים-חוצי-שלד מושכים-את-הגוף-לרצפה
 * (מידות/יחידות-שונות) — לכן-הריטרגט הוא **סיבובים-בלבד**: הפוזה-עוברת,
 * וכל-שלד-שומר-על-גובה-הירכיים-העצמי-שלו. אפס-התמוטטות.
 */
import * as THREE from 'three';

const norm = (n) => n.replace(/:/g, ''); // צורת-המיפוי-הפנימית של three (נקודותיים-מוסרות)

export function buildRigInfo(root) {
  const bones = new Map();
  root.traverse((o) => {
    if (o.isBone) bones.set(norm(o.name), o);
  });
  const hips = bones.get('mixamorigHips');
  let hipsHeight = 1;
  if (hips) {
    const wp = new THREE.Vector3();
    hips.updateWorldMatrix(true, false);
    wp.setFromMatrixPosition(hips.matrixWorld);
    hipsHeight = Math.max(0.2, wp.y);
  }
  return { bones, hipsHeight };
}

export function retargetClip(srcClip, srcRig, dstRig, opts = {}) {
  if (!srcRig?.bones || !dstRig?.bones) return null;
  const tame = opts.tame ?? 0; // 0..1 — הרגעת-עצימות (סמבה-על-שלד-אחר = נפילה-אחורה; נמדד)
  const tracks = [];
  const iden = new THREE.Quaternion();
  const q = new THREE.Quaternion();
  for (const t of srcClip.tracks) {
    const m = /^([\w:]+)\.(position|quaternion|scale)$/.exec(t.name);
    if (!m) continue;
    if (m[2] !== 'quaternion') continue; // סיבובים-בלבד (נמדד: מיקומים-חוצי-שלד-ממוטטים)
    const boneName = norm(m[1]);
    if (!dstRig.bones.has(boneName)) continue;
    const nt = t.clone();
    if (tame > 0) {
      const v = nt.values;
      for (let i = 0; i < v.length; i += 4) {
        q.set(v[i], v[i + 1], v[i + 2], v[i + 3]).slerp(iden, tame);
        v[i] = q.x; v[i + 1] = q.y; v[i + 2] = q.z; v[i + 3] = q.w;
      }
    }
    tracks.push(nt);
  }
  if (!tracks.length) return null;
  const out = new THREE.AnimationClip(srcClip.name, srcClip.duration, tracks);
  out.blendMode = srcClip.blendMode;
  return out;
}
