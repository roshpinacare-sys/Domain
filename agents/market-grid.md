# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-18T08:49:21.270Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0391 | 0.03915045578423081 | 0.129 | -0.091 | 10 | 0.0001565 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7822% fee 0bps pond 572.82440295 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.123% fee 0bps pond 10580.99068187 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0849% fee 0bps pond 706.27203166 SWAP.HIVE/24h FEASIBLE · CENT spread 2.4026% fee 0bps pond 102.42920571 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 12.73056023 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.