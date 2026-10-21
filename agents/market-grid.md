# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T23:53:31.239Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05110471957118578 | 0.05126094963923495 | 0.3052 | 1.627 | 10 | 0.00020473 | 5 |
| SBD/STEEM (internal steem) | 0.10103051121438675 | 0.10259567046270647 | 1.5373 | 0.965 | 10 | 0.00040725 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1893% fee 0bps pond 260.47079375 SWAP.HIVE/24h thin · SWAP.LTC spread 0.5303% fee 0bps pond 7310.29503963 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.0444% fee 0bps pond 752.81654745 SWAP.HIVE/24h thin · CENT spread 0.98% fee 0bps pond 41.89920731 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0051% fee 0bps pond 52.64328577 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.