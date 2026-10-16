# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T10:41:31.373Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05301013497734809 | 0.05325303114351375 | 0.4572 | 1.676 | 10 | 0.00021253 | 5 |
| SBD/STEEM (internal steem) | 0.10002000400080016 | 0.10332064667062398 | 3.2464 | 0 | 10 | 0.00040668 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0014% fee 0bps pond 264.93469934 SWAP.HIVE/24h thin · SWAP.LTC spread 0.2516% fee 0bps pond 10421.61326149 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1754% fee 0bps pond 301.98105516 SWAP.HIVE/24h FEASIBLE · CENT spread 0.6601% fee 0bps pond 75.55587001 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0607% fee 0bps pond 9.64081212 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.