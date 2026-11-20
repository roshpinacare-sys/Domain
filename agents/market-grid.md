# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-20T23:03:40.610Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03568969474408997 | 0.03571186265162633 | 0.0621 | -3.077 | 10 | 0.00021968 | 9 |
| SBD/STEEM (internal steem) | 0.10275775260327269 | 0.10290183165260341 | 0.1401 | 0 | 10 | 0.00041132 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 3.733% fee 0bps pond 403.37062714 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.7213% fee 0bps pond 5975.42440781 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 11.4094% fee 0bps pond 842.61313036 SWAP.HIVE/24h FEASIBLE · CENT spread 5.3089% fee 0bps pond 130.31138727 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.1365% fee 0bps pond 17.54639634 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.