# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-04T02:55:15.760Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05610021786492374 | 0.05620503597122302 | 0.1867 | 0.155 | 10 | 0.00022461 | 5 |
| SBD/STEEM (internal steem) | 0.10009017132551848 | 0.10262725779967159 | 2.5031 | 3.704 | 10 | 0.00075081 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1666% fee 0bps thin · SWAP.LTC spread 0.0623% fee 0bps thin · SWAP.DOGE spread 3.0741% fee 0bps FEASIBLE · CENT spread 3.0426% fee 0bps FEASIBLE · WAIV spread 0.2738% fee 0bps thin

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.