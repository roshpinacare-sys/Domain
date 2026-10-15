# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T20:01:15.377Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05235424103348631 | 0.05246913580246913 | 0.2192 | 1.539 | 10 | 0.00020965 | 5 |
| SBD/STEEM (internal steem) | 0.1012189292543021 | 0.10447137484329294 | 3.1625 | 0 | 10 | 0.00041138 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5877% fee 0bps pond 719.15609096 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2245% fee 0bps pond 7514.54505208 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.51% fee 0bps pond 1828.12500792 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3173% fee 0bps pond 112.67566148 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1768% fee 0bps pond 3.89950481 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.