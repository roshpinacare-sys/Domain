# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-11T22:25:05.925Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05594 | 0.05600003551603294 | 0.1073 | 0.544 | 10 | 0.00022388 | 5 |
| SBD/STEEM (internal steem) | 0.10251305284115149 | 0.10254339927331449 | 0.0296 | 0 | 10 | 0.00041011 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.4147% fee 0bps pond 193.27893587 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.3546% fee 0bps pond 1661.56981942 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.0386% fee 0bps pond 457.12485452 SWAP.HIVE/24h FEASIBLE · CENT spread 1.2623% fee 0bps pond 119.15314113 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.7528% fee 0bps pond 109.6138732 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.