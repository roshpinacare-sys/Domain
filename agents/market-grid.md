# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T16:56:06.163Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04914 | 0.04930165930524054 | 0.3284 | 0.5 | 10 | 0.00019688 | 5 |
| SBD/STEEM (internal steem) | 0.10140501226743205 | 0.10293432696786213 | 1.4968 | 0 | 10 | 0.00040868 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1928% fee 0bps pond 1494.27836858 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0311% fee 0bps pond 8238.65722649 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0794% fee 0bps pond 49.24949152 SWAP.HIVE/24h thin · CENT spread 0.6909% fee 0bps pond 101.98815698 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2132% fee 0bps pond 0.96034986 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.