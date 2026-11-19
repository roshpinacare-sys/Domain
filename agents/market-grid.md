# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-19T12:06:10.751Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03807965084560829 | 0.03815 | 0.1846 | -2.864 | 10 | 0.00021831 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9296% fee 0bps pond 244.22033613 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 5.3312% fee 0bps pond 102470.21685576 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 43.75% fee 0bps pond 414.68583136 SWAP.HIVE/24h FEASIBLE · CENT spread 6.9152% fee 0bps pond 66.66109413 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 0.12292013 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.