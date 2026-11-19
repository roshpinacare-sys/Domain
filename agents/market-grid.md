# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-19T00:08:21.605Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03769976914464623 | 0.03778 | 0.2126 | -3.091 | 10 | 0.00023333 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0035% fee 0bps pond 228.01365674 SWAP.HIVE/24h thin · SWAP.LTC spread 1.428% fee 0bps pond 5283.4637891 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.2838% fee 0bps pond 59.15256635 SWAP.HIVE/24h FEASIBLE · CENT spread 6.6066% fee 0bps pond 95.59593239 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 12.24552485 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.