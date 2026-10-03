# Desk Evals — runnable expectations (fresh-process judge, Z-36)

_run-evals v1.30.0 (Z-36 + Z-38 guard + Z-39 rail E10-E12 + Task 22 fate-defense E13 + Z-40 collapse drill E14 + Task 23 one-bloc E15 + Task 24 parse-gate E16 + Z-42 canon-liveness E17 + Task 26 ci-hands E18 + Z-43 hands E19 + Task 27 skill-library E20 + Task 29 strix-lineage E21 + Task 31 ax-lineage E22 + Task 33 mini-swe-lineage E24 + Task 35 fcc-lineage E25 + Task 36 sweep-lineage E26 + Z-62 evo-windows E27 + Z-63 market-exec E28 + CR-0038 market-grid STASIS/cadence E29 + Z-64 fill-ledger/cycle E30 + R14 fleet-census E31 + R15 census-cadence E32 + Z-65 wiring-wave E33 + agent-registry E34 + R16 census-delta E35 + Z-66 sovereign E36 + Z-67 drip-canon mixed-unit E36-ext + Z-68 earn-audit E37 + Z-69 buy-premium E38 + R19 coord-bus/coord-lease E39 + Z-70 self-healing-pulse/ledger-first-day-truth E40 + R21 claims-audit E41 + Z-71 cross-map-auditor E42/maturity-canon E43, parallel-convergence superset) · 2026-10-03T22:18:03.771Z_

**evals green: 44/44 expectations hold**

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
- _measured: exit=0 pass=28 warn=1 fail=12_

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
- _measured: live probes booked=79_

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
- _measured: verdict=DEGRADED indicators=9 sourced=true stasisArmed=true_

## E14 · collapse drill: containment PROVEN on a fresh run — PASS
- receipt verdict CONTAINMENT-PROVEN with a green baseline (no false credit — BASELINE-RED would refuse attribution)
- every injected fault class caught: faults_caught === faults_total >= 4 (registry corruption, guard neutered, book stamps stripped, forbidden rail LIVE)
- receipts fresh < 168h — the drill runs on the CI schedule, containment proof is not a one-time trophy
- CI summary ledger agrees (collapse-drill.json stamped)
- _measured: caught=4/4 ageH=17 head=025aaa2233c1_

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
- _measured: scanned=48 mode=full offenders=0_

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
- _measured: reached=1/16 lanes=10 green=10 activeRed=0 startup=0 mode=keyless_

## E19 · hands book: honest verdict derivation + fresh receipts, zero hopeful greens — PASS
- white-box: probe-ok → LIVE; absent → ABSENT; POLICY LOCK BEATS A GREEN PROBE → LOCKED-TIER-C (the cua permission-at-launch lesson); cross-ref → REF; probe-fail → UNREACHABLE
- black-box: fresh-process desk exits 0 (fail-soft), ≥5 hands booked, ≥2 LIVE in any healthy context
- every LIVE hand carries evidence+probeAt — a capability claimed without a receipt is a story
- verdict enum closed (LIVE/ABSENT/UNREACHABLE/REF/LOCKED-TIER-C) — no hopeful greens possible
- _measured: hands=6 live=4 receipted=true at=2026-10-03T22:17:50.885Z_

## E20 · skill-library gate: expertise as governed data with a mandatory Evidence Artifact — PASS
- white-box: the predicate flags a bare built-in name (help), a missing Evidence Artifact section, and short/no-trigger descriptions — and PASSES the legal package
- library floor: a missing authoring standard or unpinned mirror sha is an (library) offender — provenance is mechanical
- black-box: fresh-process gate on the real library exits 0
- book: skill-library.json GREEN, scanned >= 6, offenders [], stamped fresh (<30min)
- _measured: scanned=14 offenders=0 legal=true caught(builtin,artifact)=true,true_

## E23 · daily pulse: typed proposals + real gates + verify-only (the loop closed under law) — PASS
- white-box: disposition derivation exact for all eight input kinds (queued→PROPOSED-CR, parked/tier-c→DEFERRED-TIER-C, needs-validation→GATED-BLOCKED, cr-pass→ACCEPTED-TODAY, cr-fail→ROLLED-BACK, observation→BOOKED, evo-adoption-pending→PROPOSED-CR [Z-62 superset — original seven unchanged])
- black-box: fresh-process pulse exits 0 (fail-soft), ≥2 proposals booked
- black-box (Z-62): EVERY booked proposal carries a disposition from the enum — evidence rows pushed by any consumer surface are typed too (the judge-caught type hole, pinned forever)
- gates: in the eval-harness context the recursion guard skips gates and marks it HONESTLY (no faked verdicts); real gate runs are proven standalone and pinned by the judge check
- laws: verifyOnly=true, autoApply=false — the pulse never overrides the CR law
- book fresh (<30min)
- _measured: proposals=64 w1=true guard=true verifyOnly=true enum=true evoEvidence=CADENCE-ONLY_

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

## E27 · evo-windows scheduler: pulled-schedule exact, verify-only outcomes, append-only history, off-budget gate — PASS
- white-box: decide() exact for all seven classes (FORCE→RUN/FORCED, SKIP_RUN→SKIPPED-EVAL-CONTEXT, fresh-book bootstrap→BOOTSTRAP-SEEDED, no-history→RUN/FIRST-WINDOW, fresh-history→SKIPPED-TOO-SOON with nextDueAt, stale-history→RUN/CADENCE, no-runtime→SKIPPED-NO-DESK-RUNTIME)
- white-box: classifyOutcome() honest — incumbent-retained=INCUMBENT-RETAINED, challenger=ADOPTION-PENDING-CR (verify-only), reef-alive=LEAK-DETECTED (a leak is never silenced), no-book=WINDOW-NO-WINNER
- black-box: fresh-process desk exits 0 under EVO_WINDOWS_SKIP_RUN=1, appends exactly ONE row (append-only history), never spawns the measured batch (off-budget law)
- laws: verifyOnly booked in the book laws map
- _measured: wdec=true wcls=true appended=true decision=SKIPPED-EVAL-CONTEXT windows=52_

## E28 · market-exec planner: mode law, band guard, precision scan, caps, stack idempotency, SBD cap — PASS
- white-box: resolveMode defaults DRY_RUN; only MARKET_EXEC_LIVE=1 arms broadcast
- white-box: inBand ±2% fat-finger ceiling
- white-box: scanSellAmount realizes 6dp targets through 3dp assets (err < 0.02%), distinct targets never collapse to one price
- white-box: buildPlan caps — sells ≤ 85% liquid STEEM, buys ≤ liquid SBD, ≤ 6 orders, ascending targets, sizes 0.3..1.25
- white-box: own-order within 0.35% → STACK-EXISTS skip (idempotent re-runs)
- Z-49 law: require.main guard — eval require executes zero network, zero signatures
- _measured: planner pure-verified; live-fire receipt: run #7 broadcast 6/6, on-chain orderids 1791050734-39 standing_

## E29 · market-grid STASIS obedience + cadence wiring: fresh-process brake, labeled halt row, cron carries the laws — PASS
- fresh process: sandboxed copy + ACTIVE STASIS.json halts BEFORE any read — exit 0, STASIS-HALT stdout, zero markets measured
- one labeled history row MARKET-GRID-HALTED-STASIS (append-only audit trail — the file is the receipt)
- workflow market-grid-cron.yml: 30-min offset cadence 21,51 (Z-70 minute-map reslot), STASIS gate before the tick, keyless desk invocation, append-only publish with [skip ci], concurrency guard
- YAML parseability + the broken-idiom predicate (E16 lineage) holds line-by-line
- _measured: brake proven in a fresh process; the cadence is wired (CR-0038)_

## E30 · fill-ledger + market-cycle: direction law, µ-unit average-cost P&L, dedupe, recycle thresholds, cycle decision, eval-context black-box — PASS
- white-box: asset-form tolerance — string and NAI assets resolve by nai/symbol, unknown → null (never by position)
- white-box: direction law — ours-as-OPEN sells open_pays, ours-as-CURRENT sells current_pays; foreign fill → null; unclassified pair booked, never guessed
- white-box: µ-unit average-cost arithmetic exact — 2 buys @ 0.100/0.105 then 2 sells @ 0.105/0.100 realize +0.0025 SBD (±2 µSBD); over-inventory sell blocked
- white-box: dedupeKey stable per fill, distinct across fills
- white-box: recycle thresholds — NO-FUNDS / FUNDED-SELL-SIDE ≥ 0.5 STEEM / FUNDED-BUY-SIDE ≥ 0.25 SBD / FILLS-N
- white-box: decideCycle — eval-skip SKIP · DRY mode DRY · LIVE+suggested LIVE · LIVE+declined SKIP
- black-box: fresh-process fill-ledger + market-cycle in eval-context book honest rows with zero network
- _measured: measurement leg pure+process-verified; live wire receipt: fill-ledger run #1 (0 fills honest, recycle FUNDED-SELL-SIDE 1.581 STEEM), cycle LIVE run #2 composed executor run #10 broadcast 1/1 orderid 1791052891 readback-matched_

## E31 · fleet-census: the whole estate measured offline — capability, sovereignty, blockers, wiring; deterministic byte-stable + fail-soft — PASS
- white-box: spreadSeries exact — n/min/max/last over injected rows; empty series honest nulls (never 0-valued)
- white-box: extractFirstInt reads FEE_BPS from source text — the fee-doctrine drift evidence is derived, not assumed
- white-box: the lane registry is exactly the 16-lane bloc, ids unique
- black-box: fresh-process census on the real estate — exit 0, book ok, inventory+sovereignty+blockers+wiring+edgeSeries+receipts(>=12), stamped <10min
- determinism: two fresh runs byte-identical after stripping the `at` stamp (same tree → same bytes)
- fail-soft: FLEET_CENSUS_ESTATE pointed at an empty dir → exit 0, 0/16 present, all lanes MISSING, blockers still booked with null-safe evidence
- _measured: census=16/16 caps=61 wiring=10/10 blockers open=2 operator=2 laws=1_

## E32 · census-cadence: the estate map refreshes itself on a keyless daily cron, double-gated by STASIS — PASS
- workflow: daily cron off the org minute map + workflow_dispatch escape hatch
- workflow: scheduler STASIS gate reads agents/STASIS.json before tick+publish (healthy no-op when active)
- workflow: keyless — zero secrets.* references; the publish rides the built-in GITHUB_TOKEN
- workflow: concurrency guard + timeout + deterministic publish (clean exit on no-drift, no noise commits) + [skip ci] + pull --rebase push idiom
- desk: STASIS-HALT in code BEFORE any lane read — fresh-process sandbox with an ACTIVE breaker books verdict=STASIS-HALT with NO inventory section (zero reads beyond the breaker file), exit 0
- desk: the shared book is restored on the real estate after the sandbox run (16/16 lanes, no verdict field)
- _measured: six+ laws regexed on the workflow; fresh-process halt proven with zero lane reads; book restored_

## E33 · flow-catch planner: marketable-sell floor law, proceeds-funded buy ladder, anti self-cross stack, dust discipline, determinism — PASS
- white-box: taker ≤ 50% liquid, min price = bid×(1−0.1%), precision scan exact at 3dp, realized ≥ floor
- white-box: zero proceeds → zero buys, zero junk rows
- white-box: proceeds fund exactly one buy at bid−0.0001 with budget = 90% of proceeds
- white-box: own order within 0.35% of the buy target → STACK-EXISTS (anti self-cross)
- white-box: dust proceeds (< 0.01 SBD) → PROCEEDS-DUST honest skip
- white-box: starved liquid (< 0.3 STEEM) → taker skipped honestly
- white-box: identical inputs → byte-identical plan (deterministic)
- _measured: planner pure-verified; live receipt follows the run row_

## E34 · agent-registry: ERC-8004 shape, evidence-only reputation with recomputable hashes, identity completeness, validation mapping, offline black-box — PASS
- white-box: identity entries carry agentURI + metadata (role, capabilities, keyMode, alive honesty)
- white-box: reputation values derive ONLY from canon rows — feedbackHash = sha256(counted rows), recomputed here
- white-box: validation rows map desk evals (E28/E30/E31) to their agents in the validationRequest/response shape
- white-box: missing canon → honest absence, never a crash (fail-soft law)
- black-box: fresh process on temp fixtures books the registry with zero network, fixture score 100 and broadcast-ops-2 verified
- _measured: registry live on real canons: 6 identities, 3 evidence-backed reputations (market-exec 62% clean runs — the wire-defect history visible honestly), 4 validation rows_

## E35 · census-delta: map-vs-map drift record — event-ledger law, determinism as the diff instrument, PERSPECTIVE law, STASIS halt-before-read — PASS
- white-box: synthetic DRIFT books exact structured transitions (lanes added/status+caps, sovereignty workflowsKeyless 8->9, blocker B1 OPEN->RESOLVED, wiring BROKEN->WIRED, edges growth, receipts) with distinct from/to fingerprints and the estate perspective stamped
- PERSPECTIVE law: books measured from different estates are never diffed — SKIP-PERSPECTIVE with zero changes (the live-found defect: a CI 1-lane book over a full-estate book would have booked 49 fake transitions)
- determinism law as diff instrument: books differing only in at/ok normalize to NO-DRIFT with zero changes and identical fingerprints
- invalid maps (error book, STASIS-HALT book, null, {}) normalize to null; diffStable is null-safe (defensive normalize both sides)
- byte-determinism: the same input pair yields a byte-identical record across two calls
- fresh-process on the REAL estate: exit 0, FLEET-DELTA verdict line, any booked rows are valid transition records (operational ledger untouched via --out temp)
- fresh-process sandbox with an ACTIVE breaker: STASIS-HALT BEFORE any read, exit 0, ZERO writes (out file never created) — the FATE-DEFENSE surface now covers all THREE measurement desks
- fresh-process sandbox, SINGLE-LANE-WORKSPACE law: a 1/16-lane workspace books fleet-census.artifact.json (a valid presentLanes=1 map) and NEVER writes the canonical fleet-census.json; the artifact delta series starts as FIRST-DELTA with the estate stamped
- _measured: nine expectations hold; the drift series can no longer lie by changing the instrument_

## E36 · sovereign layer: delegated D1/D2 decisions under the dual gate (sovereign auto + operator overlay), breakers as reason codes, arming honesty, drip pacing receipts, append-only tick receipts — PASS
- white-box: gate order law — STASIS-HALT before any read; operator mode escalates a suggested intent (Tier E) and plans DRY without one
- white-box: arming honesty is presence-only (NOT-ARMED books keyless DRY sovereignty and names what arms it)
- white-box: breakers each return a reason code — GAP-PACING, DAY-CAPS, BREAKER-DAILY-LOSS, BREAKER-CONSEC-LOSS, FUEL-FLOOR; Tier-E size parks in the mailbox; the green path fires EXECUTE-LIVE
- white-box: D2 drip pacing — absent canon = honest RECEIPT, healthy runway = STEADY, thin runway = Tier-E RECOMMENDATION with authority ops disabled
- white-box: D2 fuel canon (Z-67) — THE MIXED-UNIT LAW: to_withdraw GESTS (µ-VESTS ÷1e6) vs rate VESTS, live-measured fixture; unit-clamp refuses absurd remaining (fail-loud, nothing written)
- white-box: applyReceipt advances counters + paces the broadcast attempt; daily rollover resets the day book
- black-box A: keyless fresh tick (SKIP_FETCH) — NOT-ARMED PLAN-DRY routes a DRY cycle booking SKIPPED-EVAL-CONTEXT, decision receipt + state advanced, zero network
- black-box B: SOVEREIGN_MODE=operator — suggested intent lands in sovereign-pending.json, no cycle child, Tier-E receipt
- black-box C: STASIS active — halt-before-read proven with a garbage ledger (exit 0, STASIS-HALT receipt, no reads past the breaker)
- _measured: the transfer is live: local sovereign ticks fire per policy; the cron books keyless receipts 24/7 and arms on the vault secret_

## E37 · earn-audit: from-nothing chain-truth — direction-law fill classification (ours-as-open vs ours-as-current vs taker), rewards/claims/drip/convert tallies, honest unparseable skip — PASS
- white-box: fill direction law — open_owner==us means we gave open_pays (maker sell booked 0.576 STEEM→0.058 SBD); open_owner!=us means we gave current_pays (taker sell 4.996 STEEM→0.500 SBD AND taker buy 3.692 SBD→36.601 STEEM both classified correctly)
- white-box: author/curation/claim/drip/convert tallies exact on fixtures
- white-box: unparseable fill body = honest skip (op counted, fill not)
- live-measured: 1d headcorner — drip 475.857 STEEM deployed (50 fills: sold 525.2 STEEM → 52.56 SBD, bought 87.9 for 8.99), 14 converts 32.8 SBD; 7d fleet — 1421 votes / 56 posts → ZERO author+curation payouts lifetime (the content loop is measured dead)
- _measured: the proof surface is live: every claim about fleet income is now checkable against the chain_

## E38 · BUY-PREMIUM LAW: the ledger vwap is the realized-edge authority — executor caps every buy at sellVwap x (1-floor), below-band caps skip honest, the sovereign gate routes DRY while the window shows a premium, 3-buys minimum, clean windows still fire LIVE — PASS
- white-box: vwapStats sums micro legs exactly (sell 0.100067 / buy 0.102197 / edge -2.1286 on the live-measured fixture), empty/unparseable = honest nulls
- white-box: buildPlan uncapped keeps the 0.0995 ladder law byte-identical; with sellVwap 0.100067 the buy targets cap to 0.099767 (vwap_capped receipt); a cap below the band skips OUT-OF-BAND instead of pricing wrong
- white-box: the flow-catch ladder is capped by the same law
- white-box: the sovereign BUY-PREMIUM breaker routes PLAN-DRY on the live-measured -2.13% window, still fires EXECUTE-LIVE on a clean edge, and needs >=3 buys to judge
- _measured: the measured leak is closed structurally: no lane can price a buy above the realized sells minus the floor, and the gate pauses LIVE until the ledger heals_

## E39 · coordination bus: keyless saos.* chain-read with split-brain guard (nothing written on disagreement), LIMIT-100 page-walk, namespace whitelist, RESERVATIONS collision leases (reason-code machine, no immortal leases), STASIS zero-network halt, public proof wire — PASS
- white-box: namespace whitelist — known saos.* flagged, unknown saos.* kept+flagged known:false, foreign custom_json ignored
- white-box: THE LIMIT-100 LAW (measured -32801 live) — page plan starts at -1, walk descends minSeq-1, genesis stops
- white-box: normalize dedupes (id,seq) keeping the later block and sorts ascending; parse failures become honest {raw}
- white-box: split-brain guard — equal fingerprints agree, differing views refuse, both-empty agrees; fingerprint deterministic 16-hex; busStable byte-identical
- white-box: THE HEAD-VECTOR FINGERPRINT — window-stable (deeper windows with the same head agree, hot-account churn books no noise) while a head-content lie (same seq, different block/payload) still refuses; heads carry lastSeq/lastAt/headDigest
- white-box: THE WATERMARK WALK — pages stop when the previous book's lowest head is re-reached, capturing only fresh ops, cap bounding honesty
- white-box: namespace rollup counts + last-seen per id
- black-box A: the REAL desk path in a fresh process over the COORD_BUS_FIXTURE transport seam (house eval idiom — the sandbox forbids cross-process loopback, the flow runs identically with only the transport canned) — BUS-READ book, message captured, pages walked
- black-box B: SPLIT-BRAIN — disagreeing views → exit 0, receipt booked, ZERO writes
- black-box B2: UNREACHABLE — both views fail → we measured NOTHING and write NOTHING (the desk defect E39 caught before production: an empty-bus book would clobber a good view and fake fleet-wide silence)
- black-box C: STASIS ACTIVE — halt book with stasis.active true, NO messages/scan keys, the would-be network never consulted
- white-box lease: GRANT free / REFUSE foreign-active with holder+expiresAt evidence / GRANT-RENEW self / TAKEOVER-EXPIRED / REFUSE-NO-TTL (no immortal leases) / REFUSE missing args
- white-box reducer: foreign release no-op, holder release clears, stale race row loses to the active lease, resolveLeases deterministic
- black-box CLI: claim appends exactly one row, foreign claim appends NOTHING (the append law: only grants write), wrong release NOT-YOURS, right release RELEASED, list reports 0 active
- _measured: the fleet coordination surface is measurable by anyone, anywhere, keyless — and it cannot lie by node, by silence, or by an immortal lease_

## E40a · LEDGER-FIRST DAY-TRUTH: negative realized survives (BREAKER-DAILY-LOSS can never be silently disarmed again), ledger wins when present, state is the honest fallback, zeros never NaN — PASS
- white-box: realized -178154 µSBD from the ledger reaches the gate untouched (the Math.max fusion regression is dead)
- ledger counters win when present; malformed/null ledger rows fall back to state without inventing zeros
- pure function: no fs, no state writes — exported for the gate and the eval alike
- _measured: a losing day now READS as a losing day — the loss breaker is armed by truth_

## E40b · SELF-HEALING PULSE: keeperDecide fires stale desks, re-fires never-born desks, obeys the 20m cooldown and releases it, respects per-desk gaps, and reads the arc registry it dispatches against — PASS
- white-box: stale 30m > 20m gap → decided with honest stale_min; fresh desks skipped with receipts
- white-box: empty arc → all decided no-receipt-yet (a desk that never woke is re-fired, not mourned)
- white-box: dispatch 10m ago → cooldown skip; 25m ago → re-fired; per-desk maxGaps override the defaults
- _measured: the reflex arc now holds its own pulse: measured starvation (zero schedule events) is answered by a keeper that re-fires from receipts_

## E41 · claims audit: every feature_list evidence path resolves on the tree (as-given/agents/workflows/basename resolution), CR files exist for every cited CR (duplicate slots warned, never hidden), the suite version/count invariant holds (MATCH/LAGGING-BOOK/MISMATCH — sub-letter ids E40a/b counted), documented exceptions book honest WARNs with reasons, the OWNER-LANGUAGE LAW is encoded as data (owner-facing replies = עברית), and the stable payload is byte-deterministic — PASS
- white-box: resolution order as-given -> agents/ -> .github/workflows/ -> unique basename (economy-engine.yml found via workflows, THIRD-PARTY-NOTICES.md found via basename, miss=null)
- white-box: evidence collectors for all three ledger shapes (array/string/object)
- white-box: suiteInvariant machine — MATCH / LAGGING-BOOK (book lags an in-flight bump, self-heals at lane-books) / MISMATCH (offender) / SKIP
- white-box: the real ledger audits to ZERO offenders on the MERGED tree; CR-0008 duplicate slot and the three documented exceptions book as reason-stamped WARNs, never fake failures
- white-box: OWNER_LANGUAGE === "he" — the owner-facing language law is data now (roles-as-data: a rule not encoded is not a rule)
- white-box: claimsStable byte-identical across two runs (the determinism law, census-style)
- black-box: the REAL desk fresh-process on the real tree — exit 0, verdict CLEAN|WARN, book written, the law printed in every run
- _measured: the fleet can no longer claim a file that is not on the tree — the anti-claims law the owner demanded is now mechanical_

## E42 · CROSS-MAP AUDITOR: broken refs, true-dead agents (mention-graph law — false-deads impossible), ghost secrets only with a census (never guessed), stale books vs REAL cadence (daily desks immune to the hourly floor), collisions, recursion, capital-path STASIS gaps, map-vs-estate drift, and a clean estate books ZERO findings — PASS
- white-box: every F1-F8 kind caught on its own fixture
- white-box: the two in-session desk bugs (mention-graph false-deads, 60m cadence floor) are regression-pinned
- white-box: a clean estate books zero findings — the auditor never invents problems
- _measured: the auditor is white-boxed to its own laws before it is allowed to judge the estate_

## E43 · MATURITY CANON: pending schedule math (open→pending with honest hours_left, fill→closed), order-safe under page overlap and book-vs-chain merge, re-opens honored (last open wins; an earlier fill can never close a later re-open — the seq-guard is pinned), 24h pre-position window flags, empty books honest — PASS
- white-box: open convert maturing in 84h → pending 45.3 SBD exactly
- white-box: closure + order-safety (fill-before-open) + re-open (last open wins) — the two-pass reducer is pinned
- white-box: matures-within-24h pre-positions the rotation; empty history books honest empties
- _measured: the Oct-7 rotation now has a keyless instrument: the sensor books maturities fresh, the canon composes the schedule, nothing is guessed_

_Eval discipline adopted from learn-harness-engineering (Z-36): an eval is a runnable expectation, not a hope. Pure functions = white-box; desk processes = black-box fresh processes._
