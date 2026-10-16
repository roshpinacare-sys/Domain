# market-grid — internal-market sovereignty instrument (Z-60+)

<<<<<<< Updated upstream
<<<<<<< Updated upstream
At: 2026-10-16T19:11:06.407Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10254095188959113 | 0.10278548668927948 | 0.2382 | 0 | 10 | 0.00041065 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1053% fee 0bps pond 264.96526034 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.21% fee 0bps pond 17630.43855928 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6905% fee 0bps pond 479.87896804 SWAP.HIVE/24h FEASIBLE · CENT spread 1.769% fee 0bps pond 59.14719204 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1062% fee 0bps pond 9.48796974 SWAP.HIVE/24h thin
=======
At: 2026-10-16T19:11:54.126Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05199125558406995 | 0.05215154349859682 | 0.3078 | -1.464 | 10 | 0.00020829 | 5 |
| SBD/STEEM (internal steem) | 0.10254095188959113 | 0.10278548668927948 | 0.2382 | 0 | 10 | 0.00041065 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1053% fee 0bps pond 264.96526034 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.21% fee 0bps pond 17630.43855928 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1854% fee 0bps pond 479.87896804 SWAP.HIVE/24h FEASIBLE · CENT spread 1.769% fee 0bps pond 59.14719204 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1062% fee 0bps pond 9.48796974 SWAP.HIVE/24h thin
>>>>>>> Stashed changes
=======
At: 2026-10-16T19:11:49.680Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.052 | 0.05215154349859682 | 0.291 | -1.464 | 10 | 0.0002083 | 5 |
| SBD/STEEM (internal steem) | 0.10254095188959113 | 0.10278548668927948 | 0.2382 | 0 | 10 | 0.00041065 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1053% fee 0bps pond 264.96526034 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.21% fee 0bps pond 17630.43855928 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1854% fee 0bps pond 479.87896804 SWAP.HIVE/24h FEASIBLE · CENT spread 1.769% fee 0bps pond 59.14719204 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1062% fee 0bps pond 9.48796974 SWAP.HIVE/24h thin
>>>>>>> Stashed changes
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.