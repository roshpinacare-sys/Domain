# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-10T09:59:35.307Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0551 | 0.05519886477448357 | 0.1793 | 0.848 | 10 | 0.0002206 | 5 |
| SBD/STEEM (internal steem) | 0.10005 | 0.10192640913260625 | 1.858 | 0 | 10 | 0.00040395 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7086% fee 0bps pond 213.30327216 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1366% fee 0bps pond 14048.11654755 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.1517% fee 0bps pond 2749.82067084 SWAP.HIVE/24h FEASIBLE · CENT spread 0.1064% fee 0bps pond 141.28119453 SWAP.HIVE/24h thin · WAIV spread 0.2572% fee 0bps pond 19.7992442 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.