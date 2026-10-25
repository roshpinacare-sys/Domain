# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-25T18:31:26.455Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0495555730354755 | 0.04967 | 0.2306 | 3.107 | 10 | 0.0003083 | 5 |
| SBD/STEEM (internal steem) | 0.10205891669306304 | 0.10277656636138974 | 0.7007 | 0 | 10 | 0.00040967 | 1 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6014% fee 0bps pond 1409.24312131 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.0583% fee 0bps pond 11553.92404761 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.6118% fee 0bps pond 1615.42909596 SWAP.HIVE/24h FEASIBLE · CENT spread 1.85% fee 0bps pond 139.75870859 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.8063% fee 0bps pond 55.3501112 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.