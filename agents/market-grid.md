# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T12:11:57.295Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10280588190320854 | 0.10299446881556361 | 0.1833 | -0.028 | 10 | 0.0004116 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7337% fee 0bps pond 225.80941218 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2021% fee 0bps pond 13865.18863071 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.212% fee 0bps pond 1352.41103538 SWAP.HIVE/24h thin · CENT spread 0.0725% fee 0bps pond 165.34813229 SWAP.HIVE/24h thin · WAIV spread 1.7759% fee 0bps pond 19.12401442 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.