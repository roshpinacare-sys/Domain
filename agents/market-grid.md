# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T05:06:58.924Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05149999992198575 | 0.05158148925220696 | 0.1581 | -3.356 | 10 | 0.00034593 | 5 |
| SBD/STEEM (internal steem) | 0.10001116752141158 | 0.1005337147242474 | 0.5211 | -0.007 | 10 | 0.00040109 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7713% fee 0bps pond 922.98829765 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2154% fee 0bps pond 5950.13977207 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.7857% fee 0bps pond 1554.55789431 SWAP.HIVE/24h FEASIBLE · CENT spread 0.534% fee 0bps pond 32.01547148 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1664% fee 0bps pond 1.69087249 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.