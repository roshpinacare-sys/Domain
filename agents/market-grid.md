# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-09T00:12:01.967Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04261477848355713 | 0.04264405806533204 | 0.0687 | -2.092 | 10 | 0.00017834 | 6 |
| SBD/STEEM (internal steem) | 0.10231721034870642 | 0.10310179117518567 | 0.7639 | -0.05 | 10 | 0.00041084 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1513% fee 0bps pond 341.08402783 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.2094% fee 0bps pond 7009.35931465 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.3289% fee 0bps pond 2378.17407034 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8136% fee 0bps pond 123.38320647 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4107% fee 0bps pond 32.27064852 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.