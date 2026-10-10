# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-10T01:01:02.221Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05530973451327434 | 0.05539164032314717 | 0.148 | 2.753 | 10 | 0.00030479 | 6 |
| SBD/STEEM (internal steem) | 0.10005 | 0.10192640913260625 | 1.858 | -0.492 | 10 | 0.00040395 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4941% fee 0bps pond 455.54022081 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4545% fee 0bps pond 4814.11874684 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.2575% fee 0bps pond 2495.97278369 SWAP.HIVE/24h FEASIBLE · CENT spread 0.1162% fee 0bps pond 125.99615145 SWAP.HIVE/24h thin · WAIV spread 0.0001% fee 0bps pond 5.11231208 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.