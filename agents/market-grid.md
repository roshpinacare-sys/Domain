# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T13:41:15.105Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05361930294906166 | 0.05370000120480935 | 0.1504 | 3.045 | 10 | 0.00032681 | 5 |
| SBD/STEEM (internal steem) | 0.10303114571746384 | 0.10370783384443825 | 0.6546 | 0 | 10 | 0.00041348 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1117% fee 0bps pond 315.49536482 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1919% fee 0bps pond 16847.79374745 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6905% fee 0bps pond 666.151729 SWAP.HIVE/24h FEASIBLE · CENT spread 1.5915% fee 0bps pond 94.99593588 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0607% fee 0bps pond 7.51625907 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.