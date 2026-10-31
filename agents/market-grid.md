# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-31T12:08:14.022Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04730089280435168 | 0.0473763684409211 | 0.1594 | 0 | 10 | 0.00018935 | 5 |
| SBD/STEEM (internal steem) | 0.10143102049362682 | 0.10455420141116101 | 3.0324 | 0 | 10 | 0.00041197 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.0969% fee 0bps pond 297.89393636 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.0105% fee 0bps pond 4556.53785804 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.1952% fee 0bps pond 232.0874649 SWAP.HIVE/24h FEASIBLE · CENT spread 1.927% fee 0bps pond 90.03775381 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.281% fee 0bps pond 28.66358508 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.