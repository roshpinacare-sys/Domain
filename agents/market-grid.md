# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-14T22:05:04.528Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03819412255492723 | 0.03859688761596343 | 1.049 | -10.031 | 10 | 0.00046075 | 5 |
| SBD/STEEM (internal steem) | 0.10317460317460317 | 0.10449803317940824 | 1.2745 | -0.228 | 10 | 0.00041535 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8795% fee 0bps pond 188.33297188 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.9845% fee 0bps pond 16003.63390261 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 8.2775% fee 0bps pond 126.46269668 SWAP.HIVE/24h FEASIBLE · CENT spread 4.2891% fee 0bps pond 52.32903552 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.6018% fee 0bps pond 3.39425138 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.