# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-03T17:34:12.943Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05615180453182497 | 0.05629785317519892 | 0.2598 | -1.587 | 10 | 0.0002249 | 5 |
| SBD/STEEM (internal steem) | 0.100087 | 0.10165034214410304 | 1.5499 | 0 | 10 | 0.00040347 | 5 |

Hive-Engine basket (keyless RPC): BEE spread 0.3642% thin · SWAP.LTC spread 0.3857% thin · SWAP.DOGE spread 2.0692% FEASIBLE · CENT spread 3.0436% FEASIBLE · WAIV spread 0.5216% FEASIBLE

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.