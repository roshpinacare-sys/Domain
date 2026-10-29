# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T05:51:31.386Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04827586206896552 | 0.04828623446528932 | 0.0215 | -2.041 | 10 | 0.00019707 | 5 |
| SBD/STEEM (internal steem) | 0.10140001392340804 | 0.10236220472440945 | 0.9444 | 0 | 10 | 0.00040752 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2705% fee 0bps pond 927.03198886 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0545% fee 0bps pond 7357.84933217 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9132% fee 0bps pond 81.29452317 SWAP.HIVE/24h FEASIBLE · CENT spread 1.0276% fee 0bps pond 80.97492856 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2026% fee 0bps pond 1.74035221 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.