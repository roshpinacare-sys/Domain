# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-09T03:55:35.567Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04241997338968459 | 0.042691409119065 | 0.6378 | -3.131 | 10 | 0.00026651 | 5 |
| SBD/STEEM (internal steem) | 0.10231721034870642 | 0.10309645272274291 | 0.7587 | 0 | 10 | 0.00041083 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.787% fee 0bps pond 324.65438521 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.139% fee 0bps pond 5004.29691428 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.6702% fee 0bps pond 1391.87309878 SWAP.HIVE/24h FEASIBLE · CENT spread 0.4254% fee 0bps pond 75.88687925 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5968% fee 0bps pond 32.27144971 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.