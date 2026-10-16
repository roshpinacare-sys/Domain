# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T04:07:30.880Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05233396729765263 | 0.05233437531511546 | 0.0008 | 2.464 | 10 | 0.00025788 | 6 |
| SBD/STEEM (internal steem) | 0.10210050518479127 | 0.10214 | 0.0387 | -0.07 | 10 | 0.00040848 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1268% fee 0bps pond 243.85338622 SWAP.HIVE/24h thin · SWAP.LTC spread 0.7497% fee 0bps pond 8329.35176608 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.1754% fee 0bps pond 301.98105516 SWAP.HIVE/24h FEASIBLE · CENT spread 0.3273% fee 0bps pond 109.33221882 SWAP.HIVE/24h thin · WAIV spread 0.1919% fee 0bps pond 11.12439865 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.