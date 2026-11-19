# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-19T03:40:04.641Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03777563561874925 | 0.03790867455674965 | 0.3516 | -2.405 | 10 | 0.00018199 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1822% fee 0bps pond 253.54650837 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0991% fee 0bps pond 5366.01463729 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.2838% fee 0bps pond 66.94825615 SWAP.HIVE/24h FEASIBLE · CENT spread 6.6054% fee 0bps pond 86.40119932 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 8.66410227 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.