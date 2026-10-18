/**
 * board.js — ה-HUD: גלולת-נוכחות-חיה, קיר-אמת, כרטיס-סוכן, בועות-דיבור-אמת.
 */
import { agoHe, freshness, ageMin } from './feed.js';

const $ = (id) => document.getElementById(id);

export class Board {
  constructor() {
    this.onMeet = null; this.onDance = null; this.onTour = null; this.onEvolve = null; this.onCam = null;
    this.wireButtons();
    this.lastBubbles = [];
  }

  wireButtons() {
    $('btn-tour').onclick = () => { this.onTour?.(); flash($('btn-tour')); };
    $('btn-meet').onclick = () => { this.onMeet?.(); flash($('btn-meet')); };
    $('btn-dance').onclick = () => { this.onDance?.(); flash($('btn-dance')); };
    $('btn-evolve').onclick = () => { this.onEvolve?.(); flash($('btn-evolve')); };
    $('btn-cam').onclick = () => { this.onCam?.(); flash($('btn-cam')); };
  }

  presence(fresh) {
    $('presence-dot').className = `dot ${fresh.cls}`;
    $('presence-text').textContent = fresh.text;
  }

  clock(jerusalemHour) {
    const h = Math.floor(jerusalemHour), m = Math.floor((jerusalemHour % 1) * 60);
    const day = h >= 6.5 && h <= 22.5;
    $('clock').textContent = `🕐 ירושלים ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} · ${day ? '☀️ יום-עבודה' : '🌙 לילה'}`;
  }

  truth(truth, office) {
    const by = Object.fromEntries((truth || []).map((t) => [t.id, t]));
    const bus = by.chainbus?.summary ?? '—';
    const lung = by.lung?.summary ?? '—';
    $('m-bus').textContent = bus;
    $('m-lung').textContent = lung;
    $('m-shifts').textContent = office?.shifts?.total ?? '—';
    $('m-journal').textContent = office?.shifts?.journalEvents ?? '—';
    $('m-wfs').textContent = office?.books ? `${office.books.fresh}/${office.books.total} ספרים-טריים` : '—';
    $('wall-fresh').textContent = office?.generatedAt ? agoHe(office.generatedAt) : '';
    const ev = (truth || []).slice(0, 4).map((t) => `<div>▸ <b>${t.label}</b> — ${t.summary} <span style="color:#a89a7e">(${agoHe(t.at)})</span></div>`).join('');
    $('wall-events').innerHTML = ev || '<div>▸ מקורות-אמת-בטעינה…</div>';
  }

  bubble(text, screenXY) {
    if (!screenXY) return;
    const el = document.createElement('div');
    el.className = 'bubble';
    el.innerHTML = text;
    el.style.left = `${screenXY.x}px`; el.style.top = `${screenXY.y - 10}px`;
    $('bubbles').appendChild(el);
    requestAnimationFrame(() => { el.style.opacity = '1'; });
    setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 700); }, 6000);
    this.lastBubbles.push(el);
    if (this.lastBubbles.length > 4) this.lastBubbles.shift()?.remove();
  }

  infocard(agent, feedAge) {
    $('ic-name').textContent = `${agent.name}${agent.id === 'yarden' ? ' · ראש-צוות' : ''}`;
    $('ic-desk').textContent = agent.desk || '—';
    $('ic-state').textContent = stateHe(agent.state);
    $('ic-last').textContent = agent.lastReal ? agoHe(agent.lastReal) : 'מהסבב החי';
    $('ic-credits').textContent = agent.credits ?? '—';
    $('infocard').style.display = 'block';
  }
  hideInfocard() { $('infocard').style.display = 'none'; }
}

export function stateHe(st) {
  return {
    typing: 'עובד-על-הספרים ⌨️', idle: 'בהתבוננות 🌿', walk: 'בניווט-במשרד 🚶',
    coffee: 'הפסקת-קפה ☕', meet: 'בכינוס-צוות 🤝', celebrate: 'חוגג-קבלה-ירוקה 🎉',
    asleep: 'ישן — המקור-רדום (כנות) 😴',
  }[st] || st;
}

function flash(btn) { btn.classList.add('on'); setTimeout(() => btn.classList.remove('on'), 900); }
