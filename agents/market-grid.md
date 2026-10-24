# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T07:30:54.277Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0495 | 0.0495012987012987 | 0.0026 | 0.45 | 10 | 0.000198 | 5 |
| SBD/STEEM (internal steem) | 0.10250001507486177 | 0.1043187982474442 | 1.7588 | -0.012 | 10 | 0.00041364 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5581% fee 0bps pond 1030.39477399 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.5186% fee 0bps pond 8118.45011263 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.0594% fee 0bps pond 3607.57428453 SWAP.HIVE/24h FEASIBLE · CENT spread 2.6316% fee 0bps pond 41.18463649 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3969% fee 0bps pond 6.75506887 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.