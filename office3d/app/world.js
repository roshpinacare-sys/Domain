/**
 * world.js — בונה-העולם מ-world/world.json (הקובץ-שהצוות-מפתח-בעצמו).
 * איכות: ACES, צללים-רכים, מחזור-יום-ירושלים, מסכים-אמיטיביים, ערפל-עדין.
 */
import * as THREE from 'three';

export function buildRoom(scene, W) {
  const g = new THREE.Group();
  const { w, d, h } = W.room;
  const floorMat = new THREE.MeshStandardMaterial({ color: W.room.floorColor, roughness: 0.55, metalness: 0.04 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(w, d), floorMat);
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; g.add(floor);

  const carpet = new THREE.Mesh(
    new THREE.CircleGeometry(3.6, 48),
    new THREE.MeshStandardMaterial({ color: '#a5834f', roughness: 0.9 }),
  );
  carpet.rotation.x = -Math.PI / 2; carpet.position.set(0.4, 0.012, 0.4); carpet.receiveShadow = true; g.add(carpet);

  // קירות (שתיים-פתוחות-למצלמה)
  const wallMat = new THREE.MeshStandardMaterial({ color: W.room.wallColor, roughness: 0.92 });
  const mkWall = (w_, h_, x, z, ry) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w_, h_), wallMat);
    m.position.set(x, h_ / 2, z); m.rotation.y = ry; m.receiveShadow = true; g.add(m);
  };
  mkWall(w, h, 0, -d / 2, 0);           // אחורי (קיר-האמת)
  mkWall(d, h, -w / 2, 0, Math.PI / 2); // צד
  mkWall(d, h, w / 2, 0, -Math.PI / 2); // צד

  // חלונות-גורד (עיר) — משטחים-אמיסיביים-עדינים
  const cityTex = cityTexture();
  for (const [x, z, ry] of [[-w / 2 + 0.06, -1.5, Math.PI / 2], [w / 2 - 0.06, 1.8, -Math.PI / 2], [0, -d / 2 + 0.06, 0]]) {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 2.4),
      new THREE.MeshBasicMaterial({ map: cityTex, toneMapped: false }));
    win.position.set(x, 2.35, z); win.rotation.y = ry;
    win.renderOrder = 1; g.add(win);
  }

  scene.add(g);
  return g;
}

function cityTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 200;
  const x = c.getContext('2d');
  x.fillStyle = '#dfe8ee'; x.fillRect(0, 0, 512, 200);
  const seedRnd = mulberry(7);
  for (let i = 0; i < 26; i++) {
    const bw = 18 + seedRnd() * 26, bh = 40 + seedRnd() * 120;
    const bx = i * 19, by = 200 - bh;
    x.fillStyle = `hsl(210,${8 + seedRnd() * 10}%,${72 + seedRnd() * 14}%)`;
    x.fillRect(bx, by, bw, bh);
    x.fillStyle = 'rgba(255,255,255,.55)';
    for (let wy = by + 6; wy < 190; wy += 9) for (let wx = bx + 4; wx < bx + bw - 4; wx += 7)
      if (seedRnd() > 0.45) x.fillRect(wx, wy, 2.5, 3.5);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function buildProps(scene, W) {
  const g = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: '#b98d5a', roughness: 0.6 });
  const dark = new THREE.MeshStandardMaterial({ color: '#3c342a', roughness: 0.5 });
  const metal = new THREE.MeshStandardMaterial({ color: '#8f8a80', roughness: 0.35, metalness: 0.6 });
  const leaf = new THREE.MeshStandardMaterial({ color: '#4c7a3f', roughness: 0.85 });
  const pot = new THREE.MeshStandardMaterial({ color: '#a8563e', roughness: 0.8 });
  const fabric = new THREE.MeshStandardMaterial({ color: '#c47b4a', roughness: 0.9 });
  const screens = [];

  for (const p of W.props || []) {
    if (p.kind === 'plant') {
      const s = p.s || 1;
      const pot_ = new THREE.Mesh(new THREE.CylinderGeometry(0.24 * s, 0.19 * s, 0.42 * s, 12), pot);
      pot_.position.set(p.x, 0.21 * s, p.z); pot_.castShadow = true; g.add(pot_);
      for (let i = 0; i < 7; i++) {
        const leafM = new THREE.Mesh(new THREE.ConeGeometry(0.10 * s, 0.9 * s, 6), leaf);
        leafM.position.set(p.x + (Math.random() - 0.5) * 0.3, 0.42 * s + 0.42 * s + Math.random() * 0.3, p.z + (Math.random() - 0.5) * 0.3);
        leafM.rotation.z = (Math.random() - 0.5) * 0.5; leafM.castShadow = true; g.add(leafM);
      }
    } else if (p.kind === 'sofa') {
      const rot = p.rot || 0;
      const base = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.5, 0.85), fabric);
      base.position.set(p.x, 0.32, p.z); base.rotation.y = rot; base.castShadow = true; g.add(base);
      const back = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.62, 0.22), fabric);
      const off = new THREE.Vector3(0, 0.28, -0.33).applyEuler(new THREE.Euler(0, rot, 0));
      back.position.set(p.x + off.x, 0.6, p.z + off.z); back.rotation.y = rot; back.castShadow = true; g.add(back);
    } else if (p.kind === 'rug') {
      const r = new THREE.Mesh(new THREE.RingGeometry(1.2, p.r || 3.2, 40),
        new THREE.MeshStandardMaterial({ color: '#9c7a48', roughness: 0.95, side: THREE.DoubleSide }));
      r.rotation.x = -Math.PI / 2; r.position.set(p.x, 0.014, p.z); r.receiveShadow = true; g.add(r);
    } else if (p.kind === 'lamp') {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, 1.7, 8), metal);
      pole.position.set(p.x, 0.85, p.z); pole.castShadow = true; g.add(pole);
      const shade = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.34, 16, 1, true),
        new THREE.MeshStandardMaterial({ color: '#f4e9c8', roughness: 0.6, side: THREE.DoubleSide, emissive: '#f4e0a8', emissiveIntensity: 0.35 }));
      shade.position.set(p.x, 1.78, p.z); g.add(shade);
    } else if (p.kind === 'poster') {
      const c = posterTexture(p.title, p.sub, W.room.accent);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.h),
        new THREE.MeshStandardMaterial({ map: c, roughness: 0.85 }));
      m.position.set(p.x, 2.1, p.z); m.rotation.y = p.rotY || 0; g.add(m);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(p.w + 0.08, p.h + 0.08, 0.04), dark);
      const n = new THREE.Vector3(0, 0, -0.028).applyEuler(new THREE.Euler(0, p.rotY || 0, 0));
      frame.position.set(p.x + n.x, 2.1, p.z + n.z); frame.rotation.y = p.rotY || 0; g.add(frame);
    } else if (p.kind === 'screenboard') {
      const c = document.createElement('canvas'); c.width = 640; c.height = 340;
      const board = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.h),
        new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), toneMapped: false }));
      board.position.set(p.x, 2.0, p.z); board.rotation.y = p.rotY || 0; g.add(board);
      const tex = board.material.map; tex.colorSpace = THREE.SRGBColorSpace;
      screens.push({ canvas: c, mesh: board, tex });
    }
  }
  scene.add(g);
  return { group: g, screens };
}

export function buildFurniture(scene, W) {
  const g = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: '#c19a63', roughness: 0.55 });
  const dark = new THREE.MeshStandardMaterial({ color: '#2f2a22', roughness: 0.4, metalness: 0.2 });
  const screens = [];
  const mkDesk = (d) => {
    const grp = new THREE.Group(); grp.position.set(d.x, 0, d.z); grp.rotation.y = d.rot || 0;
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.06, 0.85), wood);
    top.position.y = 0.74; top.castShadow = true; top.receiveShadow = true; grp.add(top);
    for (const [lx, lz] of [[-0.75, -0.33], [0.75, -0.33], [-0.75, 0.33], [0.75, 0.33]]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.74, 8), dark);
      leg.position.set(lx, 0.37, lz); grp.add(leg);
    }
    const mon = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.38, 0.03), dark);
    mon.position.set(0, 1.02, -0.22); mon.rotation.x = -0.08; mon.castShadow = true; grp.add(mon);
    const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.09, 0.16, 8), dark);
    stand.position.set(0, 0.84, -0.22); grp.add(stand);
    const sc = document.createElement('canvas'); sc.width = 256; sc.height = 152;
    const face = new THREE.Mesh(new THREE.PlaneGeometry(0.56, 0.33),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), toneMapped: false }));
    face.position.set(0, 1.02, -0.201); face.rotation.y = Math.PI; face.rotation.x = -0.08; grp.add(face);
    screens.push({ canvas: sc });
    const chair = new THREE.Group(); chair.position.set(0, 0, 0.72);
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.07, 0.46), dark); seat.position.y = 0.5; seat.castShadow = true; chair.add(seat);
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.5, 0.06), dark); back.position.set(0, 0.78, 0.2); chair.add(back);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.5, 8), metalLike()); pole.position.y = 0.25; chair.add(pole);
    grp.add(chair);
    g.add(grp);
    return { grp, chair };
  };
  function metalLike() { return new THREE.MeshStandardMaterial({ color: '#777', roughness: 0.4, metalness: 0.55 }); }

  for (const d of W.desks || []) mkDesk(d);

  // שולחן-כינוס עגול
  const mt = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.06, 36), wood);
  mt.position.set(W.meeting.x, 0.72, W.meeting.z); mt.castShadow = true; mt.receiveShadow = true; g.add(mt);
  const mleg = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.16, 0.7, 12), dark);
  mleg.position.set(W.meeting.x, 0.36, W.meeting.z); g.add(mleg);
  for (let i = 0; i < (W.meeting.seats || 6); i++) {
    const a = (i / (W.meeting.seats || 6)) * Math.PI * 2;
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.08, 16), dark);
    st.position.set(W.meeting.x + Math.cos(a) * 1.7, 0.5, W.meeting.z + Math.sin(a) * 1.7);
    st.castShadow = true; g.add(st);
  }
  // פינת-קפה
  const cb = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.95, 0.6), wood);
  cb.position.set(W.coffee.x, 0.475, W.coffee.z); cb.castShadow = true; g.add(cb);
  const machine = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.4, 0.3), dark);
  machine.position.set(W.coffee.x, 1.1, W.coffee.z); machine.castShadow = true; g.add(machine);

  scene.add(g);
  return { group: g, screens };
}

/** שלט-הרגעים: מצייר-את-האמת-החיה-על-הצג (נקרא-מ-main בכל-רענון-אמת) */
export function drawScreenboard(screen, world, truthLines) {
  if (!screen?.canvas) return;
  const c = screen.canvas.getContext('2d');
  c.fillStyle = '#141a22'; c.fillRect(0, 0, 640, 340);
  c.fillStyle = '#e8d9a8'; c.font = 'bold 30px system-ui'; c.textAlign = 'right';
  c.fillText('רגעי-העולם החי', 610, 52);
  c.strokeStyle = '#3a4656'; c.lineWidth = 3; c.beginPath(); c.moveTo(30, 68); c.lineTo(610, 68); c.stroke();
  c.font = '21px system-ui';
  const lines = (truthLines && truthLines.length ? truthLines : (world?.moments || []).map((m) => m.text)).slice(-6);
  lines.forEach((ln, i) => {
    c.fillStyle = i % 2 ? '#9fb3c8' : '#c8d6e5';
    c.fillText(String(ln).slice(0, 46), 610, 108 + i * 40);
  });
  c.fillStyle = '#5f7186'; c.font = '17px system-ui';
  c.fillText(`גרסת-עולם v${world?.version ?? '?'} · מתפתח-על-הגיט`, 610, 316);
  if (screen.tex) screen.tex.needsUpdate = true;
}

function posterTexture(title, sub, accent) {
  const c = document.createElement('canvas'); c.width = 380; c.height = 240;
  const x = c.getContext('2d');
  x.fillStyle = '#faf6ec'; x.fillRect(0, 0, 380, 240);
  x.strokeStyle = accent; x.lineWidth = 6; x.strokeRect(10, 10, 360, 220);
  x.fillStyle = '#3d3428'; x.font = 'bold 44px system-ui'; x.textAlign = 'center';
  x.fillText(title, 190, 112);
  x.fillStyle = accent; x.font = '24px system-ui';
  x.fillText(sub, 190, 158);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** מחזור-יום: שמש-לפי-שעון-ירושלים (כנות — מהשעון-האמיתי) */
export function jerusalemHour() {
  const now = new Date();
  const jlm = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' }));
  return jlm.getHours() + jlm.getMinutes() / 60;
}

export function applyDaylight(sun, hemi, amb, hour, wake, sleep) {
  const day = hour >= wake && hour <= sleep;
  const t = day ? Math.sin(((hour - wake) / (sleep - wake)) * Math.PI) : 0.08; // 0..1
  sun.intensity = 0.35 + t * 2.1;
  hemi.intensity = 0.25 + t * 0.55;
  amb.intensity = 0.18 + t * 0.3;
  const warm = new THREE.Color().setHSL(0.09 + (1 - t) * 0.03, 0.5, 0.5 + t * 0.2);
  sun.color.copy(warm);
  return { t };
}

function mulberry(a) { return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
