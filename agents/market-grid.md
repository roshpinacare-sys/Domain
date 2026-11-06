# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-06T21:34:47.067Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0445 | 0.04450010658708164 | 0.0002 | 2.197 | 10 | 0.00019552 | 6 |
| SBD/STEEM (internal steem) | 0.10242290748898679 | 0.10389021209028014 | 1.4224 | 0 | 10 | 0.00041263 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1978% fee 0bps pond 523.52064517 SWAP.HIVE/24h thin · SWAP.LTC spread 0.274% fee 0bps pond 7629.00979735 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.3258% fee 0bps pond 2093.60037599 SWAP.HIVE/24h thin · CENT spread 2.134% fee 0bps pond 76.87875142 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.5092% fee 0bps pond 1.75891658 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.