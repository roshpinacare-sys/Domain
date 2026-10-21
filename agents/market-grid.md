# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T09:52:08.320Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05059105249154282 | 0.0507996953541508 | 0.4116 | 3.076 | 10 | 0.0003119 | 5 |
| SBD/STEEM (internal steem) | 0.10199383655738313 | 0.10345541071798055 | 1.4228 | -0.004 | 10 | 0.0004109 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0028% fee 0bps pond 199.83819575 SWAP.HIVE/24h thin · SWAP.LTC spread 0.303% fee 0bps pond 7440.57824479 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.8249% fee 0bps pond 235.15008537 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8712% fee 0bps pond 82.90258124 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1297% fee 0bps pond 14.25851002 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.