# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-05T14:13:16.002Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0457 | 0.04578146724256815 | 0.1781 | 1.502 | 10 | 0.00018296 | 5 |
| SBD/STEEM (internal steem) | 0.10224089635854341 | 0.10366826156299841 | 1.3864 | 0.012 | 10 | 0.00041182 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2773% fee 0bps pond 769.10533895 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0815% fee 0bps pond 26413.54717249 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.597% fee 0bps pond 1683.51461852 SWAP.HIVE/24h FEASIBLE · CENT spread 2.3863% fee 0bps pond 496.32236536 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.854% fee 0bps pond 8.3418792 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.