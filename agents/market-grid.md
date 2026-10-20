# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T06:41:05.993Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0494500073990036 | 0.04953106682297773 | 0.1638 | -0.368 | 10 | 0.00019796 | 6 |
| SBD/STEEM (internal steem) | 0.09872935322400703 | 0.09876708657196462 | 0.0382 | 0 | 10 | 0.00039499 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0984% fee 0bps pond 378.34383875 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0568% fee 0bps pond 8161.75057201 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0344% fee 0bps pond 820.28778681 SWAP.HIVE/24h thin · CENT spread 1.3242% fee 0bps pond 40.2223889 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1279% fee 0bps pond 181.033071 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.