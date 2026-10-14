# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-14T07:56:55.149Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05295 | 0.053 | 0.0944 | -1.195 | 10 | 0.0002119 | 5 |
| SBD/STEEM (internal steem) | 0.10005505092210294 | 0.10168973941368079 | 1.6206 | -1.239 | 10 | 0.00040349 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7853% fee 0bps pond 257.56106893 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.8764% fee 0bps pond 8032.98122303 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.1654% fee 0bps pond 10104.39936827 SWAP.HIVE/24h FEASIBLE · CENT spread 3.1715% fee 0bps pond 81.60337643 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1613% fee 0bps pond 2.80297504 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.