# market-grid — internal-market sovereignty instrument (Z-60+)

<<<<<<< Updated upstream
At: 2026-10-16T18:41:05.672Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10254545454545455 | 0.10278548668927948 | 0.2338 | 0 | 10 | 0.00041066 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.156% fee 0bps pond 261.44353419 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.042% fee 0bps pond 17459.62275271 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1854% fee 0bps pond 501.55881323 SWAP.HIVE/24h FEASIBLE · CENT spread 3.5696% fee 0bps pond 72.68205449 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0809% fee 0bps pond 9.36902651 SWAP.HIVE/24h thin
=======
At: 2026-10-16T18:41:54.139Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05267 | 0.05270208642116064 | 0.0609 | 1.464 | 10 | 0.00021074 | 10 |
| SBD/STEEM (internal steem) | 0.10254545454545455 | 0.10278548668927948 | 0.2338 | 0 | 10 | 0.00041066 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.156% fee 0bps pond 261.44353419 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.042% fee 0bps pond 17459.62275271 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1854% fee 0bps pond 501.55881323 SWAP.HIVE/24h FEASIBLE · CENT spread 1.769% fee 0bps pond 72.68205449 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0809% fee 0bps pond 9.36902651 SWAP.HIVE/24h thin
>>>>>>> Stashed changes
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.