# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T02:28:34.125Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05149999992198575 | 0.05165543641288532 | 0.3014 | -2.92 | 10 | 0.00030126 | 5 |
| SBD/STEEM (internal steem) | 0.100061 | 0.10032441483238567 | 0.2629 | 0 | 10 | 0.00040077 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7227% fee 0bps pond 887.41223005 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4312% fee 0bps pond 5594.52332884 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.9446% fee 0bps pond 1049.85512223 SWAP.HIVE/24h FEASIBLE · CENT spread 1.0574% fee 0bps pond 55.41407028 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1664% fee 0bps pond 1.57667217 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.