# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T17:19:26.065Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05202793133289639 | 0.05206286836935167 | 0.0671 | -2.708 | 10 | 0.00028185 | 5 |
| SBD/STEEM (internal steem) | 0.10050251256281408 | 0.1044776119402985 | 3.8785 | 0 | 10 | 0.00040996 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1688% fee 0bps pond 940.04614092 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2617% fee 0bps pond 7526.16564871 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.4888% fee 0bps pond 1828.12500792 SWAP.HIVE/24h FEASIBLE · CENT spread 2.3157% fee 0bps pond 99.08150325 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1717% fee 0bps pond 3.91932387 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.