# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T22:02:18.656Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0491 | 0.04915203361849017 | 0.1059 | -3.649 | 10 | 0.00035853 | 5 |
| SBD/STEEM (internal steem) | 0.10438882029408464 | 0.10452443857331573 | 0.1298 | -0.061 | 10 | 0.00041783 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5752% fee 0bps pond 583.48537148 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1869% fee 0bps pond 17657.23785703 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.59% fee 0bps pond 1625.86704406 SWAP.HIVE/24h FEASIBLE · CENT spread 0.016% fee 0bps pond 307.71087994 SWAP.HIVE/24h thin · WAIV spread 0.1977% fee 0bps pond 2.64156885 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.