# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-01T01:35:06.859Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04723910840932118 | 0.04755988240610367 | 0.6767 | -1.592 | 10 | 0.0001896 | 6 |
| SBD/STEEM (internal steem) | 0.10568813337692057 | 0.11568123393316196 | 9.0284 | 0.215 | 10 | 0.00044274 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7383% fee 0bps pond 504.89202697 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4983% fee 0bps pond 5292.96943866 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.6013% fee 0bps pond 108.93179322 SWAP.HIVE/24h FEASIBLE · CENT spread 1.349% fee 0bps pond 100.74315732 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4073% fee 0bps pond 5.26753484 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.