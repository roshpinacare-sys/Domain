# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-19T19:35:05.300Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03761604550036864 | 0.03763049694590616 | 0.0384 | -0.089 | 10 | 0.00015049 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1296% fee 0bps pond 312.70930194 SWAP.HIVE/24h thin · SWAP.LTC spread 1.1683% fee 0bps pond 106540.47422265 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 4.5603% fee 0bps pond 397.24528745 SWAP.HIVE/24h FEASIBLE · CENT spread 7.4673% fee 0bps pond 84.4920693 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6292% fee 0bps pond 5.585173 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.