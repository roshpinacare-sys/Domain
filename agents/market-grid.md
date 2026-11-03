# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-03T13:18:36.870Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04470758820686322 | 0.04515946937623483 | 1.0057 | -2.216 | 10 | 0.00019913 | 6 |
| SBD/STEEM (internal steem) | 0.10228136882129278 | 0.1039195461578133 | 1.5889 | 0.141 | 10 | 0.0004124 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3084% fee 0bps pond 1290.84237692 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0617% fee 0bps pond 13801.23322813 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5595% fee 0bps pond 438.27662108 SWAP.HIVE/24h FEASIBLE · CENT spread 2.7714% fee 0bps pond 56.68725974 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4925% fee 0bps pond 25.86242249 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.