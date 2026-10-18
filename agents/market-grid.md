# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T14:11:47.055Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10054293183189222 | 0.10302197802197802 | 2.4356 | 0 | 10 | 0.00040713 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8243% fee 0bps pond 515.54758543 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0248% fee 0bps pond 7308.44101313 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.5419% fee 0bps pond 855.8693774 SWAP.HIVE/24h FEASIBLE · CENT spread 0.222% fee 0bps pond 265.36047957 SWAP.HIVE/24h thin · WAIV spread 0.1977% fee 0bps pond 5.69675048 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.