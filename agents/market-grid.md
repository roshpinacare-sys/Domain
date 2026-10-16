# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T07:41:26.380Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10324925402413968 | 0.10432330827067669 | 1.0349 | 0 | 10 | 0.00041515 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0018% fee 0bps pond 264.9003616 SWAP.HIVE/24h thin · SWAP.LTC spread 0.4073% fee 0bps pond 9332.59103037 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.1804% fee 0bps pond 301.98105516 SWAP.HIVE/24h thin · CENT spread 0.3273% fee 0bps pond 108.15301212 SWAP.HIVE/24h thin · WAIV spread 0.1919% fee 0bps pond 10.17051708 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.