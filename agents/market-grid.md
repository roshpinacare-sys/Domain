# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-17T14:23:22.896Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05198685389901404 | 0.05198915009041592 | 0.0044 | -3.062 | 10 | 0.00031839 | 5 |
| SBD/STEEM (internal steem) | 0.10088609307359307 | 0.10142630744849446 | 0.534 | -0.03 | 10 | 0.00040462 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5544% fee 0bps pond 179.50065235 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4182% fee 0bps pond 10669.05509812 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.6167% fee 0bps pond 479.87896804 SWAP.HIVE/24h FEASIBLE · CENT spread 1.7699% fee 0bps pond 48.80658218 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1977% fee 0bps pond 4.68242368 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.