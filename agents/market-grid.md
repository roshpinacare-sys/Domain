# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-14T08:27:53.670Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04210181484636048 | 0.04223588342440802 | 0.3179 | -2.077 | 10 | 0.00017513 | 5 |
| SBD/STEEM (internal steem) | 0.10291392959407109 | 0.10328035170781197 | 0.3554 | 0.235 | 10 | 0.00041239 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0072% fee 0bps pond 289.01665115 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0106% fee 0bps pond 5366.75348979 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.5698% fee 0bps pond 149.96254877 SWAP.HIVE/24h FEASIBLE · CENT spread 1.0385% fee 0bps pond 26.92084256 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.1229% fee 0bps pond 11.64398445 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.