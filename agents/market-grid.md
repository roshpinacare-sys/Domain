# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T15:54:47.733Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05185235262303948 | 0.05198776758409786 | 0.2608 | 0.74 | 10 | 0.00020768 | 5 |
| SBD/STEEM (internal steem) | 0.10263779123473263 | 0.1044776119402985 | 1.7766 | 0 | 10 | 0.00041423 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.2882% fee 0bps pond 928.28609075 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.042% fee 0bps pond 5975.85571455 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.005% fee 0bps pond 1750.5103837 SWAP.HIVE/24h FEASIBLE · CENT spread 1.769% fee 0bps pond 102.19909089 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1717% fee 0bps pond 3.91932387 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.