# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T22:41:38.479Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04934048222097957 | 0.04944353220215289 | 0.2086 | -0.063 | 10 | 0.00019757 | 7 |
| SBD/STEEM (internal steem) | 0.1015099255686077 | 0.10170923913043478 | 0.1962 | 0 | 10 | 0.00040644 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5187% fee 0bps pond 400.88804281 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0127% fee 0bps pond 7303.90909366 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0344% fee 0bps pond 1036.6586963 SWAP.HIVE/24h thin · CENT spread 0.2661% fee 0bps pond 70.62422008 SWAP.HIVE/24h thin · WAIV spread 2.5961% fee 0bps pond 180.16918389 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.