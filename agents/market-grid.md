# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-10T16:04:46.012Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04333842566535338 | 0.0434 | 0.142 | -1.197 | 10 | 0.00017348 | 0 |
| SBD/STEEM (internal steem) | 0.1023020507945131 | 0.10317460317460317 | 0.8493 | 0 | 10 | 0.00041095 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2967% fee 0bps pond 244.28892785 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1446% fee 0bps pond 12859.97865891 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6268% fee 0bps pond 14.63696298 SWAP.HIVE/24h FEASIBLE · CENT spread 5.2632% fee 0bps pond 158.73690315 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5543% fee 0bps pond 2.89811023 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.