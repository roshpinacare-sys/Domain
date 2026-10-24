# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T11:10:13.931Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04948255627867278 | 0.04958 | 0.1967 | -2.659 | 10 | 0.00026343 | 5 |
| SBD/STEEM (internal steem) | 0.102047 | 0.1043187982474442 | 2.2017 | 0 | 10 | 0.00041273 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3664% fee 0bps pond 580.89308918 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0077% fee 0bps pond 7983.57393724 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.2152% fee 0bps pond 3634.27266286 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3063% fee 0bps pond 44.30552821 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3969% fee 0bps pond 7.24345096 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.