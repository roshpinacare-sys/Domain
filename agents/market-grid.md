# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-17T15:56:17.956Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05149999992198575 | 0.05156009514481601 | 0.1166 | -3.092 | 10 | 0.00031865 | 5 |
| SBD/STEEM (internal steem) | 0.10063085686286519 | 0.10098577771088871 | 0.3521 | 0 | 10 | 0.00040323 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6255% fee 0bps pond 80.49244193 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4182% fee 0bps pond 10669.05509812 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.6167% fee 0bps pond 56.18664331 SWAP.HIVE/24h FEASIBLE · CENT spread 3.5706% fee 0bps pond 24.8427086 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1977% fee 0bps pond 4.68242368 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.