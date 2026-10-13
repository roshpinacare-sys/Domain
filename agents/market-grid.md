# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T11:02:40.106Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05249 | 0.05250245338567223 | 0.0237 | -5.16 | 10 | 0.00054176 | 10 |
| SBD/STEEM (internal steem) | 0.1001001001001001 | 0.1023541453428864 | 2.2267 | 0 | 10 | 0.00040491 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9595% fee 0bps pond 446.76951585 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2524% fee 0bps pond 6171.55390765 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1654% fee 0bps pond 343.31659343 SWAP.HIVE/24h FEASIBLE · CENT spread 0.6224% fee 0bps pond 127.40030812 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.7226% fee 0bps pond 7.65173519 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.