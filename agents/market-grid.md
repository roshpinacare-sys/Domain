# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-31T17:29:28.730Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0476 | 0.04760002299564826 | 0 | -0.452 | 10 | 0.0001904 | 5 |
| SBD/STEEM (internal steem) | 0.10371522149072021 | 0.10416 | 0.4279 | 0 | 10 | 0.00041575 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5083% fee 0bps pond 299.70729583 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1696% fee 0bps pond 3750.67388964 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1796% fee 0bps pond 232.0874649 SWAP.HIVE/24h FEASIBLE · CENT spread 1.349% fee 0bps pond 100.74313588 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4177% fee 0bps pond 5.26610202 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.