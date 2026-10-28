# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-28T05:32:32.695Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04910213243546577 | 0.04919954259576901 | 0.1982 | 4.71 | 10 | 0.00046303 | 5 |
| SBD/STEEM (internal steem) | 0.1013510356246762 | 0.10236220472440945 | 0.9927 | 0 | 10 | 0.00040743 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4063% fee 0bps pond 132.84028681 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0237% fee 0bps pond 12944.17294877 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6807% fee 0bps pond 8.28068899 SWAP.HIVE/24h FEASIBLE · CENT spread 1.5772% fee 0bps pond 40.1149077 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1351% fee 0bps pond 4.4992844 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.