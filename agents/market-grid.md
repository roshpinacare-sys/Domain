# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T05:19:40.136Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05000436139568502 | 0.05005714285714286 | 0.1055 | -0.418 | 10 | 0.00020012 | 5 |
| SBD/STEEM (internal steem) | 0.10150223304912707 | 0.10173974972021568 | 0.2337 | 0 | 10 | 0.00040648 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2491% fee 0bps pond 741.71625586 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1245% fee 0bps pond 4361.14874357 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0544% fee 0bps pond 730.32532186 SWAP.HIVE/24h thin · CENT spread 0.4214% fee 0bps pond 31.75386632 SWAP.HIVE/24h FEASIBLE · WAIV spread 7.1601% fee 0bps pond 9.63450479 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.