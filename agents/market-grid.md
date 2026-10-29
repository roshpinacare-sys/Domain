# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T11:29:36.455Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04799846404915042 | 0.0483771569433032 | 0.7859 | -1.968 | 10 | 0.00019275 | 6 |
| SBD/STEEM (internal steem) | 0.101401 | 0.10236220472440945 | 0.9435 | 0 | 10 | 0.00040753 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0713% fee 0bps pond 935.47962401 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0211% fee 0bps pond 8617.90316796 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.6079% fee 0bps pond 43.61753547 SWAP.HIVE/24h FEASIBLE · CENT spread 1.7207% fee 0bps pond 123.94751819 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1092% fee 0bps pond 1.20915088 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.