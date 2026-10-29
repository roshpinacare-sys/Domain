# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T18:53:26.483Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0488 | 0.0488000535265925 | 0.0001 | -0.149 | 10 | 0.0001952 | 5 |
| SBD/STEEM (internal steem) | 0.10141 | 0.10293432696786213 | 1.4919 | 0 | 10 | 0.00040869 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.066% fee 0bps pond 1494.27836858 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0311% fee 0bps pond 4137.12737139 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.7605% fee 0bps pond 49.24949152 SWAP.HIVE/24h FEASIBLE · CENT spread 2.716% fee 0bps pond 102.18494686 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2132% fee 0bps pond 1.33287268 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.