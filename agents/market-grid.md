# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T06:11:05.619Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05120387742338962 | 0.05123865210032313 | 0.0679 | 0.553 | 10 | 0.00020489 | 5 |
| SBD/STEEM (internal steem) | 0.1002833387523805 | 0.10061199510403916 | 0.3272 | 0 | 10 | 0.00040179 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7498% fee 0bps pond 155.81764654 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0786% fee 0bps pond 6005.56514772 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.3758% fee 0bps pond 431.79629043 SWAP.HIVE/24h thin · CENT spread 3.191% fee 0bps pond 50.64851458 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0762% fee 0bps pond 4.66339739 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.