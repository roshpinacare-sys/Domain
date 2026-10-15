# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T01:02:36.090Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05199115044247787 | 0.05211674150096215 | 0.2413 | -1.906 | 10 | 0.00020822 | 5 |
| SBD/STEEM (internal steem) | 0.100061 | 0.1013801501928151 | 1.3097 | 0 | 10 | 0.00040288 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0767% fee 0bps pond 434.89494599 SWAP.HIVE/24h thin · SWAP.LTC spread 0.4852% fee 0bps pond 5435.02571071 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.3215% fee 0bps pond 1111.79090794 SWAP.HIVE/24h thin · CENT spread 0.8379% fee 0bps pond 55.41407028 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1664% fee 0bps pond 1.57667217 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.