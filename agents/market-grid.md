# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-26T18:52:10.629Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0484102087448201 | 0.04846 | 0.1028 | -2.434 | 10 | 0.0002358 | 5 |
| SBD/STEEM (internal steem) | 0.102048 | 0.10241704219582139 | 0.361 | 0 | 10 | 0.00040893 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1591% fee 0bps pond 293.32490021 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0046% fee 0bps pond 10100.72948572 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.3132% fee 0bps pond 610.68662389 SWAP.HIVE/24h thin · CENT spread 1.8911% fee 0bps pond 65.20637004 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.7719% fee 0bps pond 5.5170676 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.