# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-17T09:01:21.848Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03873746370269149 | 0.03879033453575135 | 0.1364 | -0.476 | 10 | 0.00015506 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4104% fee 0bps pond 458.95597088 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1586% fee 0bps pond 5721.90197719 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.2297% fee 0bps pond 510.93116401 SWAP.HIVE/24h thin · CENT spread 9.4659% fee 0bps pond 157.94285088 SWAP.HIVE/24h FEASIBLE · WAIV spread 10.1618% fee 0bps pond 0.06913374 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.