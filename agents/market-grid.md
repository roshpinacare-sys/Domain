# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-26T16:50:06.796Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0484099665685913 | 0.04841827150116522 | 0.0172 | -1.848 | 10 | 0.00019366 | 6 |
| SBD/STEEM (internal steem) | 0.10214504596527069 | 0.10241704219582139 | 0.2659 | -0.097 | 10 | 0.00040912 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2809% fee 0bps pond 289.95451784 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1259% fee 0bps pond 10442.46053243 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.3132% fee 0bps pond 610.68662389 SWAP.HIVE/24h thin · CENT spread 1.817% fee 0bps pond 65.38922154 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.6055% fee 0bps pond 5.51112441 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.