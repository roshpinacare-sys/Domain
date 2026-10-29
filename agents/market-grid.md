# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T09:46:13.733Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04784248010054461 | 0.04791310170374228 | 0.1475 | -4.082 | 10 | 0.00039084 | 5 |
| SBD/STEEM (internal steem) | 0.10141987829614604 | 0.10241129032258064 | 0.9728 | 0 | 10 | 0.00040766 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2982% fee 0bps pond 940.6847072 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1289% fee 0bps pond 8492.76623676 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8827% fee 0bps pond 43.61753547 SWAP.HIVE/24h FEASIBLE · CENT spread 1.7207% fee 0bps pond 123.73418868 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1092% fee 0bps pond 1.20915088 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.