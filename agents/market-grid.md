# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-04T22:01:02.896Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05694171239258723 | 0.05694705365432567 | 0.0094 | 1.013 | 10 | 0.00022778 | 5 |
| SBD/STEEM (internal steem) | 0.1001001001001001 | 0.10423688011555128 | 4.049 | 0 | 10 | 0.00040867 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4618% fee 0bps pond 889.7668795 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.352% fee 0bps pond 6191.41795236 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.9453% fee 0bps pond 218.19204382 SWAP.HIVE/24h FEASIBLE · CENT spread 2.1309% fee 0bps pond 47.28962566 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4161% fee 0bps pond 4.82526478 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.