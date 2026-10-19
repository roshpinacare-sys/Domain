# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T18:41:07.523Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04900627385600843 | 0.04928733788215982 | 0.5719 | -1.683 | 10 | 0.00019659 | 6 |
| SBD/STEEM (internal steem) | 0.1015099255686077 | 0.10170923913043478 | 0.1962 | 0.269 | 10 | 0.00040644 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2862% fee 0bps pond 314.44858809 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0401% fee 0bps pond 13554.51390205 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8199% fee 0bps pond 1428.14515059 SWAP.HIVE/24h FEASIBLE · CENT spread 0.4772% fee 0bps pond 72.69002108 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1946% fee 0bps pond 174.80820295 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.