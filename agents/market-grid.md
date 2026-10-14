# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-14T09:09:05.834Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05342399222923749 | 0.0534331000080457 | 0.017 | -0.675 | 10 | 0.00021371 | 6 |
| SBD/STEEM (internal steem) | 0.10006882312456986 | 0.10063463281958296 | 0.5638 | 0.109 | 10 | 0.00040141 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6922% fee 0bps pond 270.18346885 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1288% fee 0bps pond 8020.86448956 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1654% fee 0bps pond 10104.39936827 SWAP.HIVE/24h FEASIBLE · CENT spread 3.0862% fee 0bps pond 70.79830615 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1613% fee 0bps pond 2.80498429 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.