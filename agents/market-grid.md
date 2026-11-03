# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-03T08:47:55.615Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04456950937230518 | 0.04476492164054685 | 0.4375 | -2.653 | 10 | 0.00023704 | 5 |
| SBD/STEEM (internal steem) | 0.10328019058090526 | 0.10433319310054691 | 1.0144 | 0.141 | 10 | 0.00041523 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1692% fee 0bps pond 1367.92703733 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.041% fee 0bps pond 13043.97536581 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5595% fee 0bps pond 438.27662108 SWAP.HIVE/24h FEASIBLE · CENT spread 2.7714% fee 0bps pond 112.16677665 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4714% fee 0bps pond 23.69870117 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.