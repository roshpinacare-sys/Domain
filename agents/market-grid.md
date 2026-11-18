# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-18T19:10:46.916Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03780093951849677 | 0.03788325471698113 | 0.2175 | -0.183 | 10 | 0.00015137 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.352% fee 0bps pond 492.52253008 SWAP.HIVE/24h thin · SWAP.LTC spread 0.4186% fee 0bps pond 4776.87445124 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.7673% fee 0bps pond 215.2199603 SWAP.HIVE/24h FEASIBLE · CENT spread 9.5112% fee 0bps pond 95.59593239 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 12.3004204 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.