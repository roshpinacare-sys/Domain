# market-grid — internal-market sovereignty instrument (Z-60+)

<<<<<<< Updated upstream
At: 2026-10-16T12:11:15.202Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0
=======
At: 2026-10-16T12:11:16.421Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0
>>>>>>> Stashed changes

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0533 | 0.05341762149348084 | 0.2204 | 1.859 | 10 | 0.00021344 | 6 |
| SBD/STEEM (internal steem) | 0.1036247953410292 | 0.10451505016722408 | 0.8554 | 0.094 | 10 | 0.00041628 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.307% fee 0bps pond 302.88420464 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1755% fee 0bps pond 14751.28580601 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.1804% fee 0bps pond 301.98105516 SWAP.HIVE/24h thin · CENT spread 1.5906% fee 0bps pond 94.37753312 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0607% fee 0bps pond 7.51000585 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.