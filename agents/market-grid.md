# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T06:39:18.517Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05331132258691008 | 0.0536 | 0.54 | -5.047 | 10 | 0.00053958 | 5 |
| SBD/STEEM (internal steem) | 0.1019898214158227 | 0.1025010250102501 | 0.5 | 0 | 10 | 0.00040898 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5314% fee 0bps pond 561.06627387 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2628% fee 0bps pond 6395.19859657 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1754% fee 0bps pond 287.47985447 SWAP.HIVE/24h FEASIBLE · CENT spread 0.2497% fee 0bps pond 136.90060514 SWAP.HIVE/24h thin · WAIV spread 0.7226% fee 0bps pond 7.64968092 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.