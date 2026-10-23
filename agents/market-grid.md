# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T07:23:27.574Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05009894459102902 | 0.05029411764705882 | 0.3888 | 0.24 | 10 | 0.00020079 | 6 |
| SBD/STEEM (internal steem) | 0.10151070535811325 | 0.10173974972021568 | 0.2254 | 0 | 10 | 0.0004065 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4042% fee 0bps pond 684.21535496 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0078% fee 0bps pond 4327.41977651 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0544% fee 0bps pond 730.32532186 SWAP.HIVE/24h thin · CENT spread 0.4302% fee 0bps pond 31.75412793 SWAP.HIVE/24h FEASIBLE · WAIV spread 7.1601% fee 0bps pond 9.63450479 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.