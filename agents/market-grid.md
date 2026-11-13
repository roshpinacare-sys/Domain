# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-13T06:43:59.450Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04231838536471487 | 0.04242071313384698 | 0.2415 | -0.672 | 10 | 0.00016948 | 5 |
| SBD/STEEM (internal steem) | 0.102326 | 0.10266315681515162 | 0.329 | 0 | 10 | 0.00040998 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3375% fee 0bps pond 1102.6482635 SWAP.HIVE/24h thin · SWAP.LTC spread 1.5164% fee 0bps pond 20831.9399373 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.0914% fee 0bps pond 230.02818975 SWAP.HIVE/24h FEASIBLE · CENT spread 2.1213% fee 0bps pond 47.49733201 SWAP.HIVE/24h FEASIBLE · WAIV spread 6.3093% fee 0bps pond 5.42151919 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.