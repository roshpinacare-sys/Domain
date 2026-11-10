# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-10T19:46:58.920Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0429806555949493 | 0.04300234558248632 | 0.0505 | -1.323 | 10 | 0.00017197 | 5 |
| SBD/STEEM (internal steem) | 0.1023020507945131 | 0.10317460317460317 | 0.8493 | 0 | 10 | 0.00041095 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7545% fee 0bps pond 354.57240587 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1451% fee 0bps pond 13891.11915003 SWAP.HIVE/24h thin · SWAP.DOGE spread 3.5034% fee 0bps pond 291.35855571 SWAP.HIVE/24h FEASIBLE · CENT spread 1.0537% fee 0bps pond 158.98613104 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.156% fee 0bps pond 21.45653685 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.