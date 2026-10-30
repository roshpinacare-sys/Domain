# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-30T10:27:45.990Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04706322374851775 | 0.04711 | 0.0993 | -2.388 | 10 | 0.00022493 | 5 |
| SBD/STEEM (internal steem) | 0.10143 | 0.10433117970806413 | 2.8199 | 0 | 10 | 0.00041152 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1987% fee 0bps pond 976.80197082 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0396% fee 0bps pond 5323.38686698 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.468% fee 0bps pond 2239.95988435 SWAP.HIVE/24h FEASIBLE · CENT spread 1.9542% fee 0bps pond 78.00801407 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2028% fee 0bps pond 1.96572268 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.