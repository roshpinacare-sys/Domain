# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-25T16:49:34.774Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04911137440758294 | 0.04936305732484077 | 0.5112 | 2.741 | 10 | 0.00026994 | 5 |
| SBD/STEEM (internal steem) | 0.10205 | 0.10401221107719145 | 1.9045 | 0 | 10 | 0.00041212 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0% fee 0bps pond 1404.98732366 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1359% fee 0bps pond 11557.8850091 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9859% fee 0bps pond 1617.8008943 SWAP.HIVE/24h FEASIBLE · CENT spread 1.85% fee 0bps pond 151.59160464 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.8115% fee 0bps pond 55.35226903 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.