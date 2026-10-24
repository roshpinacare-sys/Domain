# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T04:30:09.443Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04963636363636364 | 0.0497080516287646 | 0.1443 | -1.157 | 10 | 0.00019869 | 5 |
| SBD/STEEM (internal steem) | 0.10343721878006144 | 0.10433333333333333 | 0.8626 | -0.012 | 10 | 0.00041554 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5712% fee 0bps pond 991.99500542 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0% fee 0bps pond 7136.14436412 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0594% fee 0bps pond 3929.57400402 SWAP.HIVE/24h FEASIBLE · CENT spread 0.4346% fee 0bps pond 21.30931384 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3969% fee 0bps pond 15.96542034 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.