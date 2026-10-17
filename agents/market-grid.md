# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-17T22:01:22.412Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05154234436343242 | 0.05169565272225095 | 0.297 | -1.931 | 10 | 0.00020648 | 5 |
| SBD/STEEM (internal steem) | 0.1002217909620183 | 0.10052285376960701 | 0.2999 | 0.005 | 10 | 0.00040149 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.8186% fee 0bps pond 94.56918293 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4192% fee 0bps pond 6726.16027224 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.0541% fee 0bps pond 8.24058285 SWAP.HIVE/24h FEASIBLE · CENT spread 3.5696% fee 0bps pond 25.7282826 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2028% fee 0bps pond 6.34963719 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.