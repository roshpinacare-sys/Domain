# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T08:53:26.578Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05015966304514666 | 0.05019765539803708 | 0.0757 | 1.596 | 10 | 0.00020071 | 5 |
| SBD/STEEM (internal steem) | 0.10200958890135672 | 0.10253674727358938 | 0.5154 | 0 | 10 | 0.00040909 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.773% fee 0bps pond 915.56544153 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2493% fee 0bps pond 4568.45210428 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0494% fee 0bps pond 730.32532186 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8004% fee 0bps pond 31.75429234 SWAP.HIVE/24h FEASIBLE · WAIV spread 7.1601% fee 0bps pond 9.63450479 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.