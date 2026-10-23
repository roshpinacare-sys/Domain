# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T12:03:27.214Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0503 | 0.05030361424186067 | 0.0072 | 1.954 | 10 | 0.00020121 | 6 |
| SBD/STEEM (internal steem) | 0.10204309894862426 | 0.10263684913217623 | 0.5802 | 0 | 10 | 0.00040936 | 2 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.4347% fee 0bps pond 627.15091617 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.5361% fee 0bps pond 2616.73393772 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.0594% fee 0bps pond 339.74341527 SWAP.HIVE/24h FEASIBLE · CENT spread 0.6665% fee 0bps pond 31.64274727 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3543% fee 0bps pond 9.255043 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.