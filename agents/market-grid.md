# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-27T15:34:21.116Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04861175168342404 | 0.04879 | 0.366 | 0.41 | 10 | 0.0001948 | 7 |
| SBD/STEEM (internal steem) | 0.10142378099059975 | 0.10241129032258064 | 0.9689 | 0 | 10 | 0.00040767 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8574% fee 0bps pond 124.68143143 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0041% fee 0bps pond 13848.73810611 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.3082% fee 0bps pond 91.04286594 SWAP.HIVE/24h FEASIBLE · CENT spread 2.3234% fee 0bps pond 53.97366651 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.4972% fee 0bps pond 2.18361006 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.