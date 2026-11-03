# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-03T15:52:33.885Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04511278195488722 | 0.04532215670952618 | 0.463 | -3.725 | 10 | 0.00033689 | 5 |
| SBD/STEEM (internal steem) | 0.10228136882129278 | 0.10378744592278182 | 1.4617 | 0.141 | 10 | 0.00041214 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1495% fee 0bps pond 881.23497068 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0979% fee 0bps pond 10210.59890111 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.5545% fee 0bps pond 438.27662108 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8335% fee 0bps pond 60.14960518 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4925% fee 0bps pond 25.86400785 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.