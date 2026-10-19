# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T23:41:38.343Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.1015099255686077 | 0.10170923913043478 | 0.1962 | 0 | 10 | 0.00040644 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3861% fee 0bps pond 400.54113057 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1471% fee 0bps pond 7290.42134375 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8199% fee 0bps pond 1036.6586963 SWAP.HIVE/24h FEASIBLE · CENT spread 0.2661% fee 0bps pond 70.62422008 SWAP.HIVE/24h thin · WAIV spread 2.5961% fee 0bps pond 180.17307204 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.