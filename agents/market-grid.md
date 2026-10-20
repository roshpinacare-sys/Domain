# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T10:46:37.515Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0491062149241322 | 0.0491616125579736 | 0.1127 | 0.492 | 10 | 0.00019654 | 5 |
| SBD/STEEM (internal steem) | 0.09990929705215419 | 0.0999501246882793 | 0.0409 | 0 | 10 | 0.00039972 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0174% fee 0bps pond 443.59589584 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0244% fee 0bps pond 11395.16703681 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0344% fee 0bps pond 820.28778681 SWAP.HIVE/24h thin · CENT spread 3.4915% fee 0bps pond 40.94243154 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5623% fee 0bps pond 169.97258133 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.