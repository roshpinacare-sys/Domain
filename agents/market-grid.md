# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T12:11:58.663Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05111139017958056 | 0.05120172555464256 | 0.1766 | -1.501 | 10 | 0.00020463 | 5 |
| SBD/STEEM (internal steem) | 0.10339162692103869 | 0.10341365461847389 | 0.0213 | 0 | 10 | 0.00041361 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5799% fee 0bps pond 505.21369825 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0409% fee 0bps pond 7490.85698928 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.995% fee 0bps pond 808.12812739 SWAP.HIVE/24h FEASIBLE · CENT spread 7.0812% fee 0bps pond 212.38130252 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1977% fee 0bps pond 5.69675048 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.