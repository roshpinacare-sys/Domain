# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-31T19:34:00.201Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04756911344137273 | 0.04760002299564826 | 0.065 | 1.115 | 10 | 0.00019034 | 5 |
| SBD/STEEM (internal steem) | 0.1019838463542636 | 0.10416 | 2.1113 | 0 | 10 | 0.00041229 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9377% fee 0bps pond 467.6144901 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.3623% fee 0bps pond 4469.06801464 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.1749% fee 0bps pond 20.7989283 SWAP.HIVE/24h thin · CENT spread 1.349% fee 0bps pond 100.74313588 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4177% fee 0bps pond 5.26822369 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.