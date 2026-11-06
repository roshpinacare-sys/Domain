# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-06T11:04:16.044Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04411764705882353 | 0.04417 | 0.1186 | -4.041 | 10 | 0.00035676 | 5 |
| SBD/STEEM (internal steem) | 0.10218818380743983 | 0.10396863117870722 | 1.7273 | 0 | 10 | 0.00041231 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.645% fee 0bps pond 512.68588838 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1911% fee 0bps pond 11678.76066542 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9689% fee 0bps pond 2026.01996188 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8427% fee 0bps pond 23.11355389 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.5092% fee 0bps pond 8.48709591 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.