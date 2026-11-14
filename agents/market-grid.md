# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-14T14:17:12.268Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0413 | 0.04138843546767155 | 0.2139 | -4.773 | 10 | 0.00039468 | 5 |
| SBD/STEEM (internal steem) | 0.10258562793821356 | 0.10448016415868673 | 1.8299 | 0 | 10 | 0.00041413 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0034% fee 0bps pond 118.53349568 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3484% fee 0bps pond 13608.15174111 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.5698% fee 0bps pond 149.96254877 SWAP.HIVE/24h FEASIBLE · CENT spread 2.1379% fee 0bps pond 52.32903552 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.1229% fee 0bps pond 12.03328425 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.