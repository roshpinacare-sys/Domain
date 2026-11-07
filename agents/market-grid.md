# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-07T09:38:15.587Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04472271914132379 | 0.04481897627965044 | 0.215 | 2.064 | 10 | 0.00018484 | 5 |
| SBD/STEEM (internal steem) | 0.10242290748898679 | 0.10389021209028014 | 1.4224 | 0 | 10 | 0.00041263 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3385% fee 0bps pond 290.64858113 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3325% fee 0bps pond 6441.72759948 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.3308% fee 0bps pond 2093.60037599 SWAP.HIVE/24h FEASIBLE · CENT spread 2.134% fee 0bps pond 76.88036634 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4662% fee 0bps pond 3.5064856 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.