# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T19:30:47.138Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05269992169577826 | 0.05270002366138641 | 0.0002 | -2.425 | 10 | 0.00025561 | 5 |
| SBD/STEEM (internal steem) | 0.10349786241741159 | 0.10399334442595674 | 0.4776 | 0 | 10 | 0.00041498 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3718% fee 0bps pond 353.23673428 SWAP.HIVE/24h thin · SWAP.LTC spread 0.163% fee 0bps pond 7000.96412353 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5638% fee 0bps pond 5401.63728704 SWAP.HIVE/24h FEASIBLE · CENT spread 0.1249% fee 0bps pond 72.9213479 SWAP.HIVE/24h thin · WAIV spread 0.7277% fee 0bps pond 8.03576637 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.