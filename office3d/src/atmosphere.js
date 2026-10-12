/**
 * atmosphere.js — שכבת-האטמוספירה הריאליסטית:
 * · עמודי-אור (light-shafts) שנכנסים מחלונות-המזרח בזווית השמש האמיתית
 * · אבק-עדין שרף בקרניים (dust motes) — סיבוב איטי אמיתי
 * · הכול מקומי, אפס תלות רשת, עדין מספיק שלא להפריע לקריאות.
 */

import * as THREE from 'three';
import { ROOM_W, ROOM_D, WALL_H } from './canon.js';

// כיוון-השמש מ-main.js: sun.position (14, 11, 7) → קרן נעה (-14, -11, -7)
const SUN_DIR = { x: -14, y: -11, z: -7 };
const DROP_Y = 2.4; // גובה-חלון
// היסט מישורי לכל יחידת-ירידה
const RX = SUN_DIR.x / SUN_DIR.y; // ≈ -1.27 (מערבה)
const RZ = SUN_DIR.z / SUN_DIR.y; // ≈ -0.64 (צפונה)

function gradientTexture() {
  const c = document.createElement('canvas');
  c.width = 2; c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 128);
  grad.addColorStop(0, 'rgba(255,238,205,0.55)');
  grad.addColorStop(0.45, 'rgba(255,231,190,0.22)');
  grad.addColorStop(1, 'rgba(255,225,180,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 2, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function dustTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(16, 16, 1, 16, 16, 15);
  grad.addColorStop(0, 'rgba(255,248,235,0.9)');
  grad.addColorStop(0.4, 'rgba(255,244,225,0.35)');
  grad.addColorStop(1, 'rgba(255,244,225,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 32, 32);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function buildAtmosphere(scene) {
  const group = new THREE.Group();
  const shaftTex = gradientTexture();

  // פתחי-החלונות המזרחיים: בין עמודים ב-z = -D/3, 0, D/3 → 4 פתחים
  const gaps = [];
  const edges = [-ROOM_D / 2, -ROOM_D / 3, 0, ROOM_D / 3, ROOM_D / 2];
  for (let i = 0; i < edges.length - 1; i++) {
    const zc = (edges[i] + edges[i + 1]) / 2;
    const hw = (edges[i + 1] - edges[i]) / 2 - 0.22; // שוליים לעמודים
    gaps.push([zc, Math.min(hw, 1.6)]);
  }

  const eastX = ROOM_W / 2 + 0.06;
  const drop = DROP_Y;
  for (const [zc, hw] of gaps) {
    // מרובע-קרן: קצה-עליון בחלון, קצה-תחתון על הרצפה בכיוון הקרן
    const bx = eastX + RX * drop;
    const bz1 = zc - hw + RZ * drop;
    const bz2 = zc + hw + RZ * drop;
    // 4 קודקודים: שני עליונים (חלון) + שני תחתונים (רצפה)
    const quad = [
      [eastX, drop, zc - hw, 1], [eastX, drop, zc + hw, 1],
      [bx, 0, bz2, 0], [bx, 0, bz1, 0],
    ];
    // שני משולשים לכל פנים (חזית + גב — DoubleSide)
    const triIdx = [0, 1, 3, 1, 2, 3, 1, 0, 2, 0, 3, 2];
    const pos = new Float32Array(triIdx.length * 3);
    const uvs = new Float32Array(triIdx.length * 2);
    triIdx.forEach((vi, k) => {
      const v = quad[vi];
      pos[k * 3] = v[0]; pos[k * 3 + 1] = v[1]; pos[k * 3 + 2] = v[2];
      uvs[k * 2] = (k % 3) === 0 ? 0 : 1;
      uvs[k * 2 + 1] = v[3]; // v=1 בחלון (קצה בהיר), v=0 ברצפה
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    const mat = new THREE.MeshBasicMaterial({
      map: shaftTex, transparent: true, opacity: 0.34,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false,
    });
    const beam = new THREE.Mesh(geo, mat);
    beam.renderOrder = 5;
    group.add(beam);
  }

  // ───── אבק-עדין ─────
  const N = 150;
  const positions = new Float32Array(N * 3);
  const seeds = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    positions[i * 3] = (Math.random() - 0.5) * (ROOM_W - 1);
    positions[i * 3 + 1] = 0.25 + Math.random() * (WALL_H - 0.7);
    positions[i * 3 + 2] = (Math.random() - 0.5) * (ROOM_D - 1);
    seeds[i] = Math.random() * Math.PI * 2;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const dustMat = new THREE.PointsMaterial({
    map: dustTexture(), size: 0.055, transparent: true, opacity: 0.5,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  dust.renderOrder = 6;
  group.add(dust);

  scene.add(group);

  let t = 0;
  return {
    update(dt) {
      t += dt;
      const p = dustGeo.attributes.position;
      for (let i = 0; i < N; i++) {
        const s = seeds[i];
        let y = p.getY(i) - dt * 0.035;
        if (y < 0.2) y = WALL_H - 0.55;
        p.setY(i, y);
        p.setX(i, p.getX(i) + Math.sin(t * 0.4 + s) * dt * 0.018);
        p.setZ(i, p.getZ(i) + Math.cos(t * 0.33 + s * 1.7) * dt * 0.014);
      }
      p.needsUpdate = true;
    },
  };
}
