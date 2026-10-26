# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-26T23:54:54.060Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04833523652482807 | 0.04850430961635964 | 0.3492 | -1.273 | 10 | 0.00019368 | 6 |
| SBD/STEEM (internal steem) | 0.102048 | 0.10241129032258064 | 0.3554 | 0 | 10 | 0.00040892 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.132% fee 0bps pond 289.76198121 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0234% fee 0bps pond 13641.31655778 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.3132% fee 0bps pond 483.85302582 SWAP.HIVE/24h thin · CENT spread 2.2472% fee 0bps pond 84.19871079 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.7667% fee 0bps pond 5.3453761 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.