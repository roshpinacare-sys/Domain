# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-26T02:36:52.792Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0480007680122882 | 0.0480776916313644 | 0.1601 | -3.226 | 10 | 0.00030993 | 5 |
| SBD/STEEM (internal steem) | 0.102048 | 0.10241704219582139 | 0.361 | -0.097 | 10 | 0.00040893 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.2909% fee 0bps pond 1321.31916757 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1762% fee 0bps pond 9324.4197716 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6015% fee 0bps pond 2077.23190072 SWAP.HIVE/24h FEASIBLE · CENT spread 5.5692% fee 0bps pond 104.67318162 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.8063% fee 0bps pond 23.90581391 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.