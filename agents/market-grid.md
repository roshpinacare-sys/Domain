# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T05:41:05.019Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0491 | 0.04911472625114334 | 0.03 | -0.572 | 10 | 0.00019643 | 5 |
| SBD/STEEM (internal steem) | 0.0981520416067279 | 0.10013697983090077 | 2.0021 | 0 | 10 | 0.00039658 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1821% fee 0bps pond 408.48532716 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3053% fee 0bps pond 7107.14664343 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0344% fee 0bps pond 820.28778681 SWAP.HIVE/24h thin · CENT spread 0.4398% fee 0bps pond 66.15198431 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1279% fee 0bps pond 179.61142886 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.