# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T16:41:50.270Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.1015099255686077 | 0.10170923913043478 | 0.1962 | 0 | 10 | 0.00040644 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2831% fee 0bps pond 380.14183472 SWAP.HIVE/24h thin · SWAP.LTC spread 0.195% fee 0bps pond 14427.30806012 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8199% fee 0bps pond 1428.14515059 SWAP.HIVE/24h FEASIBLE · CENT spread 0.4869% fee 0bps pond 108.52221476 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1946% fee 0bps pond 175.05660405 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.