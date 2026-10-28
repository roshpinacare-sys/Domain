# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-28T13:44:15.528Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04899056018741817 | 0.04907481898632341 | 0.1718 | 2.103 | 10 | 0.00020625 | 5 |
| SBD/STEEM (internal steem) | 0.1013510356246762 | 0.10241129032258064 | 1.0407 | 0 | 10 | 0.00040752 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.4214% fee 0bps pond 107.68523952 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0261% fee 0bps pond 11863.65558594 SWAP.HIVE/24h thin · SWAP.DOGE spread 0% fee 0bps pond 57.59439029 SWAP.HIVE/24h thin · CENT spread 1.2495% fee 0bps pond 58.87892623 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1608% fee 0bps pond 3.49898767 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.