# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-04T03:09:10.051Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05619966368705195 | 0.05628202862696589 | 0.1465 | 0.207 | 10 | 0.00022496 | 5 |
| SBD/STEEM (internal steem) | 0.10009006539530876 | 0.10262725779967159 | 2.5032 | 0 | 10 | 0.00040543 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.145% fee 0bps pond 1972.07561555 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0623% fee 0bps pond 14247.36368057 SWAP.HIVE/24h thin · SWAP.DOGE spread 3.0741% fee 0bps pond 818.12979161 SWAP.HIVE/24h FEASIBLE · CENT spread 3.0426% fee 0bps pond 25.41360258 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2738% fee 0bps pond 15.02550009 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.