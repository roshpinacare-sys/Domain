# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-04T06:58:46.681Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04460195766430397 | 0.04469902655453281 | 0.2174 | 0.196 | 10 | 0.0001786 | 6 |
| SBD/STEEM (internal steem) | 0.10318285833159975 | 0.10328638497652583 | 0.1003 | 0 | 10 | 0.00041294 | 1 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2705% fee 0bps pond 355.81602844 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0276% fee 0bps pond 14810.23572249 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.9754% fee 0bps pond 386.89641349 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8758% fee 0bps pond 57.41645502 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1261% fee 0bps pond 26.71783127 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.