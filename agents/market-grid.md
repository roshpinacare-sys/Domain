# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T22:33:45.570Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05250010977162623 | 0.05260389268805891 | 0.1975 | 0.282 | 10 | 0.00021021 | 5 |
| SBD/STEEM (internal steem) | 0.10260619741432382 | 0.10261194029850747 | 0.0056 | 0 | 10 | 0.00041044 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3864% fee 0bps pond 168.92186761 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3566% fee 0bps pond 18599.82970434 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1854% fee 0bps pond 479.87896804 SWAP.HIVE/24h FEASIBLE · CENT spread 1.7699% fee 0bps pond 59.20160872 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1062% fee 0bps pond 9.39950505 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.