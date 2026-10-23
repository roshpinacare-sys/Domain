# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T02:31:01.579Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04963974213120971 | 0.05 | 0.7231 | -1.005 | 10 | 0.00019928 | 8 |
| SBD/STEEM (internal steem) | 0.10151253679829458 | 0.10173116089613035 | 0.2151 | 0 | 10 | 0.00040649 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4295% fee 0bps pond 741.71625586 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1066% fee 0bps pond 5794.4250112 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0494% fee 0bps pond 730.32532186 SWAP.HIVE/24h FEASIBLE · CENT spread 0.162% fee 0bps pond 33.97246756 SWAP.HIVE/24h thin · WAIV spread 0.2942% fee 0bps pond 4.42703134 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.