# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T10:11:03.757Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05287212546906572 | 0.0533 | 0.806 | 2.065 | 10 | 0.0002192 | 5 |
| SBD/STEEM (internal steem) | 0.10295480284155256 | 0.1042036090539272 | 1.2057 | 0 | 10 | 0.00041432 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0014% fee 0bps pond 263.82094518 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0753% fee 0bps pond 10421.61326149 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1754% fee 0bps pond 301.98105516 SWAP.HIVE/24h FEASIBLE · CENT spread 1.7604% fee 0bps pond 77.41712278 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0051% fee 0bps pond 9.64081212 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.