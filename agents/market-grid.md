# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T08:23:20.447Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04962836434144315 | 0.04986338797814208 | 0.4724 | -2.497 | 10 | 0.0002484 | 6 |
| SBD/STEEM (internal steem) | 0.101667344448963 | 0.10351163740302165 | 1.7977 | 0.694 | 10 | 0.00041036 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0835% fee 0bps pond 565.58479931 SWAP.HIVE/24h thin · SWAP.LTC spread 0.057% fee 0bps pond 14121.63048452 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.217% fee 0bps pond 1531.97655498 SWAP.HIVE/24h FEASIBLE · CENT spread 1.4849% fee 0bps pond 305.31807654 SWAP.HIVE/24h FEASIBLE · WAIV spread 2.5166% fee 0bps pond 19.48034194 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.