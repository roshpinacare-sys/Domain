# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-16T11:09:55.591Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03883104471606056 | 0.03894262841894596 | 0.2869 | -1.383 | 10 | 0.00015555 | 5 |
| SBD/STEEM (internal steem) | 0.10278486394557823 | 0.10342316096139839 | 0.6191 | 0 | 10 | 0.00041242 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7105% fee 0bps pond 309.52329574 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.259% fee 0bps pond 3100.10584345 SWAP.HIVE/24h thin · SWAP.DOGE spread 3.2929% fee 0bps pond 785.28047745 SWAP.HIVE/24h FEASIBLE · CENT spread 6.8399% fee 0bps pond 197.03292894 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.0643% fee 0bps pond 15.36526885 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.