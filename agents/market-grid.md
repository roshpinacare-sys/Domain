# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T20:21:35.896Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04978038067349927 | 0.04992984480874702 | 0.2998 | -7.39 | 10 | 0.00059826 | 5 |
| SBD/STEEM (internal steem) | 0.1042733706064042 | 0.1044776119402985 | 0.1957 | -0.061 | 10 | 0.0004175 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7774% fee 0bps pond 589.48375234 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2491% fee 0bps pond 17037.67350219 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.59% fee 0bps pond 1625.86704406 SWAP.HIVE/24h FEASIBLE · CENT spread 0.0506% fee 0bps pond 302.58174769 SWAP.HIVE/24h thin · WAIV spread 0.1977% fee 0bps pond 2.64156885 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.