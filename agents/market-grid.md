# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T10:21:17.018Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05197 | 0.05206 | 0.173 | -2.265 | 10 | 0.00023559 | 5 |
| SBD/STEEM (internal steem) | 0.1005002857465932 | 0.10402567501569804 | 3.4474 | 0 | 10 | 0.00040905 | 9 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5124% fee 0bps pond 909.63372917 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.035% fee 0bps pond 6347.1721116 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.7857% fee 0bps pond 1554.55789431 SWAP.HIVE/24h FEASIBLE · CENT spread 2.4018% fee 0bps pond 55.858462 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2926% fee 0bps pond 2.04496831 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.