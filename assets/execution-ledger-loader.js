/* ═══════════ execution-ledger-loader.js — G77-c ═══════════
   Resilient accessibility layer for פנקס-הביצוע (execution-state.json,
   schema SAOS-EXECUTION-LEDGER/1).

   MEASURED WOUND (2026-10-26, owner-visible): the ledger CONTENT lived in git
   (wave-81, commit 80f37a416) while the page showed
   "execution-state.json לא נטען — המקור לא נגיש":
     1. the wave-81 refresh push's own pages-deploy run 40339677407 FAILED —
        "Failed to create deployment (status: 502)" at deploy-pages — so the
        fresh ledger did not reach the Pages artifact on its own commit (it
        landed only via the NEXT unrelated push, 6 minutes later);
     2. the page fetched ONE relative URL with zero fallbacks — any Pages
        deploy lag/502/edge flap = total unavailability of the ledger;
     3. the catch block showed "source not accessible" for EVERY failure
        (network, 404, JSON poison, render crash) — a lying error taxonomy.

   CURE (this file, pure & dual-environment — browser global + require()):
     · resolver chain (measured, CORS-probed 2026-10-26 — all four send
       access-control-allow-origin: *):
         1. raw.githubusercontent.com …/Domain/main/execution-state.json
            — git main DIRECT (≤5min edge cache), independent of Pages luck
         2. relative execution-state.json — same-origin Pages copy
         3. /Domain/execution-state.json — absolute, covers base-path submission
         4. cdn.jsdelivr.net/gh/…@main/… — last-resort mirror; MEASURED: jsDelivr
            caches @branch up to 12h (max-age=43200) → it must never outrank a
            fresher source (deviation from the directive's raw→jsDelivr→relative
            order is measured, documented, and freshness-lawful)
     · validator: schema + at + law + row-array laws — poisoned/partial JSON
       is REFUSED, never rendered, never repaired by guessing
     · staleness: honest age vs freshness.staleAfterHours (default 48h);
       a future `at` is flagged clock-skew-suspected, never a negative age
     · loadLedger(): first candidate that PASSES EVERYTHING wins; every
       attempt is recorded (URL · status/error · size · ms · clock) and
       returned line-by-line — the surface renders the truth, fail-honest,
       zero fabricated rows.

   Zero dependencies. Runs on node ≥18, bun, and every modern browser.      */
(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) { module.exports = api; }
  if (root) { root.SAOSLedger = api; }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var SCHEMA = 'SAOS-EXECUTION-LEDGER/1';
  var ROW_KEYS = ['done', 'partial', 'gaps', 'next'];
  var CLOCK_SKEW_TOLERANCE_MS = 5 * 60 * 1000; /* wave-81 seam: at may lead its commit by minutes */

  /* ── resolver: the measured fallback chain (order = freshness × independence) ── */
  function sources() {
    return [
      { url: 'https://raw.githubusercontent.com/roshpinacare-sys/Domain/main/execution-state.json', kind: 'raw-main', label: 'raw.githubusercontent · main' },
      { url: 'execution-state.json', kind: 'relative-pages', label: 'Pages · same-origin' },
      { url: '/Domain/execution-state.json', kind: 'absolute-domain', label: 'Pages · /Domain/ absolute' },
      { url: 'https://cdn.jsdelivr.net/gh/roshpinacare-sys/Domain@main/execution-state.json', kind: 'jsdelivr-main', label: 'jsDelivr · main' }
    ];
  }

  /* ── validator: refuse everything that is not the lawful ledger ── */
  function validateLedger(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
      return { ok: false, reason: 'not an object' };
    }
    if (obj.schema !== SCHEMA) {
      return { ok: false, reason: 'schema mismatch: want ' + SCHEMA + ' got ' + JSON.stringify(obj.schema) };
    }
    if (typeof obj.at !== 'string' || !isFinite(Date.parse(obj.at))) {
      return { ok: false, reason: 'at missing/unparseable: ' + JSON.stringify(obj.at) };
    }
    if (typeof obj.law !== 'string' || obj.law.length < 4) {
      return { ok: false, reason: 'law line missing (the כל-שורה-נגזרת-מפנקס-העבודה provenance law)' };
    }
    var rowCount = { done: 0, partial: 0, gaps: 0, next: 0, total: 0 };
    for (var i = 0; i < ROW_KEYS.length; i++) {
      var k = ROW_KEYS[i];
      if (obj[k] === undefined || obj[k] === null) { obj[k] = []; continue; } /* absent = lawful empty */
      if (!Array.isArray(obj[k])) {
        return { ok: false, reason: k + ' is not an array (' + typeof obj[k] + ')' };
      }
      for (var j = 0; j < obj[k].length; j++) {
        var row = obj[k][j];
        if (!row || typeof row !== 'object' || Array.isArray(row)) {
          return { ok: false, reason: k + '[' + j + '] is not an object' };
        }
      }
      rowCount[k] = obj[k].length;
      rowCount.total += obj[k].length;
    }
    return { ok: true, ledger: obj, rowCount: rowCount };
  }

  /* ── freshness: honest age law (48h default; future `at` = clock-skew flag) ── */
  function thresholdOf(ledger) {
    var h = ledger && ledger.freshness && typeof ledger.freshness.staleAfterHours === 'number'
      ? ledger.freshness.staleAfterHours : 48;
    return h > 0 ? h : 48;
  }
  function staleness(atIso, nowMs, thresholdHours) {
    if (typeof atIso !== 'string' || !isFinite(Date.parse(atIso))) {
      return { ok: false, reason: 'at unparseable' };
    }
    var now = typeof nowMs === 'number' && isFinite(nowMs) ? nowMs : Date.now();
    var th = typeof thresholdHours === 'number' && thresholdHours > 0 ? thresholdHours : 48;
    var ageMs = now - Date.parse(atIso);
    var clockSkew = ageMs < -CLOCK_SKEW_TOLERANCE_MS; /* at leads the clock by >5min */
    if (ageMs < 0) { ageMs = 0; }                    /* never fabricate a negative age */
    var ageHours = Math.round((ageMs / 36e5) * 100) / 100;
    return { ok: true, ageHours: ageHours, thresholdHours: th, stale: ageHours >= th, clockSkewSuspected: clockSkew };
  }

  /* ── line-by-line exposure: one honest line per attempt ── */
  function clockOf(nowMs) {
    return new Date(typeof nowMs === 'number' ? nowMs : Date.now()).toISOString().slice(0, 16);
  }
  function attemptLine(a, nowMs) {
    var status = a.ok
      ? 'HTTP ' + (a.status || '?') + ' OK'
      : (a.error || 'failed');
    var size = (typeof a.size === 'number') ? (' · ' + a.size + 'ch') : '';
    var ms = (typeof a.ms === 'number') ? (' · ' + a.ms + 'ms') : '';
    return '[' + clockOf(nowMs) + 'Z] ' + a.url + ' → ' + status + size + ms;
  }
  function formatAttempts(attempts, nowMs) {
    if (!Array.isArray(attempts)) return [];
    var out = [];
    for (var i = 0; i < attempts.length; i++) out.push(attemptLine(attempts[i], nowMs));
    return out;
  }

  /* ── the fetch chain: first candidate that passes EVERYTHING wins ── */
  function loadLedger(opts) {
    opts = opts || {};
    var candidates = Array.isArray(opts.candidates) && opts.candidates.length ? opts.candidates : sources();
    var fetchImpl = opts.fetchImpl || (typeof fetch === 'function' ? fetch : null);
    var nowMs = typeof opts.now === 'number' ? opts.now : (opts.now ? Date.parse(opts.now) : Date.now());
    if (!isFinite(nowMs)) nowMs = Date.now();
    var timeoutMs = typeof opts.timeoutMs === 'number' && opts.timeoutMs > 0 ? opts.timeoutMs : 8000;

    if (!fetchImpl) {
      return Promise.resolve({ ok: false, attempts: [], error: 'no transport (fetch unavailable)', clock: clockOf(nowMs) + 'Z' });
    }

    var attempts = [];
    function finish(r) { r.clock = clockOf(nowMs) + 'Z'; return r; }

    function attempt(i) {
      if (i >= candidates.length) {
        return Promise.resolve(finish({
          ok: false,
          attempts: attempts,
          error: 'all ' + candidates.length + ' sources failed — fail-honest, zero fabricated rows'
        }));
      }
      var c = candidates[i];
      var t0 = Date.now();
      var signal = null;
      var timedOut = false;
      if (typeof AbortController === 'function') {
        var ac = new AbortController();
        signal = ac.signal;
        setTimeout(function () { timedOut = true; try { ac.abort(); } catch (e) { /* noop */ } }, timeoutMs);
      }
      return Promise.resolve()
        .then(function () { return fetchImpl(c.url, { signal: signal, cache: 'no-store' }); })
        .then(function (res) {
          if (!res || typeof res.ok !== 'boolean') throw new Error('non-response from transport');
          if (!res.ok) {
            attempts.push({ url: c.url, kind: c.kind, ok: false, status: res.status, error: 'HTTP ' + res.status, ms: Date.now() - t0 });
            return attempt(i + 1);
          }
          return res.text().then(function (text) {
            var parsed;
            try { parsed = JSON.parse(text); }
            catch (pe) {
              attempts.push({ url: c.url, kind: c.kind, ok: false, status: res.status, error: 'JSON parse failed: ' + pe.message, size: text.length, ms: Date.now() - t0 });
              return attempt(i + 1);
            }
            var v = validateLedger(parsed);
            if (!v.ok) {
              attempts.push({ url: c.url, kind: c.kind, ok: false, status: res.status, error: 'ledger refused: ' + v.reason, size: text.length, ms: Date.now() - t0 });
              return attempt(i + 1);
            }
            var src = { url: c.url, kind: c.kind, label: c.label, status: res.status, size: text.length, ms: Date.now() - t0, attempt: i + 1 };
            return finish({
              ok: true,
              ledger: v.ledger,
              rowCount: v.rowCount,
              source: src,
              attempts: attempts,
              staleness: staleness(v.ledger.at, nowMs, thresholdOf(v.ledger))
            });
          });
        })
        .catch(function (e) {
          attempts.push({
            url: c.url, kind: c.kind, ok: false,
            error: timedOut ? 'timeout after ' + timeoutMs + 'ms' : ('exception: ' + (e && e.message ? e.message : String(e))),
            ms: Date.now() - t0
          });
          return attempt(i + 1);
        });
    }
    return attempt(0);
  }

  return {
    SCHEMA: SCHEMA,
    sources: sources,
    validateLedger: validateLedger,
    thresholdOf: thresholdOf,
    staleness: staleness,
    formatAttempts: formatAttempts,
    loadLedger: loadLedger
  };
});
