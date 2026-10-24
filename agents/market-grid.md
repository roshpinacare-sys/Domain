# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T18:03:41.329Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04800023777207565 | 0.04810002121498243 | 0.2077 | -4.003 | 10 | 0.00038473 | 5 |
| SBD/STEEM (internal steem) | 0.10208248264597795 | 0.10397171969224371 | 1.8337 | -0.131 | 10 | 0.00041211 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.4727% fee 0bps pond 383.36740813 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.405% fee 0bps pond 5674.00158339 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.5121% fee 0bps pond 3539.7356286 SWAP.HIVE/24h FEASIBLE · CENT spread 0.511% fee 0bps pond 46.42394922 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3969% fee 0bps pond 6.30569601 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.