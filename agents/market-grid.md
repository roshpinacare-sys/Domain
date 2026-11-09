# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-09T16:37:21.486Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04365 | 0.04369494085074251 | 0.1029 | 0.034 | 10 | 0.00017469 | 5 |
| SBD/STEEM (internal steem) | 0.10339871578794992 | 0.10370217923212366 | 0.2931 | -0.066 | 10 | 0.0004142 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5808% fee 0bps pond 307.54729388 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.412% fee 0bps pond 11794.19784405 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.6702% fee 0bps pond 1400.10574631 SWAP.HIVE/24h FEASIBLE · CENT spread 0.4829% fee 0bps pond 120.67612913 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5275% fee 0bps pond 31.79153147 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.