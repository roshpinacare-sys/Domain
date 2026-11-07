# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-07T23:56:53.743Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0437 | 0.04377788400254939 | 0.1781 | -1.659 | 10 | 0.00017496 | 5 |
| SBD/STEEM (internal steem) | 0.10251665433012583 | 0.1035906084949625 | 1.0421 | -0.053 | 10 | 0.00041221 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.258% fee 0bps pond 260.43482404 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0186% fee 0bps pond 4537.70842629 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.377% fee 0bps pond 893.92968281 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3739% fee 0bps pond 105.58219707 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4662% fee 0bps pond 4.46850438 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.