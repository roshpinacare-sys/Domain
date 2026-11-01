# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-01T00:24:51.988Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04696485623003195 | 0.04711857588253043 | 0.3268 | -2.032 | 10 | 0.00019113 | 5 |
| SBD/STEEM (internal steem) | 0.11059500110595001 | 0.11059521506416457 | 0.0002 | 0.215 | 10 | 0.00044238 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8576% fee 0bps pond 504.00143032 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0041% fee 0bps pond 5189.20201472 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6013% fee 0bps pond 108.93179322 SWAP.HIVE/24h FEASIBLE · CENT spread 1.349% fee 0bps pond 100.74313588 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4073% fee 0bps pond 5.26753484 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.