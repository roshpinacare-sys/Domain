# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-21T09:21:45.287Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0348 | 0.036 | 3.3898 | -5.627 | 10 | 0.0003984 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 3.0888% fee 0bps pond 527.12858059 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.7094% fee 0bps pond 24071.85861492 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.8927% fee 0bps pond 1118.91876877 SWAP.HIVE/24h FEASIBLE · CENT spread 6.2234% fee 0bps pond 128.2816619 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.1315% fee 0bps pond 17.10352229 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.