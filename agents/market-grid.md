# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-01T10:03:16.193Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04742116841847959 | 0.04746 | 0.0819 | 0.136 | 10 | 0.00018976 | 5 |
| SBD/STEEM (internal steem) | 0.10147 | 0.11568123393316196 | 13.0888 | 0.215 | 10 | 0.0004343 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9096% fee 0bps pond 455.14019227 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1679% fee 0bps pond 5812.90249856 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8135% fee 0bps pond 108.93179322 SWAP.HIVE/24h FEASIBLE · CENT spread 0.9867% fee 0bps pond 88.36947463 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4073% fee 0bps pond 7.02729616 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.