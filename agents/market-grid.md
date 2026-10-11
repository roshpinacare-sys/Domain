# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-11T06:01:04.026Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0553381777529346 | 0.05561357702349869 | 0.4964 | 0.01 | 10 | 0.0002219 | 5 |
| SBD/STEEM (internal steem) | 0.10112245929821014 | 0.10112359550561797 | 0.0011 | -0.042 | 10 | 0.00040449 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4709% fee 0bps pond 473.53476047 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1001% fee 0bps pond 10655.88328207 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.6431% fee 0bps pond 352.54427794 SWAP.HIVE/24h FEASIBLE · CENT spread 0.0303% fee 0bps pond 92.05044197 SWAP.HIVE/24h thin · WAIV spread 4.2868% fee 0bps pond 122.58163793 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.