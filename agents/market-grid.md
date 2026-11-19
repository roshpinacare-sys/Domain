# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-19T20:57:37.488Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03721371530980681 | 0.03731377918039634 | 0.2685 | -0.155 | 10 | 0.00014905 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.039% fee 0bps pond 628.88239871 SWAP.HIVE/24h thin · SWAP.LTC spread 0.496% fee 0bps pond 106572.63831058 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 4.5603% fee 0bps pond 397.24528745 SWAP.HIVE/24h FEASIBLE · CENT spread 7.4673% fee 0bps pond 84.4920693 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6292% fee 0bps pond 5.58788967 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.