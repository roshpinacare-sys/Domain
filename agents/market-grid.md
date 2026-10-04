# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-04T01:42:47.020Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05622489959839357 | 0.05631747884447038 | 0.1645 | -0.262 | 10 | 0.00022508 | 5 |
| SBD/STEEM (internal steem) | 0.10009017132551848 | 0.10126582278481013 | 1.1677 | 0 | 10 | 0.00040271 | 5 |

Hive-Engine basket (keyless RPC): BEE spread 0.0001% thin · SWAP.LTC spread 0.3965% thin · SWAP.DOGE spread 2.0692% FEASIBLE · CENT spread 3.0426% FEASIBLE · WAIV spread 0.2738% thin

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.