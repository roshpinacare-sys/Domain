# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-03T22:24:58.208Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0561957519289995 | 0.05629685157421289 | 0.1797 | 1.192 | 10 | 0.00022499 | 5 |
| SBD/STEEM (internal steem) | 0.10009476427386875 | 0.10297323483105245 | 2.835 | 0 | 10 | 0.00040614 | 5 |

Hive-Engine basket (keyless RPC): BEE spread 0.1201% thin · SWAP.LTC spread 0.2111% thin · SWAP.DOGE spread 3.0741% FEASIBLE · CENT spread 3.0426% FEASIBLE · WAIV spread 0.2738% thin

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.