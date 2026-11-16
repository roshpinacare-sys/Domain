# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-16T19:49:56.952Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0387047811788515 | 0.03881010031131096 | 0.2717 | -1.268 | 10 | 0.00015503 | 5 |
| SBD/STEEM (internal steem) | 0.10278486394557823 | 0.1028537455410226 | 0.067 | 0 | 10 | 0.00041128 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.8674% fee 0bps pond 493.54354096 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.59% fee 0bps pond 6052.87529659 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.9132% fee 0bps pond 355.18923273 SWAP.HIVE/24h FEASIBLE · CENT spread 6.9923% fee 0bps pond 119.51718993 SWAP.HIVE/24h FEASIBLE · WAIV spread 12.628% fee 0bps pond 0.36644071 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.