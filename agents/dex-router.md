# dex-router — SWAP-NET (R39, CR-0069)

<<<<<<< Updated upstream
At: 2026-10-16T12:11:19.561Z · Verdict: **SWAP-NET-LIVE** · mode: KEYLESS-READ (the router plans; owner-gated desks sign)
=======
At: 2026-10-16T12:11:20.753Z · Verdict: **SWAP-NET-LIVE** · mode: KEYLESS-READ (the router plans; owner-gated desks sign)
>>>>>>> Stashed changes

Venues alive: steem-internal, he-pools, saos-mirror · Routes: 12 (LIVE-KEYED: R1,R2) · Arb candidates: none · Peg halts: none

| Route | From→To | Verdict | Quote | Unlock |
|---|---|---|---|---|
| R1 STEEM-INTERNAL | SBD→STEEM | LIVE-KEYED | 1.000 SBD → 9.568 STEEM | — |
| R2 STEEM-INTERNAL | STEEM→SBD | LIVE-KEYED | 1.000 STEEM → 0.103625 SBD | — |
<<<<<<< Updated upstream
| R3 HIVE-INTERNAL | HBD→HIVE | GATED-KEYS | 1.000 HBD → 18.720414 HIVE | HIVE active key material (R38 measured: none held) + ≥0.2 HIVE/HBD level fuel |
| R4 HIVE-INTERNAL | HIVE→HBD | GATED-KEYS | 1.000 HIVE → 0.0533 HBD | HIVE active key material + inventory |
=======
| R3 HIVE-INTERNAL | HBD→HIVE | GATED-KEYS | — | HIVE active key material (R38 measured: none held) + ≥0.2 HIVE/HBD level fuel |
| R4 HIVE-INTERNAL | HIVE→HBD | GATED-KEYS | — | HIVE active key material + inventory |
>>>>>>> Stashed changes
| R5 HIVE-ENGINE (SWAP.HIVE→SWAP.BTC) | HIVE→BTC | GATED-CAPITAL | 8545.237 SWAP.HIVE (1% pool) → 0.005319 SWAP.BTC | HIVE keys + HIVE inventory (0.034 HIVE dust today — R38 measured) |
| R6 HIVE-ENGINE | SWAP.HIVE→SWAP.LTC | GATED-CAPITAL | — | HIVE keys + SWAP.HIVE inventory |
| R7 CEX (MEXC/Binance native deposit → sell) | STEEM→USDT | C-GATE-OPERATOR | 1.000 STEEM → 0.054563 USDT | operator MEXC/Binance account + API keys (tier-C operator lock, keys never in repos) |
| R8 CEX (HTX native deposit → sell) | SBD→USDT | C-GATE-OPERATOR | 1.000 SBD → 0.529135 USDT | operator HTX account + API keys |
| R9 CEX → native withdraw → internal market | BTC/USDT→STEEM | C-GATE-OPERATOR | 100.000 USDT → 1831.837333 STEEM | operator CEX keys + withdrawal whitelist (deposit doors already live in dex/watch.json) |
| R10 none | BLURT→BTC | NO-RAIL | — | a blurt book coming alive (engine/pool/CEX) would be measured by market-grid before this route opens |
| R11 SAOS-AMM (SAOS→USDS→WSTEEM) | SAOS→WSTEEM | INTERNAL-SIM | 0.997 SAOS (1% pool) → 6.394338 WSTEEM | exit corridor WSTEEM→STEEM runs on the engine rail (armed-needs-sovereign-identity, dex/agent.json); then R7 |
| R12 TRON-RAIL | WTRX→TRX→USDT | GATED-KEYS | — | sovereign TRON identity (relay identities.tron = null; custody 2.0 TRX, peg-outbox threshold 1.05 TRX) |

Arb net (floor law: net must beat 2×(capture+0.4% floor); FOK legs only, single block):
- A1 SBD/STEEM internal vs CEX-implied fair (lead-lag): net 72.44bps vs threshold 165.54bps → **BELOW-FLOOR** · maker lead-lag: when the CEX leads, we re-center first (the counter-grid anchor) and get filled by local traders who lag
- A2 HBD/HIVE internal vs CEX-implied fair: net — vs threshold undefinedbps → **FEED-STALE** · no readable HBD/USDT leg (SBD is refused as the HBD proxy — the assets are different dollars); never guessed
- A3 SWAP.HIVE:SWAP.BTC pool vs CEX cross (peg drift): net -64.48bps vs threshold 120bps → **BELOW-FLOOR** · the custodial peg is real only while the pool hugs the cross — 1.5% drift halts the venue
- A4 SAOS/USDS pool vs booked ref price (internal): net -0.2bps vs threshold 120bps → **BELOW-FLOOR** · internal-AMM honesty: the pool may not wander from the booked ref unnoticed

Counter-grids (opposing grids anchored to the CEX-implied fair, skewed by inventory, PLAN-OWNER-GATED-NOT-BROADCAST):
- SBD/STEEM (STEEM internal): anchor 0.10311674 (CEX-IMPLIED-FAIR (SBDUSDT/STEEMUSDT — lead-lag anchor, the opposing side of the local book)) · spacing 0.408% · skew 0bps · rungs 6 · executor market-exec.cjs / saos-dex grid-beat (owner-gated signing surfaces)
<<<<<<< Updated upstream
- HBD/HIVE (HIVE internal): anchor 0.05335881 (LOCAL-MID-FALLBACK (CEX feed stale)) · spacing 0.545% · skew 0bps · rungs 6 · executor saos-dex grid-beat HIVE leg (owner-gated; keys measured absent — CR-0068)
=======
>>>>>>> Stashed changes

Laws: official sources only · keyless: the router plans, owner-gated desks sign · fail-soft exit 0 (dark feeds are honest rows) · verdict authority inherited from Z-27 (dex-book/bridge-desk) · single canon book + append-only history · honest money: the powerdown drip is the booked fuel law

Errors: [{"venue":"hive-internal","error":"AggregateError"},{"venue":"balances","error":"HEAD_ACCOUNT is not defined"}]

Sources: api.steemit.com, api.hive.blog (condenser), api.hive-engine.com mirrors, Binance/MEXC/HTX public tickers, dex/state.json mirror, Z-27 books. Zero secrets.