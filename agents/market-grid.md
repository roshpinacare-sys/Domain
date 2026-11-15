# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-15T13:05:21.839Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03963986494935601 | 0.03969218307006885 | 0.1319 | -5.632 | 10 | 0.00044676 | 5 |
| SBD/STEEM (internal steem) | 0.10302333223792311 | 0.10330708661417323 | 0.275 | -0.242 | 10 | 0.00041266 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0739% fee 0bps pond 280.4958579 SWAP.HIVE/24h thin · SWAP.LTC spread 0.5165% fee 0bps pond 7439.65327885 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 14.7763% fee 0bps pond 744.8023977 SWAP.HIVE/24h FEASIBLE · CENT spread 2.1903% fee 0bps pond 471.74562764 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.5742% fee 0bps pond 4.17414284 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.