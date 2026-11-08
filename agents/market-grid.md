# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-08T06:40:46.529Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04354596032051506 | 0.04361011706192758 | 0.1472 | -2.728 | 10 | 0.00023772 | 5 |
| SBD/STEEM (internal steem) | 0.10251450676982592 | 0.10303203661327232 | 0.5036 | -0.053 | 10 | 0.00041109 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.278% fee 0bps pond 303.30987131 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0967% fee 0bps pond 5857.99342351 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.3573% fee 0bps pond 2066.22230622 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3999% fee 0bps pond 106.50153707 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4107% fee 0bps pond 3.13769315 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.