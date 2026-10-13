#!/usr/bin/env node
// stasis-gate.cjs — ONE mechanical STASIS preflight for every capital lane workflow.
// Replaces the per-yml legacy `active===true` gates that ignored the staged-lanes
// layer (measured defect: R30 FULL LIFT opened all lanes at the capital-gate layer
// on owner word 2026-10-11, while 12 workflows kept pre-halting on the top flag —
// books, ladder, desks all ran GREEN while doing nothing since 2026-10-04).
//
// LAW (SAOS-FATE-DEFENSE-STASIS/1, unchanged):
//   · active=false                      → run (brake disarmed)
//   · active=true, mode=staged,
//     lane ∈ stagedLanes.allow          → run (STASIS-STAGED-ALLOW) — the sign-time
//                                         capital-gate still guards every broadcast
//   · active=true, lane not allowed     → halt
//   · STASIS.json unreadable            → halt (fail-closed, per the 2026-10-05 hardening)
//
// usage: node agents/stasis-gate.cjs <lane>
// prints "true" (HALT) or "false" (RUN) — output feeds the existing
// `if: steps.brake.outputs.active != 'true'` step conditions unchanged.
try {
  const s = JSON.parse(require('fs').readFileSync('agents/STASIS.json', 'utf8'));
  const lane = String(process.argv[2] || 'general').trim().toLowerCase();
  const active = s.active === true;
  const allow = (s.mode === 'staged' && Array.isArray(s.stagedLanes && s.stagedLanes.allow))
    ? s.stagedLanes.allow.map(String).map((x) => x.trim().toLowerCase())
    : [];
  const stagedOpen = allow.includes(lane);
  const halt = active && !(s.mode === 'staged' && stagedOpen);
  if (!halt) {
    process.stderr.write(active && stagedOpen
      ? 'STASIS-STAGED-ALLOW lane=' + lane + ' — sign-time brake still armed\n'
      : 'brake disarmed\n');
  } else {
    process.stderr.write('STASIS-HALT lane=' + lane + ' — not in stagedLanes.allow\n');
  }
  console.log(halt ? 'true' : 'false'); // stdout line 1 = the contract token; notes go to stderr
  process.exit(0); // the gate never fails the step — the printed token decides
} catch (e) {
  process.stderr.write('STASIS-HALT unreadable breaker file — fail-closed (' + String(e.message).slice(0, 60) + ')\n');
  console.log('true');
  process.exit(0);
}
