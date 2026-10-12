# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-12T21:37:39.732Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05402208201892744 | 0.05414415804908165 | 0.2257 | -3.574 | 10 | 0.00038661 | 5 |
| SBD/STEEM (internal steem) | 0.10003000900270081 | 0.1008 | 0.7668 | 0.13 | 10 | 0.00040166 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.8025% fee 0bps pond 425.30751849 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2335% fee 0bps pond 6979.19476237 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1852% fee 0bps pond 287.64623661 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8572% fee 0bps pond 140.17954637 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.778% fee 0bps pond 5.84562117 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.