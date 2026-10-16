# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T07:11:25.056Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05249592341276103 | 0.05298013245033113 | 0.9181 | 0.954 | 10 | 0.00021095 | 5 |
| SBD/STEEM (internal steem) | 0.1019367991845056 | 0.10282776349614396 | 0.8702 | -0.001 | 10 | 0.00040953 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0976% fee 0bps pond 257.91072199 SWAP.HIVE/24h thin · SWAP.LTC spread 0.5188% fee 0bps pond 9331.6012673 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.1754% fee 0bps pond 301.98105516 SWAP.HIVE/24h FEASIBLE · CENT spread 0.3273% fee 0bps pond 108.15301212 SWAP.HIVE/24h thin · WAIV spread 0.1919% fee 0bps pond 10.17442013 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.