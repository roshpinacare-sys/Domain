# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T02:35:10.960Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04859011955786149 | 0.04893368390300906 | 0.7046 | -1.061 | 10 | 0.00019505 | 6 |
| SBD/STEEM (internal steem) | 0.101052 | 0.1016091488715717 | 0.5498 | -1.583 | 10 | 0.00040532 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2846% fee 0bps pond 416.29606369 SWAP.HIVE/24h thin · SWAP.LTC spread 0.2276% fee 0bps pond 7001.11078003 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0344% fee 0bps pond 1036.6586963 SWAP.HIVE/24h thin · CENT spread 0.7432% fee 0bps pond 47.55293197 SWAP.HIVE/24h FEASIBLE · WAIV spread 2.5961% fee 0bps pond 180.17307204 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.