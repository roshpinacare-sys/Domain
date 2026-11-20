# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-20T09:35:03.601Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03687445127304653 | 0.03688919393154498 | 0.04 | -2.857 | 10 | 0.00021076 | 5 |
| SBD/STEEM (internal steem) | 0.10275380189066996 | 0.10294420424130121 | 0.1851 | 0 | 10 | 0.0004114 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5339% fee 0bps pond 861.78537549 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1727% fee 0bps pond 10189.96564436 SWAP.HIVE/24h thin · SWAP.DOGE spread 6.4516% fee 0bps pond 371.75985545 SWAP.HIVE/24h FEASIBLE · CENT spread 7.2033% fee 0bps pond 154.56100031 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.1869% fee 0bps pond 5.93839846 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.