# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T00:26:00.452Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04959579427664534 | 0.04985376229726136 | 0.5188 | -5.205 | 10 | 0.00051765 | 5 |
| SBD/STEEM (internal steem) | 0.1038961038961039 | 0.10416666666666667 | 0.2601 | 0 | 10 | 0.00041613 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3123% fee 0bps pond 579.27355871 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3138% fee 0bps pond 14276.23662141 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.217% fee 0bps pond 1939.16724462 SWAP.HIVE/24h FEASIBLE · CENT spread 0.1465% fee 0bps pond 307.92804185 SWAP.HIVE/24h thin · WAIV spread 0.1977% fee 0bps pond 2.6402788 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.