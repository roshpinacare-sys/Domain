# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T16:07:05.085Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0503374025463519 | 0.05034292140629704 | 0.011 | -2.373 | 10 | 0.00023894 | 5 |
| SBD/STEEM (internal steem) | 0.10054293183189222 | 0.10347206254311336 | 2.8715 | 0 | 10 | 0.00040803 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.7627% fee 0bps pond 513.76582306 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1625% fee 0bps pond 7589.27064139 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.5728% fee 0bps pond 948.9059038 SWAP.HIVE/24h FEASIBLE · CENT spread 0.2842% fee 0bps pond 287.48228994 SWAP.HIVE/24h thin · WAIV spread 0.1977% fee 0bps pond 6.13294244 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.