# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-28T15:47:07.269Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04863171777118365 | 0.04873616388567652 | 0.2145 | 1.099 | 10 | 0.00019474 | 5 |
| SBD/STEEM (internal steem) | 0.1013510356246762 | 0.10241129032258064 | 1.0407 | 0 | 10 | 0.00040752 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5387% fee 0bps pond 144.63317963 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.7403% fee 0bps pond 14916.75559188 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.3035% fee 0bps pond 57.64565951 SWAP.HIVE/24h thin · CENT spread 2.5146% fee 0bps pond 99.08778335 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1608% fee 0bps pond 3.50094862 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.