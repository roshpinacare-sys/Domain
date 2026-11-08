# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-08T13:52:43.905Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04314421983197302 | 0.04317171808245233 | 0.0637 | -2.858 | 10 | 0.00024667 | 5 |
| SBD/STEEM (internal steem) | 0.10222503088643183 | 0.10299387354063114 | 0.7493 | -0.053 | 10 | 0.00041044 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.7881% fee 0bps pond 389.74307036 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1123% fee 0bps pond 5019.04801501 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.3573% fee 0bps pond 2294.84014574 SWAP.HIVE/24h FEASIBLE · CENT spread 1.352% fee 0bps pond 166.38263 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4107% fee 0bps pond 2.29613358 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.