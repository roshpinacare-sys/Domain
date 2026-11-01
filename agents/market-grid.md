# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-01T16:20:19.130Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04691 | 0.0469573184698786 | 0.1008 | -1.387 | 10 | 0.00018773 | 5 |
| SBD/STEEM (internal steem) | 0.10689961504293752 | 0.1069 | 0.0004 | 0.138 | 10 | 0.0004276 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7794% fee 0bps pond 1167.51902471 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0657% fee 0bps pond 23156.27667895 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.7408% fee 0bps pond 225.64862448 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3616% fee 0bps pond 51.7049541 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4125% fee 0bps pond 4.53974254 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.