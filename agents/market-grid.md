# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-22T12:22:01.034Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04958119427181843 | 0.0499046958932594 | 0.6503 | -2.632 | 10 | 0.00026189 | 5 |
| SBD/STEEM (internal steem) | 0.10104805220486454 | 0.10128633647320977 | 0.2355 | 0 | 10 | 0.00040467 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4989% fee 0bps pond 1160.62904464 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2604% fee 0bps pond 7149.886937 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8625% fee 0bps pond 2000.73779738 SWAP.HIVE/24h FEASIBLE · CENT spread 0.6514% fee 0bps pond 42.74568319 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.258% fee 0bps pond 56.76822889 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.