# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T03:41:43.635Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04940853334997971 | 0.04953353282872733 | 0.2527 | -3.962 | 10 | 0.00039197 | 5 |
| SBD/STEEM (internal steem) | 0.10262725779967159 | 0.10263218656199492 | 0.0048 | -0.021 | 10 | 0.00041052 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4363% fee 0bps pond 555.03389944 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1002% fee 0bps pond 14081.88730655 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.217% fee 0bps pond 1939.16724462 SWAP.HIVE/24h FEASIBLE · CENT spread 0.417% fee 0bps pond 345.38436564 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.4709% fee 0bps pond 3.24470027 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.