# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-15T19:11:56.169Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0391102720893011 | 0.03932132518494693 | 0.5382 | -1.335 | 10 | 0.00015686 | 5 |
| SBD/STEEM (internal steem) | 0.10282059691702197 | 0.10323301353660139 | 0.4003 | 0 | 10 | 0.00041211 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0018% fee 0bps pond 287.66053111 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1266% fee 0bps pond 3747.04850387 SWAP.HIVE/24h thin · SWAP.DOGE spread 3.2929% fee 0bps pond 785.28047745 SWAP.HIVE/24h FEASIBLE · CENT spread 4.2817% fee 0bps pond 459.99154776 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.1402% fee 0bps pond 16.80569436 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.