# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-16T13:45:45.021Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03838888550362562 | 0.03851119718623391 | 0.3181 | -3.639 | 10 | 0.00027983 | 7 |
| SBD/STEEM (internal steem) | 0.10267857142857142 | 0.10342316096139839 | 0.7225 | 0 | 10 | 0.0004122 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6878% fee 0bps pond 268.1995685 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0412% fee 0bps pond 2930.10195948 SWAP.HIVE/24h thin · SWAP.DOGE spread 27.293% fee 0bps pond 77.31847341 SWAP.HIVE/24h FEASIBLE · CENT spread 2.3529% fee 0bps pond 88.75965397 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.0643% fee 0bps pond 15.36585956 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.