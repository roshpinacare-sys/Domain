# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T13:55:08.675Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04874545106301475 | 0.04931794333683106 | 1.1676 | -3.866 | 10 | 0.00037913 | 5 |
| SBD/STEEM (internal steem) | 0.10150869137422106 | 0.10212988175612667 | 0.6101 | -0.024 | 10 | 0.00040728 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5499% fee 0bps pond 384.38094178 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.6214% fee 0bps pond 14722.9695265 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.212% fee 0bps pond 1206.39218936 SWAP.HIVE/24h thin · CENT spread 0.914% fee 0bps pond 120.22538661 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1843% fee 0bps pond 170.36589381 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.