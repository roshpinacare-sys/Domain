# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-22T02:19:41.639Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05070164304350892 | 0.05074852074804719 | 0.0924 | 1.497 | 10 | 0.0002029 | 5 |
| SBD/STEEM (internal steem) | 0.101012 | 0.10333333333333333 | 2.272 | 0.11 | 10 | 0.00040869 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5433% fee 0bps pond 615.47419038 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2402% fee 0bps pond 8034.80703838 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0389% fee 0bps pond 1675.79461404 SWAP.HIVE/24h thin · CENT spread 0.8784% fee 0bps pond 41.96410915 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1389% fee 0bps pond 53.54698312 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.