/**
 * crew.js — הצוות-החי: אווטארים ממורקבים (Mixamo-standard) עם מצבי-חיים-אמת.
 * כל-סוכן = עותק-שלד מ-GLB אחד (SkeletonUtils), מונפש מספריית-הקליפים
 * + שכבות-פרוצדורליות + ניווט-בין-תחנות. המצבים-נגזרים-מהאמת (feed),
 * ופייזות-אישיות — הצוות-חי, לא-צבא-רובוטים.
 */
import * as THREE from 'three';
import * as SkeletonUtils from '../vendor/utils/SkeletonUtils.js';
import { findBone, applyLifeLayers } from './motions.js';

const V3 = THREE.Vector3;

export class Crew {
  constructor(scene, lib, camera) {
    this.scene = scene;
    this.lib = lib;
    this.camera = camera;
    this.agents = [];
    this.group = new THREE.Group();
    scene.add(this.group);
  }

  /** יצירת-צוות מהפיד-האמיתי + השולחנות מ-world.json */
  spawn(officeFeed, W, worldFeedDead) {
    const roster = rosterFromFeed(officeFeed);
    const desks = ensureDesks(W, roster.length);
    roster.forEach((member, i) => {
      const desk = desks[i % desks.length];
      if (!desk) return;
      const agent = this.mkAgent(member, desk, i, worldFeedDead);
      this.agents.push(agent);
      this.group.add(agent.root);
    });
    return this.agents;
  }

  mkAgent(member, desk, idx, feedDead) {
    const proto = this.lib.prototypeGlb;
    const root = SkeletonUtils.clone(proto.scene);
    root.scale.setScalar(0.92);
    root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; } });

    // מיפוי-עצמות-לשכבות-החיים
    const bones = {
      hips: findBone(root, 'Hips'), spine: findBone(root, 'Spine'),
      head: findBone(root, 'Head'),
      leftForeArm: findBone(root, 'LeftForeArm'), rightForeArm: findBone(root, 'RightForeArm'),
      leftArm: findBone(root, 'LeftArm'), rightArm: findBone(root, 'RightArm'),
    };
    const mixer = new THREE.AnimationMixer(root);

    const agent = {
      id: member.id, name: member.name, desk: member.desk, credits: member.credits,
      root, mixer, bones, lib: this.lib, phase: (idx * 2.399) % 6.283,
      state: 'typing', stateSince: 0, celebrateUntil: 0, meetingSeat: -1,
      deskPos: new V3(desk.x, 0, desk.z), deskRot: desk.rot || 0,
      seatPos: new V3(desk.x - Math.sin(desk.rot || 0) * 0.72, 0, desk.z + Math.cos(desk.rot || 0) * 0.72),
      target: null, path: null, speed: 0.9 + Math.random() * 0.25,
      camera: this.camera, lastReal: member.lastReal || null, feedDead,
      tag: makeTag(member),
      current: null, fade: 0,
    };
    // מצב-פתיחה: עובד-בשולחן (מוצב-ישר)
    root.position.copy(agent.seatPos);
    root.rotation.y = agent.deskRot + Math.PI;
    play(agent, this.lib.get('idle'), 0.25);
    this.scene.add(agent.tag.sprite);
    return agent;
  }

  disposeTag(agent) { this.scene.remove(agent.tag.sprite); }
}

/** רשת-שולחנות-בטוחה (מוקום-יחיד — עולם.js מייבא-אותה) */
export function ensureDesks(W, n) {
  let d = (W.desks || []).filter((x) => x && Number.isFinite(x.x) && Number.isFinite(x.z));
  while (d.length < Math.max(n, 1)) {
    const i = d.length;
    d.push({ id: `auto-${i}`, x: -7 + (i % 4) * 4.4, z: i < 4 ? -4.2 : 3.7, rot: i < 4 ? 0 : Math.PI });
  }
  W.desks = d;
  return d;
}

function rosterFromFeed(office) {
  const crew = office?.crew;
  const out = [];
  if (crew?.lead) out.push({ id: crew.lead.id, name: crew.lead.id, desk: crew.lead.desk, credits: crew.lead.credits ?? null, lead: true });
  for (const w of crew?.workers || []) out.push({ id: w.id, name: w.id, desk: w.desk, credits: w.credits ?? null });
  if (!out.length) {
    // כנות: גם-אם-הפיד-נפל — העולם-לא-ריק; רוסטר-בסיס-מתועד
    for (const id of ['yarden', 'aluf', 'shachar', 'gal', 'erez', 'tamar'])
      out.push({ id, name: id, desk: 'מקור-אמת-בלתי-זמין', credits: null });
  }
  return out;
}

function makeTag(member) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 88;
  const x = c.getContext('2d');
  const draw = (state, credits) => {
    x.clearRect(0, 0, 256, 88);
    x.fillStyle = 'rgba(255,254,250,.94)';
    roundRect(x, 6, 6, 244, 76, 14); x.fill();
    x.strokeStyle = '#ddd3bd'; x.lineWidth = 2; roundRect(x, 6, 6, 244, 76, 14); x.stroke();
    x.fillStyle = '#3d3428'; x.font = 'bold 26px system-ui'; x.textAlign = 'right';
    x.fillText(member.name, 240, 38);
    x.fillStyle = '#8a7a5c'; x.font = '17px system-ui';
    x.fillText(state, 240, 62);
    if (credits != null) { x.fillStyle = '#b08d3e'; x.font = 'bold 16px system-ui'; x.textAlign = 'left'; x.fillText(`★ ${credits}`, 16, 62); }
  };
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  sprite.scale.set(1.15, 0.4, 1); sprite.renderOrder = 5;
  draw('מצב-חי', member.credits ?? null); tex.needsUpdate = true;
  return { sprite, canvas: c, ctx: x, draw, tex };
}

function roundRect(x, a, b, w, h, r) {
  x.beginPath(); x.moveTo(a + r, b);
  x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r);
  x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath();
}

/* ── מנוע-מצבים ─────────────────────────────────────────────────── */

export function play(agent, clip, fade = 0.4) {
  if (!clip) return;
  const next = agent.mixer.clipAction(clip);
  if (agent.current === next) return;
  next.reset().setEffectiveWeight(1).fadeIn(fade).play();
  if (agent.current) agent.current.fadeOut(fade);
  agent.current = next;
}

export function setState(agent, st, W, tNow) {
  if (agent.state === st) return;
  agent.state = st; agent.stateSince = tNow;
  drawTag(agent, st);
  switch (st) {
    case 'typing': moveAgent(agent, agent.seatPos, agent.deskRot + Math.PI, () => play(agent, agent.lib.get('idle'))); break;
    case 'idle': play(agent, agent.lib.get('idle')); break;
    case 'walk': {
      const spot = randomSpot(W, agent);
      agent.path = spot;
      play(agent, agent.lib.get('walk'));
      break;
    }
    case 'coffee': {
      const c = W.coffee;
      agent.path = new V3(c.x + 0.9, 0, c.z + (agent.phase > 3 ? 0.7 : -0.5));
      play(agent, agent.lib.get('walk'));
      break;
    }
    case 'meet': {
      if (agent.meetingSeat < 0) agent.meetingSeat = agent.meetIdx ?? 0;
      const a = (agent.meetingSeat / 6) * Math.PI * 2;
      const mt = W.meeting;
      agent.path = new V3(mt.x + Math.cos(a) * 2.15, 0, mt.z + Math.sin(a) * 2.15);
      agent.meetLook = new V3(mt.x, 0, mt.z);
      play(agent, agent.lib.get('walk'));
      break;
    }
    case 'celebrate': {
      agent.celebrateUntil = Date.now() + 9000;
      const samba = agent.lib.get('SambaDance');
      if (samba) play(agent, samba, 0.5);
      else { agent.path = new V3(0.4 + Math.cos(agent.phase) * 1.2, 0, 0.4 + Math.sin(agent.phase) * 1.2); play(agent, agent.lib.get('run')); }
      break;
    }
    case 'asleep': moveAgent(agent, agent.seatPos, agent.deskRot + Math.PI, () => play(agent, agent.lib.get('idle'))); break;
    default: play(agent, agent.lib.get('idle'));
  }
}

const TAG_LABELS = {
  typing: 'עובד-על-הספרים', idle: 'בהתבוננות', walk: 'בניווט', coffee: 'הפסקת-קפה',
  meet: 'בכינוס-צוות', celebrate: 'חוגג-קבלה', asleep: 'ישן-כנה',
};
function drawTag(agent, st) {
  try { agent.tag.draw(TAG_LABELS[st] || st, agent.credits); agent.tag.tex.needsUpdate = true; } catch { /* תג-לא-קריטי */ }
}

function randomSpot(W, agent) {
  const r = 3.5 + (agent.phase % 2) * 2.5;
  const a = Math.random() * Math.PI * 2;
  return new V3(Math.cos(a) * r + 0.4, 0, Math.sin(a) * r + 0.4);
}

function moveAgent(agent, to, faceRot, onArrive) {
  agent.path = null;
  agent.root.position.copy(to);
  agent.root.rotation.y = faceRot;
  onArrive?.();
}

/** עדכון-פריים: ניווט → מיקסר → שכבות-חיים → תג-שם */
export function updateAgent(agent, dt, tSec, W) {
  if (agent.path) {
    const p = agent.root.position;
    const d = agent.path.clone().sub(p); d.y = 0;
    const dist = d.length();
    if (dist < 0.12) {
      agent.path = null;
      const st = agent.state;
      if (st === 'walk') { play(agent, agent.lib.get('idle')); agent.root.rotation.y = agent.deskRot + Math.PI; }
      else if (st === 'coffee') { play(agent, agent.lib.get('idle')); faceTo(agent, new V3(-6, 0, 2)); }
      else if (st === 'meet') { play(agent, Math.random() > 0.5 ? agent.lib.get('agree') : agent.lib.get('idle')); faceTo(agent, agent.meetLook || new V3(W.meeting.x, 0, W.meeting.z)); }
    } else {
      d.normalize();
      p.addScaledVector(d, agent.speed * dt);
      const yaw = Math.atan2(d.x, d.z);
      agent.root.rotation.y = smoothYaw(agent.root.rotation.y, yaw, dt);
    }
  }
  agent.mixer.update(dt);
  applyLifeLayers(agent, tSec);
  // תג-עוקב-ראש
  const hp = new V3(); agent.bones.head?.getWorldPosition(hp);
  if (hp.lengthSq() > 0) agent.tag.sprite.position.set(hp.x, hp.y + 0.42, hp.z);
}

function faceTo(agent, at) {
  const d = at.clone().sub(agent.root.position);
  agent.root.rotation.y = Math.atan2(d.x, d.z);
}

function smoothYaw(cur, want, dt) {
  let diff = want - cur;
  while (diff > Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  return cur + diff * Math.min(1, dt * 6);
}
