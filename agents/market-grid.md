# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-14T16:03:59.299Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04066229539129204 | 0.04079764749126999 | 0.3323 | -5.325 | 10 | 0.0004338 | 5 |
| SBD/STEEM (internal steem) | 0.10260285474391267 | 0.10485670156169556 | 2.1728 | 0 | 10 | 0.00041492 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2914% fee 0bps pond 130.96430177 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1741% fee 0bps pond 13037.91712893 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.5698% fee 0bps pond 2.71686703 SWAP.HIVE/24h FEASIBLE · CENT spread 2.1379% fee 0bps pond 52.32903552 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.1229% fee 0bps pond 12.03328425 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.