# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-04T00:29:54.757Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05630005471820126 | 0.05641065708258457 | 0.1963 | 0.198 | 10 | 0.00022542 | 6 |
| SBD/STEEM (internal steem) | 0.10009017132551848 | 0.10413412475268145 | 3.9603 | 0 | 10 | 0.00040845 | 5 |

Hive-Engine basket (keyless RPC): BEE spread 0.6407% FEASIBLE · SWAP.LTC spread 0.2158% thin · SWAP.DOGE spread 2.0692% FEASIBLE · CENT spread 3.0426% FEASIBLE · WAIV spread 0.2738% thin

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.