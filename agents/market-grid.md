# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-11T13:06:40.649Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05566600397614314 | 0.05579226625934561 | 0.2266 | 1.284 | 10 | 0.00022292 | 5 |
| SBD/STEEM (internal steem) | 0.10002270663033606 | 0.10099500362984157 | 0.9674 | 0.091 | 10 | 0.00040204 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5594% fee 0bps pond 450.50904902 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0666% fee 0bps pond 2007.45907942 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0437% fee 0bps pond 414.70491945 SWAP.HIVE/24h FEASIBLE · CENT spread 0.9614% fee 0bps pond 65.40290417 SWAP.HIVE/24h FEASIBLE · WAIV spread 4.2868% fee 0bps pond 110.20494524 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.