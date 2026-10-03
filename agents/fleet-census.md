# FLEET CENSUS — 2026-10-03T19:18:31.396Z

Offline · keyless · deterministic estate map (CR-0040). Answers: what do we hold, what limits us, how it wires.

## Inventory — מה יש לנו (1/16 lanes present, 1 commits, 16 capability markers)
- **Domain** [PRESENT] 556d7e5@2026-10-03 · caps(16): marketGrid, marketExec, fillLedger, marketCycle, crossLayer, oneBloc, capabilityMatrix, econDesk, measureLearn, evoWindows, stasis, evals, skillGate, cadenceCron, gridHistory, gridPaper · workflows=44 desks=49
- **saos-dex** [MISSING] no-git · caps(0): —
- **steem** [MISSING] no-git · caps(0): —
- **saos-sovereign-platform** [MISSING] no-git · caps(0): —
- **Console** [MISSING] no-git · caps(0): —
- **Defi** [MISSING] no-git · caps(0): —
- **Zip** [MISSING] no-git · caps(0): —
- **Saosmartwallet** [MISSING] no-git · caps(0): —
- **Sdk** [MISSING] no-git · caps(0): —
- **Adsmarket** [MISSING] no-git · caps(0): —
- **Project-files** [MISSING] no-git · caps(0): —
- **anchor-baseline** [MISSING] no-git · caps(0): —
- **roshpina** [MISSING] no-git · caps(0): —
- **saos-control-center** [MISSING] no-git · caps(0): —
- **saos-jummper** [MISSING] no-git · caps(0): —
- **saos-sovereign-foundry** [MISSING] no-git · caps(0): —

## Sovereignty — ריבונות
- workflows: 9 keyless / 44 total (35 carry owner secrets)
- STASIS brake: present=true active=false halt-in-code desks=1
- gated desks (DRY/OWNER-GATED/LIVE env): 5 — cross-layer, fleet-census, market-cycle, market-exec, market-grid
- offline/keyless desks: 21 — bridge-desk, canon-liveness, capability-matrix, cognitive-rail, cross-layer, dedup-corrections, fleet-census, harness-audit, head-delegate, market-exec, market-grid, one-bloc, page-laws, public-pulse, reconcile, recruit, reef-rung3, route-desk, social-dedupe, venture-desk, workflow-audit
- vault: keyring=false stdinIntake=false runbook=false · mesh tests=0

## Blockers — מה חוסם אותנו (open=2, operator=2, laws=1)
- **B1** [OPEN] fee-doctrine drift — same fleet, two prices (kernel vs SAOSExchange) · evidence: {"kernelBps":null,"exchangeBps":null}
- **B2** [OPEN] cadence time-series too young for distribution verdicts (needs ~100+ rows) · evidence: {"historyRows":5,"verdicts":{"MARKET-GRID-LIVE":4,"PARTIAL":1}}
- **B3** [ACTIVE] migration law ACTIVE — market-grid 40bps floor under-covers DEX round trips; any DEX bridge must re-space or stay maker-only · evidence: {"crossLayerDesk":true,"measuredBpsAtTenthPctDepth":90}
- **B4** [OPERATOR-GATED] (owner) TVM absent — TRON exit = code+capital+authority, all operator-gated (X-1+X-2) · evidence: {"tvmContractMarkers":null}
- **B5** [OPERATOR-GATED] (owner) binding constraint = capital+authority, not code — signing power stays the owner's by doctrine · evidence: {"dryRunDefault":true,"liveGate":true}
- **B6** [STANDING-BY] (owner) STASIS breaker — fleet-wide halt state · evidence: {"active":false}

## Edge series — measured (from our own ledgers)
- history rows: 5 {"MARKET-GRID-LIVE":4,"PARTIAL":1} · paper rows: 110
- HBD/HIVE spread%: n=4 min=0.1322 max=0.1322 last=0.1322
- SBD/STEEM spread%: n=5 min=0.6565 max=1.3385 last=0.6565
- dex grid ledger: {"version":null,"orders":null,"fills":null} · fill-ledger rows: 0

## Wiring — חיבור (5/10 WIRED)
- [WIRED] cadence-cron — keyless Actions cron 23,53 * * * * ticks the grid observer
- [WIRED] grid-history — observer appends one history row per invocation (append-only law)
- [WIRED] stasis-brake — FATE-DEFENSE #1: an active STASIS halts desks in code before any read/write
- [WIRED] fill-loop — eyes -> decision: fill-ledger measurement feeds the cycle composer
- [WIRED] cycle-hands — decision -> hands: cycle composer arms the verify-then-sign executor
- [BROKEN(saos-dex/audit-package/src/kernel.ts,saos-sovereign-platform/contracts/mesh/SAOSExchange.sol)] cross-layer-lens — the four-layer lens reads the DEX kernel and the platform exchange
- [BROKEN(saos-dex/grid-beat.ts,saos-dex/db/grid-ledger.json)] dex-grid-ledger — saos-dex grid heartbeat writes the DEX-side grid ledger
- [BROKEN(steem/agent/he_ladder.cjs,steem/agent/gate-state.json)] he-ladder-gate — the HE taker ladder is live-gated
- [BROKEN(Zip/scripts/vault-keyring.mjs,Zip/sovereign/vault/README.md)] vault-ceremony — owner -> vault -> agents key ceremony with its permanent runbook
- [BROKEN(saos-dex,steem,saos-sovereign-platform,Console,Defi,Zip,Saosmartwallet,Sdk,Adsmarket,Project-files,anchor-baseline,roshpina,saos-control-center,saos-jummper,saos-sovereign-foundry)] census-map — this census maps all 16 lanes of the estate

## Receipts (sha256-16)
- Domain/agents/market-grid.cjs 7b9d8bcdbb6541b8
- Domain/agents/market-grid-history.jsonl 7e0e9b84240f4587
- Domain/.github/workflows/market-grid-cron.yml 1e4559b3b13cc7ac
- Domain/agents/market-exec.cjs 23457b54c3a73bec
- Domain/agents/fill-ledger.cjs 68a33ecb04531ce5
- Domain/agents/market-cycle.cjs eecb0740cc1f77c3
- Domain/agents/cross-layer.cjs 347ffa55a680ced0
- Domain/agents/one-bloc.cjs 534364660df2b421
- Domain/agents/STASIS.json 5ab24bc6b95aba0b
- Domain/agents/evals/run-evals.cjs 333e3caa07d8ddab
- Domain/feature_list.json 9a0b32fb17c198e2

