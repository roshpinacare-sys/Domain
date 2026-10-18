# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T15:41:07.375Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05031397782773858 | 0.05042531994788873 | 0.2211 | -2.323 | 10 | 0.00023405 | 5 |
| SBD/STEEM (internal steem) | 0.100999899000101 | 0.10347206254311336 | 2.4181 | 0 | 10 | 0.00040894 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.8083% fee 0bps pond 518.86858544 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0313% fee 0bps pond 7315.70526549 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.5651% fee 0bps pond 917.38968991 SWAP.HIVE/24h FEASIBLE · CENT spread 0.2842% fee 0bps pond 286.33185656 SWAP.HIVE/24h thin · WAIV spread 0.1977% fee 0bps pond 6.13294244 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.