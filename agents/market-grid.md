# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-17T07:37:10.830Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03868390623357511 | 0.03876140692832462 | 0.2001 | 0.989 | 10 | 0.00015489 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.048% fee 0bps pond 442.49120934 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0566% fee 0bps pond 5700.63418784 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.2297% fee 0bps pond 510.93116401 SWAP.HIVE/24h thin · CENT spread 9.4659% fee 0bps pond 157.94285088 SWAP.HIVE/24h FEASIBLE · WAIV spread 10.1618% fee 0bps pond 0.06720494 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.