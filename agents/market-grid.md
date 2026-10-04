# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-04T21:16:53.891Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05676104190260476 | 0.05694466217275435 | 0.323 | 4.71 | 10 | 0.0005355 | 5 |
| SBD/STEEM (internal steem) | 0.1001001001001001 | 0.10423688011555128 | 4.049 | 0 | 10 | 0.00040867 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3714% fee 0bps pond 1472.60969818 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1445% fee 0bps pond 4825.95163512 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.7689% fee 0bps pond 191.02891803 SWAP.HIVE/24h FEASIBLE · CENT spread 2.1309% fee 0bps pond 47.28962566 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4161% fee 0bps pond 4.82526478 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.