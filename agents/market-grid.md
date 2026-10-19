# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T05:17:04.061Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04943279724296382 | 0.04964079613708633 | 0.4199 | -4.789 | 10 | 0.00047444 | 5 |
| SBD/STEEM (internal steem) | 0.10143016533116948 | 0.10166377462488517 | 0.2301 | 1.424 | 10 | 0.00040619 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2795% fee 0bps pond 555.03389944 SWAP.HIVE/24h thin · SWAP.LTC spread 0.2065% fee 0bps pond 14052.66248111 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.212% fee 0bps pond 1939.16724462 SWAP.HIVE/24h thin · CENT spread 0.5477% fee 0bps pond 351.69686757 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.4709% fee 0bps pond 3.24470027 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.