# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-05T01:46:03.511Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04559173947577443 | 0.04587378640776699 | 0.6167 | 3.152 | 10 | 0.00028826 | 5 |
| SBD/STEEM (internal steem) | 0.1022961922854547 | 0.10366826156299841 | 1.3323 | 0.012 | 10 | 0.00041193 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2343% fee 0bps pond 705.47239024 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0176% fee 0bps pond 29159.29893237 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.9654% fee 0bps pond 1626.5873762 SWAP.HIVE/24h FEASIBLE · CENT spread 2.3771% fee 0bps pond 174.07807548 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.8487% fee 0bps pond 24.0928956 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.