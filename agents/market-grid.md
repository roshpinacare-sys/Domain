# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-02T09:45:58.351Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.046 | 0.04603836530442035 | 0.0834 | -3.498 | 10 | 0.00032193 | 5 |
| SBD/STEEM (internal steem) | 0.10162162162162162 | 0.10318622600435384 | 1.5279 | 0.498 | 10 | 0.00040962 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.2195% fee 0bps pond 1121.23891235 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.041% fee 0bps pond 21675.09393722 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.3474% fee 0bps pond 252.09437412 SWAP.HIVE/24h thin · CENT spread 1.4462% fee 0bps pond 46.69976157 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1412% fee 0bps pond 3.98758882 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.