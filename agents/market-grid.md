# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T15:39:47.997Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04874439999482764 | 0.04883271170051112 | 0.181 | -3.351 | 10 | 0.00032702 | 5 |
| SBD/STEEM (internal steem) | 0.1015099255686077 | 0.10170923913043478 | 0.1962 | 0 | 10 | 0.00040644 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3511% fee 0bps pond 380.14183472 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0301% fee 0bps pond 14697.02597134 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.212% fee 0bps pond 1206.39218936 SWAP.HIVE/24h thin · CENT spread 0.5359% fee 0bps pond 108.52221476 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1946% fee 0bps pond 175.05660405 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.