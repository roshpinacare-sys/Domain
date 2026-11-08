# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-08T15:21:46.765Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04320502749410841 | 0.0433825840930525 | 0.4101 | -0.829 | 10 | 0.00017318 | 5 |
| SBD/STEEM (internal steem) | 0.10222503088643183 | 0.10299387354063114 | 0.7493 | -0.053 | 10 | 0.00041044 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 2.3154% fee 0bps pond 311.95367279 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1167% fee 0bps pond 5194.52251928 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.9651% fee 0bps pond 2865.19897426 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3536% fee 0bps pond 166.76555108 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4107% fee 0bps pond 2.34202753 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.