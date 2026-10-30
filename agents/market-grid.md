# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-30T02:42:59.478Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04576075258101805 | 0.04608880666873189 | 0.7143 | -3.98 | 10 | 0.00036555 | 5 |
| SBD/STEEM (internal steem) | 0.10142 | 0.10433117970806413 | 2.8298 | 0 | 10 | 0.0004115 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6727% fee 0bps pond 791.90727737 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1574% fee 0bps pond 4519.38772712 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.2576% fee 0bps pond 1203.9247116 SWAP.HIVE/24h FEASIBLE · CENT spread 0.7049% fee 0bps pond 112.01474823 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2132% fee 0bps pond 2.05929564 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.