# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-17T17:46:38.665Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0381 | 0.0381849188107066 | 0.2226 | -1.565 | 10 | 0.00015257 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.22% fee 0bps pond 297.91908632 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0775% fee 0bps pond 12606.08300314 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9208% fee 0bps pond 642.11933106 SWAP.HIVE/24h FEASIBLE · CENT spread 4.8185% fee 0bps pond 161.07774388 SWAP.HIVE/24h FEASIBLE · WAIV spread 10.1169% fee 0bps pond 0.50504983 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.