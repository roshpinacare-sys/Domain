# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-28T06:55:05.460Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04910379324718633 | 0.04921037789058093 | 0.2168 | 2.436 | 10 | 0.00023952 | 5 |
| SBD/STEEM (internal steem) | 0.1013510356246762 | 0.10236220472440945 | 0.9927 | 0 | 10 | 0.00040743 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4063% fee 0bps pond 132.84028681 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0118% fee 0bps pond 13338.01571024 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.2576% fee 0bps pond 25.83877549 SWAP.HIVE/24h FEASIBLE · CENT spread 1.5772% fee 0bps pond 40.1149077 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1351% fee 0bps pond 2.5094598 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.