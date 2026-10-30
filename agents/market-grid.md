# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-30T16:43:50.032Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04730163829103758 | 0.04735636482632883 | 0.1156 | -4.476 | 10 | 0.00042373 | 5 |
| SBD/STEEM (internal steem) | 0.10143 | 0.10433117970806413 | 2.8199 | 0 | 10 | 0.00041152 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1385% fee 0bps pond 458.76877859 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1681% fee 0bps pond 7780.5036318 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8135% fee 0bps pond 2463.75375044 SWAP.HIVE/24h FEASIBLE · CENT spread 3.3333% fee 0bps pond 80.59190154 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2705% fee 0bps pond 27.14224457 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.