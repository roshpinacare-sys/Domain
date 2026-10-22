# dex-router — SWAP-NET (R39, CR-0069)

At: 2026-10-22T12:22:59.278Z · Verdict: **SWAP-NET-LIVE** · mode: KEYLESS-READ (the router plans; owner-gated desks sign)

Venues alive: steem-internal, hive-internal, he-pools, saos-mirror · Routes: 12 (LIVE-KEYED: R1,R2) · Arb candidates: none · Peg halts: none

| Route | From→To | Verdict | Quote | Unlock |
|---|---|---|---|---|
| R1 STEEM-INTERNAL | SBD→STEEM | LIVE-KEYED | 1.000 SBD → 9.873 STEEM | — |
| R2 STEEM-INTERNAL | STEEM→SBD | LIVE-KEYED | 1.000 STEEM → 0.101048 SBD | — |
| R3 HIVE-INTERNAL | HBD→HIVE | GATED-KEYS | 1.000 HBD → 20.048333 HIVE | HIVE active key material (R38 measured: none held) + ≥0.2 HIVE/HBD level fuel |
| R4 HIVE-INTERNAL | HIVE→HBD | GATED-KEYS | 1.000 HIVE → 0.049583 HBD | HIVE active key material + inventory |
| R5 HIVE-ENGINE (SWAP.HIVE→SWAP.BTC) | HIVE→BTC | GATED-CAPITAL | 8705.425 SWAP.HIVE (1% pool) → 0.00523 SWAP.BTC | HIVE keys + HIVE inventory (0.034 HIVE dust today — R38 measured) |
| R6 HIVE-ENGINE | SWAP.HIVE→SWAP.LTC | GATED-CAPITAL | — | HIVE keys + SWAP.HIVE inventory |
| R7 CEX (MEXC/Binance native deposit → sell) | STEEM→USDT | C-GATE-OPERATOR | 1.000 STEEM → 0.052604 USDT | operator MEXC/Binance account + API keys (tier-C operator lock, keys never in repos) |
| R8 CEX (HTX native deposit → sell) | SBD→USDT | C-GATE-OPERATOR | — | operator HTX account + API keys |
| R9 CEX → native withdraw → internal market | BTC/USDT→STEEM | C-GATE-OPERATOR | 100.000 USDT → 1900.057002 STEEM | operator CEX keys + withdrawal whitelist (deposit doors already live in dex/watch.json) |
| R10 none | BLURT→BTC | NO-RAIL | — | a blurt book coming alive (engine/pool/CEX) would be measured by market-grid before this route opens |
| R11 SAOS-AMM (SAOS→USDS→WSTEEM) | SAOS→WSTEEM | INTERNAL-SIM | 0.988 SAOS (1% pool) → 5.787577 WSTEEM | exit corridor WSTEEM→STEEM runs on the engine rail (armed-needs-sovereign-identity, dex/agent.json); then R7 |
| R12 TRON-RAIL | WTRX→TRX→USDT | GATED-KEYS | — | sovereign TRON identity (relay identities.tron = null; custody 2.0 TRX, peg-outbox threshold 1.05 TRX) |

Arb net (floor law: net must beat 2×(capture+0.4% floor); FOK legs only, single block):
- A1 SBD/STEEM internal vs CEX-implied fair: net — vs threshold undefinedbps → **FEED-STALE** · a needed leg did not answer — never guessed
- A2 HBD/HIVE internal vs CEX-implied fair: net — vs threshold undefinedbps → **FEED-STALE** · no readable HBD/USDT leg (SBD is refused as the HBD proxy — the assets are different dollars); never guessed
- A3 SWAP.HIVE:SWAP.BTC pool vs CEX cross: net — vs threshold undefinedbps → **FEED-STALE** · a CEX leg did not answer
- A4 SAOS/USDS pool vs booked ref price (internal): net -30.28bps vs threshold 120bps → **BELOW-FLOOR** · internal-AMM honesty: the pool may not wander from the booked ref unnoticed

Counter-grids (opposing grids anchored to the CEX-implied fair, skewed by inventory, PLAN-OWNER-GATED-NOT-BROADCAST):
- SBD/STEEM (STEEM internal): anchor 0.10116719 (LOCAL-MID-FALLBACK (CEX feed stale)) · spacing 0.4% · skew 0bps · rungs 6 · executor market-exec.cjs / saos-dex grid-beat (owner-gated signing surfaces)
- HBD/HIVE (HIVE internal): anchor 0.04973103 (LOCAL-MID-FALLBACK (CEX feed stale)) · spacing 0.4% · skew 0bps · rungs 6 · executor saos-dex grid-beat HIVE leg (owner-gated; keys measured absent — CR-0068)

Laws: official sources only · keyless: the router plans, owner-gated desks sign · fail-soft exit 0 (dark feeds are honest rows) · verdict authority inherited from Z-27 (dex-book/bridge-desk) · single canon book + append-only history · honest money: the powerdown drip is the booked fuel law

Errors: [{"venue":"balances","error":"HEAD_ACCOUNT is not defined"}]

Sources: api.steemit.com, api.hive.blog (condenser), api.hive-engine.com mirrors, Binance/MEXC/HTX public tickers, dex/state.json mirror, Z-27 books. Zero secrets.