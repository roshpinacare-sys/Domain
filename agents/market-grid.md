# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T12:20:51.270Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05061110655401526 | 0.05072001901325526 | 0.215 | 4.098 | 10 | 0.00041521 | 5 |
| SBD/STEEM (internal steem) | 0.101002 | 0.10361620557455185 | 2.5552 | -0.004 | 10 | 0.00040924 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5374% fee 0bps pond 148.53322331 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0051% fee 0bps pond 6382.64006375 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0394% fee 0bps pond 235.15008537 SWAP.HIVE/24h FEASIBLE · CENT spread 0.7917% fee 0bps pond 70.17672021 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1297% fee 0bps pond 7.09455373 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.