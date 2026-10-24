# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T11:35:18.811Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04954095082265249 | 0.04956952778502478 | 0.0577 | -1.761 | 10 | 0.00019822 | 5 |
| SBD/STEEM (internal steem) | 0.102047 | 0.10221212719731385 | 0.1617 | 0 | 10 | 0.00040852 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8809% fee 0bps pond 583.04331583 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.4601% fee 0bps pond 8898.79240805 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.0694% fee 0bps pond 3634.27266286 SWAP.HIVE/24h FEASIBLE · CENT spread 0.6487% fee 0bps pond 44.326917 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3969% fee 0bps pond 7.24345096 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.