# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-12T16:02:28.990Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.054 | 0.05410000342089649 | 0.185 | -3.725 | 10 | 0.00040264 | 5 |
| SBD/STEEM (internal steem) | 0.10079629069650237 | 0.10157830837717523 | 0.7728 | 0.13 | 10 | 0.00040475 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3707% fee 0bps pond 278.83344678 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0227% fee 0bps pond 5887.69121039 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1846% fee 0bps pond 230.59912086 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8344% fee 0bps pond 119.30537195 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.7226% fee 0bps pond 1.60092517 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.