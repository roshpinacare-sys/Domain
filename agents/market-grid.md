# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T14:26:15.754Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05262108829978075 | 0.05374805778742953 | 2.119 | -1.443 | 10 | 0.00021274 | 2 |
| SBD/STEEM (internal steem) | 0.1029495990836197 | 0.10310154369069537 | 0.1475 | -0.017 | 10 | 0.0004121 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.438% fee 0bps pond 570.37217502 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.5472% fee 0bps pond 5773.64223781 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.1741% fee 0bps pond 343.31659343 SWAP.HIVE/24h FEASIBLE · CENT spread 0.6206% fee 0bps pond 127.3756093 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.7277% fee 0bps pond 8.30274657 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.