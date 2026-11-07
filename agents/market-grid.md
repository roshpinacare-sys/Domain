# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-07T19:32:21.533Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04418184555170857 | 0.04418321349403852 | 0.0031 | -0.714 | 10 | 0.00017673 | 5 |
| SBD/STEEM (internal steem) | 0.10258994491972342 | 0.10359484802528995 | 0.9748 | -0.053 | 10 | 0.00041237 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7974% fee 0bps pond 254.07490487 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0206% fee 0bps pond 4052.65202745 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.2796% fee 0bps pond 1056.54680467 SWAP.HIVE/24h thin · CENT spread 0.9302% fee 0bps pond 43.99301522 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4662% fee 0bps pond 3.69738652 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.