# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T13:42:56.500Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04903669724770642 | 0.04936220594962462 | 0.6616 | -2.649 | 10 | 0.00026067 | 5 |
| SBD/STEEM (internal steem) | 0.10157531998687233 | 0.10222203518222372 | 0.6347 | -0.024 | 10 | 0.00040759 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5708% fee 0bps pond 384.38094178 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4426% fee 0bps pond 14769.92951993 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.212% fee 0bps pond 1184.37564975 SWAP.HIVE/24h thin · CENT spread 0.6927% fee 0bps pond 120.20691218 SWAP.HIVE/24h FEASIBLE · WAIV spread 195.1864% fee 0bps pond 170.36383551 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.