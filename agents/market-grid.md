# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-14T11:46:52.367Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05319148936170213 | 0.05325132734058771 | 0.1124 | 1.478 | 10 | 0.00021289 | 5 |
| SBD/STEEM (internal steem) | 0.10005009353402056 | 0.10072595281306715 | 0.6732 | 0.109 | 10 | 0.00040155 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1331% fee 0bps pond 296.22147999 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1054% fee 0bps pond 8131.42864424 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.4888% fee 0bps pond 10104.39936827 SWAP.HIVE/24h FEASIBLE · CENT spread 3.0862% fee 0bps pond 70.79830615 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1613% fee 0bps pond 2.81091742 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.