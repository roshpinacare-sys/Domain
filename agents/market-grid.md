# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T07:10:52.998Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04964484249536751 | 0.04988390909730529 | 0.4804 | -4.546 | 10 | 0.00045244 | 5 |
| SBD/STEEM (internal steem) | 0.1013273887931908 | 0.10156170256200878 | 0.231 | 1.424 | 10 | 0.00040578 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3165% fee 0bps pond 580.94914884 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0352% fee 0bps pond 14144.6953237 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.217% fee 0bps pond 1531.97655498 SWAP.HIVE/24h FEASIBLE · CENT spread 0.5477% fee 0bps pond 351.69686757 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.4709% fee 0bps pond 2.4319792 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.