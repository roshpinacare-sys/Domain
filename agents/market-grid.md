# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-14T16:38:36.532Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05185 | 0.05190194420963651 | 0.1001 | -1.939 | 10 | 0.0002075 | 5 |
| SBD/STEEM (internal steem) | 0.10005500663408541 | 0.10135957792207792 | 1.2954 | 0.109 | 10 | 0.00040283 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.418% fee 0bps pond 201.44093975 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.6915% fee 0bps pond 5699.63221054 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.1704% fee 0bps pond 10104.39936827 SWAP.HIVE/24h FEASIBLE · CENT spread 0.7555% fee 0bps pond 55.41407028 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1664% fee 0bps pond 1.66125415 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.