# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-25T14:10:46.455Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04950002487438436 | 0.04950301394550342 | 0.006 | 0.725 | 10 | 0.00019801 | 5 |
| SBD/STEEM (internal steem) | 0.102048 | 0.10361995643605434 | 1.5286 | 0 | 10 | 0.00041134 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5179% fee 0bps pond 1480.60286923 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.6794% fee 0bps pond 11678.40017367 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.6115% fee 0bps pond 1646.44868385 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8321% fee 0bps pond 151.39867799 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.7492% fee 0bps pond 31.70568384 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.