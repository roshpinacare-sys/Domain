# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-17T19:23:53.449Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05187566988210075 | 0.05196284612688398 | 0.1679 | -2.731 | 10 | 0.00028354 | 5 |
| SBD/STEEM (internal steem) | 0.10071319409067754 | 0.10082414641977952 | 0.1101 | 0 | 10 | 0.00040307 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6875% fee 0bps pond 84.61923376 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4192% fee 0bps pond 5533.55932209 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.6167% fee 0bps pond 56.18664331 SWAP.HIVE/24h FEASIBLE · CENT spread 3.5706% fee 0bps pond 24.97666092 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2028% fee 0bps pond 6.47128111 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.