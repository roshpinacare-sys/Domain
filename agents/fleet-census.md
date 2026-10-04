# FLEET CENSUS — 2026-10-04T00:39:58.188Z

Offline · keyless · deterministic estate map (CR-0040). Answers: what do we hold, what limits us, how it wires.

## Inventory — מה יש לנו (16/16 lanes present, 16205 commits, 61 capability markers)
- **Domain** [PRESENT] 5e4ca43d@2026-10-04 · caps(16): marketGrid, marketExec, fillLedger, marketCycle, crossLayer, oneBloc, capabilityMatrix, econDesk, measureLearn, evoWindows, stasis, evals, skillGate, cadenceCron, gridHistory, gridPaper · workflows=48 desks=65
- **saos-dex** [PRESENT] 1bb6ae6@2026-10-03 · caps(8): kernel, amm, mm, gridBeat, gridLedger, dexCredits, dexGridCron, gridTrigger · workflows=4
- **steem** [PRESENT] a01baa10@2026-10-03 · caps(5): heLadder, liveGate, ladderRefresh, anchor, chainAttest · chainAgents=144 workflows=3
- **saos-sovereign-platform** [PRESENT] 72c9fb9@2026-10-03 · caps(5): exchange, ledger, bridge, meshHub, identity · meshContracts=12 meshTests=6 workflows=3
- **Console** [PRESENT] aac258a6@2026-10-03 · caps(3): acidEngine, fleetLog, agentDir · workflows=10
- **Defi** [PRESENT] 8dae9d8@2026-10-03 · caps(4): triggerChain, doctrine, fleet, registry · workflows=2
- **Zip** [PRESENT] f3df7103@2026-10-04 · caps(4): vaultKeyring, vaultRunbook, weaveAnchor, networkEvolution · workflows=12
- **Saosmartwallet** [PRESENT] 7ed6ca8@2026-10-03 · caps(2): controls, fleetHealth · workflows=2
- **Sdk** [PRESENT] 130783f@2026-10-03 · caps(1): readme · workflows=2
- **Adsmarket** [PRESENT] 030019b@2026-10-03 · caps(2): claimsAudit, agentDir · workflows=2
- **Project-files** [PRESENT] 87a0187@2026-10-03 · caps(1): readme · workflows=2
- **anchor-baseline** [PRESENT] 1c5c853@2026-10-03 · caps(1): readme · workflows=2
- **roshpina** [PRESENT] b0afb9a@2026-10-03 · caps(2): controls, briefing · workflows=2
- **saos-control-center** [PRESENT] 2ef1b78@2026-10-03 · caps(2): caddy, fleetNote · workflows=2
- **saos-jummper** [PRESENT] b70df10@2026-10-03 · caps(1): readme · workflows=2
- **saos-sovereign-foundry** [PRESENT] 62c0a74@2026-10-03 · caps(4): briefing, controls, broadcasts, agentDir · workflows=2

## Sovereignty — ריבונות
- workflows: 15 keyless / 48 total (33 carry owner secrets)
- STASIS brake: present=true active=false halt-in-code desks=1
- gated desks (DRY/OWNER-GATED/LIVE env): 6 — cross-layer, fleet-census, market-cycle, market-exec, market-grid, sovereign-tick
- offline/keyless desks: 32 — agent-registry, bridge-desk, cadence-week, canon-liveness, capability-matrix, claims-audit, cognitive-rail, convert-canon, coord-bus, coord-lease, cross-layer, dedup-corrections, drip-canon, earn-audit, fleet-census, fleet-delta, harness-audit, head-delegate, market-exec, market-grid, one-bloc, owner-proof, page-laws, public-pulse, reconcile, recruit, reef-rung3, route-desk, social-dedupe, tick-keeper, venture-desk, workflow-audit
- vault: keyring=true stdinIntake=true runbook=true · mesh tests=6

## Blockers — מה חוסם אותנו (open=2, operator=2, laws=1)
- **B1** [OPEN] fee-doctrine drift — same fleet, two prices (kernel vs SAOSExchange) · evidence: {"kernelBps":30,"exchangeBps":20}
- **B2** [OPEN] cadence time-series too young for distribution verdicts (needs ~100+ rows) · evidence: {"historyRows":8,"verdicts":{"MARKET-GRID-LIVE":7,"PARTIAL":1}}
- **B3** [ACTIVE] migration law ACTIVE — market-grid 40bps floor under-covers DEX round trips; any DEX bridge must re-space or stay maker-only · evidence: {"crossLayerDesk":true,"measuredBpsAtTenthPctDepth":90}
- **B4** [OPERATOR-GATED] (owner) TVM absent — TRON exit = code+capital+authority, all operator-gated (X-1+X-2) · evidence: {"tvmContractMarkers":1}
- **B5** [OPERATOR-GATED] (owner) binding constraint = capital+authority, not code — signing power stays the owner's by doctrine · evidence: {"dryRunDefault":true,"liveGate":true}
- **B6** [STANDING-BY] (owner) STASIS breaker — fleet-wide halt state · evidence: {"active":false}

## Edge series — measured (from our own ledgers)
- history rows: 8 {"MARKET-GRID-LIVE":7,"PARTIAL":1} · paper rows: 170
- HBD/HIVE spread%: n=7 min=0.1322 max=0.1963 last=0.1963
- SBD/STEEM spread%: n=8 min=0.6565 max=3.9603 last=3.9603
- dex grid ledger: {"version":2,"orders":73,"fills":43} · fill-ledger rows: 112

## Wiring — חיבור (10/10 WIRED)
- [WIRED] cadence-cron — keyless Actions cron 23,53 * * * * ticks the grid observer
- [WIRED] grid-history — observer appends one history row per invocation (append-only law)
- [WIRED] stasis-brake — FATE-DEFENSE #1: an active STASIS halts desks in code before any read/write
- [WIRED] fill-loop — eyes -> decision: fill-ledger measurement feeds the cycle composer
- [WIRED] cycle-hands — decision -> hands: cycle composer arms the verify-then-sign executor
- [WIRED] cross-layer-lens — the four-layer lens reads the DEX kernel and the platform exchange
- [WIRED] dex-grid-ledger — saos-dex grid heartbeat writes the DEX-side grid ledger
- [WIRED] he-ladder-gate — the HE taker ladder is live-gated
- [WIRED] vault-ceremony — owner -> vault -> agents key ceremony with its permanent runbook
- [WIRED] census-map — this census maps all 16 lanes of the estate

## Receipts (sha256-16)
- Domain/agents/market-grid.cjs 7b9d8bcdbb6541b8
- Domain/agents/market-grid-history.jsonl cc8be2a00505d786
- Domain/.github/workflows/market-grid-cron.yml eddd43efe4066f0c
- Domain/agents/market-exec.cjs 496e5495b9c3529d
- Domain/agents/fill-ledger.cjs 8bf2b04c1c8b9f90
- Domain/agents/market-cycle.cjs eecb0740cc1f77c3
- Domain/agents/cross-layer.cjs 0502753f50833acb
- Domain/agents/one-bloc.cjs 534364660df2b421
- Domain/agents/STASIS.json 5ab24bc6b95aba0b
- Domain/agents/evals/run-evals.cjs b0fe62bb5b5e0f89
- Domain/feature_list.json 359fd52a901dc57a
- saos-dex/audit-package/src/kernel.ts 97e5c4a719ddfd0a
- saos-dex/audit-package/src/amm.ts 91d876f699e18a05
- saos-dex/db/grid-ledger.json 4476b1cd03fb9038
- steem/agent/he_ladder.cjs c2ffabe5def2f5b1
- saos-sovereign-platform/contracts/mesh/SAOSExchange.sol 4b0c0aad18cf0c51
- saos-sovereign-platform/contracts/mesh/SAOSLedger.sol 4a6f3da0b4bb4b96
- Zip/scripts/vault-keyring.mjs 809a0f96be1882cc

