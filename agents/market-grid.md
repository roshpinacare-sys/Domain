# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-03T11:18:07.785Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04477979673544811 | 0.04477999588024038 | 0.0004 | -2.555 | 10 | 0.0002288 | 5 |
| SBD/STEEM (internal steem) | 0.10228136882129278 | 0.10392609699769054 | 1.5952 | 0.141 | 10 | 0.00041241 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8079% fee 0bps pond 1283.91003257 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.041% fee 0bps pond 13043.97536581 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5595% fee 0bps pond 438.27662108 SWAP.HIVE/24h FEASIBLE · CENT spread 2.7714% fee 0bps pond 112.16677665 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4714% fee 0bps pond 23.73225637 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.