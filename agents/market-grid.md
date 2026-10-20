# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T15:56:32.783Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05033376812706207 | 0.0505814673466401 | 0.4909 | 3.582 | 10 | 0.00036151 | 5 |
| SBD/STEEM (internal steem) | 0.1038637307852098 | 0.10576 | 1.8092 | 0 | 10 | 0.00041925 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.6283% fee 0bps pond 351.80468664 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.6293% fee 0bps pond 12198.09270193 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.6734% fee 0bps pond 801.73903675 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8404% fee 0bps pond 103.81469323 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1296% fee 0bps pond 20.80625638 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.