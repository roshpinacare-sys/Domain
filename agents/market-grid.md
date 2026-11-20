# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-20T03:29:15.665Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03665338645418326 | 0.03672915666523362 | 0.2065 | -4.693 | 10 | 0.00034438 | 5 |
| SBD/STEEM (internal steem) | 0.10273116744019993 | 0.10273121387283236 | 0 | 0 | 10 | 0.00041092 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1032% fee 0bps pond 794.63225413 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2337% fee 0bps pond 106896.08563709 SWAP.HIVE/24h thin · SWAP.DOGE spread 4.5603% fee 0bps pond 397.24528745 SWAP.HIVE/24h FEASIBLE · CENT spread 4.6908% fee 0bps pond 98.09644926 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6292% fee 0bps pond 5.94691463 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.