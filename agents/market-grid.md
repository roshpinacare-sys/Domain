# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-10T04:46:51.619Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04310000486230365 | 0.04315189624680684 | 0.1203 | 1.077 | 10 | 0.0001725 | 5 |
| SBD/STEEM (internal steem) | 0.102232 | 0.10366624525916561 | 1.3932 | 0 | 10 | 0.0004118 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.706% fee 0bps pond 394.52059895 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.8658% fee 0bps pond 9231.99916674 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.5267% fee 0bps pond 46.80831186 SWAP.HIVE/24h FEASIBLE · CENT spread 1.841% fee 0bps pond 124.54082163 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5275% fee 0bps pond 2.66058246 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.