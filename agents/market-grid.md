# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-03T16:45:48.525Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04511336982017201 | 0.04527530305243172 | 0.3583 | -0.998 | 10 | 0.00018078 | 5 |
| SBD/STEEM (internal steem) | 0.10228136882129278 | 0.10378744592278182 | 1.4617 | 0.141 | 10 | 0.00041214 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6024% fee 0bps pond 1042.50524279 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.591% fee 0bps pond 13298.72627188 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.5545% fee 0bps pond 216.66915623 SWAP.HIVE/24h FEASIBLE · CENT spread 0.6972% fee 0bps pond 81.66432876 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4925% fee 0bps pond 25.86400785 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.