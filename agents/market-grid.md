# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-03T06:35:13.370Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04450015669069257 | 0.04455933037912359 | 0.1329 | -3.224 | 10 | 0.00028716 | 5 |
| SBD/STEEM (internal steem) | 0.10191567451436756 | 0.10631025079694281 | 4.221 | 0 | 10 | 0.00041645 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.4561% fee 0bps pond 1374.19650733 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0318% fee 0bps pond 13310.34878092 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5595% fee 0bps pond 438.27662108 SWAP.HIVE/24h FEASIBLE · CENT spread 2.7714% fee 0bps pond 112.16677665 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4137% fee 0bps pond 0.93217783 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.