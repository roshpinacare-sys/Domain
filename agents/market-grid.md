# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-14T14:27:05.900Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05195797516714422 | 0.05213158514563869 | 0.3336 | -0.921 | 10 | 0.00020818 | 5 |
| SBD/STEEM (internal steem) | 0.100051 | 0.10092799330170249 | 0.8727 | 0.109 | 10 | 0.00040196 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1504% fee 0bps pond 184.39332894 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3201% fee 0bps pond 9534.85570064 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.1704% fee 0bps pond 10104.39936827 SWAP.HIVE/24h FEASIBLE · CENT spread 0.391% fee 0bps pond 71.9703968 SWAP.HIVE/24h thin · WAIV spread 0.1613% fee 0bps pond 1.70483531 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.