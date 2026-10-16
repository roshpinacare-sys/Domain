# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T21:06:38.743Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.052382 | 0.05251675237649992 | 0.2569 | 0.387 | 10 | 0.0002098 | 5 |
| SBD/STEEM (internal steem) | 0.10203220959962045 | 0.10261672652642381 | 0.5712 | 0 | 10 | 0.0004093 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9373% fee 0bps pond 168.41684693 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.588% fee 0bps pond 19149.96560481 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.6905% fee 0bps pond 479.87896804 SWAP.HIVE/24h FEASIBLE · CENT spread 3.5696% fee 0bps pond 59.16125562 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1062% fee 0bps pond 9.49001561 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.