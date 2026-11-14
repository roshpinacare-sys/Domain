# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-14T19:14:40.670Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03983078782551368 | 0.03994050957542421 | 0.2751 | -7.769 | 10 | 0.00047863 | 5 |
| SBD/STEEM (internal steem) | 0.103229842809103 | 0.10460057391465334 | 1.3191 | -0.228 | 10 | 0.00041566 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5983% fee 0bps pond 139.8612521 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4747% fee 0bps pond 14407.90582355 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.217% fee 0bps pond 2.72457568 SWAP.HIVE/24h FEASIBLE · CENT spread 4.2891% fee 0bps pond 52.32903552 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4591% fee 0bps pond 13.61205511 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.