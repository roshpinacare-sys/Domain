# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-19T11:43:39.832Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03801516797461531 | 0.03805 | 0.0916 | -2.327 | 10 | 0.00017704 | 5 |
| SBD/STEEM (internal steem) | 0.10290595561232636 | 0.10320987654320987 | 0.2949 | 0 | 10 | 0.00041223 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9652% fee 0bps pond 244.22033613 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 2.1905% fee 0bps pond 102506.26894084 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 43.75% fee 0bps pond 414.68583136 SWAP.HIVE/24h FEASIBLE · CENT spread 6.9152% fee 0bps pond 66.67330634 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 0.12292013 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.