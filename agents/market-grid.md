# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T04:41:36.792Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05151839354785614 | 0.05168034388432981 | 0.3139 | -1.168 | 10 | 0.0002064 | 5 |
| SBD/STEEM (internal steem) | 0.1006071189483304 | 0.10066215026600835 | 0.0547 | 0 | 10 | 0.00040254 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9062% fee 0bps pond 155.675933 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2022% fee 0bps pond 6216.97388467 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.3758% fee 0bps pond 279.88952787 SWAP.HIVE/24h thin · CENT spread 1.8009% fee 0bps pond 28.99701259 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.284% fee 0bps pond 3.81187109 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.