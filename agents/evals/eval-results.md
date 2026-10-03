# Desk Evals — runnable expectations (fresh-process judge, Z-36)

_run-evals v1.15.0 (Z-36 + Z-38 guard + Z-39 rail E10-E12 + Task 22 fate-defense E13 + Z-40 collapse drill E14 + Task 23 one-bloc E15 + Task 24 parse-gate E16 + Z-42 canon-liveness E17 + Task 26 ci-hands E18 + Z-43 hands E19 + Task 27 skill-library E20 + Task 29 strix-lineage E21 + Task 31 ax-lineage E22 + Task 33 mini-swe-lineage E24 + Task 35 fcc-lineage E25 + Task 36 sweep-lineage E26, parallel-convergence superset) · 2026-10-03T17:36:53.095Z_

**evals green: 26/26 expectations hold**

## E1 · dedupe identity is stable across repeat harvest — PASS
- seed(3) + econ rows carrying the same two fills → exactly 3 entries
- second pass adds 0 (idempotent)
- _measured: entries=3 added=0 reAdded=0_

## E2 · seeds never double-counted against longer book-row text — PASS
- seed text is a prefix of the book-row text — identity must still match
- _measured: identity sample: WAIV 10.00000109|1.95151099_

## E3 · venture-desk exits 0 with unreachable canon (fail-soft) — PASS
- exit code 0 even when DEFU_DIR is bogus
- board still written, honest nulls where the oracle is unreachable
- 5 ventures present with statuses
- _measured: exit=0 open=5_

## E4 · harness-audit exits 0 with missing canon and keeps counts honest — PASS
- exit code 0 even when DEFU_DIR is bogus
- missing canon = honest FAILs, never a crash, never green-washed
- counts arithmetic consistent (pass+warn+fail == checks)
- _measured: exit=0 pass=31 warn=0 fail=10_

## E5 · concat-family regression: manabar coerced before arithmetic — PASS
- string+number concatenates ("74488519347811969") — the Z-33 third-incident family
- canonical num() coercion keeps the sum under the cap
- _measured: wrong="74488519347811969" right=1000000000_

## E6 · stamp hygiene: unstamped books flagged, never fresh — PASS
- every book with exists=true and ageHours==null must NOT carry fresh=true
- the audit surfaces a timestamp-hygiene check (WARN until owners stamp)
- _measured: unstamped-but-fresh=0 hygieneCheck=true_

## E7 · guard core: destructive DENY, rebase-law ALLOW — PASS
- git reset --hard / push --force / rm -rf agents/ → DENY with named rule
- git pull --rebase + plain push → ALLOW (the fleet rebase law must never be blocked)
- _measured: denies=core.git:reset-hard,core.git:push-force,fs:rm-rf allows=core.git:rebase-law,core.git:rebase-law_

## E8 · guard context: data ALLOW, session sync-idiom DENY — PASS
- a destructive string inside grep/echo is DATA — never blocked (no false positives)
- the same reset in an agent-session context has no retry-loop alibi → DENY
- _measured: data=data-context session=core.git:reset-hard_

## E9 · guard scan: CI executable surfaces clean or booked — PASS
- 0 DENY rows in .github/workflows (no destructive drift entered CI)
- the known mirror-bot sync idiom appears as booked allow-with-reason (≥10 rows), never silent
- ledger stamped (BOOKS-STAMP law)
- _measured: denies=0 syncIdiom=11 stamped=true_

## E10 · rail catalog: registry valid, no forbidden rail enabled — PASS
- catalog parses quote-aware with the 8-column schema (Z-37 lesson carried forward)
- cohere (ToS §14, their review) is status NEVER and count neverLive=0 — the catalog itself refuses forbidden rails
- keyed rails are all tier C (operator gate) — zero keyedNotTierC
- _measured: total=15 live=2 dormant=11 never=1 neverLive=0_

## E11 · rail probe: honest classification + fail-soft ghost — PASS
- 200+data → REACHABLE with model count; 401/403 → AUTH-WALL; network error → UNREACHABLE (no hopeful green)
- probing a nonexistent provider exits 0 with zero probes booked (fail-soft, no invention)
- rail-ledger.json stamped (BOOKS-STAMP law)
- _measured: live probes booked=93_

## E12 · rail policy: FORBIDDEN row enabled as LIVE fails the gate — PASS
- a catalog where cohere (ToS FORBIDDEN) is flipped to LIVE is rejected — ok:false with the FORBIDDEN reason named
- the policy gate is mechanical, not prose (same lesson as Z-38: a law that lives only in prose is advisory)
- _measured: reason=row 'cohere': FORBIDDEN tos must be status NEVER · row 'cohere': LIVE/CATALOG rail cannot be keyed ·_

## E13 · fate-defense: FWI scorecard computes 9 artifact-sourced indicators + STASIS armed — PASS
- fleet-indicators.cjs runs in a fresh process (exit 0, fail-soft)
- exactly 9 indicators booked
- every indicator names a mechanical evidence source (ANTI-GOODHART)
- FWI book stamped fresh (<1h)
- STASIS.json parseable with boolean active flag
- _measured: verdict=THRIVING indicators=9 sourced=true stasisArmed=true_

## E14 · collapse drill: containment PROVEN on a fresh run — PASS
- receipt verdict CONTAINMENT-PROVEN with a green baseline (no false credit — BASELINE-RED would refuse attribution)
- every injected fault class caught: faults_caught === faults_total >= 4 (registry corruption, guard neutered, book stamps stripped, forbidden rail LIVE)
- receipts fresh < 168h — the drill runs on the CI schedule, containment proof is not a one-time trophy
- CI summary ledger agrees (collapse-drill.json stamped)
- _measured: caught=4/4 ageH=13 head=025aaa2233c1_

## E15 · one-bloc: whole-git convergence map measured, never invented — PASS
- one-bloc.cjs runs in a fresh process (exit 0, fail-soft)
- exactly 16 repos measured from agents/one-bloc-roles.csv (the BLOC-STATE hand map bound as data)
- every repo lands REACHED or an honest AUTH-WALL/UNKNOWN — no invented reach (KEYLESS-FIRST law)
- keyless floor holds: >=2 public repos reachable with zero credentials (env-independent)
- book stamped fresh (<1h) + STASIS law parseable + 3 truth-maps bound (dedup: one map, not three)
- _measured: verdict=DEGRADED reached=2/16 keyless=2 authWall=14_

## E16 · workflow-parse gate: no dead lane wears a green shape — PASS
- predicate catches `${{ }}` inside flow collections (the recruit.yml incident class)
- predicate stays ALLOW on legal idioms (block-style expressions, plain flow maps, flow crons)
- gate desk runs fresh-process exit 0, scans >= 20 workflow files
- 0 offenders + book stamped fresh (<10min) — full-YAML floor or honest idiom floor, mode named
- _measured: scanned=41 mode=full offenders=0_

## E17 · canon-liveness: honest verdict derivation + fresh receipt with named legs — PASS
- white-box: L1 content → CONTENT-SERVED; L1 absent + L2 rail → RAIL-REACHABLE; both absent → CANON-DARK (zero hopeful greens)
- black-box: fresh-process run exits 0 (fail-soft), receipt stamped with ≥3 named legs
- the receipt verdict matches the derivation for this context — no environment drift between book and reality (Z-42 root cause: the dead anonymous fallback leg, private canon 404)
- _measured: verdict=CONTENT-SERVED legs=L1:SERVING,L2:RAIL-UP,L3:DEAD-AS-EXPECTED-PRIVATE_

## E18 · ci-hands: the fleet measures its own CI estate with a pinned failure taxonomy — PASS
- classifyRun pins the taxonomy: 0 jobs = STARTUP-FAILURE, empty-steps <30s = JOB-STARTUP, real step = STEP-FAILURE, green = NOT-FAILURE
- laneVerdict is transient-aware: green lane + all-transient failures = HISTORY-TRANSIENT (never a haunted verdict)
- fresh-process desk run: exit 0 (fail-soft), book stamped fresh (<30min)
- honest reach floor: 16 repos declared, >=1 reached OR every unreached booked honestly as HTTP 4xx refusal (rate-limit is environment, not defect) — never invented
- cua-bench contract: trajectory booked (every action logged) + STASIS state travels with the receipt
- _measured: reached=0/16 lanes=0 green=0 activeRed=0 startup=0 mode=keyless_

## E19 · hands book: honest verdict derivation + fresh receipts, zero hopeful greens — PASS
- white-box: probe-ok → LIVE; absent → ABSENT; POLICY LOCK BEATS A GREEN PROBE → LOCKED-TIER-C (the cua permission-at-launch lesson); cross-ref → REF; probe-fail → UNREACHABLE
- black-box: fresh-process desk exits 0 (fail-soft), ≥5 hands booked, ≥2 LIVE in any healthy context
- every LIVE hand carries evidence+probeAt — a capability claimed without a receipt is a story
- verdict enum closed (LIVE/ABSENT/UNREACHABLE/REF/LOCKED-TIER-C) — no hopeful greens possible
- _measured: hands=6 live=4 receipted=true at=2026-10-03T17:36:50.777Z_

## E20 · skill-library gate: expertise as governed data with a mandatory Evidence Artifact — PASS
- white-box: the predicate flags a bare built-in name (help), a missing Evidence Artifact section, and short/no-trigger descriptions — and PASSES the legal package
- library floor: a missing authoring standard or unpinned mirror sha is an (library) offender — provenance is mechanical
- black-box: fresh-process gate on the real library exits 0
- book: skill-library.json GREEN, scanned >= 6, offenders [], stamped fresh (<30min)
- _measured: scanned=14 offenders=0 legal=true caught(builtin,artifact)=true,true_

## E23 · daily pulse: typed proposals + real gates + verify-only (the loop closed under law) — PASS
- white-box: disposition derivation exact for all seven input kinds (queued→PROPOSED-CR, parked/tier-c→DEFERRED-TIER-C, needs-validation→GATED-BLOCKED, cr-pass→ACCEPTED-TODAY, cr-fail→ROLLED-BACK, observation→BOOKED)
- black-box: fresh-process pulse exits 0 (fail-soft), ≥2 proposals booked
- gates: in the eval-harness context the recursion guard skips gates and marks it HONESTLY (no faked verdicts); real gate runs are proven standalone and pinned by the judge check
- laws: verifyOnly=true, autoApply=false — the pulse never overrides the CR law
- book fresh (<30min)
- _measured: proposals=15 w1=true guard=true verifyOnly=true_

## E21 · strix lineage pin: Apache-2.0 attribution mechanically retained (gate v1.1.0) — PASS
- white-box: stripping the strix sha 99c0711 from a notices copy yields a (library) offender naming the strix mirror sha
- white-box: with the real notices restored, the strix-sha and Apache-2.0 offenders are absent
- the gate export exposes STRIX_MIRROR_SHA so the pin is a code fact, not a doc hope
- _measured: strip-caught=true restore-clean=true/true sha=99c0711_

## E22 · ax lineage pin: google/ax Apache-2.0 attribution mechanically retained (gate v1.2.0) — PASS
- white-box: stripping the ax sha ac23328 from a notices copy yields a (library) offender naming the ax mirror sha
- white-box: with the real notices restored, the ax-sha offender is absent
- the gate export exposes AX_MIRROR_SHA so the pin is a code fact, not a doc hope
- _measured: strip-caught=true restore-clean=true sha=ac23328_

## E24 · mini-swe lineage pin: SWE-agent/mini-swe-agent MIT attribution mechanically retained (gate v1.3.0) — PASS
- white-box: stripping the mini-swe sha 04d809c from a notices copy yields a (library) offender naming the mini-swe mirror sha
- white-box: with the real notices restored, the mini-swe-sha offender is absent
- the gate export exposes MINI_SWE_MIRROR_SHA so the pin is a code fact, not a doc hope
- _measured: strip-caught=true restore-clean=true sha=04d809c_

## E25 · fcc lineage pin: Alishahryar1/free-claude-code AGPL-3.0-only attribution mechanically retained (gate v1.4.0) — PASS
- white-box: stripping the fcc sha 03aca36 from a notices copy yields a (library) offender naming the free-claude-code mirror sha
- white-box: with the real notices restored, the fcc-sha offender is absent
- the gate export exposes FCC_MIRROR_SHA so the pin is a code fact, not a doc hope
- _measured: strip-caught=true restore-clean=true sha=03aca36_

## E26 · sweep lineage pins: all five Task 36 attributions mechanically retained (gate v1.5.0) — PASS
- white-box: stripping each of the five shas (fe30ead/d3f71c4/96c3f41c/08e2151/843607b1) yields a (library) offender naming that sha
- white-box: with the real notices restored, every sweep-sha offender is absent
- the gate exports expose all five shas so the pins are code facts, not doc hopes
- _measured: Graft:strip-caught=true,restore-clean=true | agency-agents:strip-caught=true,restore-clean=true | codebase-memory:strip-caught=true,restore-clean=true | OpenMontage:strip-caught=true,restore-clean=true | orca:strip-caught=true,restore-clean=true_

_Eval discipline adopted from learn-harness-engineering (Z-36): an eval is a runnable expectation, not a hope. Pure functions = white-box; desk processes = black-box fresh processes._
