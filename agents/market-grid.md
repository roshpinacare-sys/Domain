# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-31T05:33:38.433Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04730165555794453 | 0.04740377163523637 | 0.2156 | 0.858 | 10 | 0.00018941 | 5 |
| SBD/STEEM (internal steem) | 0.10143102049362682 | 0.10414987912973409 | 2.645 | 0 | 10 | 0.00041116 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0519% fee 0bps pond 390.84225936 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1134% fee 0bps pond 6587.0904687 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1952% fee 0bps pond 2463.75375044 SWAP.HIVE/24h FEASIBLE · CENT spread 0.7001% fee 0bps pond 53.52960042 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2757% fee 0bps pond 25.46891482 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.