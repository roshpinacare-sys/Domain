# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T15:18:31.922Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05329993204258664 | 0.05339105891174883 | 0.1708 | -2.1 | 10 | 0.00022408 | 6 |
| SBD/STEEM (internal steem) | 0.10361903130975826 | 0.10386661936857042 | 0.2387 | -0.017 | 10 | 0.00041497 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8873% fee 0bps pond 570.37217502 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.9562% fee 0bps pond 9132.92946795 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.1704% fee 0bps pond 5421.27116026 SWAP.HIVE/24h FEASIBLE · CENT spread 0.6206% fee 0bps pond 127.3756093 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.7277% fee 0bps pond 8.30274657 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.