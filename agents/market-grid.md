# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T23:50:58.547Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05206500873850385 | 0.05216 | 0.1823 | 2.525 | 10 | 0.00026313 | 5 |
| SBD/STEEM (internal steem) | 0.10203589928924225 | 0.10432968179447052 | 2.223 | 0 | 10 | 0.00041273 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6042% fee 0bps pond 769.51152455 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.252% fee 0bps pond 8153.89094029 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.51% fee 0bps pond 1828.12500792 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3173% fee 0bps pond 112.67566148 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1768% fee 0bps pond 3.97032381 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.