# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T14:41:07.504Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05338496252375631 | 0.05345911949685535 | 0.1388 | 2.868 | 10 | 0.00030638 | 5 |
| SBD/STEEM (internal steem) | 0.10306697266847487 | 0.10333781130515655 | 0.2624 | 0 | 10 | 0.00041281 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9961% fee 0bps pond 341.07570673 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0123% fee 0bps pond 16847.79374745 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1854% fee 0bps pond 501.55881131 SWAP.HIVE/24h FEASIBLE · CENT spread 1.5915% fee 0bps pond 75.60892999 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0607% fee 0bps pond 7.51429724 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.