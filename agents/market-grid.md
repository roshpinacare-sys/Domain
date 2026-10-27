# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-27T13:08:21.212Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04815294774421532 | 0.04822 | 0.1392 | 0.214 | 10 | 0.00019275 | 5 |
| SBD/STEEM (internal steem) | 0.10208248264597795 | 0.10241129032258064 | 0.3216 | 0 | 10 | 0.00040899 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0013% fee 0bps pond 158.62866201 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0738% fee 0bps pond 13394.07217404 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.3132% fee 0bps pond 91.04286594 SWAP.HIVE/24h thin · CENT spread 1.155% fee 0bps pond 52.55390681 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1872% fee 0bps pond 2.55212669 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.