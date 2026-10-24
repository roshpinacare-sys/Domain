# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T23:41:12.948Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04910915720539993 | 0.0492 | 0.1848 | -0.427 | 10 | 0.00019662 | 7 |
| SBD/STEEM (internal steem) | 0.10206804536357572 | 0.10322047894302229 | 1.1227 | -0.055 | 10 | 0.00041058 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8715% fee 0bps pond 246.83619389 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.593% fee 0bps pond 7108.33241317 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.1363% fee 0bps pond 118.11197959 SWAP.HIVE/24h thin · CENT spread 1.7527% fee 0bps pond 107.53423927 SWAP.HIVE/24h FEASIBLE · WAIV spread 7.2489% fee 0bps pond 28.62490658 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.