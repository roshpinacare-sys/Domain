# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-13T23:41:14.311Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0427 | 0.04273 | 0.0702 | -1.556 | 10 | 0.00017086 | 5 |
| SBD/STEEM (internal steem) | 0.10627935293094451 | 0.10689679834076335 | 0.5793 | 0 | 10 | 0.00042635 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6717% fee 0bps pond 404.09644081 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0012% fee 0bps pond 8253.91556532 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.5698% fee 0bps pond 214.90796367 SWAP.HIVE/24h FEASIBLE · CENT spread 2.1462% fee 0bps pond 49.44105816 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.9088% fee 0bps pond 15.80674273 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.