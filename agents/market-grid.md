# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-08T21:17:29.004Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04251535725832525 | 0.04259998460195524 | 0.1989 | -3.226 | 10 | 0.00027458 | 5 |
| SBD/STEEM (internal steem) | 0.10230073952341824 | 0.10310179117518567 | 0.78 | -0.05 | 10 | 0.00041081 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.0178% fee 0bps pond 337.87966107 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1667% fee 0bps pond 4532.74068885 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0679% fee 0bps pond 2575.70109986 SWAP.HIVE/24h FEASIBLE · CENT spread 2.6662% fee 0bps pond 123.38320647 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4107% fee 0bps pond 3.10057885 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.