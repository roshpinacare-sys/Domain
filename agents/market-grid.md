# market-grid — internal-market sovereignty instrument (Z-60+)

<<<<<<< Updated upstream
At: 2026-10-19T06:12:56.707Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04939601446487651 | 0.04950699855202372 | 0.2244 | -3.184 | 10 | 0.00031489 | 5 |
=======
At: 2026-10-19T06:11:44.422Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
>>>>>>> Stashed changes
| SBD/STEEM (internal steem) | 0.1013273887931908 | 0.10156170256200878 | 0.231 | 1.424 | 10 | 0.00040578 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4299% fee 0bps pond 582.51578663 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0351% fee 0bps pond 14109.76020398 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.217% fee 0bps pond 1531.97655498 SWAP.HIVE/24h FEASIBLE · CENT spread 0.5477% fee 0bps pond 351.69686757 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.4709% fee 0bps pond 3.24470027 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.