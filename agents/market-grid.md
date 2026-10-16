# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T06:16:04.953Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05258270588366915 | 0.0526 | 0.0329 | 1.611 | 10 | 0.00021037 | 6 |
| SBD/STEEM (internal steem) | 0.1026588645929576 | 0.10440593025683859 | 1.6875 | -0.001 | 10 | 0.00041413 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0743% fee 0bps pond 254.01256956 SWAP.HIVE/24h thin · SWAP.LTC spread 0.4528% fee 0bps pond 8387.59536396 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.1754% fee 0bps pond 301.98105516 SWAP.HIVE/24h FEASIBLE · CENT spread 0.3273% fee 0bps pond 108.15301212 SWAP.HIVE/24h thin · WAIV spread 0.1919% fee 0bps pond 10.17442013 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.