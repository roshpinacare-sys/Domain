/**
 * feed.js — שכבת-האמת: כל-מה-שהעולם מציג מגיע-מהגיט (אפס-בקאנד, אפס-סודות).
 * מקורות: office-live.json (הצוות-האמיתי), receipts מ-Autonomy (אוטובוס/ריאה/הופעה),
 * world/world.json (העולם-המתפתח). Cache-bust כל-דליפה; polling חי.
 */
const RAW = 'https://raw.githubusercontent.com/roshpinacare-sys';
const BR = 'main';

const bust = (u) => `${u}?t=${Date.now()}`;
const jget = async (url, ms = 9000) => {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  try {
    const r = await fetch(bust(url), { signal: c.signal, cache: 'no-store' });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } finally { clearTimeout(t); }
};

/** העולם-והתנועה: קודם-כל-יחסי-לאתר (מהדפיסוי-החי), נפילה-לגיט-הגולמי */
export async function loadAll() {
  const [officeLive, world, motion] = await Promise.allSettled([
    jget(`${RAW}/Domain/${BR}/agents/office-live.json`),
    firstOk([jget('./world/world.json'), jget(`${RAW}/Domain/${BR}/office3d/world/world.json`)]),
    firstOk([jget('./motion/index.json'), jget(`${RAW}/Domain/${BR}/office3d/motion/index.json`)]),
  ]);
  return {
    office: officeLive.status === 'fulfilled' ? officeLive.value : null,
    world: world.status === 'fulfilled' ? world.value : null,
    motion: motion.status === 'fulfilled' ? motion.value : null,
  };
}

async function firstOk(tries) {
  let last;
  for (const t of tries) { try { return await t; } catch (e) { last = e; } }
  throw last;
}

/** קבלות-אמת אחרונות מ-Autonomy — לקיר-האמת ולבועות-דיבור */
export async function loadTruth() {
  const want = [
    { id: 'chainbus', url: `${RAW}/Autonomy/${BR}/receipts/chainbus/latest-scan.json`, label: 'סריקת-אוטובוס' },
    { id: 'lung', url: `${RAW}/Autonomy/${BR}/receipts/self-heal/latest.json`, label: 'ריאה-עצמית' },
    { id: 'participation', url: `${RAW}/Autonomy/${BR}/receipts/fleet-participation/latest.json`, label: 'השתתפות-צי' },
    { id: 'verifier', url: `${RAW}/Autonomy/${BR}/state/verifier/verdict-latest.json`, label: 'פסק-אמת' },
  ];
  const out = [];
  await Promise.allSettled(want.map(async (w) => {
    try {
      const d = await jget(w.url);
      out.push({ ...w, at: d.at || d.generatedAt || null, ok: d.ok ?? null, summary: summarize(w.id, d), raw: d });
    } catch { /* כנות: מקור-שאינו-זמין לא-מופיע — לא-שקר */ }
  }));
  return out.sort((a, b) => (b.at || '').localeCompare(a.at || ''));
}

function summarize(id, d) {
  if (id === 'chainbus') {
    const e = d.entries ?? d.busEntries ?? null;
    const nodes = d.nodes?.length ?? (d.nodeCount ?? null);
    return nodes ? `${e ?? '?'} כניסות · ${nodes} צמתים-מסכימים` : 'סריקת-שרשרת';
  }
  if (id === 'lung') return `${(d.dispatched ?? []).length} עורקים-מוצתו · ${(d.refused ?? []).length} נדחו`;
  if (id === 'participation') return `השתתפות נמדדה (כנה)`;
  if (id === 'verifier') {
    const c = d.counts ?? {};
    return `פסק: ${d.overall ?? '?'} (${c.fail ?? '?'} אדום · ${c.degraded ?? '?'} סטה)`;
  }
  return '';
}

export const ageMin = (iso) => iso ? Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000)) : null;
export const agoHe = (iso) => {
  const m = ageMin(iso);
  if (m === null) return '—';
  if (m < 1) return 'עכשיו';
  if (m < 60) return `לפני ${m} דק'`;
  const h = Math.floor(m / 60);
  if (h < 24) return `לפני ${h} שע'`;
  return `לפני ${Math.floor(h / 24)} ימ'`;
};

/** מד-חיים: ירוק=עכשיו, צהוב=טרי-יחסית, אדום=מת (כנות!) */
export const freshness = (iso) => {
  const m = ageMin(iso);
  if (m === null) return { cls: 'dead', text: 'אין-מקור' };
  if (m <= 35) return { cls: '', text: 'חי · עכשיו' };
  if (m <= 180) return { cls: 'stale', text: `חי · ${agoHe(iso)}` };
  return { cls: 'dead', text: `רדום · ${agoHe(iso)}` };
};
