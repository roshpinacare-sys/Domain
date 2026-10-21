# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T07:11:29.009Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05072250073724565 | 0.05075 | 0.0542 | 3.579 | 10 | 0.00036317 | 5 |
| SBD/STEEM (internal steem) | 0.10375596596804317 | 0.10389716384411345 | 0.136 | -0.028 | 10 | 0.00041531 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0028% fee 0bps pond 224.35882119 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1385% fee 0bps pond 9129.5204994 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0394% fee 0bps pond 196.16181098 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8535% fee 0bps pond 83.77287127 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1297% fee 0bps pond 14.24402457 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.