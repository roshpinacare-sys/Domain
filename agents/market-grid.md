# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-16T06:57:25.221Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03898561695685087 | 0.03904379535157833 | 0.1491 | 0.19 | 10 | 0.00015606 | 5 |
| SBD/STEEM (internal steem) | 0.10280956157244817 | 0.10342316096139839 | 0.5951 | 0 | 10 | 0.00041247 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5727% fee 0bps pond 276.08271606 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0529% fee 0bps pond 2292.88278188 SWAP.HIVE/24h thin · SWAP.DOGE spread 3.2929% fee 0bps pond 785.28047745 SWAP.HIVE/24h FEASIBLE · CENT spread 1.033% fee 0bps pond 475.75349657 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.0643% fee 0bps pond 15.36055511 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.