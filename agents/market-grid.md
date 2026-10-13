# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T08:05:20.912Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05337974887762069 | 0.0534 | 0.0379 | -5.263 | 10 | 0.00056193 | 5 |
| SBD/STEEM (internal steem) | 0.1001001001001001 | 0.1025010250102501 | 2.3701 | 0 | 10 | 0.0004052 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.3475% fee 0bps pond 561.06627387 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0054% fee 0bps pond 6171.03666626 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5638% fee 0bps pond 287.47985447 SWAP.HIVE/24h FEASIBLE · CENT spread 1.1137% fee 0bps pond 158.65905103 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.7226% fee 0bps pond 7.64968092 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.