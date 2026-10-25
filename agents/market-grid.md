# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-25T03:05:23.868Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05030921739360945 | 0.05047846889952153 | 0.3359 | 2.959 | 10 | 0.00029825 | 5 |
| SBD/STEEM (internal steem) | 0.10409412894705247 | 0.11318 | 8.3635 | -0.502 | 10 | 0.00043455 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8206% fee 0bps pond 743.8341794 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.3279% fee 0bps pond 8042.52785723 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1164% fee 0bps pond 566.37465914 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8349% fee 0bps pond 132.16731699 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.7388% fee 0bps pond 32.12572738 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.