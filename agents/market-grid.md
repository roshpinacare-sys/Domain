# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-10T07:43:08.289Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04320987654320987 | 0.04322178105501985 | 0.0275 | 1.961 | 10 | 0.00017286 | 6 |
| SBD/STEEM (internal steem) | 0.10229084501132836 | 0.10366624525916561 | 1.3356 | 0 | 10 | 0.00041191 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3554% fee 0bps pond 235.85598583 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0539% fee 0bps pond 9170.0354876 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5267% fee 0bps pond 46.80831186 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8136% fee 0bps pond 118.65912356 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5275% fee 0bps pond 3.07070461 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.