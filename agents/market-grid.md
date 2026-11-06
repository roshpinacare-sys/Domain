# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-06T18:46:39.174Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04446448477561091 | 0.0445467369515183 | 0.1848 | 3.756 | 10 | 0.00033433 | 6 |
| SBD/STEEM (internal steem) | 0.10242290748898679 | 0.10389021209028014 | 1.4224 | 0 | 10 | 0.00041263 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0525% fee 0bps pond 535.92629678 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1369% fee 0bps pond 7623.44586051 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0173% fee 0bps pond 2194.85300733 SWAP.HIVE/24h thin · CENT spread 2.134% fee 0bps pond 76.72117495 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.5092% fee 0bps pond 9.69301347 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.