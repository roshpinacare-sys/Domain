# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-14T15:25:55.293Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0519 | 0.05190000326156473 | 0 | -2.62 | 10 | 0.00027197 | 5 |
| SBD/STEEM (internal steem) | 0.10005500663408541 | 0.10228858498464974 | 2.2077 | 0.109 | 10 | 0.00040469 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0423% fee 0bps pond 184.39332894 SWAP.HIVE/24h thin · SWAP.LTC spread 0.5056% fee 0bps pond 5752.46948098 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.1654% fee 0bps pond 10104.39936827 SWAP.HIVE/24h FEASIBLE · CENT spread 0.1729% fee 0bps pond 71.9703968 SWAP.HIVE/24h thin · WAIV spread 0.1613% fee 0bps pond 1.70483531 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.