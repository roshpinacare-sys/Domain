/**
 * main.js — העולם-החי: אתחול, מצלמות (מסלול/סיור), לולאת-חיים, מחזור-יום,
 * חיבור-אמת (feed), כינוס/חגיגה/התפתחות. אפס-בקאנד — הכל-מהגיט.
 */
import * as THREE from 'three';
import { GLTFLoader } from '../vendor/loaders/GLTFLoader.js';
import { loadAll, loadTruth, freshness, ageMin, agoHe } from './feed.js';
import { buildRoom, buildProps, buildFurniture, applyDaylight, jerusalemHour } from './world.js';
import { MotionLibrary, lifeState } from './motions.js';
import { Crew, ensureDesks, setState, play, updateAgent } from './crew.js';
import { Board } from './board.js';

const bar = (p, msg) => { const b = document.getElementById('loadbar'); if (b) b.style.width = `${Math.round(p * 100)}%`; if (msg) document.getElementById('loadmsg').textContent = msg; };

async function boot() {
  bar(0.05, 'טוען את העולם-מהגיט');
  const [{ office, world, motion }, truth0] = await Promise.all([
    loadAll(), loadTruth().catch(() => []),
  ]);
  const W = world || { room: { w: 24, d: 15, h: 4.2, wallColor: '#e8e2d4', floorColor: '#c9b58f', accent: '#8a6d2f' }, daylight: { wakeHour: 6.5, sleepHour: 22.5 }, desks: [], meeting: { x: 0.4, z: 0.4, seats: 6 }, coffee: { x: 9.6, z: 4.6 }, props: [] };
  ensureDesks(W, 7); // רשת-שולחנות-מובטחת לפני-כל-בנייה

  // ── רנדרר/סצנה ────────────────────────────
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  document.getElementById('root').appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#dfe6ea');
  scene.fog = new THREE.Fog('#dfe6ea', 26, 46);

  const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.1, 120);

  // ── אור ───────────────────────────────────
  const sun = new THREE.DirectionalLight('#fff2dd', 2.0);
  sun.position.set(-9, 12, 7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -14; sun.shadow.camera.right = 14;
  sun.shadow.camera.top = 12; sun.shadow.camera.bottom = -10;
  sun.shadow.bias = -0.0004;
  scene.add(sun);
  const hemi = new THREE.HemisphereLight('#eaf2ff', '#b09a72', 0.6); scene.add(hemi);
  const amb = new THREE.AmbientLight('#ffffff', 0.3); scene.add(amb);
  const warmInner = new THREE.PointLight('#ffd9a0', 14, 12, 2); warmInner.position.set(0.4, 3.4, 0.4); scene.add(warmInner);

  bar(0.15, 'בונה את החדר');
  buildRoom(scene, W);
  buildProps(scene, W);
  const furn = buildFurniture(scene, W);

  // ── טעינת-אווטארים ────────────────────────
  bar(0.3, 'מכין את הצוות-החי');
  const loader = new GLTFLoader();
  const loadG = (u) => new Promise((res, rej) => loader.load(u, res, undefined, rej));
  const [xbot, michelle] = await Promise.all([
    loadG('./models/humans/Xbot.glb').catch(() => null),
    loadG('./models/humans/Michelle.glb').catch(() => null),
  ]);
  if (!xbot) { bar(1, 'שגיאה: דגם-אווטאר-חסר'); return; }

  const lib = new MotionLibrary();
  lib.ingestGlb('xbot', xbot, motion);
  if (michelle) lib.ingestGlb('michelle', michelle, motion);
  lib.prototypeGlb = xbot;

  // ריטרגט-חוצה-שלד: סמבה של מישל רצה על שלדי-Xbot (אותם-שמות-עצמות Mixamo)
  if (michelle && michelle.animations?.some((a) => a.name === 'SambaDance')) {
    import('../vendor/utils/retarget.js').then(({ buildRigInfo, retargetClip }) => {
      const src = michelle.animations.find((a) => a.name === 'SambaDance');
      const srcRig = buildRigInfo(michelle.scene);
      const dstRig = buildRigInfo(xbot.scene);
      const out = retargetClip(src, srcRig, dstRig, { tame: 0.55 });
      if (out) { lib.clips.set('SambaDance', out); lib.meta.set('SambaDance', { use: 'חגיגה (ריטרגט חוצה-שלד)' }); }
    });
  }

  // ── הצוות-האמיתי ──────────────────────────
  bar(0.6, 'מעיר את הסוכנים');
  const feedDead = !office || (ageMin(office.generatedAt) ?? 999) > 420;
  const crew = new Crew(scene, lib, camera);
  const agents = crew.spawn(office, W, feedDead);
  agents.forEach((a, i) => { a.meetIdx = i; });

  // ── מצלמות ────────────────────────────────
  let camMode = 0; // 0=מסלול חופשי-אוטומטי, 1=סיור, 2=זווית-גבוהה
  const tour = [new THREE.Vector3(-9, 2.6, 9), new THREE.Vector3(0, 2.0, 10.5), new THREE.Vector3(9, 2.4, 9), new THREE.Vector3(11, 3.2, -6), new THREE.Vector3(0, 2.8, -9.5)];
  let tourI = 0, tourT = 0;
  function orbitCam(t) {
    const r = 12.2, y = 4.6 + Math.sin(t * 0.11) * 0.5;
    camera.position.set(Math.sin(t * 0.07) * r, y, Math.cos(t * 0.07) * r + 1.2);
    camera.lookAt(0.4, 1.15, 0.2);
  }
  function tourCam(dt) {
    tourT += dt;
    const a = tour[tourI % tour.length], b = tour[(tourI + 1) % tour.length];
    const k = Math.min(1, tourT / 7);
    const kk = k * k * (3 - 2 * k);
    camera.position.lerpVectors(a, b, kk);
    camera.lookAt(0.4, 1.1, 0);
    if (k >= 1) { tourI++; tourT = 0; }
  }

  // ── לוח ───────────────────────────────────
  const board = new Board();
  board.onTour = () => { camMode = 1; tourT = 0; };
  board.onCam = () => { camMode = (camMode + 1) % 2 === 0 ? 0 : 2; if (camMode === 2) camera.position.set(0, 9.5, 3.5); };
  board.onMeet = () => { agents.forEach((a) => { a.meetingSeat = a.meetIdx % (W.meeting.seats || 6); setState(a, 'meet', W, tSec); }); setTimeout(() => agents.forEach((a) => setState(a, 'typing', W, tSec)), 26000); };
  board.onDance = () => agents.forEach((a) => setState(a, 'celebrate', W, tSec));
  board.onEvolve = () => {
    const u = `./world/world.json?t=${Date.now()}`;
    fetch(u).then((r) => r.json()).then((w) => {
      const log = (w.evolutionLog || []).slice(-3).map((e) => `<div>▸ <b>${(e.by || '').replace(/</g, '')}</b> — ${(e.change || '').slice(0, 90)}</div>`).join('');
      board.bubble(`🌱 <b>גרסת-עולם ${w.version ?? '?'}</b><br>${log || 'העולם יציב — הסבב-הבא יגדיל אותו'}`, { x: innerWidth / 2, y: innerHeight * 0.35 });
    }).catch(() => board.bubble('🌱 העולם-מהגיט-בטעינה', { x: innerWidth / 2, y: innerHeight * 0.35 }));
  };
  let truth = truth0;
  board.truth(truth, office);
  board.presence(freshness(office?.generatedAt));

  // קליק-על-סוכן → כרטיס
  const ray = new THREE.Raycaster(); const mouse = new THREE.Vector2();
  let downXY = null;
  renderer.domElement.addEventListener('pointerdown', (e) => { downXY = [e.clientX, e.clientY]; });
  renderer.domElement.addEventListener('pointerup', (e) => {
    if (!downXY || Math.hypot(e.clientX - downXY[0], e.clientY - downXY[1]) > 6) return;
    mouse.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(mouse, camera);
    const hits = ray.intersectObjects(agents.map((a) => a.root), true);
    if (!hits.length) { board.hideInfocard(); return; }
    let o = hits[0].object; while (o && !agents.some((a) => a.root === o)) o = o.parent;
    const agent = agents.find((a) => a.root === o);
    if (agent) { board.infocard(agent); focusOn(agent); }
  });
  function focusOn(agent) {
    camMode = 3; camFocus = agent;
  }
  let camFocus = null;

  // ── רענון-אמת (כל-120s) ───────────────────
  setInterval(async () => {
    try {
      const [truthNew, officeNew] = await Promise.all([
        loadTruth(), fetch(`https://raw.githubusercontent.com/roshpinacare-sys/Domain/main/agents/office-live.json?t=${Date.now()}`).then((r) => r.json()),
      ]);
      truth = truthNew; board.truth(truth, officeNew); board.presence(freshness(officeNew.generatedAt));
      // חגיגה-אוטומטית: קבלת-ריאה-טרייה עם-הצתות
      const lung = truthNew.find((t) => t.id === 'lung');
      if (lung && ageMin(lung.at) < 3 && (lung.raw?.dispatched?.length ?? 0) > 0)
        agents.forEach((a) => setState(a, 'celebrate', W, tSec));
    } catch { /* כנות: דליפה-כושלת-לא-מפילה-את-העולם */ }
  }, 120000);

  // ── לולאת-חיים ────────────────────────────
  const clockT = new THREE.Clock();
  let tSec = 0; let stateTick = 0; let bubbleTick = 0;
  function frame() {
    const dt = Math.min(0.05, clockT.getDelta());
    tSec += dt;
    // יום-אמיתי
    const jh = jerusalemHour();
    applyDaylight(sun, hemi, amb, jh, W.daylight?.wakeHour ?? 6.5, W.daylight?.sleepHour ?? 22.5);
    warmInner.intensity = (jh >= 19 || jh < 7) ? 20 : 8;
    board.clock(jh);
    // מצבי-חיים (כל-1.5s)
    stateTick += dt;
    if (stateTick > 1.5) {
      stateTick = 0;
      const fresh = ageMin(office?.generatedAt);
      for (const a of agents) {
        const st = lifeState(a, { freshMin: fresh, dead: feedDead, meetingNow: false }, tSec);
        setState(a, st, W, tSec);
      }
    }
    for (const a of agents) updateAgent(a, dt, tSec, W);
    // מצלמה
    if (camMode === 0) orbitCam(tSec);
    else if (camMode === 1) tourCam(dt);
    else if (camMode === 3 && camFocus) {
      const p = camFocus.root.position;
      const want = new THREE.Vector3(p.x - Math.sin(tSec * 0.3) * 2.6, 2.0, p.z - Math.cos(tSec * 0.3) * 2.6);
      camera.position.lerp(want, Math.min(1, dt * 2));
      camera.lookAt(p.x, 1.2, p.z);
    }
    // בועות-אמת (כל-9s, סוכן-מסתובב)
    bubbleTick += dt;
    if (bubbleTick > 9) {
      bubbleTick = 0;
      const ev = (truth || []).find((t) => t.summary);
      const a = agents[Math.floor(tSec / 9) % agents.length];
      const hp = new THREE.Vector3(); a.bones.head?.getWorldPosition(hp);
      const sp = hp.clone().project(camera);
      if (sp.z < 1 && ev) board.bubble(`<b>${a.name}</b> · ${ev.label}: ${ev.summary}`, { x: (sp.x * 0.5 + 0.5) * innerWidth, y: (-sp.y * 0.5 + 0.5) * innerHeight });
    }
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  bar(1, 'המשרד חי');
  setTimeout(() => document.getElementById('loading')?.remove(), 400);
  frame();
  // ידית-אבחון (לסיור-כנות — לא-חלק-מהעולם)
  window.__office3d = { lib, agents, W, office, truth: () => truth, clips: () => [...lib.clips.keys()] };

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
}

boot().catch((e) => {
  console.error('[office3d] boot failure:', e);
  const m = document.getElementById('loadmsg');
  if (m) m.textContent = `שגיאת-עולם: ${e.message} — הגיט הוא-המקור, נסה-רענון`;
});
