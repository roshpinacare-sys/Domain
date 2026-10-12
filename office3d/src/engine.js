/**
 * engine.js — מנוע-העולם המתמשך של מפקדת הצי.
 *
 * קובץ אחד, אפס תלויות, רץ זהה בשלושה במות:
 *   1. שירות-השידור (Bun, mini-services/office-live) — צעד חי 5Hz + שידור socket.io.
 *   2. פעימת-הגריד (Node, Domain/agents/office-world-tick.mjs) — התקדמות בזמן-עולם
 *      וקומיט office/world-state.json כל 10 דק' — לב העולם הקנוני, ללא תלות בסנדבוקס.
 *   3. הדפדפן (מודול ES) — צופה: מקבל פריים-שידור ומחליק אותו, ובהיעדר שידור
 *      ממשיך את העולם מקומית מהסניפשוט האחרון.
 *
 * חוקי-יסוד:
 *   - העולם לעולם לא מתאפס: כל הרצה ממשיכה מהמצב השמור; איפוס = תקלה.
 *   - ניווט מרחבי אמיתי: רשת-מכשולים + A* — הצוות עוקף ריהוט, עמודי-קשת
 *     ולהבת-הריבונות דרך מסדרונות, לא קו-ישר דרך קירות.
 *   - סדר-יום לפי שעת ירושלים: פתיחת משמרת, תדריך 09:00, עבודה, הפסקות,
 *     סיכומי ערב, משמרת-לילה — העולם חי 24/7 ולא מתחיל "מחדש" בכל פתיחת דף.
 *   - כנות: העולם הזה הוא סימולציית-נוכחות של הצוות; הנתונים האמיתיים
 *     (קומיטים, ספרים, משימות) מגיעים מהגשר ב-data.js — לא מכאן.
 *
 * חוק-סנכרון: ENGINE_VERSION חייב להיות זהה בכל העותקים של הקובץ הזה
 * (public/office3d/src/engine.js ←→ Domain/office/engine.mjs). שינוי כאן = שינוי שם.
 */

export const ENGINE_VERSION = 1;
export const ENGINE_ID = 'office-world';

// ───── קואורדינטות (מטרים — זהה ל-canon.js; העתקה מבוקרת, המנוע עצמאי) ─────
const ROOM = { minX: -9.4, maxX: 9.4, minZ: -5.7, maxZ: 5.7 };
const FLAME = { x: 0, z: 0.5625 };

const STATIONS = {
  reception: { x: 0, z: 4.775 },
  taskwall: { x: 0.75, z: -4.15, face: Math.PI }, // עמדת ראש-המטה מול לוח-המשימות
  gitwall: { x: -4.7, z: -4.1, face: Math.PI },
  library: { x: 4.125, z: -1.7625, face: Math.PI },
  coffee: { x: 8.8, z: 4.7, face: -Math.PI / 2 },
  podium: { x: -7.2, z: -0.875, face: -Math.PI / 2 },
  leadtable: { x: 4.15, z: 2.05, face: -Math.PI / 2 },
  arc: { x: 0, z: 1.9, face: Math.PI },
};

const DESKS = {
  gal: { x: 2.5, z: 0.0625, face: -1.371, seat: { x: 3.1075, z: 0.184 } },
  erez: { x: 0, z: -0.4125, face: 0, seat: { x: 0, z: -0.4425 } },
  tamar: { x: -2.5, z: 0.0625, face: 1.371, seat: { x: -3.1075, z: -0.05875 } },
  shachar: { x: 1.9375, z: 2.0, face: -2.212, seat: { x: 2.43375, z: 2.3725 } },
  yarden: { x: -1.9375, z: 2.0, face: 2.212, seat: { x: -2.43375, z: 2.3725 } },
};

const CHAT_SPOTS = [
  [{ x: -1.25, z: 2.75 }, { x: -0.5, z: 3.5 }],
  [{ x: 1.5, z: 3.0 }, { x: 2.25, z: 3.75 }],
  [{ x: -1.5, z: -0.5 }, { x: -0.75, z: -1.25 }],
  [{ x: 1.5, z: -0.5 }, { x: 2.25, z: -1.25 }],
];

const CREW = [
  { id: 'aluf', lead: true, books: ['work-orders', 'decisions'] },
  { id: 'gal', desk: 'gal', books: ['dex-book', 'fills-ledger'] },
  { id: 'erez', desk: 'erez', books: ['claims-audit'] },
  { id: 'tamar', desk: 'tamar', books: ['econ-book'] },
  { id: 'shachar', desk: 'shachar', books: ['fleet-indicators'] },
  { id: 'yarden', desk: 'yarden', books: ['registry', 'coord-bus'] },
];

// מכשולים עגולים (מטרים) — הרשת המרחבית שדרכה הצוות מנווט
const OBSTACLES = [
  { x: FLAME.x, z: FLAME.z, r: 1.0 }, // להבת-הריבונות — גרעין אסור
  { x: DESKS.gal.x, z: DESKS.gal.z, r: 0.42 },
  { x: DESKS.erez.x, z: DESKS.erez.z, r: 0.42 },
  { x: DESKS.tamar.x, z: DESKS.tamar.z, r: 0.42 },
  { x: DESKS.shachar.x, z: DESKS.shachar.z, r: 0.42 },
  { x: DESKS.yarden.x, z: DESKS.yarden.z, r: 0.42 },
  { x: 5.25, z: 0.75, r: 1.3 }, // שולחן ראש-המטה
  { x: 8.4, z: 3.5, r: 1.0 }, // בר-הקפה
  { x: 4.625, z: -2.8125, r: 0.9 }, // שולחן הספרייה
  { x: 6.625, z: -4.625, r: 0.8 }, // מדף הספרייה
  { x: -6.125, z: -0.875, r: 0.7 }, // דוכן-ההחלטות
];

// נקודות-התכנסות סביב הלהבה (טבעת דרומית, מחוץ לגרעין)
const GATHER_SPOTS = [
  { x: -1.17, z: 1.24 }, { x: 1.17, z: 1.24 }, { x: -0.58, z: 1.66 },
  { x: 0.58, z: 1.66 }, { x: 0, z: 1.95 }, { x: -1.35, z: 0.56 }, { x: 1.35, z: 0.56 },
];

// ───── רשת-הניווט: גריד 0.5 מ' + A* ─────
const CELL = 0.5;
const COLS = Math.round((ROOM.maxX - ROOM.minX) / CELL); // ~37
const ROWS = Math.round((ROOM.maxZ - ROOM.minZ) / CELL); // ~22
const PAD = 0.18; // ריפוד-בטיחות סביב מכשולים

const blocked = new Uint8Array(COLS * ROWS);
for (let c = 0; c < COLS; c++) {
  for (let r = 0; r < ROWS; r++) {
    const x = ROOM.minX + (c + 0.5) * CELL;
    const z = ROOM.minZ + (r + 0.5) * CELL;
    let b = 0;
    for (const o of OBSTACLES) {
      const dx = x - o.x, dz = z - o.z;
      if (dx * dx + dz * dz < (o.r + PAD) * (o.r + PAD)) { b = 1; break; }
    }
    blocked[r * COLS + c] = b;
  }
}

function cellOf(x, z) {
  const c = Math.floor((x - ROOM.minX) / CELL);
  const r = Math.floor((z - ROOM.minZ) / CELL);
  if (c < 0 || c >= COLS || r < 0 || r >= ROWS) return null;
  return { c, r };
}
function posOf(c, r) {
  return { x: ROOM.minX + (c + 0.5) * CELL, z: ROOM.minZ + (r + 0.5) * CELL };
}
function isBlocked(c, r) {
  return c < 0 || c >= COLS || r < 0 || r >= ROWS || blocked[r * COLS + c] === 1;
}
/** התא פנוי הקרוב ביותר (חיפוש-טבעות) — ליעדים הצמודים לריהוט */
function nearestFree(c, r, maxRing = 6) {
  if (!isBlocked(c, r)) return { c, r };
  for (let ring = 1; ring <= maxRing; ring++) {
    for (let dc = -ring; dc <= ring; dc++) {
      for (let dr = -ring; dr <= ring; dr++) {
        if (Math.max(Math.abs(dc), Math.abs(dr)) !== ring) continue;
        if (!isBlocked(c + dc, r + dr)) return { c: c + dc, r: r + dr };
      }
    }
  }
  return null;
}
function losClear(a, b) {
  const d = Math.hypot(b.x - a.x, b.z - a.z);
  const n = Math.max(2, Math.ceil(d / 0.2));
  for (let i = 0; i <= n; i++) {
    const x = a.x + (b.x - a.x) * (i / n);
    const z = a.z + (b.z - a.z) * (i / n);
    const cell = cellOf(x, z);
    if (!cell || isBlocked(cell.c, cell.r)) return false;
  }
  return true;
}
/** A* על 8 שכנים + קיצור-מסלול (string pulling) — מחזיר נקודות במטרים */
export function findPath(x0, z0, x1, z1) {
  const s = cellOf(x0, z0), g = cellOf(x1, z1);
  if (!s || !g) return [{ x: x1, z: z1 }];
  const sf = nearestFree(s.c, s.r), gf = nearestFree(g.c, g.r);
  if (!sf || !gf) return [{ x: x1, z: z1 }];
  const start = sf.r * COLS + sf.c, goal = gf.r * COLS + gf.c;
  if (start === goal) return [{ x: x1, z: z1 }];
  const N = COLS * ROWS;
  const gScore = new Float32Array(N).fill(Infinity);
  const came = new Int32Array(N).fill(-1);
  const open = [start];
  gScore[start] = 0;
  const hOf = (idx) => {
    const c = idx % COLS, r = (idx / COLS) | 0;
    return Math.hypot(c - gf.c, r - gf.r);
  };
  const closed = new Uint8Array(N);
  let found = false;
  while (open.length) {
    // שליפת המינימום (הגריד קטן — סריקה לינארית זולה ופשוטה)
    let bi = 0, bf = gScore[open[0]] + hOf(open[0]);
    for (let i = 1; i < open.length; i++) {
      const f = gScore[open[i]] + hOf(open[i]);
      if (f < bf) { bf = f; bi = i; }
    }
    const cur = open.splice(bi, 1)[0];
    if (cur === goal) { found = true; break; }
    if (closed[cur]) continue;
    closed[cur] = 1;
    const cc = cur % COLS, cr = (cur / COLS) | 0;
    for (let dc = -1; dc <= 1; dc++) {
      for (let dr = -1; dr <= 1; dr++) {
        if (!dc && !dr) continue;
        const nc = cc + dc, nr = cr + dr;
        if (isBlocked(nc, nr)) continue;
        if (dc && dr && (isBlocked(cc + dc, cr) || isBlocked(cc, cr + dr))) continue; // אין חיתוך-פינה
        const ni = nr * COLS + nc;
        if (closed[ni]) continue;
        const cost = dc && dr ? 1.414 : 1;
        if (gScore[cur] + cost < gScore[ni]) {
          gScore[ni] = gScore[cur] + cost;
          came[ni] = cur;
          if (!open.includes(ni)) open.push(ni);
        }
      }
    }
  }
  const pts = [];
  if (found) {
    let cur = goal;
    while (cur !== -1) {
      pts.push(posOf(cur % COLS, (cur / COLS) | 0));
      cur = came[cur];
    }
    pts.reverse();
    // קיצור: כל עוד יש קו-ראייה — דלג על תאי-ביניים
    const pulled = [pts[0]];
    let i = 0;
    while (i < pts.length - 1) {
      let j = pts.length - 1;
      for (; j > i + 1; j--) if (losClear(pts[i], pts[j])) break;
      pulled.push(pts[j]);
      i = j;
    }
    // הנקודה המדויקת בסוף (למשל כיסא) אם היא קרובה ופנויה-בקו-ראייה
    const last = pulled[pulled.length - 1];
    if (Math.hypot(last.x - x1, last.z - z1) < 1.6 && losClear(last, { x: x1, z: z1 })) {
      pulled.push({ x: x1, z: z1 });
    }
    return pulled.slice(1); // התא הראשון = מקום העמידה הנוכחי
  }
  return [{ x: x1, z: z1 }]; // כשל-ניווט: הליכה ישרה (מסומנת בלוג האירועים)
}

// ───── שעת ירושלים (cache לפי דקה) ─────
let tzCacheKey = -1, tzCache = { h: 10, m: 0 };
function jerusalemHM(tMs) {
  const key = Math.floor(tMs / 60000);
  if (key !== tzCacheKey) {
    tzCacheKey = key;
    try {
      const s = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Jerusalem', hour: '2-digit', minute: '2-digit', hour12: false,
      }).format(new Date(tMs));
      const [h, m] = s.split(':').map((v) => parseInt(v, 10));
      tzCache = { h: h % 24, m };
    } catch { tzCache = { h: 10, m: 0 }; }
  }
  return tzCache;
}
export function phaseOf(tMs) {
  const { h } = jerusalemHM(tMs);
  if (h >= 7 && h < 9) return { kind: 'open', he: 'פתיחת משמרת' };
  if (h >= 9 && h < 12) return { kind: 'day', he: 'משמרת בוקר' };
  if (h >= 12 && h < 13) return { kind: 'lunch', he: 'הפסקת צהריים' };
  if (h >= 13 && h < 18) return { kind: 'day', he: 'משמרת צהריים' };
  if (h >= 18 && h < 22) return { kind: 'evening', he: 'סיכומי ערב' };
  return { kind: 'night', he: 'משמרת לילה' };
}

// ───── טקסטים: קול-ארגוני, בלי סימני-AI, בלי ניסוח אישי ─────
const LABELS = {
  desk: 'עובד על המשימה',
  coffee: 'הפסקת קפה',
  library: 'לימוד מהספרייה',
  gitwall: 'סורק את קיר-הגיט',
  board: 'מתפעל את לוח-המשימות',
  podium: 'ניצב בדוכן-ההחלטות',
  flame: 'עומד מול להבת-הריבונות',
  leadtable: 'עובד משולחן ראש-המטה',
  chat: 'שיחת עבודה',
};
function actLabel(state, def, world) {
  if (state === 'desk' && def.books) {
    const b = def.books[Math.floor(Math.random() * def.books.length)];
    return { label: 'עובד על ' + b, activity: 'עובד על ' + b };
  }
  const base = LABELS[state] || 'במשמרת';
  const night = phaseOf(world.t).kind === 'night' ? ' · משמרת-לילה' : '';
  return { label: base + night, activity: base };
}

// ───── בניית/טעינת עולם ─────
export function createSeedWorld(tNow) {
  const w = {
    v: ENGINE_VERSION, engine: ENGINE_ID, t: tNow,
    lastMeetingDay: -1, meetingUntil: 0,
    chatBusy: [0, 0, 0, 0],
    events: [],
    agents: CREW.map((def, i) => {
      const desk = def.desk ? DESKS[def.desk] : null;
      const home = def.lead
        ? { x: STATIONS.taskwall.x, z: STATIONS.taskwall.z, face: STATIONS.taskwall.face }
        : { x: desk.seat.x, z: desk.seat.z, face: desk.face };
      const a = {
        id: def.id, lead: !!def.lead, deskId: def.desk || null, books: def.books || [],
        x: home.x, z: home.z, face: home.face,
        state: def.lead ? 'board' : 'desk', until: (6 + Math.random() * 10) * 1000,
        path: null, pathI: 0, faceEnd: null, approach: 0.46,
        typing: !def.lead, carryBook: false,
        spd: 1.0 + Math.random() * 0.16,
        seat: def.lead ? null : desk.seat, seatFace: def.lead ? null : desk.face,
        label: def.lead ? LABELS.board : actLabel('desk', def, { t: tNow }).label,
        activity: def.lead ? LABELS.board : actLabel('desk', def, { t: tNow }).activity,
        walkPhase: Math.random() * Math.PI * 2,
      };
      return a;
    }),
  };
  pushEvent(w, 'grid', 'העולם המתמשך הוקם — המשמרת בעיצומה');
  return w;
}

export function fromJSON(obj) {
  if (!obj || obj.engine !== ENGINE_ID) throw new Error('world: engine mismatch');
  if (obj.v !== ENGINE_VERSION) throw new Error(`world: version ${obj.v} != ${ENGINE_VERSION}`);
  for (const a of obj.agents) {
    if (a.path) a.path = a.path.map((p) => ({ x: p.x, z: p.z }));
  }
  return obj;
}
export function toJSON(w) { return w; }

function pushEvent(w, who, text) {
  w.events.push({ ts: w.t, who, text });
  if (w.events.length > 40) w.events.splice(0, w.events.length - 40);
}

// ───── ניתוב יעד ─────
function walkTo(w, a, x, z, faceEnd, approach = 0.42) {
  const pts = findPath(a.x, a.z, x, z);
  a.path = pts;
  a.pathI = 0;
  a.faceEnd = faceEnd;
  a.approach = approach;
  a.typing = 0;
}

function stepMove(w, a, dt) {
  const p = a.path;
  const target = p[a.pathI];
  const dx = target.x - a.x, dz = target.z - a.z;
  const dist = Math.hypot(dx, dz);
  const last = a.pathI === p.length - 1;
  const stopAt = last ? a.approach : 0.08;
  // חוק-הגעה: כשהצעד עוקף את היעד — הצמדה מדויקת. בלי זה נוצרת
  // לכידת-זנו (צעד מתחת לדיוק-הצף → עמידה נצחית במקום, נמדדה בפועל).
  if (dist <= stopAt + a.spd * dt) {
    if (last) {
      a.x = target.x; a.z = target.z;
      a.path = null;
      a.moveMs = 0;
      if (a.faceEnd != null) a.face = a.faceEnd;
      arrive(w, a);
    } else {
      a.pathI++;
    }
    return;
  }
  const nx = dx / dist, nz = dz / dist;
  a.x += nx * a.spd * dt; a.z += nz * a.spd * dt;
  const want = Math.atan2(nx, nz);
  let d = (want - a.face) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  a.face += d * Math.min(1, 6 * dt);
  a.walkPhase += dt * a.spd * 7.4;
  a.moveMs = (a.moveMs || 0) + dt * 1000;
}

function arrive(w, a) {
  const def = { books: a.books };
  const L = actLabel(a.pendingState || a.state, def, w);
  a.state = a.pendingState || a.state;
  a.pendingState = null;
  a.until = a.pendingUntil || (6 + Math.random() * 10) * 1000;
  a.pendingUntil = null;
  a.label = L.label; a.activity = L.activity;
  pushEvent(w, a.id, L.label);
}

function dispatch(w, a, state, opts = {}) {
  a.pendingState = state;
  a.pendingUntil = opts.until || null;
  const night = phaseOf(w.t).kind === 'night' ? ' · משמרת-לילה' : '';
  const going = {
    desk: 'חוזר לשולחן', coffee: 'הולך לבר-הקפה', library: 'הולך לספרייה',
    gitwall: 'הולך לקיר-הגיט', board: 'הולך ללוח-המשימות', podium: 'הולך לדוכן-ההחלטות',
    flame: 'מתקרב ללהבת-הריבונות', leadtable: 'עובר לשולחן ראש-המטה', chat: 'הולך לשיחה',
  }[state] || 'בתנועה';
  a.label = going + night; a.activity = going;
  if (state === 'desk' && a.seat) {
    walkTo(w, a, a.seat.x, a.seat.z, a.seatFace, 0.05);
  } else if (state === 'coffee') {
    walkTo(w, a, STATIONS.coffee.x, STATIONS.coffee.z, STATIONS.coffee.face, 0.3);
  } else if (state === 'library') {
    walkTo(w, a, STATIONS.library.x, STATIONS.library.z, STATIONS.library.face, 0.28);
  } else if (state === 'gitwall') {
    walkTo(w, a, STATIONS.gitwall.x, STATIONS.gitwall.z, STATIONS.gitwall.face, 0.3);
  } else if (state === 'board') {
    walkTo(w, a, STATIONS.taskwall.x, STATIONS.taskwall.z, STATIONS.taskwall.face, 0.32);
  } else if (state === 'podium') {
    walkTo(w, a, STATIONS.podium.x, STATIONS.podium.z, STATIONS.podium.face, 0.26);
  } else if (state === 'leadtable') {
    walkTo(w, a, STATIONS.leadtable.x, STATIONS.leadtable.z, STATIONS.leadtable.face, 0.28);
  } else if (state === 'flame') {
    const spot = opts.spot || GATHER_SPOTS[Math.floor(Math.random() * GATHER_SPOTS.length)];
    walkTo(w, a, spot.x, spot.z, Math.atan2(FLAME.x - spot.x, FLAME.z - spot.z), 0.5);
  } else if (state === 'chat' && opts.spot) {
    walkTo(w, a, opts.spot.x, opts.spot.z, opts.face != null ? opts.face : null, 0.4);
  } else {
    arrive(w, a);
  }
}

function pickNext(w, a) {
  const ph = phaseOf(w.t).kind;
  if (a.lead) {
    const opts = ['board', 'podium', 'leadtable', 'flame', 'board'];
    return opts[Math.floor(Math.random() * opts.length)];
  }
  let opts;
  if (ph === 'lunch') opts = ['coffee', 'library', 'chat', 'coffee', 'chat', 'desk'];
  else if (ph === 'evening') opts = ['desk', 'library', 'gitwall', 'board', 'desk'];
  else if (ph === 'night') opts = ['desk', 'desk', 'gitwall', 'coffee', 'library'];
  else if (ph === 'open') opts = ['desk', 'desk', 'board', 'gitwall', 'coffee'];
  else opts = ['coffee', 'library', 'gitwall', 'chat', 'desk', 'desk'];
  return opts[Math.floor(Math.random() * opts.length)];
}

/** תדריך 09:00 ירושלים — הצוות מתכנס סביב הלהבה ל-8 דק' */
function maybeMeeting(w) {
  const { h, m } = jerusalemHM(w.t);
  const dayKey = Math.floor(w.t / 86400000);
  if (h === 9 && w.meetingUntil <= w.t && w.lastMeetingDay !== dayKey) {
    w.lastMeetingDay = dayKey;
    w.meetingUntil = w.t + 8 * 60 * 1000;
    pushEvent(w, 'aluf', 'תדריך בוקר — הצוות מתכנס סביב להבת-הריבונות');
  }
  return w.meetingUntil > w.t;
}

function tryChat(w, a) {
  // שותף פנוי + מקום שיחה פנוי; אחרת — קיר-הגיט
  const now = w.t;
  const freeSpots = CHAT_SPOTS.map((p, i) => ({ p, i })).filter((s) => w.chatBusy[s.i] <= now);
  const partner = w.agents.find((b) =>
    b !== a && !b.path && b.state !== 'chat' && b.state !== 'sit-down' &&
    (b.state === 'desk' || b.state === 'coffee' || b.state === 'gitwall'));
  if (!partner || !freeSpots.length) { dispatch(w, a, 'gitwall'); return; }
  const s = freeSpots[0];
  w.chatBusy[s.i] = now + 26 * 1000;
  const dur = (14 + Math.random() * 8) * 1000;
  dispatch(w, a, 'chat', { spot: s.p[0], face: Math.atan2(s.p[1].x - s.p[0].x, s.p[1].z - s.p[0].z), until: dur });
  dispatch(w, partner, 'chat', { spot: s.p[1], face: Math.atan2(s.p[0].x - s.p[1].x, s.p[0].z - s.p[1].z), until: dur });
}

// ───── צעד-עולם ─────
export function stepWorld(w, dtSec) {
  const meeting = maybeMeeting(w);
  w.t += dtSec * 1000;
  for (const a of w.agents) {
    if (a.path) {
      // שומר-תנועה: אף סוכן לא מחזיק מסלול מעל 5 דק' — הגעה-כפויה כנה
      if ((a.moveMs || 0) > 300_000) {
        a.path = null; a.moveMs = 0;
        pushEvent(w, a.id, 'התעוררות מתעכבת-ניווט — חזרה לפעילות');
        arrive(w, a);
        continue;
      }
      stepMove(w, a, dtSec);
      continue;
    }
    // בפנים: טיימר מצב
    a.until -= dtSec * 1000;
    if (meeting && !a.lead && a.state !== 'flame' && a.state !== 'chat') {
      // התכנסות: כל מי שפנוי — לטבעת הלהבה
      const idx = w.agents.indexOf(a);
      const spot = GATHER_SPOTS[idx % GATHER_SPOTS.length];
      dispatch(w, a, 'flame', { spot, until: (w.meetingUntil - w.t) + 4000 });
      continue;
    }
    if (a.until <= 0) {
      switch (a.state) {
        case 'sit-down':
          a.state = 'desk'; a.typing = 1;
          a.until = (18 + Math.random() * 26) * 1000;
          { const L = actLabel('desk', { books: a.books }, w); a.label = L.label; a.activity = L.activity; }
          break;
        case 'desk':
          a.typing = 0;
          if (Math.random() < 0.62) {
            const nxt = pickNext(w, a);
            if (nxt === 'chat') tryChat(w, a); else dispatch(w, a, nxt);
          } else a.until = (6 + Math.random() * 8) * 1000;
          break;
        case 'coffee': dispatch(w, a, 'desk'); break;
        case 'library':
          a.carryBook = true;
          dispatch(w, a, 'desk');
          break;
        case 'gitwall':
        case 'flame':
        case 'leadtable':
          dispatch(w, a, a.lead ? pickNext(w, a) : 'desk');
          break;
        case 'board': dispatch(w, a, pickNext(w, a)); break;
        case 'podium': dispatch(w, a, 'board'); break;
        case 'chat': dispatch(w, a, 'desk'); break;
        default: dispatch(w, a, 'desk');
      }
    } else if (a.state === 'desk' && Math.random() < dtSec * 0.012) {
      // פעימה אמביינטלית נדירה: סוכן משלים מטלה קצרה
      const nxt = pickNext(w, a);
      if (nxt !== 'desk' && nxt !== 'chat') dispatch(w, a, nxt);
    }
  }
}

// ───── פריים-שידור (לשירות וללקוח) ─────
export function worldFrame(w, sinceTs = 0) {
  return {
    t: w.t,
    phase: phaseOf(w.t).he,
    ag: w.agents.map((a) => ({
      id: a.id, x: r2(a.x), z: r2(a.z), face: r3(a.face),
      moving: a.path ? 1 : 0, state: a.state, typing: a.typing ? 1 : 0,
      carry: a.carryBook ? 1 : 0, label: a.label, activity: a.activity,
    })),
    ev: w.events.filter((e) => e.ts > sinceTs),
  };
}
function r2(v) { return Math.round(v * 100) / 100; }
function r3(v) { return Math.round(v * 1000) / 1000; }

/** התקדמות בזמן-עולם (לפעימת-הגריד ולהשלמת-פער בשירות) */
export function advanceWorld(w, targetMs, { maxCatchupMs = 3 * 3600 * 1000, stepSec = 2 } = {}) {
  let from = w.t;
  const capped = Math.max(from, targetMs - maxCatchupMs);
  if (w.t < capped) {
    pushEvent(w, 'grid', 'פער-זמן גדול נסגר — העולם ממשיך מנקודת-האחרונה');
    w.t = capped;
    from = capped;
  }
  let steps = 0;
  while (w.t < targetMs) {
    stepWorld(w, stepSec);
    steps++;
  }
  return { advancedMs: w.t - from, steps };
}
