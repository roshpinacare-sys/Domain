# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-25T00:53:52.316Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05184147744418217 | 0.05185185185185185 | 0.02 | 4.637 | 10 | 0.00048083 | 5 |
| SBD/STEEM (internal steem) | 0.11166253101736973 | 0.11240742619458254 | 0.6649 | -0.199 | 10 | 0.00044814 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.3043% fee 0bps pond 425.73145756 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.8857% fee 0bps pond 8714.36270953 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.0549% fee 0bps pond 146.35134586 SWAP.HIVE/24h FEASIBLE · CENT spread 2.2242% fee 0bps pond 119.85261433 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.7388% fee 0bps pond 32.12610717 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.