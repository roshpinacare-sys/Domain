# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-03T17:47:35.754Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05615180453182497 | 0.05622610390584002 | 0.1322 | -1.297 | 10 | 0.00022476 | 5 |
| SBD/STEEM (internal steem) | 0.100087 | 0.1014356634912116 | 1.3385 | 0 | 10 | 0.00040305 | 5 |

Hive-Engine basket (keyless RPC): BEE spread 0.3373% thin · SWAP.LTC spread 0.0964% thin · SWAP.DOGE spread 2.0692% FEASIBLE · CENT spread 3.0436% FEASIBLE · WAIV spread 0.5216% FEASIBLE

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.