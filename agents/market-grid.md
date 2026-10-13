# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T04:59:49.490Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05293028546534845 | 0.05339058575710929 | 0.8659 | -4.32 | 10 | 0.00045929 | 5 |
| SBD/STEEM (internal steem) | 0.10003514938488577 | 0.10158472165786266 | 1.5371 | 0.091 | 10 | 0.00040324 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8281% fee 0bps pond 497.65645545 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0961% fee 0bps pond 6820.841904 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5638% fee 0bps pond 286.22652215 SWAP.HIVE/24h FEASIBLE · CENT spread 0.1783% fee 0bps pond 130.20735424 SWAP.HIVE/24h thin · WAIV spread 0.7226% fee 0bps pond 7.71224896 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.