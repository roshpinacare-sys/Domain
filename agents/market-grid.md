# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T17:11:07.586Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05295150614615696 | 0.05297548793212569 | 0.0453 | 1.186 | 10 | 0.00021185 | 5 |
| SBD/STEEM (internal steem) | 0.10322260988046822 | 0.10340579072428056 | 0.1773 | 0 | 10 | 0.00041326 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.333% fee 0bps pond 277.13610259 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.335% fee 0bps pond 16779.34455968 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6905% fee 0bps pond 501.55881323 SWAP.HIVE/24h FEASIBLE · CENT spread 1.769% fee 0bps pond 99.54584202 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0809% fee 0bps pond 9.36902651 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.