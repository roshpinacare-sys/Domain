# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T19:42:41.854Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05137426149499101 | 0.05146945683951377 | 0.1851 | 1.97 | 10 | 0.00020569 | 5 |
| SBD/STEEM (internal steem) | 0.101012 | 0.10291734197730956 | 1.8686 | -0.004 | 10 | 0.00040786 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3832% fee 0bps pond 254.3020724 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0817% fee 0bps pond 6937.21064051 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0394% fee 0bps pond 683.50141481 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8156% fee 0bps pond 40.24408189 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1093% fee 0bps pond 1.64622189 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.