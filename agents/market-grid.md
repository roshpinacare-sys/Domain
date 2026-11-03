# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-03T03:03:26.087Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04485704896483733 | 0.04507378567782803 | 0.482 | -1.782 | 10 | 0.00017986 | 5 |
| SBD/STEEM (internal steem) | 0.10311862678450034 | 0.10649066688261732 | 3.2175 | 0 | 10 | 0.00041922 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.2926% fee 0bps pond 731.87481095 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0843% fee 0bps pond 13311.86265808 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9553% fee 0bps pond 324.01666204 SWAP.HIVE/24h FEASIBLE · CENT spread 0.9119% fee 0bps pond 111.12449136 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4137% fee 0bps pond 1.0067862 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.