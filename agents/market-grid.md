# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-11T15:25:26.941Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04345165238678091 | 0.04351731709751473 | 0.151 | 0.763 | 10 | 0.00017394 | 5 |
| SBD/STEEM (internal steem) | 0.10317497537869906 | 0.10366624525916561 | 0.475 | 0 | 10 | 0.00041368 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1735% fee 0bps pond 1064.99529139 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1034% fee 0bps pond 14141.07638255 SWAP.HIVE/24h thin · SWAP.DOGE spread 4.878% fee 0bps pond 325.80237898 SWAP.HIVE/24h FEASIBLE · CENT spread 2.0532% fee 0bps pond 42.29480556 SWAP.HIVE/24h FEASIBLE · WAIV spread 0% fee 0bps pond 20.43395812 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.