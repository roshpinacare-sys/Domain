# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-18T09:55:44.604Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0391 | 0.03911015428776462 | 0.026 | 1.07 | 10 | 0.00015642 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5477% fee 0bps pond 582.54708372 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0307% fee 0bps pond 13368.77851836 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0849% fee 0bps pond 706.27203166 SWAP.HIVE/24h FEASIBLE · CENT spread 4.8649% fee 0bps pond 102.43107426 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 12.48028591 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.