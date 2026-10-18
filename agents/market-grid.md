# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T03:31:20.347Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0515 | 0.05158637809324335 | 0.1676 | 0.011 | 10 | 0.00020617 | 5 |
| SBD/STEEM (internal steem) | 0.1006882734998546 | 0.10101010101010101 | 0.3191 | 0.742 | 10 | 0.0004034 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.2985% fee 0bps pond 151.71387821 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2022% fee 0bps pond 6216.97388467 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.3758% fee 0bps pond 279.88952787 SWAP.HIVE/24h thin · CENT spread 0.8647% fee 0bps pond 28.0083541 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2028% fee 0bps pond 3.81187109 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.