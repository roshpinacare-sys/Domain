# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-09T05:53:11.175Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04246700640271789 | 0.04257150046572305 | 0.2458 | -1.965 | 10 | 0.00017008 | 5 |
| SBD/STEEM (internal steem) | 0.10222503088643183 | 0.10309645272274291 | 0.8488 | 0 | 10 | 0.00041064 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5928% fee 0bps pond 312.35487016 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1476% fee 0bps pond 4278.12838029 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.6702% fee 0bps pond 1391.87309878 SWAP.HIVE/24h FEASIBLE · CENT spread 0.3781% fee 0bps pond 87.68913038 SWAP.HIVE/24h thin · WAIV spread 1.5328% fee 0bps pond 32.31136773 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.