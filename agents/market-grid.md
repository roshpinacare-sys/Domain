# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T08:10:56.021Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05370722433460076 | 0.05406384606094763 | 0.6618 | 3.36 | 10 | 0.00036212 | 5 |
| SBD/STEEM (internal steem) | 0.10316404114181961 | 0.10432968179447052 | 1.1235 | 0 | 10 | 0.00041499 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0445% fee 0bps pond 256.9091794 SWAP.HIVE/24h thin · SWAP.LTC spread 0.554% fee 0bps pond 10440.53666655 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.1754% fee 0bps pond 301.98105516 SWAP.HIVE/24h FEASIBLE · CENT spread 0.3273% fee 0bps pond 108.15301212 SWAP.HIVE/24h thin · WAIV spread 0.1919% fee 0bps pond 10.17051708 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.