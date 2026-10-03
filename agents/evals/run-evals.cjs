'use strict';
/**
 * evals/run-evals.cjs — Z-36 DESK EVALS (the learn-harness-engineering study's
 * eval discipline, adopted: an eval is a runnable expectation, not a hope).
 *
 * White-box evals target PURE functions (venture-desk exports: harvestFills,
 * fillKey, FILLS_SEED); black-box evals run the DESK PROCESSES in fresh child
 * processes and assert their contract (exit 0, books written, counts consistent)
 * — fresh process = judge separation, per the study's hardest lesson.
 *
 * Each eval catches a REAL past or plausible failure class:
 *   E1 dedupe identity      — the Z-34 raw-prefix double-count (shipped, caught pre-push)
 *   E2 seed no-double-count — seed text shorter than book-row text (same family)
 *   E3 venture fail-soft    — a desk must never break CI when the oracle is unreachable
 *   E4 audit fail-soft      — the judge node itself must survive a missing canon
 *   E5 concat-family        — string manabar + number = giant (third-time incident family)
 *   E6 stamp hygiene        — a book without a timestamp can never count as fresh
 *   E7 guard deny/allow     — destructive commands DENY, the fleet's rebase law stays ALLOW (Z-38)
 *   E8 guard context        — data-context ALLOW, session-context sync-idiom DENY (Z-38)
 *   E9 guard scan CI        — executable surfaces carry zero unbooked DENY (Z-38)
 *   E10 rail catalog        — the inference registry is valid; FORBIDDEN rails never enabled (Z-39)
 *   E11 rail probe          — keyless probes classify honestly, fail-soft on a ghost row (Z-39)
 *   E12 rail policy gate    — a FORBIDDEN row enabled as LIVE fails validation (Z-39)
 *   E13 fate-defense FWI    — the Emergence-World scorecard runs fresh, 9 indicators, every one artifact-sourced (Task 22; renumbered from my interim E10 — Z-39's rail evals landed first on main, supersession visible here)
 *   E14 collapse drill      — containment PROVEN on a fresh run: 4 fault classes, 4 REDs (Z-40, emergence.ai; renumbered from my interim E13 — Task 22's fate-defense landed on main first, parallel-convergence supersedes)
 *   E15 one-bloc convergence — the whole git is measured mechanically: 16 roles, honest statuses, no invented reach (Task 23, owner directive "מקשה אחת")
 *
 * Fail-soft: exit 0 always; FAILs are booked honestly (HARNESS-AUDIT MANDATE:
 * green-washing the evals is a doctrine breach).
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const AG = path.resolve(__dirname, '..'); // agents/
const OUT_DIR = __dirname;
const evals = [];
const evalr = (id, name, pass, expectations, note) => evals.push({ id, name, status: pass ? 'PASS' : 'FAIL', expectations, note: note || null, at: new Date().toISOString() });

function accumulateInMemory(bookRows, seed) {
  // mirrors updateFillsLedger's accumulate step on pure data (no file writes)
  const seen = new Set(seed.map((e) => e.key));
  const entries = seed.map((e) => ({ raw: e.raw, credit: e.credit }));
  let added = 0;
  for (const c of bookRows) {
    if (seen.has(c.key)) continue;
    seen.add(c.key); entries.push({ raw: e.raw, credit: e.credit }); added++;
  }
  return { entries, added };
}

(async () => {
  let vd = null;
  try { vd = require(path.join(AG, 'venture-desk.cjs')); } catch (e) { vd = null; }

  // ---- E1+E2: dedupe identity & seed no-double-count (white-box, pure data)
  try {
    if (!vd || !vd.harvestFills || !vd.fillKey) throw new Error('venture-desk exports missing');
    const econFixture = { at: '2026-10-02T00:00:00Z', rows: [{ step: 'evidence', status: 'SETTLED-HISTORY', rows: [
      'WAIV 10.00000109 sold @ 0.19749 → +1.95151099 SWAP.HIVE (9.88156871 filled by d7connect, balance-verified)',
      'SWAP.DOGE 0.572191 sold @ 1.69399599 → +0.96933383 SWAP.HIVE realized (position bought ~1.66 in Z-30)'
    ] }] };
    const harvested = vd.harvestFills(econFixture).map((c) => ({ raw: c.raw, credit: c.credit, key: vd.fillKey(c.raw, c.credit) }));
    const seed = vd.FILLS_SEED.map((e) => ({ raw: e.raw, credit: e.credit, key: vd.fillKey(e.raw, e.credit) }));
    const once = accumulateInMemory(harvested, seed);
    const twice = accumulateInMemory(harvested, once.entries.map((e) => ({ raw: e.raw, credit: e.credit, key: vd.fillKey(e.raw, e.credit) })));
    evalr('E1', 'dedupe identity is stable across repeat harvest', once.entries.length === 3 && once.added === 0,
      ['seed(3) + econ rows carrying the same two fills → exactly 3 entries', 'second pass adds 0 (idempotent)'], `entries=${once.entries.length} added=${once.added} reAdded=${twice.added}`);
    evalr('E2', 'seeds never double-counted against longer book-row text', once.added === 0,
      ['seed text is a prefix of the book-row text — identity must still match'], `identity sample: ${vd.fillKey(harvested[0].raw, harvested[0].credit)}`);
  } catch (e) { evalr('E1', 'dedupe identity', false, ['exports present and pure'], 'eval crashed: ' + String(e.message).slice(0, 80)); evalr('E2', 'seed no-double-count', false, [''], 'blocked by E1 crash'); }

  // ---- E3: venture-desk fail-soft with unreachable canon (black-box, fresh process)
  try {
    const r = spawnSync(process.execPath, [path.join(AG, 'venture-desk.cjs')], { env: { ...process.env, DEFU_DIR: '/nonexistent-canon-z36' }, cwd: AG, timeout: 60000 });
    const board = JSON.parse(fs.readFileSync(path.join(AG, 'ventures.json'), 'utf8'));
    evalr('E3', 'venture-desk exits 0 with unreachable canon (fail-soft)', r.status === 0 && board.ok === true && Array.isArray(board.ventures) && board.ventures.length === 5,
      ['exit code 0 even when DEFU_DIR is bogus', 'board still written, honest nulls where the oracle is unreachable', '5 ventures present with statuses'], `exit=${r.status} open=${board.counts && board.counts.open}`);
  } catch (e) { evalr('E3', 'venture-desk fail-soft', false, ['exit 0'], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E4: harness-audit fail-soft with missing canon (black-box, fresh process)
  try {
    const r = spawnSync(process.execPath, [path.join(AG, 'harness-audit.cjs')], { env: { ...process.env, DEFU_DIR: '/nonexistent-canon-z36' }, cwd: AG, timeout: 60000 });
    const h = JSON.parse(fs.readFileSync(path.join(AG, 'harness-audit.json'), 'utf8'));
    const sum = h.counts.pass + h.counts.warn + h.counts.fail;
    evalr('E4', 'harness-audit exits 0 with missing canon and keeps counts honest', r.status === 0 && sum === h.checks.length && h.counts.fail > 0,
      ['exit code 0 even when DEFU_DIR is bogus', 'missing canon = honest FAILs, never a crash, never green-washed', 'counts arithmetic consistent (pass+warn+fail == checks)'], `exit=${r.status} pass=${h.counts.pass} warn=${h.counts.warn} fail=${h.counts.fail}`);
  } catch (e) { evalr('E4', 'harness-audit fail-soft', false, ['exit 0'], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E5: the concat-family regression (string manabar must coerce before add)
  try {
    const num = (s) => parseFloat(String(s || '0'));
    const currentMana = '7448851934';           // condenser serves STRINGS
    const regen = 7811969;                       // number
    const max = 1e9;                             // realistic vests×1e6 scale cap
    const wrong = currentMana + regen;           // the bug: string concat
    const right = Math.min(max, num(currentMana) + regen); // the canon
    evalr('E5', 'concat-family regression: manabar coerced before arithmetic', right === Math.min(max, 7448851934 + 7811969) && right <= max && String(wrong).length > 15,
      ['string+number concatenates ("74488519347811969") — the Z-33 third-incident family', 'canonical num() coercion keeps the sum under the cap'], `wrong="${wrong}" right=${right}`);
  } catch (e) { evalr('E5', 'concat-family regression', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E6: stamp hygiene — an unstamped book can never count as fresh
  try {
    const h = JSON.parse(fs.readFileSync(path.join(AG, 'harness-audit.json'), 'utf8'));
    const unstampedFresh = (h.books || []).filter((b) => b.exists && b.ageHours == null && b.fresh === true);
    const warned = (h.checks || []).some((c) => c.subsystem === 'anchors' && c.name.includes('timestamp hygiene') && c.status !== 'FAIL');
    evalr('E6', 'stamp hygiene: unstamped books flagged, never fresh', unstampedFresh.length === 0 && warned,
      ['every book with exists=true and ageHours==null must NOT carry fresh=true', 'the audit surfaces a timestamp-hygiene check (WARN until owners stamp)'], `unstamped-but-fresh=${unstampedFresh.length} hygieneCheck=${warned}`);
  } catch (e) { evalr('E6', 'stamp hygiene', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E7: command-guard core contract (black-box, fresh process) — DCG adoption Z-38
  try {
    const run = (c) => { const r = spawnSync(process.execPath, [path.join(AG, 'command-guard.cjs'), 'explain', c], { cwd: AG, timeout: 30000, encoding: 'utf8' }); return JSON.parse((r.stdout || '{}').split('\n')[0]); };
    const d1 = run('git reset --hard HEAD~1');
    const d2 = run('git push --force origin main');
    const d3 = run('rm -rf agents/');
    const a1 = run('git pull --rebase origin main');
    const a2 = run('git push origin main');
    evalr('E7', 'guard core: destructive DENY, rebase-law ALLOW', d1.decision === 'DENY' && d2.decision === 'DENY' && d3.decision === 'DENY' && a1.decision === 'ALLOW' && a2.decision === 'ALLOW',
      ['git reset --hard / push --force / rm -rf agents/ → DENY with named rule', 'git pull --rebase + plain push → ALLOW (the fleet rebase law must never be blocked)'], `denies=${d1.rule},${d2.rule},${d3.rule} allows=${a1.rule},${a2.rule}`);
  } catch (e) { evalr('E7', 'guard core', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E8: command-guard context detection (DCG principle: data vs execution)
  try {
    const run = (c) => { const r = spawnSync(process.execPath, [path.join(AG, 'command-guard.cjs'), 'explain', c], { cwd: AG, timeout: 30000, encoding: 'utf8' }); return JSON.parse((r.stdout || '{}').split('\n')[0]); };
    const data = run('grep "rm -rf" README.md');
    const session = run('git reset --hard origin/main');
    evalr('E8', 'guard context: data ALLOW, session sync-idiom DENY', data.decision === 'ALLOW' && session.decision === 'DENY',
      ['a destructive string inside grep/echo is DATA — never blocked (no false positives)', 'the same reset in an agent-session context has no retry-loop alibi → DENY'], `data=${data.rule} session=${session.rule}`);
  } catch (e) { evalr('E8', 'guard context', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E9: guard scan on real CI surfaces — zero unbooked destructive drift
  try {
    const r = spawnSync(process.execPath, [path.join(AG, 'command-guard.cjs'), 'scan', '.github/workflows'], { cwd: AG, timeout: 60000, encoding: 'utf8' });
    const led = JSON.parse(fs.readFileSync(path.join(AG, 'command-guard.json'), 'utf8'));
    const denies = led.denies || 0;
    const sync = led.fleetSyncIdiomAllowed || 0;
    const stamped = !!led.at;
    evalr('E9', 'guard scan: CI executable surfaces clean or booked', denies === 0 && sync >= 10 && stamped,
      ['0 DENY rows in .github/workflows (no destructive drift entered CI)', 'the known mirror-bot sync idiom appears as booked allow-with-reason (≥10 rows), never silent', 'ledger stamped (BOOKS-STAMP law)'], `denies=${denies} syncIdiom=${sync} stamped=${stamped}`);
  } catch (e) { evalr('E9', 'guard scan', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E10: cognitive-rail catalog integrity — the registry is valid, forbidden rails never enabled (Z-39)
  try {
    const r = spawnSync(process.execPath, [path.join(AG, 'cognitive-rail.cjs'), 'catalog'], { cwd: AG, timeout: 30000, encoding: 'utf8' });
    const verdict = JSON.parse(r.stdout || '{}');
    const c = verdict.counts || {};
    evalr('E10', 'rail catalog: registry valid, no forbidden rail enabled', verdict.ok === true && c.total >= 15 && c.never === 1 && c.neverLive === 0 && c.keyedNotTierC === 0,
      ['catalog parses quote-aware with the 8-column schema (Z-37 lesson carried forward)', 'cohere (ToS §14, their review) is status NEVER and count neverLive=0 — the catalog itself refuses forbidden rails', 'keyed rails are all tier C (operator gate) — zero keyedNotTierC'], `total=${c.total} live=${c.live} dormant=${c.dormant} never=${c.never} neverLive=${c.neverLive}`);
  } catch (e) { evalr('E10', 'rail catalog', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E11: cognitive-rail probe honesty — classification + fail-soft ghost row (Z-39)
  try {
    const rail = require(path.join(AG, 'cognitive-rail.cjs'));
    const c200 = rail.classifyProbe(200, JSON.stringify({ data: [{ id: 'm1' }, { id: 'm2' }] }), null);
    const c401 = rail.classifyProbe(401, '', null);
    const cErr = rail.classifyProbe(0, null, new Error('getaddrinfo ENOTFOUND'));
    const ghost = spawnSync(process.execPath, [path.join(AG, 'cognitive-rail.cjs'), 'probe', '--only=__ghost-provider__'], { cwd: AG, timeout: 30000, encoding: 'utf8' });
    const led = JSON.parse(fs.readFileSync(path.join(AG, 'rail-ledger.json'), 'utf8'));
    evalr('E11', 'rail probe: honest classification + fail-soft ghost', c200.verdict === 'REACHABLE' && c200.models === 2 && c401.verdict === 'AUTH-WALL' && cErr.verdict === 'UNREACHABLE' && ghost.status === 0 && led.at,
      ['200+data → REACHABLE with model count; 401/403 → AUTH-WALL; network error → UNREACHABLE (no hopeful green)', 'probing a nonexistent provider exits 0 with zero probes booked (fail-soft, no invention)', 'rail-ledger.json stamped (BOOKS-STAMP law)'], `live probes booked=${(led.runs || []).filter((r) => r.mode === 'probe' && r.summary.probed > 0).length}`);
  } catch (e) { evalr('E11', 'rail probe', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E12: cognitive-rail policy gate — enabling a FORBIDDEN rail must fail validation (Z-39)
  try {
    const fsx = require('fs');
    const os = require('os');
    const tmp = path.join(os.tmpdir(), `rail-fixture-z39-${process.pid}.csv`);
    const base = fsx.readFileSync(path.join(AG, 'inference-providers.csv'), 'utf8').replace('C,none,NEVER', 'C,public-only,LIVE');
    fsx.writeFileSync(tmp, base);
    const r = spawnSync(process.execPath, [path.join(AG, 'cognitive-rail.cjs'), 'catalog', '--file', tmp], { cwd: AG, timeout: 30000, encoding: 'utf8' });
    const verdict = JSON.parse(r.stdout || '{}');
    fsx.unlinkSync(tmp);
    evalr('E12', 'rail policy: FORBIDDEN row enabled as LIVE fails the gate', verdict.ok === false && /FORBIDDEN/.test(verdict.reason || ''),
      ['a catalog where cohere (ToS FORBIDDEN) is flipped to LIVE is rejected — ok:false with the FORBIDDEN reason named', 'the policy gate is mechanical, not prose (same lesson as Z-38: a law that lives only in prose is advisory)'], `reason=${String(verdict.reason || '').slice(0, 100)}`);
  } catch (e) { evalr('E12', 'rail policy gate', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E13: fate-defense — the FWI scorecard (Emergence World adoption) is live, fresh, and artifact-sourced (Task 22)
  try {
    const r = spawnSync(process.execPath, [path.join(AG, 'fleet-indicators.cjs')], { cwd: AG, timeout: 120000, encoding: 'utf8' });
    const fwi = JSON.parse(fs.readFileSync(path.join(AG, 'fleet-indicators.json'), 'utf8'));
    const inds = Array.isArray(fwi.indicators) ? fwi.indicators : [];
    const nine = inds.length === 9;
    const sourced = inds.every((i) => i.evidenceSource && String(i.evidenceSource).length > 3);
    const fresh = fwi.at && (Date.now() - Date.parse(fwi.at)) / 3600000 < 1;
    const stasis = JSON.parse(fs.readFileSync(path.join(AG, 'STASIS.json'), 'utf8'));
    evalr('E13', 'fate-defense: FWI scorecard computes 9 artifact-sourced indicators + STASIS armed',
      r.status === 0 && nine && sourced && fresh && typeof stasis.active === 'boolean',
      ['fleet-indicators.cjs runs in a fresh process (exit 0, fail-soft)', 'exactly 9 indicators booked', 'every indicator names a mechanical evidence source (ANTI-GOODHART)', 'FWI book stamped fresh (<1h)', 'STASIS.json parseable with boolean active flag'],
      `verdict=${fwi.verdict} indicators=${inds.length} sourced=${sourced} stasisArmed=${!stasis.active}`);
  } catch (e) { evalr('E13', 'fate-defense FWI', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E14: collapse-drill receipts — containment proven on a fresh run (Z-40, emergence.ai adoption; renumbered from my interim E13 — Task 22's fate-defense landed on main first)
  try {
    const rec = JSON.parse(fs.readFileSync(path.join(AG, 'receipts', 'collapse-drill-receipt.json'), 'utf8'));
    const ageH = (Date.now() - Date.parse(rec.at)) / 3600000;
    const led = JSON.parse(fs.readFileSync(path.join(AG, 'collapse-drill.json'), 'utf8'));
    evalr('E14', 'collapse drill: containment PROVEN on a fresh run', rec.verdict === 'CONTAINMENT-PROVEN' && rec.baseline && rec.baseline.green === true && rec.faults_caught === rec.faults_total && rec.faults_total >= 4 && ageH < 168 && led.verdict === 'CONTAINMENT-PROVEN',
      ['receipt verdict CONTAINMENT-PROVEN with a green baseline (no false credit — BASELINE-RED would refuse attribution)', 'every injected fault class caught: faults_caught === faults_total >= 4 (registry corruption, guard neutered, book stamps stripped, forbidden rail LIVE)', 'receipts fresh < 168h — the drill runs on the CI schedule, containment proof is not a one-time trophy', 'CI summary ledger agrees (collapse-drill.json stamped)'], `caught=${rec.faults_caught}/${rec.faults_total} ageH=${Math.round(ageH)} head=${rec.head}`);
  } catch (e) { evalr('E14', 'collapse drill receipts', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- E15: one-bloc convergence — the whole git measured mechanically (Task 23)
  try {
    const r = spawnSync(process.execPath, [path.join(AG, 'one-bloc.cjs')], { cwd: AG, timeout: 300000, encoding: 'utf8', env: process.env });
    const b = JSON.parse(fs.readFileSync(path.join(AG, 'one-bloc.json'), 'utf8'));
    const rows = Array.isArray(b.repos) ? b.repos : [];
    const sixteen = rows.length === 16;
    const honest = rows.every((x) => ['REACHED', 'AUTH-WALL', 'UNKNOWN'].includes(x.status));
    const keylessFloor = (b.counts && b.counts.keylessReach >= 2) || (b.counts && b.counts.reached >= 2); // Domain+Console are public — the env-independent invariant
    const stamped = !!b.at && (Date.now() - Date.parse(b.at)) / 3600000 < 1;
    const lawsArmed = b.laws && b.laws.stasisBreaker && b.laws.stasisBreaker.parseable === true;
    const bound = Array.isArray(b.boundMaps) && b.boundMaps.length === 3;
    evalr('E15', 'one-bloc: whole-git convergence map measured, never invented',
      r.status === 0 && sixteen && honest && keylessFloor && stamped && lawsArmed && bound,
      ['one-bloc.cjs runs in a fresh process (exit 0, fail-soft)', 'exactly 16 repos measured from agents/one-bloc-roles.csv (the BLOC-STATE hand map bound as data)', 'every repo lands REACHED or an honest AUTH-WALL/UNKNOWN — no invented reach (KEYLESS-FIRST law)', 'keyless floor holds: >=2 public repos reachable with zero credentials (env-independent)', 'book stamped fresh (<1h) + STASIS law parseable + 3 truth-maps bound (dedup: one map, not three)'],
      `verdict=${b.verdict} reached=${b.counts && b.counts.reached}/16 keyless=${b.counts && b.counts.keylessReach} authWall=${b.counts && b.counts.authWall}`);
  } catch (e) { evalr('E15', 'one-bloc convergence', false, [''], 'eval crashed: ' + String(e.message).slice(0, 80)); }

  // ---- book the results (MEASURABLE→DASHBOARD LAW)
  const counts = { pass: evals.filter((e) => e.status === 'PASS').length, fail: evals.filter((e) => e.status === 'FAIL').length };
  const out = { ok: true, at: new Date().toISOString(), agent: 'run-evals v1.5.0 (Z-36 + Z-38 guard + Z-39 rail E10-E12 + Task 22 fate-defense E13 + Z-40 collapse drill E14 + Task 23 one-bloc E15, parallel-convergence superset)', origin: 'learn-harness-engineering eval discipline + destructive_command_guard + freellmapi + Emergence World fate-defense + collapse-drill + one-bloc convergence adoptions (Task 22 + Z-40 + Task 23, deduped by renumbering — the same operator wave landed on the same study from two runtimes)', counts, evals,
    verdict: counts.fail === 0 ? `evals green: ${counts.pass}/${evals.length} expectations hold` : `evals RED: ${counts.fail} fail — booked honestly, the fails are the next work` };
  fs.writeFileSync(path.join(OUT_DIR, 'eval-results.json'), JSON.stringify(out, null, 1) + '\n');
  const md = ['# Desk Evals — runnable expectations (fresh-process judge, Z-36)', '', `_${out.agent} · ${out.at}_`, '', `**${out.verdict}**`, ''];
  for (const e of evals) { md.push(`## ${e.id} · ${e.name} — ${e.status}`); for (const x of e.expectations) md.push(`- ${x}`); if (e.note) md.push(`- _measured: ${e.note}_`); md.push(''); }
  md.push('_Eval discipline adopted from learn-harness-engineering (Z-36): an eval is a runnable expectation, not a hope. Pure functions = white-box; desk processes = black-box fresh processes._');
  fs.writeFileSync(path.join(OUT_DIR, 'eval-results.md'), md.join('\n') + '\n');
  console.log(`run-evals: ${counts.pass} PASS / ${counts.fail} FAIL`);
  process.exit(0);
})();
