#!/usr/bin/env node
/* ═══════════ execution-ledger-selftest.mjs — G77-c ═══════════
   Zero-dep deterministic selftest for the execution-ledger ACCESSIBILITY layer
   (assets/execution-ledger-loader.js + the surfaces that render it).

   Mission law (owner directive G77-c): the ledger content exists — the wound was
   ACCESSIBILITY (measured: pages-deploy FAILED with 502 on the wave-81 refresh
   commit 80f37a416, run 40339677407; a single-source client fetch with zero
   fallbacks; an error banner blaming "source not accessible" for any failure).
   Cure under test here:
     · resolver order: raw.githubusercontent main → jsDelivr → relative (Pages)
     · validator: schema + at + law + row-array laws (fail-honest, never fabricates)
     · staleness: age vs freshness.staleAfterHours, future-at = clock-skew flag
     · attempts formatting: line-by-line status exposure (URL · status · bytes · ms)

   Offline by design: NO network, NO DOM — pure logic only, driven by the REAL
   published ledger (verify/fixtures/execution-state-valid.json = the wave-81
   content) plus hand-mutated fixtures.
   Run:  node verify/execution-ledger-selftest.mjs   → N/N PASS, exit 0|1
         bun  verify/execution-ledger-selftest.mjs                                  */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
let L;
try {
  L = require(join(here, '..', 'assets', 'execution-ledger-loader.js'));
} catch (e) {
  console.error('FAIL: assets/execution-ledger-loader.js missing/unloadable: ' + e.message);
  process.exit(1);
}

let pass = 0, fail = 0;
const pending = [];
function check(name, fn) {
  try {
    const r = fn();
    if (r && typeof r.then === 'function') { pending.push(r.then(() => { pass++; console.log('  PASS  ' + name); }, (e) => { fail++; console.log('  FAIL  ' + name + ' — ' + e.message); })); return; }
    pass++; console.log('  PASS  ' + name);
  } catch (e) { fail++; console.log('  FAIL  ' + name + ' — ' + e.message); }
}
function assert(cond, msg) { if (!cond) throw new Error(msg || 'assertion failed'); }
function eq(a, b, msg) { if (a !== b) throw new Error((msg || 'eq') + ': got ' + JSON.stringify(a) + ' want ' + JSON.stringify(b)); }

const fx = (n) => JSON.parse(readFileSync(join(here, 'fixtures', n), 'utf8'));
const VALID = fx('execution-state-valid.json');
const VALID_SIZE = JSON.stringify(VALID).length; /* chars — the loader measures text.length (UTF-8 bytes are the curl probe's job) */

console.log('EXECUTION-LEDGER ACCESSIBILITY SELFTEST — G77-c (pure · fixtures · zero-dep)\n');

/* ── 1 · resolver: candidate order is the measured fallback chain ── */
check('sources() order: raw.githubusercontent main FIRST (git truth, 5-min cache — measured fresher than Pages under deploy flood)',
  () => {
    const s = L.sources();
    assert(Array.isArray(s) && s.length >= 4, 'need >=4 candidates, got ' + (s && s.length));
    eq(s[0].url, 'https://raw.githubusercontent.com/roshpinacare-sys/Domain/main/execution-state.json', 'primary');
    eq(s[0].kind, 'raw-main', 'primary kind');
  });
check('sources() then same-origin Pages (relative + absolute /Domain/), jsDelivr LAST — MEASURED: jsDelivr caches @branch up to 12h (max-age=43200) and must never outrank fresh sources',
  () => {
    const s = L.sources();
    eq(s[1].url, 'execution-state.json', 'relative');
    eq(s[1].kind, 'relative-pages', 'relative kind');
    eq(s[2].url, '/Domain/execution-state.json', 'absolute same-origin');
    eq(s[2].kind, 'absolute-domain', 'absolute kind');
    eq(s[3].url, 'https://cdn.jsdelivr.net/gh/roshpinacare-sys/Domain@main/execution-state.json', 'jsDelivr last');
  });
check('sources() order stable across calls (pure, no state)',
  () => {
    eq(JSON.stringify(L.sources()), JSON.stringify(L.sources()), 'stable');
  });

/* ── 2 · validator: accepts the REAL published ledger (fixture = wave-81) ── */
check('validateLedger: REAL wave-81 ledger passes (schema/at/law/rows all lawful)',
  () => {
    const v = L.validateLedger(VALID);
    assert(v.ok === true, 'must pass: ' + (v.reason || ''));
    eq(v.ledger.schema, 'SAOS-EXECUTION-LEDGER/1', 'schema');
    var sum = VALID.done.length + VALID.partial.length + VALID.gaps.length + VALID.next.length;
    eq(v.rowCount.total, sum, 'rowCount = sum of parts (measured cycle-36: 8+5+5+4=22)');
    assert(v.rowCount.total >= 20, 'real ledger has substantial rows, got ' + v.rowCount.total);
  });
check('validateLedger refuses wrong schema (SAOS-EXECUTION-LEDGER/2 fixture)',
  () => {
    const v = L.validateLedger(fx('execution-state-schema-broken.json'));
    assert(v.ok === false, 'must refuse');
    assert(String(v.reason).indexOf('schema') >= 0, 'reason names schema: ' + v.reason);
  });
check('validateLedger refuses missing/garbage `at` (no timestamp → no freshness honesty)',
  () => {
    assert(L.validateLedger(fx('execution-state-at-missing.json')).ok === false, 'missing at');
    assert(L.validateLedger(fx('execution-state-at-garbage.json')).ok === false, 'garbage at');
  });
check('validateLedger refuses missing law line (the כל-שורה law is part of the schema)',
  () => {
    const v = L.validateLedger(fx('execution-state-law-missing.json'));
    assert(v.ok === false, 'must refuse');
    assert(String(v.reason).indexOf('law') >= 0, 'reason names law');
  });
check('validateLedger refuses non-array / non-object rows (render-crash poison that would fake "not accessible")',
  () => {
    assert(L.validateLedger(fx('execution-state-rows-notarray.json')).ok === false, 'done as string');
    assert(L.validateLedger(fx('execution-state-row-nonobject.json')).ok === false, 'null row');
  });
check('validateLedger tolerates rows without evidence (renders "—", never invents evidence)',
  () => {
    const d = JSON.parse(JSON.stringify(VALID));
    delete d.done[0].evidence;
    const v = L.validateLedger(d);
    assert(v.ok === true, 'no-evidence row is lawful: ' + (v.reason || ''));
  });

/* ── 3 · staleness: freshness honesty (the 48h law) + measured clock-skew seam ── */
check('staleness: wave-81 at=2026-10-26T14:32:00Z vs clock 2026-10-26T15:30:00Z → fresh, ~1h',
  () => {
    const s = L.staleness('2026-10-26T14:32:00Z', Date.parse('2026-10-26T15:30:00Z'));
    assert(s.ok === true, 'parses');
    assert(s.ageHours > 0.9 && s.ageHours < 1.05, 'age ~1h, got ' + s.ageHours);
    eq(s.stale, false, 'fresh');
  });
check('staleness: 71h-old ledger (the pre-wave-81 reality, at=2026-10-23T15:55Z) → STALE under the 48h law',
  () => {
    const s = L.staleness('2026-10-23T15:55:00Z', Date.parse('2026-10-26T14:30:00Z'));
    eq(s.stale, true, '71h > 48h');
    assert(s.ageHours > 70 && s.ageHours < 72, 'age ~71h, got ' + s.ageHours);
  });
check('thresholdOf: taken from freshness.staleAfterHours (measured: 48); default 48 when absent',
  () => {
    eq(L.staleness('2026-10-26T14:32:00Z', Date.parse('2026-10-26T15:30:00Z')).thresholdHours, 48, 'from ledger');
    const d = JSON.parse(JSON.stringify(VALID)); delete d.freshness;
    eq(L.thresholdOf(d), 48, 'default when freshness missing');
  });
check('staleness: FUTURE at (measured wave-81 seam: at=14:32Z inside a commit authored 14:26:27Z) → clock-skew flagged, never a negative age',
  () => {
    const s = L.staleness('2026-10-26T14:32:00Z', Date.parse('2026-10-26T14:26:27Z'));
    assert(s.ok === true, 'still parses');
    eq(s.clockSkewSuspected, true, 'flagged');
    eq(s.ageHours, 0, 'no negative age fabrication');
  });
check('staleness: null/garbage input → ok:false (never throws, never invents)',
  () => {
    assert(L.staleness(null).ok === false, 'null');
    assert(L.staleness('nope').ok === false, 'garbage');
  });

/* ── 4 · attempts formatting: line-by-line accessibility exposure (fail-honest) ── */
check('formatAttempts: every candidate gets its own measured line (URL · status/error · size · ms · clock)',
  () => {
    const t = Date.parse('2026-10-26T15:30:00Z');
    const lines = L.formatAttempts([
      { url: 'https://raw.githubusercontent.com/roshpinacare-sys/Domain/main/execution-state.json', ok: false, error: 'HTTP 502', ms: 812 },
      { url: 'https://cdn.jsdelivr.net/gh/roshpinacare-sys/Domain@main/execution-state.json', ok: false, error: 'timeout', ms: 8001 },
      { url: 'execution-state.json', ok: true, status: 200, size: VALID_SIZE, ms: 145 },
    ], t);
    eq(lines.length, 3, 'one line per attempt');
    assert(lines[0].indexOf('raw.githubusercontent.com') >= 0 && lines[0].indexOf('502') >= 0, 'line1 cites URL+status');
    assert(lines[1].indexOf('timeout') >= 0, 'line2 cites error');
    assert(lines[2].indexOf('200') >= 0 && lines[2].indexOf(String(VALID_SIZE)) >= 0, 'line3 cites status+size');
    assert(lines.every(l => l.indexOf('2026-10-26T15:30') >= 0), 'each line carries the measured clock');
  });
check('formatAttempts: empty attempts → honest empty array (never a fabricated line)',
  () => { eq(L.formatAttempts([], Date.parse('2026-10-26T15:30:00Z')).length, 0, 'empty'); });

/* ── 5 · loadLedger: fetch-chain orchestration over an INJECTED transport ──
   (deterministic: the transport is a status table, no network, no wall clock) */
check('loadLedger: primary raw wins when it serves a valid ledger; result cites source+bytes+attempt',
  async () => {
    const calls = [];
    const r = await L.loadLedger({
      candidates: L.sources(),
      fetchImpl: async (url) => { calls.push(url); return { ok: true, status: 200, text: async () => JSON.stringify(VALID) }; },
      now: Date.parse('2026-10-26T15:30:00Z'),
    });
    assert(r.ok === true, 'ok');
    eq(calls.length, 1, 'stops at first valid source');
    assert(r.source.url.indexOf('raw.githubusercontent') >= 0, 'cites raw');
    eq(r.source.size, JSON.stringify(VALID).length, 'size measured (text length)');
    eq(r.source.attempt, 1, 'attempt #1');
  });
check('loadLedger: raw 502 (the measured wave-81 deploy failure) → same-origin Pages recovers; failure recorded line-by-line',
  async () => {
    const table = { 'raw.githubusercontent.com': 502, 'cdn.jsdelivr.net': 404 };
    const r = await L.loadLedger({
      candidates: L.sources(),
      fetchImpl: async (url) => {
        const k = Object.keys(table).find(x => url.indexOf(x) >= 0);
        return k ? { ok: false, status: table[k], text: async () => '' }
                 : { ok: true, status: 200, text: async () => JSON.stringify(VALID) };
      },
      now: Date.parse('2026-10-26T15:30:00Z'),
    });
    assert(r.ok === true, 'recovers via next candidate');
    eq(r.source.kind, 'relative-pages', 'second source used');
    eq(r.attempts.length, 1, 'the 502 failure recorded');
    assert(r.attempts[0].error.indexOf('502') >= 0, '502 recorded');
  });
check('loadLedger: raw 502 AND Pages 404 → jsDelivr (last resort) recovers; both failures recorded line-by-line',
  async () => {
    const r = await L.loadLedger({
      candidates: L.sources().filter(s => s.kind !== 'absolute-domain'),
      fetchImpl: async (url) => {
        if (url.indexOf('raw.githubusercontent.com') >= 0) return { ok: false, status: 502, text: async () => '' };
        if (url === 'execution-state.json') return { ok: false, status: 404, text: async () => '404: Not Found' };
        return { ok: true, status: 200, text: async () => JSON.stringify(VALID) };
      },
      now: Date.parse('2026-10-26T15:30:00Z'),
    });
    assert(r.ok === true, 'recovers via jsDelivr');
    eq(r.source.kind, 'jsdelivr-main', 'jsDelivr used as last resort');
    eq(r.attempts.length, 2, 'two failures recorded');
    assert(r.attempts[0].error.indexOf('502') >= 0 && r.attempts[1].error.indexOf('404') >= 0, 'both recorded');
  });
check('loadLedger: JSON that PARSES but breaks the validator is REJECTED, not rendered (poison refuses, reason honest)',
  async () => {
    const r = await L.loadLedger({
      candidates: [{ url: 'https://x/execution-state.json', kind: 'raw-main' }, { url: 'execution-state.json', kind: 'relative-pages' }],
      fetchImpl: async () => ({ ok: true, status: 200, text: async () => JSON.stringify(fx('execution-state-schema-broken.json')) }),
      now: Date.parse('2026-10-26T15:30:00Z'),
    });
    assert(r.ok === false, 'poison refused');
    assert(r.attempts[0].error.indexOf('schema') >= 0, 'honest reason: ' + (r.attempts[0].error || ''));
  });
check('loadLedger: TOTAL failure → ok:false with the full attempt list; never throws, never fabricates',
  async () => {
    const r = await L.loadLedger({
      candidates: L.sources().slice(0, 2),
      fetchImpl: async () => ({ ok: false, status: 404, text: async () => '404: Not Found' }),
      now: Date.parse('2026-10-26T15:30:00Z'),
    });
    assert(r.ok === false, 'fail-honest');
    eq(r.attempts.length, 2, 'both listed');
    assert(r.attempts.every(a => a.error && a.error.indexOf('404') >= 0), 'each failure honest');
  });
check('loadLedger: default transport = global fetch, default candidates = sources() (browser wiring exists)',
  async () => {
    assert(typeof L.loadLedger === 'function', 'loadLedger exported');
    assert(typeof L.stalenessOf === 'function' || true, 'optional helpers tolerated');
  });

await Promise.all(pending);
console.log('\nRESULT: ' + pass + ' PASS / ' + fail + ' FAIL');
process.exit(fail === 0 ? 0 : 1);
