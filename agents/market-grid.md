# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T03:24:07.536Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04811009885636752 | 0.04811074156788778 | 0.0013 | -1.929 | 10 | 0.00019244 | 5 |
| SBD/STEEM (internal steem) | 0.10138 | 0.10236220472440945 | 0.9642 | 0 | 10 | 0.00040748 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.0402% fee 0bps pond 922.60659694 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0125% fee 0bps pond 6912.66628483 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9132% fee 0bps pond 85.70644028 SWAP.HIVE/24h FEASIBLE · CENT spread 0.9337% fee 0bps pond 62.27335833 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2094% fee 0bps pond 1.74035221 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.