# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-13T09:42:34.635Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04301445285615967 | 0.04314382220203797 | 0.3003 | 0.222 | 10 | 0.00017232 | 5 |
| SBD/STEEM (internal steem) | 0.10233104359869549 | 0.10246884689639034 | 0.1346 | 0 | 10 | 0.0004096 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0068% fee 0bps pond 1116.30225613 SWAP.HIVE/24h thin · SWAP.LTC spread 0% fee 0bps pond 23222.63200572 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.0914% fee 0bps pond 230.02818975 SWAP.HIVE/24h FEASIBLE · CENT spread 6.394% fee 0bps pond 47.50270006 SWAP.HIVE/24h FEASIBLE · WAIV spread 6.1582% fee 0bps pond 5.33965127 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.