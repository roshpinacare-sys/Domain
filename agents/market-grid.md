# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-13T08:40:58.819Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04314189321634338 | 0.04315269414852555 | 0.025 | 0.234 | 10 | 0.00017259 | 7 |
| SBD/STEEM (internal steem) | 0.10233104359869549 | 0.10246884689639034 | 0.1346 | 0 | 10 | 0.0004096 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1035% fee 0bps pond 1112.11809978 SWAP.HIVE/24h thin · SWAP.LTC spread 0.4016% fee 0bps pond 23060.36946935 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.0914% fee 0bps pond 230.02818975 SWAP.HIVE/24h FEASIBLE · CENT spread 6.394% fee 0bps pond 47.50270006 SWAP.HIVE/24h FEASIBLE · WAIV spread 6.1582% fee 0bps pond 5.33651091 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.