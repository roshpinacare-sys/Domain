# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-09T21:02:07.234Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0545665980856964 | 0.0546875 | 0.2213 | 1.862 | 10 | 0.00021851 | 5 |
| SBD/STEEM (internal steem) | 0.10005 | 0.10102739726027397 | 0.9722 | -0.492 | 10 | 0.00040215 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0006% fee 0bps pond 557.68897915 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0519% fee 0bps pond 4005.00681499 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0725% fee 0bps pond 2434.63843101 SWAP.HIVE/24h FEASIBLE · CENT spread 0.3324% fee 0bps pond 111.51340341 SWAP.HIVE/24h thin · WAIV spread 0.1585% fee 0bps pond 5.1147061 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.