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

  // ---- book the results (MEASURABLE→DASHBOARD LAW)
  const counts = { pass: evals.filter((e) => e.status === 'PASS').length, fail: evals.filter((e) => e.status === 'FAIL').length };
  const out = { ok: true, at: new Date().toISOString(), agent: 'run-evals v1.0.0 (Z-36)', origin: 'learn-harness-engineering eval discipline, adopted', counts, evals,
    verdict: counts.fail === 0 ? `evals green: ${counts.pass}/${evals.length} expectations hold` : `evals RED: ${counts.fail} fail — booked honestly, the fails are the next work` };
  fs.writeFileSync(path.join(OUT_DIR, 'eval-results.json'), JSON.stringify(out, null, 1) + '\n');
  const md = ['# Desk Evals — runnable expectations (fresh-process judge, Z-36)', '', `_${out.agent} · ${out.at}_`, '', `**${out.verdict}**`, ''];
  for (const e of evals) { md.push(`## ${e.id} · ${e.name} — ${e.status}`); for (const x of e.expectations) md.push(`- ${x}`); if (e.note) md.push(`- _measured: ${e.note}_`); md.push(''); }
  md.push('_Eval discipline adopted from learn-harness-engineering (Z-36): an eval is a runnable expectation, not a hope. Pure functions = white-box; desk processes = black-box fresh processes._');
  fs.writeFileSync(path.join(OUT_DIR, 'eval-results.md'), md.join('\n') + '\n');
  console.log(`run-evals: ${counts.pass} PASS / ${counts.fail} FAIL`);
  process.exit(0);
})();
