# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T04:56:56.543Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05259779624148629 | 0.05259838908475937 | 0.0011 | 1.851 | 10 | 0.00021039 | 7 |
| SBD/STEEM (internal steem) | 0.10255568773844198 | 0.10277777777777777 | 0.2163 | 0.011 | 10 | 0.00041067 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0747% fee 0bps pond 249.90438623 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3328% fee 0bps pond 8208.57355435 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1754% fee 0bps pond 301.98105516 SWAP.HIVE/24h FEASIBLE · CENT spread 0.3273% fee 0bps pond 108.13813985 SWAP.HIVE/24h thin · WAIV spread 0.1919% fee 0bps pond 10.63449036 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.