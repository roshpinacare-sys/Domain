# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-09T19:45:17.262Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04355953962927093 | 0.04357431248571646 | 0.0339 | 1.464 | 10 | 0.00017427 | 5 |
| SBD/STEEM (internal steem) | 0.102232 | 0.10376076121431808 | 1.4843 | 0.11 | 10 | 0.00041199 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8254% fee 0bps pond 344.09518862 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1649% fee 0bps pond 11941.33576891 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.6702% fee 0bps pond 1400.10574631 SWAP.HIVE/24h FEASIBLE · CENT spread 0.9682% fee 0bps pond 120.76362136 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5275% fee 0bps pond 30.28740592 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.