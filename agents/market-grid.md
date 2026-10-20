# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T12:06:30.826Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04924587863907401 | 0.04945454545454545 | 0.4228 | 1.062 | 10 | 0.0001974 | 5 |
| SBD/STEEM (internal steem) | 0.10112348188372822 | 0.10114942528735632 | 0.0257 | 0 | 10 | 0.00040455 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8829% fee 0bps pond 457.36567674 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.0071% fee 0bps pond 12337.11474758 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.0344% fee 0bps pond 807.91943815 SWAP.HIVE/24h thin · CENT spread 0.4417% fee 0bps pond 40.95259244 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5623% fee 0bps pond 170.42485347 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.