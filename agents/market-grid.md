# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T05:00:39.996Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0496997369596506 | 0.04977175998412244 | 0.1448 | 0.4 | 10 | 0.00019894 | 5 |
| SBD/STEEM (internal steem) | 0.1034917521801562 | 0.10368066355624676 | 0.1824 | -0.012 | 10 | 0.00041434 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7874% fee 0bps pond 1018.45031059 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.5565% fee 0bps pond 8025.80686033 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.0594% fee 0bps pond 3929.57400402 SWAP.HIVE/24h FEASIBLE · CENT spread 0.4346% fee 0bps pond 21.30931384 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3969% fee 0bps pond 15.96542034 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.