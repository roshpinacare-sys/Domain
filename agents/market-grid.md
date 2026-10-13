# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T17:57:49.191Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05275665399239544 | 0.05278745126052922 | 0.0584 | -3.422 | 10 | 0.00036113 | 5 |
| SBD/STEEM (internal steem) | 0.10136928880815985 | 0.10298969072164949 | 1.5858 | 0 | 10 | 0.00040872 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5571% fee 0bps pond 446.41985074 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.176% fee 0bps pond 7556.53072111 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5638% fee 0bps pond 5400.52925264 SWAP.HIVE/24h FEASIBLE · CENT spread 0.1249% fee 0bps pond 72.00699483 SWAP.HIVE/24h thin · WAIV spread 0.7277% fee 0bps pond 8.03253595 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.