# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T21:39:11.031Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04926330062901046 | 0.04933557354513517 | 0.1466 | 0.459 | 10 | 0.0001972 | 6 |
| SBD/STEEM (internal steem) | 0.10383137784238397 | 0.1039650327817671 | 0.1286 | 0 | 10 | 0.00041559 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.7834% fee 0bps pond 1029.32857763 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.564% fee 0bps pond 6483.91011856 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.0544% fee 0bps pond 3921.11279991 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8535% fee 0bps pond 21.08128056 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3194% fee 0bps pond 10.19168962 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.