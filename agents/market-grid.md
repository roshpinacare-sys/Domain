# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-28T10:00:28.776Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04913678618857902 | 0.04921615201900238 | 0.1614 | 2.536 | 10 | 0.0002494 | 5 |
| SBD/STEEM (internal steem) | 0.1013510356246762 | 0.10241129032258064 | 1.0407 | 0 | 10 | 0.00040752 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8715% fee 0bps pond 103.73046481 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2516% fee 0bps pond 13059.16343853 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6807% fee 0bps pond 59.11369078 SWAP.HIVE/24h FEASIBLE · CENT spread 1.2495% fee 0bps pond 60.59337494 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.187% fee 0bps pond 3.33138403 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.