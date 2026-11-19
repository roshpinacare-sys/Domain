# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-19T08:21:44.020Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03802969938428106 | 0.03809649838002587 | 0.1755 | -2.749 | 10 | 0.00020928 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1054% fee 0bps pond 217.83557084 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1915% fee 0bps pond 90185.30073249 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.4399% fee 0bps pond 67.29476614 SWAP.HIVE/24h FEASIBLE · CENT spread 6.9152% fee 0bps pond 66.67330634 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 8.44830525 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.