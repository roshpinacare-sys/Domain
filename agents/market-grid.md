# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-14T03:52:46.175Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05302812170073903 | 0.05338339727369194 | 0.6677 | 1.15 | 10 | 0.00021282 | 6 |
| SBD/STEEM (internal steem) | 0.10351867940920938 | 0.10387837710627883 | 0.3469 | 0 | 10 | 0.00041479 | 9 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3655% fee 0bps pond 375.36497072 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1471% fee 0bps pond 7906.13116349 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1654% fee 0bps pond 10104.39936827 SWAP.HIVE/24h FEASIBLE · CENT spread 1.2654% fee 0bps pond 67.17745744 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1613% fee 0bps pond 4.63420539 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.