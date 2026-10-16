# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T20:11:49.943Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10253469434568184 | 0.1026694045174538 | 0.1313 | 0 | 10 | 0.00041041 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.0168% fee 0bps pond 266.61607405 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2726% fee 0bps pond 17704.80767169 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1854% fee 0bps pond 479.87896804 SWAP.HIVE/24h FEASIBLE · CENT spread 1.769% fee 0bps pond 59.16125562 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1062% fee 0bps pond 9.49001561 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.