# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T10:36:43.934Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05067345597897503 | 0.05094589545902252 | 0.5362 | 3.432 | 10 | 0.00034873 | 5 |
| SBD/STEEM (internal steem) | 0.10100104246434992 | 0.1036036036036036 | 2.544 | -0.004 | 10 | 0.00040921 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5489% fee 0bps pond 163.84883744 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0758% fee 0bps pond 7276.93705031 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0394% fee 0bps pond 235.15008537 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8535% fee 0bps pond 82.61543324 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1297% fee 0bps pond 14.25851002 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.