# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T03:54:13.689Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05149999992198575 | 0.05158148925220696 | 0.1581 | -2.938 | 10 | 0.00030283 | 5 |
| SBD/STEEM (internal steem) | 0.10007 | 0.1013011476610737 | 1.2228 | 0 | 10 | 0.00040274 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8525% fee 0bps pond 922.98829765 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.5193% fee 0bps pond 5857.88489905 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.1604% fee 0bps pond 1554.55789431 SWAP.HIVE/24h FEASIBLE · CENT spread 0.1127% fee 0bps pond 50.58980751 SWAP.HIVE/24h thin · WAIV spread 0.1664% fee 0bps pond 1.19333539 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.