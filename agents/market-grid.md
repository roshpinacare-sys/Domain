# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-17T16:04:43.700Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03834417983742163 | 0.0384903994703156 | 0.3806 | -0.18 | 10 | 0.00015367 | 1 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1579% fee 0bps pond 413.42805829 SWAP.HIVE/24h thin · SWAP.LTC spread 0.7688% fee 0bps pond 12640.09555888 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.9208% fee 0bps pond 877.14451629 SWAP.HIVE/24h FEASIBLE · CENT spread 7.3415% fee 0bps pond 161.07774388 SWAP.HIVE/24h FEASIBLE · WAIV spread 10.1618% fee 0bps pond 0.49396589 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.