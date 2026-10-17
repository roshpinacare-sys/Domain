# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-17T00:42:49.666Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05263783269961977 | 0.05269533615990309 | 0.1092 | -0.373 | 10 | 0.00021067 | 8 |
| SBD/STEEM (internal steem) | 0.10288277536574826 | 0.10351201478743069 | 0.6097 | 0 | 10 | 0.00041279 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2617% fee 0bps pond 168.6477474 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0561% fee 0bps pond 19012.33618768 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6217% fee 0bps pond 479.87896804 SWAP.HIVE/24h FEASIBLE · CENT spread 1.7699% fee 0bps pond 59.2158058 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1062% fee 0bps pond 9.40152529 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.