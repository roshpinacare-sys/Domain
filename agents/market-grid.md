# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T13:28:49.881Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05170916554827504 | 0.05180007475914467 | 0.1757 | -1.625 | 10 | 0.00020702 | 5 |
| SBD/STEEM (internal steem) | 0.1005002857465932 | 0.10212418300653595 | 1.6029 | 0 | 10 | 0.00040525 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6854% fee 0bps pond 863.57583186 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.273% fee 0bps pond 4474.69707905 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.1704% fee 0bps pond 1556.19789431 SWAP.HIVE/24h FEASIBLE · CENT spread 0.5424% fee 0bps pond 57.89708982 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1414% fee 0bps pond 4.2509093 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.