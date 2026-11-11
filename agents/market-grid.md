# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-11T16:55:08.851Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04369995369334589 | 0.04369996834977603 | 0 | 0.733 | 10 | 0.0001748 | 5 |
| SBD/STEEM (internal steem) | 0.10317497537869906 | 0.10366624525916561 | 0.475 | 0 | 10 | 0.00041368 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.184% fee 0bps pond 1069.23430697 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1911% fee 0bps pond 15184.49433929 SWAP.HIVE/24h thin · SWAP.DOGE spread 4.878% fee 0bps pond 325.80237898 SWAP.HIVE/24h FEASIBLE · CENT spread 6.3885% fee 0bps pond 42.45276125 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.0951% fee 0bps pond 20.43670851 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.