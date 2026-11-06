# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-06T14:08:18.411Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04413564062226884 | 0.04425 | 0.2588 | -3.172 | 10 | 0.0002804 | 5 |
| SBD/STEEM (internal steem) | 0.10231947483588621 | 0.10389021209028014 | 1.5234 | 0 | 10 | 0.00041242 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5495% fee 0bps pond 528.9617352 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0477% fee 0bps pond 12845.36915853 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.4386% fee 0bps pond 2062.13482028 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8506% fee 0bps pond 74.2655021 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.5092% fee 0bps pond 8.49538594 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.