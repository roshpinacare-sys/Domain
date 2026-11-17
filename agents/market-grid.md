# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-17T19:44:02.894Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03797992116553061 | 0.03798834448521476 | 0.0222 | -1.853 | 10 | 0.00015194 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4928% fee 0bps pond 341.86891698 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1043% fee 0bps pond 11781.31036048 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0175% fee 0bps pond 679.80515779 SWAP.HIVE/24h FEASIBLE · CENT spread 4.8185% fee 0bps pond 88.12944917 SWAP.HIVE/24h FEASIBLE · WAIV spread 10.1169% fee 0bps pond 0.50297975 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.