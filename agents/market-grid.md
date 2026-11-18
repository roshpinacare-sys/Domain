# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-18T18:19:55.771Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03791024298660504 | 0.03797735424432098 | 0.1769 | -0.93 | 10 | 0.00015178 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.437% fee 0bps pond 522.1687211 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.9266% fee 0bps pond 4724.45668384 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.7673% fee 0bps pond 215.2199603 SWAP.HIVE/24h FEASIBLE · CENT spread 9.5112% fee 0bps pond 95.59593239 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 12.3004204 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.