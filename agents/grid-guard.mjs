#!/usr/bin/env node
/**
 * grid-guard — the never-stops law for the grid (owner trace 1a1…59b5).
 *
 * Owner law, verbatim: "חשוב לוודא פעילות של הגריד אין מצב כזה שהוא לא עובד" —
 * there is no scenario where the grid does not work. GitHub crons dilute under
 * load (measured: 48 planned arb-scan runs/day → 12-24 actual). So cadence
 * alone is not a guarantee — a guard that MEASURES staleness and RE-IGNITES
 * the engine is the guarantee.
 *
 * Runs inside grid-doctor (hourly :19), AFTER the audit step.
 *
 * What it measures (never guesses):
 *   1. beat age — from the engine home saos-dex db/grid-public.json (via
 *      contents API with ZIP_PAT; the same PAT the dex-grid twin uses to
 *      check out the engine home — proven access).
 *   2. Console mirror age — from the local checkout dex/grid.json (mirrored
 *      hourly :52 from the Console product).
 *   3. HIVE working inventory — liquid HIVE+HBD of the engine account from
 *      live RPC (the flow-watch half: the moment real inventory lands, the
 *      grid re-arms within the hour, no human in the loop).
 *
 * What it does:
 *   - beat stale > STALE_H  → workflow_dispatch saos-dex/dex-grid (the engine
 *     home holds the signing secrets; dispatch = the engine re-arms itself).
 *   - Console mirror stale > MIRROR_STALE_H → workflow_dispatch Console/grid-pulse.
 *   - inventory crosses R99 tradeable minimums → dispatch dex-grid (flow armed).
 *   - idempotent: MIN_GAP_H between dispatches, state committed (grid-guard-state.json).
 *   - append-only log: grid-guard.jsonl (capped).
 *
 * Honesty laws:
 *   - exit 0 ALWAYS: a guard failure must never break the doctor's truth book;
 *     every failure is recorded in the log line (errors array) — fail-loud in
 *     the book, not in the pipeline.
 *   - zero secret material printed or persisted — ZIP_PAT only authenticates
 *     API calls in memory.
 *   - every dispatch recorded with measured reasons; suppressed dispatches
 *     (gap guard) recorded too — silence is not allowed either way.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const AG = path.dirname(__filename);
const STATE = path.join(AG, 'grid-guard-state.json');
const LOG = path.join(AG, 'grid-guard.jsonl');

// Thresholds (measured, not invented):
//   beat cadence is 4×/day (nominal 6h gap) → stale = one missed slot + margin
const STALE_H = 7;
//   Console grid-pulse cadence is 2×/day (nominal 12h) → stale = one missed + margin;
//   veritas SLA for the mirror is 30h — we re-ignite well before the gate turns red
const MIRROR_STALE_H = 26;
//   R99 measured minimums (beat blocker 02:00Z): ask levels need ≥0.2 HBD recv each
//   (commitPct 0.9 ⇒ ≈0.22 HBD), buy side needs ≥0.003 HBD commitable. Crossing
//   either side means the leg can actually quote — re-arm immediately.
const MIN_HIVE = 0.25;
const MIN_HBD = 0.01;
const MIN_GAP_H = 2; // never dispatch more than once per 2h (idempotency)
const LOG_CAP_BYTES = 512 * 1024;

const OWNER = 'roshpinacare-sys';
// Two tokens, two scopes (honest split):
//   GH_TOKEN = github.token of THIS workflow (actions:write granted in the yml)
//     → can dispatch workflows in the SAME repo (Domain) — the engine twin,
//       which is the machine per R71 ("התאום הציבורי ב-Domain הוא המכונה").
//   ZIP_PAT  = vault PAT (proven: checks out the private saos-dex for the twin)
//     → reads the private beat file; also ATTEMPTS cross-repo Console dispatch
//       (if the PAT lacks scope, the error is recorded — never silent).
const GH_TOKEN = (process.env.GH_TOKEN || '').trim();
const TOKEN = (process.env.ZIP_PAT || '').trim();
const UA = 'saos-grid-guard/1 (+https://github.com/roshpinacare-sys)';
const ENGINE_ACCOUNT = 'owner';

const J = (o) => JSON.stringify(o);
const out = (m) => console.log('[grid-guard] ' + m);

async function api(pathname, init, token) {
  const tk = token || TOKEN;
  const r = await fetch('https://api.github.com' + pathname, {
    headers: {
      Authorization: 'Bearer ' + tk,
      Accept: 'application/vnd.github.raw',
      'X-GitHub-Api-Version': '2022-11-28',
      'user-agent': UA,
    },
    ...init,
  });
  return r;
}

async function dispatch(repo, workflow, token) {
  const r = await api(`/repos/${OWNER}/${repo}/actions/workflows/${workflow}/dispatches`, {
    method: 'POST',
    headers: { Accept: 'application/vnd.github+json' },
    body: J({ ref: 'main' }),
  }, token);
  return r.status; // 204 = accepted
}

async function rpcHive(method, params) {
  const r = await fetch('https://api.hive.blog', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'user-agent': UA },
    body: J({ jsonrpc: '2.0', method, params, id: 1 }),
  });
  const jj = await r.json();
  return jj.result;
}

(async () => {
  const now = new Date();
  const state = fs.existsSync(STATE)
    ? JSON.parse(fs.readFileSync(STATE, 'utf8'))
    : { lastDispatchAt: null, lastReason: null };
  const res = {
    at: now.toISOString(),
    beatAgeH: null,
    mirrorAgeH: null,
    hive: null,
    hbd: null,
    ordersAgeH: null,
    integrityAgeH: null,
    siteAuditAgeH: null,
    reasons: [],
    dispatched: [],
    suppressed: [],
    errors: [],
  };

  try {
    // 1) beat age from the engine home (private repo)
    if (TOKEN) {
      const r = await api(`/repos/${OWNER}/saos-dex/contents/db/grid-public.json`);
      if (r.ok) {
        const d = await r.json();
        const at = Date.parse(d.publishedAt || d.at || '');
        if (Number.isFinite(at)) {
          res.beatAgeH = Math.round(((Date.now() - at) / 36e5) * 10) / 10;
        } else res.errors.push('beat file has no parsable timestamp (honest)');
      } else res.errors.push('beat read HTTP ' + r.status);

      // 2) Console mirror age — from the local checkout (dex-mirror product)
      try {
        const m = JSON.parse(fs.readFileSync(path.join(AG, '..', 'dex', 'grid.json'), 'utf8'));
        const at = Date.parse(m.publishedAt || '');
        if (Number.isFinite(at)) res.mirrorAgeH = Math.round(((Date.now() - at) / 36e5) * 10) / 10;
      } catch (e) {
        res.errors.push('mirror read: ' + e.message);
      }
    } else {
      res.errors.push('no ZIP_PAT in env — guard blind this run (honest, exit 0)');
    }

    // 3) HIVE working inventory (the flow-watch half)
    try {
      const acc = await rpcHive('condenser_api.get_accounts', [[ENGINE_ACCOUNT]]);
      if (Array.isArray(acc) && acc[0]) {
        const num = (s) => parseFloat(String(s ?? '').split(' ')[0]) || 0;
        res.hive = num(acc[0].balance);
        res.hbd = num(acc[0].hbd_balance);
      } else res.errors.push('engine account not found on HIVE RPC');
    } catch (e) {
      res.errors.push('hive rpc: ' + e.message);
    }

    // 3.5) office books watchdog (measured 2026-10-12: the private-Sandbox half of
    //      the network died on quota — the books now live HERE, public; the guard
    //      measures their age and re-ignites the same-repo twins when silent).
    //      thresholds = twin cadence (2h) × 2 — one missed slot + margin.
    const OFFICE_BOOKS = [
      { key: 'ordersAgeH', file: 'agents/work-orders.json', twin: 'office-orders-twin.yml', staleH: 4, tsKeys: ['at'] },
      { key: 'integrityAgeH', file: 'agents/integrity-verdict.json', twin: 'artery-integrity-twin.yml', staleH: 4, tsKeys: ['at'] },
      { key: 'siteAuditAgeH', file: 'agents/site-audit.json', twin: 'site-link-audit.yml', staleH: 26, tsKeys: ['at'] }, // יומי × 1 + רווח
      { key: 'worldAgeH', file: 'office/world-state.json', twin: 'office-worldbeat.yml', staleH: 0.7, tsKeys: ['t'] }, // פעימת-עולם 10דק' × 3 + רווח — המשרד החי לא שקט
    ];
    for (const b of OFFICE_BOOKS) {
      try {
        // the books live in THIS repo — grid-doctor checks out fresh main at run
        // start, so the local checkout IS the freshest published truth.
        // (b.file is repo-root-relative; AG = agents/ → join with '..')
        const local = JSON.parse(fs.readFileSync(path.join(AG, '..', b.file), 'utf8'));
        let at = null;
        for (const k of b.tsKeys) {
          const v = local?.[k];
          const t = typeof v === 'number' ? v : Date.parse(v ?? '');
          if (Number.isFinite(t)) { at = t; break; }
        }
        if (at != null) {
          const ageH = Math.round(((Date.now() - at) / 36e5) * 10) / 10;
          res[b.key] = ageH;
          if (ageH > b.staleH) res.reasons.push(`${b.key.split('Age')[0]}-book-stale ${ageH}h > ${b.staleH}h`);
        } else res.errors.push(`${b.file} has no parsable timestamp (honest)`);
        // פסק-אדום של מציל-האתר = סיבה בפני עצמה (לא רק גיל הספר)
        if (b.key === 'siteAuditAgeH' && local?.overall === 'FAIL') {
          res.reasons.push(`site-audit FAIL (${local?.summary?.findings ?? '?'} findings) — re-ignite`);
        }
        // עולם-תקוע: אם גיל-העולם תקין אבל הפעימה לא זזה בין ריצות — זה מצב-שקט אחר
        if (b.key === 'worldAgeH' && local?.engine !== 'office-world') {
          res.reasons.push('world-engine mismatch — the office world is not ours');
        }
      } catch (e) { res.errors.push(`${b.key}: ${e.message}`); }
    }

    // 4) decide (measured reasons only)
    if (res.beatAgeH != null && res.beatAgeH > STALE_H) res.reasons.push(`beat-stale ${res.beatAgeH}h > ${STALE_H}h`);
    if (res.mirrorAgeH != null && res.mirrorAgeH > MIRROR_STALE_H) res.reasons.push(`mirror-stale ${res.mirrorAgeH}h > ${MIRROR_STALE_H}h`);
    if (res.hive != null && res.hive >= MIN_HIVE) res.reasons.push(`hive-inventory ${res.hive} ≥ ${MIN_HIVE}`);
    if (res.hbd != null && res.hbd >= MIN_HBD) res.reasons.push(`hbd-inventory ${res.hbd} ≥ ${MIN_HBD}`);

    if (res.reasons.length) {
      const last = state.lastDispatchAt ? Date.parse(state.lastDispatchAt) : 0;
      const gapOk = !state.lastDispatchAt || Date.now() - last > MIN_GAP_H * 36e5;
      if (!GH_TOKEN && !TOKEN) {
        res.errors.push('dispatch IMPOSSIBLE (no tokens) — reasons stand recorded');
      } else if (!gapOk) {
        res.suppressed.push(`gap < ${MIN_GAP_H}h since ${state.lastDispatchAt}`);
      } else {
        // engine re-ignite → same-repo twin (github.token, actions:write).
        // Fallback: ZIP_PAT if github.token is missing (local runs).
        if (GH_TOKEN || TOKEN) {
          const s1 = await dispatch('Domain', 'dex-grid.yml', GH_TOKEN || TOKEN);
          if (s1 === 204) res.dispatched.push('Domain/dex-grid (engine twin)');
          else res.errors.push('dispatch Domain/dex-grid HTTP ' + s1);
        }
        if (res.reasons.some((x) => x.startsWith('mirror-stale'))) {
          // Console is cross-repo → ZIP_PAT attempt; honest error if scope missing
          if (!TOKEN) res.errors.push('Console dispatch skipped (no ZIP_PAT)');
          else {
            const s2 = await dispatch('Console', 'grid-pulse.yml', TOKEN);
            if (s2 === 204) res.dispatched.push('Console/grid-pulse');
            else res.errors.push('dispatch Console/grid-pulse HTTP ' + s2);
          }
        }
        // office books → same-repo twins (github.token, actions:write) — the
        // never-stops law extended to the whole office (measured 2026-10-12)
        if (res.reasons.some((x) => x.startsWith('orders-book-stale'))) {
          const s3 = await dispatch('Domain', 'office-orders-twin.yml', GH_TOKEN || TOKEN);
          if (s3 === 204) res.dispatched.push('Domain/office-orders-twin');
          else res.errors.push('dispatch Domain/office-orders-twin HTTP ' + s3);
        }
        if (res.reasons.some((x) => x.startsWith('integrity-book-stale'))) {
          const s4 = await dispatch('Domain', 'artery-integrity-twin.yml', GH_TOKEN || TOKEN);
          if (s4 === 204) res.dispatched.push('Domain/artery-integrity-twin');
          else res.errors.push('dispatch Domain/artery-integrity-twin HTTP ' + s4);
        }
        if (res.reasons.some((x) => x.startsWith('world-book-stale') || x.startsWith('world-engine'))) {
          const s5 = await dispatch('Domain', 'office-worldbeat.yml', GH_TOKEN || TOKEN);
          if (s5 === 204) res.dispatched.push('Domain/office-worldbeat');
          else res.errors.push('dispatch Domain/office-worldbeat HTTP ' + s5);
        }
        if (res.dispatched.length) {
          state.lastDispatchAt = res.at;
          state.lastReason = res.reasons.join(' + ');
        }
      }
    }
    // W36 signing-lane pulse — measurement plane 2 (measured 2026-10-21T22:47→23:45Z:
    // dex-watchdog's cron slots were SKIPPED by GitHub dilution — the signed lane
    // aged past its 6h window while every measuring plane stayed "success". Law:
    // never ONE measurement plane for an artery this important. This plane wakes
    // the signed grid past the 6h window (R16-a 4x/day cadence — heals gaps,
    // never multiplies rate). ZIP_PAT carries the cross-repo authority.
    try {
      const rr = await api('/repos/' + OWNER + '/saos-dex/actions/workflows/dex-grid.yml/runs?per_page=1');
      const run = rr.ok ? (await rr.json())?.workflow_runs?.[0] : null;
      if (run?.created_at) {
        const ageH = (Date.now() - Date.parse(run.created_at)) / 36e5;
        res.signingLaneAgeH = Math.round(ageH * 100) / 100;
        res.signingLaneStatus = run.status;
        const inFlight = run.status === 'in_progress';
        if (ageH > 6 && !inFlight) {
          const s = await dispatch('saos-dex', 'dex-grid.yml', TOKEN);
          if (s === 204) res.dispatched.push('saos-dex/dex-grid (signing lane stale ' + res.signingLaneAgeH + 'h)');
          else res.errors.push('dispatch saos-dex/dex-grid HTTP ' + s);
        }
      } else {
        res.errors.push('signing-pulse: no run data (fail-honest, no blind fire)');
      }
    } catch (e) { res.errors.push('signing-pulse: ' + e.message); }

    res.ok = true;
  } catch (e) {
    res.ok = false;
    res.errors.push(e.message);
  }

  // 5) persist state + append-only log (capped)
  try {
    fs.writeFileSync(STATE, J(state, null, 1) + '\n');
    try {
      if (fs.existsSync(LOG) && fs.statSync(LOG).size > LOG_CAP_BYTES) {
        const lines = fs.readFileSync(LOG, 'utf8').trim().split('\n');
        fs.writeFileSync(LOG, lines.slice(-200).join('\n') + '\n');
      }
    } catch {}
    fs.appendFileSync(LOG, J(res) + '\n');
  } catch (e) {
    out('persist failed (honest): ' + e.message);
  }

  out(J(res));
  process.exit(0); // a guard must never break the doctor — the book carries the truth
})();
