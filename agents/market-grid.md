# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T17:43:38.811Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04910255396536728 | 0.04954050505830566 | 0.888 | -5.373 | 10 | 0.00053005 | 5 |
| SBD/STEEM (internal steem) | 0.10341302296319597 | 0.10347206254311336 | 0.0571 | 0 | 10 | 0.00041377 | 3 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.7142% fee 0bps pond 590.53865515 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2383% fee 0bps pond 8069.84383017 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.6054% fee 0bps pond 1625.70971316 SWAP.HIVE/24h FEASIBLE · CENT spread 0.0613% fee 0bps pond 302.58174769 SWAP.HIVE/24h thin · WAIV spread 0.1977% fee 0bps pond 2.63750372 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.