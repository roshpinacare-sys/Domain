# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-12T20:12:18.440Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05431656974886574 | 0.05442372070779531 | 0.1971 | -2.927 | 10 | 0.00031825 | 5 |
| SBD/STEEM (internal steem) | 0.10003000900270081 | 0.1008 | 0.7668 | 0.13 | 10 | 0.00040166 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5047% fee 0bps pond 465.30189692 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2823% fee 0bps pond 6466.41184491 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1852% fee 0bps pond 287.64623661 SWAP.HIVE/24h FEASIBLE · CENT spread 0.7586% fee 0bps pond 145.02339416 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.773% fee 0bps pond 5.18669305 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.