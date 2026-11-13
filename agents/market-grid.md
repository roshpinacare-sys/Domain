# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-13T13:11:18.965Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04315168237909098 | 0.04322876817138485 | 0.1785 | 2.362 | 10 | 0.00020406 | 5 |
| SBD/STEEM (internal steem) | 0.10233104359869549 | 0.10246884689639034 | 0.1346 | 0 | 10 | 0.0004096 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5363% fee 0bps pond 995.50716107 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4301% fee 0bps pond 26693.52057264 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.7386% fee 0bps pond 190.33921367 SWAP.HIVE/24h FEASIBLE · CENT spread 6.394% fee 0bps pond 47.50270006 SWAP.HIVE/24h FEASIBLE · WAIV spread 6.1582% fee 0bps pond 5.37516535 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.