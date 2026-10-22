# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-22T17:36:43.482Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04902534617572108 | 0.04914303048688003 | 0.2398 | -4.186 | 10 | 0.00041097 | 5 |
| SBD/STEEM (internal steem) | 0.10150223304912707 | 0.10175188429415359 | 0.2457 | 0 | 10 | 0.00040651 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5957% fee 0bps pond 1094.88284551 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1526% fee 0bps pond 6104.02185466 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8625% fee 0bps pond 1483.56145474 SWAP.HIVE/24h FEASIBLE · CENT spread 2.614% fee 0bps pond 33.97246756 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2528% fee 0bps pond 55.8547148 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.