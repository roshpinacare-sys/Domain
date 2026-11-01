# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-01T12:00:14.294Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04726327757024525 | 0.04731878443434295 | 0.1174 | 0.106 | 10 | 0.00018916 | 5 |
| SBD/STEEM (internal steem) | 0.101472 | 0.11568123393316196 | 13.0868 | 0.215 | 10 | 0.00043431 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9729% fee 0bps pond 902.9990537 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4953% fee 0bps pond 17650.7125682 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.4327% fee 0bps pond 149.18179322 SWAP.HIVE/24h FEASIBLE · CENT spread 0.9867% fee 0bps pond 88.36947463 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4073% fee 0bps pond 4.0424025 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.