# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-22T01:21:04.077Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0511 | 0.05116903027980069 | 0.135 | 0.667 | 10 | 0.00020454 | 5 |
| SBD/STEEM (internal steem) | 0.101012 | 0.10259567046270647 | 1.5556 | -4.15 | 10 | 0.00084495 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.238% fee 0bps pond 254.92943237 SWAP.HIVE/24h thin · SWAP.LTC spread 0.481% fee 0bps pond 7814.39543441 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.0389% fee 0bps pond 1639.31004296 SWAP.HIVE/24h thin · CENT spread 1.7645% fee 0bps pond 41.89921746 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1389% fee 0bps pond 53.54905363 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.