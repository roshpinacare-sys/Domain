# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-20T01:37:15.016Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03730258695862804 | 0.037384228879973 | 0.2186 | -1.129 | 10 | 0.00014937 | 4 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0124% fee 0bps pond 774.57102979 SWAP.HIVE/24h thin · SWAP.LTC spread 0.5829% fee 0bps pond 106916.74846084 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 4.5603% fee 0bps pond 397.24528745 SWAP.HIVE/24h FEASIBLE · CENT spread 5.3615% fee 0bps pond 113.07066566 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6292% fee 0bps pond 5.94514037 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.