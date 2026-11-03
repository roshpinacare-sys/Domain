# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-03T05:44:44.957Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04491447044681134 | 0.04492019907327956 | 0.0128 | -3.173 | 10 | 0.00028508 | 6 |
| SBD/STEEM (internal steem) | 0.10189594752448558 | 0.10631025079694281 | 4.2403 | 0 | 10 | 0.00041641 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5613% fee 0bps pond 1295.04776944 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.166% fee 0bps pond 13310.34878092 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5595% fee 0bps pond 438.27662108 SWAP.HIVE/24h FEASIBLE · CENT spread 2.7714% fee 0bps pond 112.16677665 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4137% fee 0bps pond 0.96754211 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.