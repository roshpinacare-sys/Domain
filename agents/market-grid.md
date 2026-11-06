# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-06T05:13:05.587Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04366089098913526 | 0.0442 | 1.2272 | -3.247 | 10 | 0.00028526 | 6 |
| SBD/STEEM (internal steem) | 0.10304556904053126 | 0.10388802488335926 | 0.8142 | 0 | 10 | 0.00041387 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0608% fee 0bps pond 395.77859057 SWAP.HIVE/24h thin · SWAP.LTC spread 0.251% fee 0bps pond 9258.67315617 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9689% fee 0bps pond 2526.65159613 SWAP.HIVE/24h FEASIBLE · CENT spread 1.4382% fee 0bps pond 396.01983837 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.5092% fee 0bps pond 8.25765004 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.