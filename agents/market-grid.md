# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-17T01:25:35.355Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0524178813593731 | 0.05253413561675538 | 0.2215 | -0.493 | 10 | 0.0002099 | 6 |
| SBD/STEEM (internal steem) | 0.10288277536574826 | 0.104 | 1.0801 | 0.086 | 10 | 0.00041377 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2041% fee 0bps pond 168.6477474 SWAP.HIVE/24h thin · SWAP.LTC spread 0.2236% fee 0bps pond 19012.33618768 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0694% fee 0bps pond 479.87896804 SWAP.HIVE/24h FEASIBLE · CENT spread 1.7699% fee 0bps pond 59.2158058 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.4307% fee 0bps pond 4.8179256 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.