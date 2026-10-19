# dex-router — SWAP-NET (R39, CR-0069)

At: 2026-10-19T02:41:12.846Z · Verdict: **SWAP-NET-LIVE** · mode: KEYLESS-READ (the router plans; owner-gated desks sign)

Venues alive: steem-internal, he-pools, saos-mirror · Routes: 12 (LIVE-KEYED: R1,R2) · Arb candidates: A1 · Peg halts: A4

| Route | From→To | Verdict | Quote | Unlock |
|---|---|---|---|---|
| R1 STEEM-INTERNAL | SBD→STEEM | LIVE-KEYED | 1.000 SBD → 9.78271 STEEM | — |
| R2 STEEM-INTERNAL | STEEM→SBD | LIVE-KEYED | 1.000 STEEM → 0.102218 SBD | — |
| R3 HIVE-INTERNAL | HBD→HIVE | GATED-KEYS | — | HIVE active key material (R38 measured: none held) + ≥0.2 HIVE/HBD level fuel |
| R4 HIVE-INTERNAL | HIVE→HBD | GATED-KEYS | — | HIVE active key material + inventory |
| R5 HIVE-ENGINE (SWAP.HIVE→SWAP.BTC) | HIVE→BTC | GATED-CAPITAL | 8757.185 SWAP.HIVE (1% pool) → 0.005191 SWAP.BTC | HIVE keys + HIVE inventory (0.034 HIVE dust today — R38 measured) |
| R6 HIVE-ENGINE | SWAP.HIVE→SWAP.LTC | GATED-CAPITAL | — | HIVE keys + SWAP.HIVE inventory |
| R7 CEX (MEXC/Binance native deposit → sell) | STEEM→USDT | C-GATE-OPERATOR | 1.000 STEEM → 0.052194 USDT | operator MEXC/Binance account + API keys (tier-C operator lock, keys never in repos) |
| R8 CEX (HTX native deposit → sell) | SBD→USDT | C-GATE-OPERATOR | 1.000 SBD → 0.480859 USDT | operator HTX account + API keys |
| R9 CEX → native withdraw → internal market | BTC/USDT→STEEM | C-GATE-OPERATOR | 100.000 USDT → 1914.975105 STEEM | operator CEX keys + withdrawal whitelist (deposit doors already live in dex/watch.json) |
| R10 none | BLURT→BTC | NO-RAIL | — | a blurt book coming alive (engine/pool/CEX) would be measured by market-grid before this route opens |
| R11 SAOS-AMM (SAOS→USDS→WSTEEM) | SAOS→WSTEEM | INTERNAL-SIM | 0.978 SAOS (1% pool) → 6.04534 WSTEEM | exit corridor WSTEEM→STEEM runs on the engine rail (armed-needs-sovereign-identity, dex/agent.json); then R7 |
| R12 TRON-RAIL | WTRX→TRX→USDT | GATED-KEYS | — | sovereign TRON identity (relay identities.tron = null; custody 2.0 TRX, peg-outbox threshold 1.05 TRX) |

Arb net (floor law: net must beat 2×(capture+0.4% floor); FOK legs only, single block):
- A1 SBD/STEEM internal vs CEX-implied fair (lead-lag): net 562.56bps vs threshold 80.3bps → **CANDIDATE-FOK** · maker lead-lag: when the CEX leads, we re-center first (the counter-grid anchor) and get filled by local traders who lag
- A2 HBD/HIVE internal vs CEX-implied fair: net — vs threshold undefinedbps → **FEED-STALE** · no readable HBD/USDT leg (SBD is refused as the HBD proxy — the assets are different dollars); never guessed
- A3 SWAP.HIVE:SWAP.BTC pool vs CEX cross (peg drift): net 21.7bps vs threshold 120bps → **BELOW-FLOOR** · the custodial peg is real only while the pool hugs the cross — 1.5% drift halts the venue
- A4 SAOS/USDS pool vs booked ref price (internal): net 247.32bps vs threshold 120bps → **PEG-DRIFT-HALT** · internal-AMM honesty: the pool may not wander from the booked ref unnoticed

Counter-grids (opposing grids anchored to the CEX-implied fair, skewed by inventory, PLAN-OWNER-GATED-NOT-BROADCAST):
- SBD/STEEM (STEEM internal): anchor 0.10854292 (CEX-IMPLIED-FAIR (SBDUSDT/STEEMUSDT — lead-lag anchor, the opposing side of the local book)) · spacing 0.4% · skew 0bps · rungs 6 · executor market-exec.cjs / saos-dex grid-beat (owner-gated signing surfaces)

Laws: official sources only · keyless: the router plans, owner-gated desks sign · fail-soft exit 0 (dark feeds are honest rows) · verdict authority inherited from Z-27 (dex-book/bridge-desk) · single canon book + append-only history · honest money: the powerdown drip is the booked fuel law

Errors: [{"venue":"hive-internal","error":"AggregateError"},{"venue":"balances","error":"HEAD_ACCOUNT is not defined"}]

Sources: api.steemit.com, api.hive.blog (condenser), api.hive-engine.com mirrors, Binance/MEXC/HTX public tickers, dex/state.json mirror, Z-27 books. Zero secrets.