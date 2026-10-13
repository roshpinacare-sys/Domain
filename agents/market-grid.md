# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T02:08:47.884Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05210150227873741 | 0.05249597423510467 | 0.7543 | -6.735 | 10 | 0.00062758 | 6 |
| SBD/STEEM (internal steem) | 0.10003514938488577 | 0.10158472165786266 | 1.5371 | 0.091 | 10 | 0.00040324 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8202% fee 0bps pond 422.34316914 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.454% fee 0bps pond 7201.74878272 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.3215% fee 0bps pond 254.70955971 SWAP.HIVE/24h thin · CENT spread 0.3296% fee 0bps pond 120.74860381 SWAP.HIVE/24h thin · WAIV spread 0.778% fee 0bps pond 5.81070164 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.