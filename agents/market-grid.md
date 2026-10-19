# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T12:44:22.338Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04900682182985554 | 0.0491778085139081 | 0.3483 | -2.713 | 10 | 0.00026636 | 5 |
| SBD/STEEM (internal steem) | 0.10150005313057132 | 0.10152 | 0.0197 | -0.024 | 10 | 0.00040604 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7073% fee 0bps pond 241.71489424 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2171% fee 0bps pond 13850.54591834 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.212% fee 0bps pond 1352.41103538 SWAP.HIVE/24h thin · CENT spread 0.7596% fee 0bps pond 165.34813229 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.31% fee 0bps pond 19.12401442 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.