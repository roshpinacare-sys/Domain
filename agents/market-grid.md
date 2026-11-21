# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-21T01:47:36.482Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0363 | 0.03630766577083368 | 0.0211 | -2.001 | 10 | 0.00014529 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 3.4814% fee 0bps pond 403.66816266 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0449% fee 0bps pond 4885.46074402 SWAP.HIVE/24h thin · SWAP.DOGE spread 10.8333% fee 0bps pond 905.88293033 SWAP.HIVE/24h FEASIBLE · CENT spread 4.7038% fee 0bps pond 130.31138727 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.1365% fee 0bps pond 17.5479182 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.