# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-19T06:06:35.500Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03796300567369344 | 0.03812790789369924 | 0.4334 | -2.154 | 10 | 0.0001639 | 5 |
| SBD/STEEM (internal steem) | 0.10295566502463054 | 0.10425240054869685 | 1.2516 | 0 | 10 | 0.00041442 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1648% fee 0bps pond 242.22948219 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0824% fee 0bps pond 5391.08034378 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.4399% fee 0bps pond 67.29476614 SWAP.HIVE/24h FEASIBLE · CENT spread 5.9299% fee 0bps pond 101.65238066 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 8.5028414 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.