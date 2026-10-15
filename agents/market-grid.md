# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T21:12:32.215Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05235357756517681 | 0.05242528172464478 | 0.1369 | -0.007 | 10 | 0.00020956 | 5 |
| SBD/STEEM (internal steem) | 0.10202360876897133 | 0.10447137484329294 | 2.3708 | 0 | 10 | 0.00041299 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8601% fee 0bps pond 783.35014569 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.252% fee 0bps pond 7956.60587002 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.005% fee 0bps pond 1828.12500792 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3173% fee 0bps pond 112.67566148 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1768% fee 0bps pond 3.88216292 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.