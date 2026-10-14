# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-14T17:34:21.051Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05198487712665406 | 0.05205 | 0.1252 | -1.419 | 10 | 0.00020807 | 5 |
| SBD/STEEM (internal steem) | 0.100057 | 0.10071867150432598 | 0.6591 | 0.109 | 10 | 0.00040155 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4929% fee 0bps pond 255.00712045 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.6915% fee 0bps pond 5703.64328329 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.1704% fee 0bps pond 10104.39936827 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8379% fee 0bps pond 55.41407028 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1664% fee 0bps pond 1.66125415 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.