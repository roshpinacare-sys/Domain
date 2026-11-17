# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-17T04:10:04.429Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03885961862480276 | 0.038869657684563 | 0.0258 | 0.307 | 10 | 0.00015546 | 5 |
| SBD/STEEM (internal steem) | 0.10260004566336349 | 0.10319829424307037 | 0.5814 | 0 | 10 | 0.0004116 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0178% fee 0bps pond 476.24326263 SWAP.HIVE/24h thin · SWAP.LTC spread 2.5974% fee 0bps pond 5863.1374029 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.2788% fee 0bps pond 498.47052175 SWAP.HIVE/24h thin · CENT spread 10.6921% fee 0bps pond 140.90687457 SWAP.HIVE/24h FEASIBLE · WAIV spread 12.5794% fee 0bps pond 0.19738452 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.