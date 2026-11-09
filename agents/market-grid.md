# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-09T02:16:25.182Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04248989244030819 | 0.04250087811731647 | 0.0259 | -2.791 | 10 | 0.00023721 | 5 |
| SBD/STEEM (internal steem) | 0.10231721034870642 | 0.10310179117518567 | 0.7639 | 0 | 10 | 0.00041084 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9519% fee 0bps pond 324.65438521 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0376% fee 0bps pond 6911.12997299 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.3289% fee 0bps pond 2378.17407034 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8136% fee 0bps pond 123.38320647 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4107% fee 0bps pond 32.27144971 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.