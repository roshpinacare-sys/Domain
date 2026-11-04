# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-04T19:48:12.250Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04552188552188552 | 0.0456 | 0.1715 | 1.047 | 10 | 0.00018224 | 5 |
| SBD/STEEM (internal steem) | 0.10210002656382539 | 0.10366826156299841 | 1.5243 | 0.012 | 10 | 0.00041154 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8474% fee 0bps pond 666.98131074 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0549% fee 0bps pond 29910.10370652 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1551% fee 0bps pond 1260.69639584 SWAP.HIVE/24h FEASIBLE · CENT spread 1.4382% fee 0bps pond 139.19965268 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.8956% fee 0bps pond 24.17636058 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.