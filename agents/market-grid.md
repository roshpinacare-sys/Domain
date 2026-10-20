# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T12:41:17.601Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10442228371534486 | 0.10444993819530285 | 0.0265 | 0 | 10 | 0.00041774 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8179% fee 0bps pond 428.19889231 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0957% fee 0bps pond 12471.94430445 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0344% fee 0bps pond 807.91943815 SWAP.HIVE/24h thin · CENT spread 0.663% fee 0bps pond 82.05671452 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5623% fee 0bps pond 173.55324226 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.