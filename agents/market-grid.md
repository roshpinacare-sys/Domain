# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-02T13:25:05.797Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04570431748800698 | 0.0458201666187877 | 0.2532 | -2.018 | 10 | 0.00018472 | 5 |
| SBD/STEEM (internal steem) | 0.10168463903685418 | 0.10331684372719163 | 1.5924 | 0.498 | 10 | 0.00041 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5807% fee 0bps pond 1039.04584212 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0051% fee 0bps pond 5434.6499326 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9553% fee 0bps pond 324.78262413 SWAP.HIVE/24h FEASIBLE · CENT spread 2.7706% fee 0bps pond 67.94428238 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4137% fee 0bps pond 3.69110013 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.