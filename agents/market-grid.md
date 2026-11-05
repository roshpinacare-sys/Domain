# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-05T00:42:32.571Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04599322366504668 | 0.04600015290909554 | 0.0151 | 2.941 | 10 | 0.00027057 | 5 |
| SBD/STEEM (internal steem) | 0.1022961922854547 | 0.10366826156299841 | 1.3323 | 0.012 | 10 | 0.00041193 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3441% fee 0bps pond 706.65455454 SWAP.HIVE/24h thin · SWAP.LTC spread 0.141% fee 0bps pond 29193.62820785 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8552% fee 0bps pond 975.59628609 SWAP.HIVE/24h FEASIBLE · CENT spread 1.1815% fee 0bps pond 155.04175587 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.8487% fee 0bps pond 24.17739327 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.