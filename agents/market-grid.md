# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-15T09:49:05.960Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03947563323952007 | 0.03965415780181974 | 0.4512 | -6.799 | 10 | 0.00047478 | 5 |
| SBD/STEEM (internal steem) | 0.1041182331451345 | 0.1045 | 0.366 | -0.343 | 10 | 0.00041724 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0012% fee 0bps pond 230.32374801 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0326% fee 0bps pond 8094.17798322 SWAP.HIVE/24h thin · SWAP.DOGE spread 14.7763% fee 0bps pond 744.8023977 SWAP.HIVE/24h FEASIBLE · CENT spread 6.3181% fee 0bps pond 355.5922384 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.5742% fee 0bps pond 4.17221733 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.