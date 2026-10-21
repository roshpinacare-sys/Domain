# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T02:35:21.393Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05060523233112066 | 0.05072218460844053 | 0.2308 | 4.661 | 10 | 0.00047225 | 5 |
| SBD/STEEM (internal steem) | 0.1042375502629137 | 0.10430793777423215 | 0.0675 | 0 | 10 | 0.00041709 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2861% fee 0bps pond 249.51000689 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3582% fee 0bps pond 10624.499129 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0394% fee 0bps pond 508.3333457 SWAP.HIVE/24h FEASIBLE · CENT spread 2.2719% fee 0bps pond 103.81469323 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1297% fee 0bps pond 15.66774776 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.