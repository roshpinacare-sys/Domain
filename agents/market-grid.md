# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T20:21:24.428Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04962962962962963 | 0.04968943795623553 | 0.1204 | 0.82 | 10 | 0.00019864 | 5 |
| SBD/STEEM (internal steem) | 0.10392609699769054 | 0.10413559322033898 | 0.2014 | 0 | 10 | 0.00041612 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.467% fee 0bps pond 1010.67292474 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2165% fee 0bps pond 5731.11770789 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.7578% fee 0bps pond 3580.86166964 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8535% fee 0bps pond 21.08128056 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3194% fee 0bps pond 10.19557656 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.