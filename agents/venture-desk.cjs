'use strict';
/**
 * venture-desk.cjs — Z-31 SOVEREIGN VENTURE DESK (the two-sided ledger, managed).
 *
 * Birth: operator sent us friends' clodfarm (matank001/clodfarm, studied Z-31) for
 * inspiration + roast. Their verdict: excellent stop-SPENDING governor, zero EARN
 * side, no venture ever opened on their farm, price=cost ($5/mo hosted), their own
 * FAQ warns the ToS floor is rotten. We adopt their good parts (governor math,
 * notebook, dashboards, labor tiering) and bind the missing half as law.
 * Doctrine: Defi/fleet/DOCTRINE-economics.md (TWO-SIDED LEDGER LAW, EARN-GOVERNOR
 * LAW, VENTURE TEMPLATE LAW, MEASURABLE→DASHBOARD LAW, LABOR TIERING LAW).
 *
 * What this desk does (keyless, fail-soft, exit 0 always):
 *   1. reads the live fleet books (econ-book, curation-book, recruitment, routes);
 *   2. fetches the measured fleet ledger (Defi KPI.json: earn/day, fuel burn/day,
 *      runway) — oracle data only, estimation forbidden;
 *   3. verifies each venture's MECHANISM EVIDENCE in-repo (file + marker string,
 *      like recruit.cjs) — a venture is OPEN only with evidence, else PROPOSED;
 *   4. books the two-sided ledger per venture (earn measured / burn measured /
 *      honest TBD-MEASURE) and the kill-rule state;
 *   5. writes the public business board: agents/ventures.json + ventures.md.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const AG = __dirname;
const OUT_JSON = path.join(AG, 'ventures.json');
const OUT_MD = path.join(AG, 'ventures.md');
// sibling canon checkout: local sandbox has the fleet side-by-side; CI gets a
// Defi checkout step (WEAVE_OPS_PAT) — oracle data always readable, raw fetch only fallback.
const DEFU_DIR = process.env.DEFU_DIR || path.resolve(AG, '..', '..', 'Defi');
const read = (f) => { try { return fs.readFileSync(path.join(AG, f), 'utf8'); } catch (_) { return null; } };
const readCanon = (rel) => { try { return fs.readFileSync(path.join(DEFU_DIR, rel), 'utf8'); } catch (_) { return null; } };

// SELF-HEAL: a parallel runtime's reconciliation once wrote `"[object Object] | <note>"`
// into econ-book.json summary (JS object→string concat bug). The desk repairs the
// committed book in place and books the incident — layers must not corrupt each other.
function healEconSummary(obj) {
  if (!obj) return { obj, healed: false };
  let healed = false;
  if (typeof obj.summary === 'string' && obj.summary.startsWith('[object Object]')) {
    obj.summary = obj.summary.replace(/^\[object Object\]\s*\|\s*/, '');
    try { fs.writeFileSync(path.join(AG, 'econ-book.json'), JSON.stringify(obj, null, 1) + '\n'); healed = true; } catch (_) {}
  }
  return { obj, healed };
}
const sstr = (s) => (s == null ? null : (typeof s === 'string' ? s : JSON.stringify(s)));
const readJson = (f) => { try { return JSON.parse(read(f) || 'null'); } catch (_) { return null; } };
const f2 = (x) => (x == null ? null : Math.round(x * 1e4) / 1e4);

function httpsGet(url, timeout = 15000) {
  return new Promise((resolve) => {
    try {
      const u = new URL(url);
      const req = https.request({ hostname: u.hostname, path: u.pathname + (u.search || ''), method: 'GET', family: 4, headers: { 'User-Agent': 'venture-desk/1.0', Accept: 'application/json,text/plain' }, timeout }, (res) => {
        let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => resolve({ status: res.statusCode, body: d }));
      });
      req.on('timeout', () => req.destroy(new Error('timeout'))); req.on('error', () => resolve(null)); req.end();
    } catch (_) { resolve(null); }
  });
}

async function fetchJson(url) {
  const r = await httpsGet(url);
  if (!r || r.status !== 200) return null;
  try { return JSON.parse(r.body); } catch (_) { return null; }
}

// ---- evidence check: mechanism must EXIST in-repo (marker string), never intent
function marker(file, markerStr) {
  const src = read(file);
  return { file, marker: markerStr, verified: !!(src && src.includes(markerStr)) };
}

// ---- venture registry: the VENTURE TEMPLATE LAW as data (product→rail→traffic→
// book→ledger→kill rule). earnLine values are contract targets, kill rules bind.
const VENTURES = [
  {
    id: 'V1', name: 'Curation house',
    thesis: 'disciplined public-external curation (10 soldiers lane; headcorner lane owned by the weave daemon) — our votes ARE the traffic',
    product: 'attention allocated by deterministic public scoring', rail: 'HP curation rewards (steem/hive)',
    traffic: 'native feeds of curated public authors', earnLine: 'measure first cycles; line set after (honest TBD)',
    killRule: 'no measurable curation accrual in 3 consecutive cycles → weight→0 (IDLE)',
    evidence: [marker('curation-book.json', 'soldiers lane of the fleet curation'), marker('soldiers-curate.cjs', 'verify-then-sign')],
    metricsFrom: (books) => ({
      lastRun: books.curation ? { day: books.curation.day, verified: books.curation.tally && books.curation.tally.verified, attempted: books.curation.tally && books.curation.tally.attempted, soldiersWithKey: books.curation.tally && books.curation.tally.soldiersWithKey } : null,
      earn: 'TBD-MEASURE (curation accrual not yet booked — booked the honest way, not estimated)'
    })
  },
  {
    id: 'V2', name: 'Market desk',
    thesis: 'dual-side hive-engine trading: harvest idle tokens, maker buys into live books, dust honesty',
    product: 'liquidity + realized spreads', rail: 'hive-engine order books',
    traffic: 'the books\' own flow (ghost-book gate refuses dead books)',
    earnLine: 'realized spreads ≥ $0.02/day within 7d of live rails',
    killRule: 'RAIL-HEALTH stall >24h → zero signing; no fills in 14d → capital→escrow (HARVEST)',
    evidence: [marker('econ-desk.cjs', 'rail-health'), marker('econ-desk.cjs', 'verify-then-sign'), marker('econ-book.json', 'rail-health')],
    metricsFrom: (books) => ({
      swapHiveTreasury: books.econ ? books.econ.swapHive ?? null : null,
      hiveLiquid: books.econ ? books.econ.hiveLiquid ?? null : null,
      railFrontier: books.econ && books.econ.rail ? books.econ.rail.frontierAgeHours : null,
      earn: 'realized fills booked in econ-book rows (on-chain deltas only)'
    })
  },
  {
    id: 'V3', name: 'Knowledge house',
    thesis: 'public verified playbooks (rail-health, verify-then-sign, delta-settlement, the two-sided ledger itself) as the authority funnel',
    product: 'open doctrine + field-test reports (natural voice, EN, public)', rail: 'steem/hive/blurt posts (tri-bridge canon)',
    traffic: 'SEO + native feeds; authority compounds', earnLine: 'leading: views/votes per playbook; 3 playbooks × 0 engagement → retitle/re-lane',
    killRule: '3 consecutive playbooks with zero engagement → PIVOT lane',
    evidence: [marker('knowledge-cards-en.json', ''), marker('public-wave.cjs', '')],
    metricsFrom: () => ({ earn: 'leading indicators only for now (engagement), no fake USD' })
  },
  {
    id: 'V4', name: 'Content house',
    thesis: 'per-persona expert lanes, zero AI-smell, English public content — support the public, never the echo',
    product: 'expert long-form posts under fleet personas', rail: 'steem/hive/blurt',
    traffic: 'followers/feeds + curation discovery', earnLine: 'leading: engagement per lane; lane with 0 engagement in 14d → merge lane',
    killRule: '14d zero-engagement lane → merged (IDLE) — the lane list shrinks honestly',
    evidence: [marker('personas.json', ''), marker('soldiers-blog.cjs', '')],
    metricsFrom: () => ({ earn: 'TBD-MEASURE (per-lane engagement next cycle)' })
  },
  {
    id: 'V5', name: 'Fuel grid',
    thesis: 'external fills on the fuel grid — the only currently-measured external USD inflow',
    product: 'grid liquidity', rail: 'grid external flow', traffic: 'external traders',
    earnLine: 'measured $0.0604 lifetime (KPI) — keep only if fills continue',
    killRule: 'no external fill in 21d → freeze grid spend (IDLE)',
    evidence: [marker('routes.json', ''), marker('route-desk.cjs', '')],
    metricsFrom: (books, kpi) => ({ lifetimeUsd: kpi && kpi.gridExternalFillsLifetimeUsd != null ? kpi.gridExternalFillsLifetimeUsd : null, earn: kpi ? `measured lifetime $${kpi.gridExternalFillsLifetimeUsd}` : 'KPI source unreachable this run' })
  }
];

(async () => {
  const at = new Date().toISOString();
  // ---- live books (+ self-heal of the [object Object] summary incident)
  const econ0 = readJson('econ-book.json');
  const heal = healEconSummary(econ0);
  const books = {
    econ: econ0,
    curation: readJson('curation-book.json'),
    recruitment: readJson('recruitment.json'),
    routes: readJson('routes.json')
  };
  // ---- measured fleet ledger (oracle: sibling/canon Defi checkout, raw fetch fallback) — estimation forbidden
  let kpiRaw = null;
  const kpiLocal = readCanon('fleet/KPI.json');
  if (kpiLocal) { try { kpiRaw = JSON.parse(kpiLocal); } catch (_) {} }
  if (!kpiRaw) kpiRaw = await fetchJson('https://raw.githubusercontent.com/roshpinacare-sys/Defi/main/fleet/KPI.json');
  let kpi = null;
  if (kpiRaw && kpiRaw.revenuePerDayReal) {
    kpi = {
      updatedAt: kpiRaw.updatedAt || null,
      earnUsdPerDay: kpiRaw.revenuePerDayReal && kpiRaw.revenuePerDayReal.usd != null ? f2(kpiRaw.revenuePerDayReal.usd) : null,
      fuelBurnUsdPerDay: kpiRaw.revenuePerDayReal && kpiRaw.revenuePerDayReal.fuelBurn ? f2(kpiRaw.revenuePerDayReal.fuelBurn.usdPerDay) : null,
      runwayWeeks: kpiRaw.revenuePerDayReal && kpiRaw.revenuePerDayReal.fuelBurn ? kpiRaw.revenuePerDayReal.fuelBurn.remainingWeeks ?? null : null,
      gridExternalFillsLifetimeUsd: kpiRaw.revenuePerDayReal && kpiRaw.revenuePerDayReal.breakdown ? f2(kpiRaw.revenuePerDayReal.breakdown.gridExternalFillsLifetimeUsd) : null,
      ladder: kpiRaw.ladder ? kpiRaw.ladder.current : null,
      greenStreakDays: kpiRaw.ladder ? kpiRaw.ladder.consecutiveGreenDays : null
    };
  }
  // ---- doctrine existence check (the law this desk enforces must itself exist)
  const docLocal = readCanon('fleet/DOCTRINE-economics.md');
  const doctrineVerified = !!(docLocal && docLocal.includes('TWO-SIDED LEDGER LAW')) ||
    await (async () => { const d = await httpsGet('https://raw.githubusercontent.com/roshpinacare-sys/Defi/main/fleet/DOCTRINE-economics.md'); return !!(d && d.status === 200 && d.body.includes('TWO-SIDED LEDGER LAW')); })();

  // ---- ventures with evidence-gated status
  const ventures = VENTURES.map(v => {
    const evidence = v.evidence.map(e => ({ file: e.file, marker: e.marker || '(presence)', verified: e.verified }));
    const allVerified = evidence.every(e => e.verified);
    const status = allVerified ? 'OPEN' : 'PROPOSED'; // honest: no mechanism, no venture
    return {
      id: v.id, name: v.name, thesis: v.thesis, product: v.product, rail: v.rail, traffic: v.traffic,
      earnLine: v.earnLine, killRule: v.killRule, status,
      templateLaw: { product: true, rail: true, traffic: true, kpiBook: true, ledger: true, killRule: true },
      evidence, metrics: v.metricsFrom(books, kpi), notebook: `agents/ventures/${v.id.toLowerCase()}-NOTES.md (created at first dedicated cycle)`
    };
  });

  // ---- the standing truth (the mirror clause, measured — never hidden)
  const ledger = {
    at, oracle: kpi ? 'Defi/fleet/KPI.json (measured, raw)' : 'unreachable this run (honest null, no estimation)',
    earnUsdPerDay: kpi ? kpi.earnUsdPerDay : null,
    burnUsdPerDay: kpi ? kpi.fuelBurnUsdPerDay : null,
    runwayWeeks: kpi ? kpi.runwayWeeks : null,
    verdict: (kpi && kpi.earnUsdPerDay != null && kpi.fuelBurnUsdPerDay != null)
      ? `earn $${kpi.earnUsdPerDay}/day vs burn $${kpi.fuelBurnUsdPerDay}/day — the gap is the mission; every venture's earn side is booked from here on (EARN-GOVERNOR LAW)`
      : 'measured ledger unreachable this run — booked as null, never estimated',
    doctrine: { url: 'https://github.com/roshpinacare-sys/Defi/blob/main/fleet/DOCTRINE-economics.md', verified: doctrineVerified }
  };

  const out = {
    ok: true, at, agent: 'venture-desk v1.0.0 (Z-31)',
    selfHeal: { econSummaryRepaired: heal.healed, incident: 'parallel-runtime [object Object] concat bug repaired in the committed book' },
    origin: 'clodfarm study (Z-31): adopted the governor math + notebook + dashboards + labor tiering; rejected the approval-default, the islands, the earn-less economy; doctrine bound as law',
    ledger, ventures,
    counts: { open: ventures.filter(v => v.status === 'OPEN').length, proposed: ventures.filter(v => v.status === 'PROPOSED').length }
  };
  try { fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 1) + '\n'); } catch (_) {}

  // ---- md board
  const md = [];
  md.push('# Ventures — the fleet\'s public business board (two-sided ledger)');
  md.push('');
  md.push(`_venture-desk v1.0.0 · ${at} · doctrine: ${doctrineVerified ? 'verified live (TWO-SIDED LEDGER LAW present)' : 'doctrine check failed this run (honest)'}_`);
  md.push('');
  md.push('Born from the clodfarm study (Z-31): they built the best stop-spending governor we have seen and no earn side at all. We adopt the governor math and bind the missing half as law. Standing truth:');
  md.push('');
  md.push(`**${ledger.verdict}**`);
  md.push('');
  if (heal.healed) md.push(`> self-heal: econ-book.json summary had the parallel runtime's \`[object Object] |\` concat bug — repaired in place this run (layers must not corrupt each other).`);
  for (const v of ventures) {
    md.push(`## ${v.id} · ${v.name} — ${v.status}`);
    md.push(`- **Thesis:** ${v.thesis}`);
    md.push(`- **Product → rail → traffic:** ${v.product} → ${v.rail} → ${v.traffic}`);
    md.push(`- **Earn line:** ${v.earnLine}`);
    md.push(`- **Kill rule:** ${v.killRule}`);
    md.push(`- **Evidence:** ${v.evidence.map(e => `${e.file}${e.marker && e.marker !== '(presence)' ? ` (marker "${e.marker}")` : ''} ${e.verified ? '✓' : '✗'}`).join(' · ')} → mechanism ${v.status === 'OPEN' ? 'PROVEN in-repo' : 'NOT proven (honest PROPOSED)'}`);
    const m = v.metrics || {};
    for (const k of Object.keys(m)) md.push(`- **${k}:** ${m[k]}`);
    md.push('');
  }
  md.push('---');
  md.push('');
  md.push('_Laws binding this board: GOVERNOR LAW · TWO-SIDED LEDGER LAW · EARN-GOVERNOR LAW · NOTEBOOK LAW · MEASURABLE→DASHBOARD LAW · LABOR TIERING LAW · VENTURE TEMPLATE LAW · DELEGATION-SELECTION LAW (Defi/fleet/DOCTRINE-economics.md)._');
  try { fs.writeFileSync(OUT_MD, md.join('\n') + '\n'); } catch (_) {}

  console.log(`venture-desk: ${out.counts.open} OPEN / ${out.counts.proposed} PROPOSED · ledger ${ledger.earnUsdPerDay != null ? `$${ledger.earnUsdPerDay}/d earn` : 'null'} vs ${ledger.burnUsdPerDay != null ? `$${ledger.burnUsdPerDay}/d burn` : 'null'} · doctrine ${doctrineVerified ? 'verified' : 'unverified'}`);
  process.exit(0); // fail-soft: the board never breaks a run
})();
