# market-grid — internal-market sovereignty instrument (Z-60+)

<<<<<<< Updated upstream
At: 2026-10-19T11:46:18.658Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04901396466289604 | 0.04910336334949588 | 0.1822 | -4.857 | 10 | 0.00047656 | 5 |
| SBD/STEEM (internal steem) | 0.10200564086493262 | 0.10389077698347592 | 1.8311 | 0.046 | 10 | 0.00041179 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5854% fee 0bps pond 211.56244772 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.283% fee 0bps pond 14634.36137952 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.217% fee 0bps pond 1352.41103538 SWAP.HIVE/24h FEASIBLE · CENT spread 0.0725% fee 0bps pond 288.13880658 SWAP.HIVE/24h thin · WAIV spread 1.7759% fee 0bps pond 19.12401442 SWAP.HIVE/24h FEASIBLE
=======
At: 2026-10-19T11:41:39.333Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04900905860567539 | 0.04910336334949588 | 0.1922 | -3.8 | 10 | 0.00037281 | 5 |
| SBD/STEEM (internal steem) | 0.10200564086493262 | 0.10389077698347592 | 1.8311 | 0.046 | 10 | 0.00041179 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5871% fee 0bps pond 310.45201341 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.283% fee 0bps pond 14658.05179553 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.217% fee 0bps pond 1352.41103538 SWAP.HIVE/24h FEASIBLE · CENT spread 0.0725% fee 0bps pond 288.13880658 SWAP.HIVE/24h thin · WAIV spread 1.7759% fee 0bps pond 19.12401442 SWAP.HIVE/24h FEASIBLE
>>>>>>> Stashed changes
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.