# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-06T15:59:27.361Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04421181131380136 | 0.0442772952853598 | 0.148 | 2.217 | 10 | 0.0001962 | 5 |
| SBD/STEEM (internal steem) | 0.10231947483588621 | 0.10389021209028014 | 1.5234 | 0 | 10 | 0.00041242 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.2009% fee 0bps pond 582.91861077 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0477% fee 0bps pond 12888.99105294 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.4182% fee 0bps pond 1478.06396072 SWAP.HIVE/24h FEASIBLE · CENT spread 1.155% fee 0bps pond 76.6495938 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.5144% fee 0bps pond 9.8294194 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.