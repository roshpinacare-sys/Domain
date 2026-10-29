# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T01:26:57.732Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04920127795527156 | 0.04930118261403778 | 0.2028 | 0.552 | 10 | 0.000197 | 5 |
| SBD/STEEM (internal steem) | 0.10138 | 0.10236220472440945 | 0.9642 | 0 | 10 | 0.00040748 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.486% fee 0bps pond 597.95110267 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1851% fee 0bps pond 6718.21665951 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.2322% fee 0bps pond 85.70644028 SWAP.HIVE/24h thin · CENT spread 1.2495% fee 0bps pond 61.59340205 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0017% fee 0bps pond 1.74035221 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.