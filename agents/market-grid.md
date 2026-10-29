# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T20:24:13.977Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04825 | 0.04834100650896968 | 0.1884 | -1.819 | 10 | 0.00019318 | 5 |
| SBD/STEEM (internal steem) | 0.10142 | 0.10433117970806413 | 2.8298 | 0 | 10 | 0.0004115 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5178% fee 0bps pond 1194.17610314 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1397% fee 0bps pond 3335.71074583 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0794% fee 0bps pond 49.24949152 SWAP.HIVE/24h thin · CENT spread 0.6813% fee 0bps pond 102.19581709 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2132% fee 0bps pond 1.70043694 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.