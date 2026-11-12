# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-12T06:37:19.976Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04299953222266201 | 0.04307325147234305 | 0.1713 | 0.932 | 10 | 0.00017215 | 5 |
| SBD/STEEM (internal steem) | 0.102301 | 0.10364244237198662 | 1.3027 | 0 | 10 | 0.00041189 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0598% fee 0bps pond 905.15155454 SWAP.HIVE/24h thin · SWAP.LTC spread 0.4161% fee 0bps pond 16584.6849437 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 4.878% fee 0bps pond 49.32542411 SWAP.HIVE/24h FEASIBLE · CENT spread 2.0973% fee 0bps pond 69.39298857 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.0951% fee 0bps pond 2.47928556 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.