# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-04T16:25:17.677Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04616 | 0.0462 | 0.0866 | 1.944 | 10 | 0.00018472 | 5 |
| SBD/STEEM (internal steem) | 0.10283038077784565 | 0.10366826156299841 | 0.8115 | 0.012 | 10 | 0.000413 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.2604% fee 0bps pond 603.59351005 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1405% fee 0bps pond 25140.65609458 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1551% fee 0bps pond 1260.69639584 SWAP.HIVE/24h FEASIBLE · CENT spread 0.9812% fee 0bps pond 159.55681724 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1577% fee 0bps pond 16.10129988 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.