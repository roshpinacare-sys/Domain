# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-11T22:47:23.761Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04325 | 0.04326745446765522 | 0.0403 | 0.568 | 10 | 0.00017303 | 5 |
| SBD/STEEM (internal steem) | 0.10369984366857739 | 0.10376076121431808 | 0.0587 | 0 | 10 | 0.00041492 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3762% fee 0bps pond 938.01079616 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1247% fee 0bps pond 15522.62691062 SWAP.HIVE/24h thin · SWAP.DOGE spread 4.878% fee 0bps pond 49.32542411 SWAP.HIVE/24h FEASIBLE · CENT spread 6.3929% fee 0bps pond 35.17178334 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.0951% fee 0bps pond 2.35057038 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.