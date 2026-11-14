# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-14T04:20:39.668Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04215972260443613 | 0.04223315013017067 | 0.174 | 1.373 | 10 | 0.00016879 | 5 |
| SBD/STEEM (internal steem) | 0.1025115492224608 | 0.10382327952421411 | 1.2715 | 0.235 | 10 | 0.00041267 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3131% fee 0bps pond 356.43171817 SWAP.HIVE/24h thin · SWAP.LTC spread 0.106% fee 0bps pond 7675.36965818 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.5698% fee 0bps pond 149.96254877 SWAP.HIVE/24h FEASIBLE · CENT spread 2.1213% fee 0bps pond 65.22462365 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.6475% fee 0bps pond 14.23374013 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.