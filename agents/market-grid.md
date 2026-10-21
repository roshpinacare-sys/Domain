# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T07:41:28.942Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05066281852293433 | 0.05077738310138007 | 0.2259 | 2.817 | 10 | 0.00028573 | 5 |
| SBD/STEEM (internal steem) | 0.10260619741432382 | 0.10337323177366703 | 0.7448 | -0.326 | 10 | 0.00041196 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0028% fee 0bps pond 224.35882119 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1178% fee 0bps pond 9120.36152739 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0394% fee 0bps pond 196.16181098 SWAP.HIVE/24h FEASIBLE · CENT spread 0.4258% fee 0bps pond 83.80365574 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1297% fee 0bps pond 14.24402457 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.