# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T01:23:16.691Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04868098993744901 | 0.04877384196185286 | 0.1906 | -3.22 | 10 | 0.00031383 | 5 |
| SBD/STEEM (internal steem) | 0.10150011747326276 | 0.10161733292645712 | 0.1154 | -1.583 | 10 | 0.00040623 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2659% fee 0bps pond 413.58560433 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1078% fee 0bps pond 7194.0902833 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8199% fee 0bps pond 1036.6586963 SWAP.HIVE/24h FEASIBLE · CENT spread 0.2661% fee 0bps pond 70.62422008 SWAP.HIVE/24h thin · WAIV spread 2.5961% fee 0bps pond 180.17307204 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.