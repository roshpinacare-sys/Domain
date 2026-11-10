# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-10T14:54:43.239Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04340999862277923 | 0.04341666666666667 | 0.0154 | 82.36 | 10 | 0.00052096 | 5 |
| SBD/STEEM (internal steem) | 0.1023020507945131 | 0.10317460317460317 | 0.8493 | 0 | 10 | 0.00041095 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4269% fee 0bps pond 252.38169484 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0413% fee 0bps pond 12630.43982137 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6268% fee 0bps pond 14.63696298 SWAP.HIVE/24h FEASIBLE · CENT spread 5.2632% fee 0bps pond 166.62972467 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5543% fee 0bps pond 2.89809712 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.