# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-02T02:35:40.478Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04636591478696742 | 0.04640352307943239 | 0.0811 | -1.777 | 10 | 0.00018554 | 5 |
| SBD/STEEM (internal steem) | 0.10148 | 0.10331684372719163 | 1.7938 | 0.498 | 10 | 0.00040959 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.0872% fee 0bps pond 1045.84069947 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0483% fee 0bps pond 22344.27180356 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.7255% fee 0bps pond 225.64862448 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3616% fee 0bps pond 51.7049541 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.3709% fee 0bps pond 5.55932284 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.