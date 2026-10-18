# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T22:59:39.764Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04937622125356982 | 0.04948516981712003 | 0.2204 | -4.368 | 10 | 0.00043185 | 5 |
| SBD/STEEM (internal steem) | 0.10440593025683859 | 0.10541110330288124 | 0.9581 | 0 | 10 | 0.00041963 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.462% fee 0bps pond 579.27355871 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.07% fee 0bps pond 14197.64313367 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.217% fee 0bps pond 1939.16724462 SWAP.HIVE/24h FEASIBLE · CENT spread 0.142% fee 0bps pond 307.71087994 SWAP.HIVE/24h thin · WAIV spread 0.1977% fee 0bps pond 2.6402788 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.