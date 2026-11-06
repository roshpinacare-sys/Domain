# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-06T08:50:49.445Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04398211160801089 | 0.04404 | 0.1315 | -4.004 | 10 | 0.0003524 | 5 |
| SBD/STEEM (internal steem) | 0.10217503135810074 | 0.10396863117870722 | 1.7401 | 0 | 10 | 0.00041229 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2542% fee 0bps pond 432.26908096 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0254% fee 0bps pond 9600.22214533 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9689% fee 0bps pond 2526.65159613 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8427% fee 0bps pond 21.06847648 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.5092% fee 0bps pond 8.48558068 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.