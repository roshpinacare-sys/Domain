# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-31T10:11:51.682Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04737981140825475 | 0.04738593982300885 | 0.0129 | 0.367 | 10 | 0.00018953 | 5 |
| SBD/STEEM (internal steem) | 0.10143102049362682 | 0.10414987912973409 | 2.645 | 0 | 10 | 0.00041116 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4774% fee 0bps pond 285.72114609 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1693% fee 0bps pond 4309.13212918 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1952% fee 0bps pond 2463.75375044 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8572% fee 0bps pond 90.66590439 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.281% fee 0bps pond 28.65500815 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.