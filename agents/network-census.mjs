#!/usr/bin/env node
/**
 * network-census — מפקד-המצב של הרשת כולה, על הגריד הציבורי.
 *
 * למה זה קיים: הפעילות של הצי מתפרשת על עשרות ריפואים ומאות זרימות-עבודה,
 * ואין שום מקום אחד שמראה מה חי, מה נכשל ומה שקט. הרושם שהרשת שקטה נובע
 * מהעדר-מדידה גלויה, לא רק מתקלות אמיתיות. הסקריפט הזה מודד את כולם:
 * ריצה אחרונה לכל ריפו, מסקנתה, גילה — ומפרסם network/status.json כאמת
 * יחידה שכל דף וכל צופה יכולים להיאחז בה.
 *
 * כנות: מה שנמדד נכתב. ריפו פרטי שנחסם במיכסה ייראה כשל — וזו בדיוק
 * המטרה: הכשל גלוי, ממוספר, ומקבל טיפול במקום להיעלם בלוגים.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '..');
const OUT = path.join(ROOT, 'network', 'status.json');

const TOKEN = process.env.GH_TOKEN || '';
if (!TOKEN) {
  console.error('[network-census] FAIL: no GH_TOKEN — census without credentials measures nothing');
  process.exit(1);
}
const H = { Authorization: `Bearer ${TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'roshpinacare-census' };

async function api(url) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(url, { headers: H });
    if (res.status === 403 || res.status === 429) {
      const wait = Math.min(30, 2 ** attempt) * 1000;
      console.log(`[network-census] rate-limited on ${url} — waiting ${wait / 1000}s (attempt ${attempt})`);
      await new Promise((r) => setTimeout(r, wait));
      continue;
    }
    if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
    return res.json();
  }
  throw new Error(`rate-limited persistently: ${url}`);
}

function healthOf(repo, run) {
  if (!run) return { health: 'idle', he: 'בלי ריצות' };
  const ageMin = Math.max(0, Math.round((Date.now() - Date.parse(run.created_at)) / 60000));
  const failed = run.conclusion === 'failure' || run.conclusion === 'startup_failure' || run.conclusion === 'timed_out';
  if (run.status !== 'completed') return { health: 'running', he: 'רץ עכשיו', ageMin };
  if (failed) return { health: 'failing', he: 'נכשל', ageMin };
  if (ageMin <= 60) return { health: 'live', he: 'חי', ageMin };
  if (ageMin <= 24 * 60) return { health: 'ok', he: 'תקין', ageMin };
  return { health: 'stale', he: 'שקט', ageMin };
}

console.log('[network-census] measuring the whole fleet…');
const repos = await api('https://api.github.com/user/repos?per_page=100&sort=pushed&affiliation=owner');
const out = [];
for (const repo of repos) {
  let run = null;
  let flows = null;
  try {
    const runs = await api(`https://api.github.com/repos/${repo.full_name}/actions/runs?per_page=1`);
    run = runs.workflow_runs?.[0] ?? null;
  } catch (e) {
    console.log(`[network-census] ${repo.name}: runs unreachable (${e.message}) — recorded as unknown`);
  }
  try {
    flows = await api(`https://api.github.com/repos/${repo.full_name}/actions/workflows?per_page=100`);
  } catch { /* כנה — ספירת-זרימות היא תוספת, לא תנאי */ }
  const h = healthOf(repo, run);
  out.push({
    name: repo.name,
    private: !!repo.private,
    pushedAt: repo.pushed_at,
    workflows: flows?.total_count ?? null,
    lastRunAt: run?.created_at ?? null,
    lastRunName: run?.name ?? null,
    lastRunStatus: run?.status ?? null,
    lastRunConclusion: run?.conclusion ?? null,
    ageMin: h.ageMin ?? null,
    health: h.health,
    healthHe: h.he,
  });
}
out.sort((a, b) => (a.ageMin ?? 1e9) - (b.ageMin ?? 1e9));

const counts = {};
for (const r of out) counts[r.health] = (counts[r.health] || 0) + 1;

const payload = {
  engine: 'network-census',
  v: 1,
  generatedAt: new Date().toISOString(),
  totalRepos: out.length,
  counts,
  repos: out,
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
const tmp = OUT + '.tmp';
fs.writeFileSync(tmp, JSON.stringify(payload, null, 1));
fs.renameSync(tmp, OUT);

const line = out.map((r) => `${r.name.padEnd(26)} ${r.private ? 'PRIV' : 'PUB '} ${(r.healthHe + '').padEnd(10)} ${r.ageMin != null ? r.ageMin + 'min' : '-'}`).join('\n');
console.log(`[network-census] measured ${out.length} repos — ${JSON.stringify(counts)}\n${line}`);
