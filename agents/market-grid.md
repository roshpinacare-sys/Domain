# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-19T13:27:53.448Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03801 | 0.03807397228901867 | 0.1682 | -1.944 | 10 | 0.00015217 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7887% fee 0bps pond 248.74735739 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.2601% fee 0bps pond 103065.62360373 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 43.75% fee 0bps pond 414.68583136 SWAP.HIVE/24h FEASIBLE · CENT spread 7.1708% fee 0bps pond 69.33866196 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 0.12292013 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.