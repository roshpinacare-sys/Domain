# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-15T05:09:44.011Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03903093982600007 | 0.03913849004168597 | 0.2752 | -7.835 | 10 | 0.00046902 | 5 |
| SBD/STEEM (internal steem) | 0.10252500222383186 | 0.10389399115607022 | 1.3264 | -0.343 | 10 | 0.00041284 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1119% fee 0bps pond 227.20443363 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1119% fee 0bps pond 17411.80728574 SWAP.HIVE/24h thin · SWAP.DOGE spread 93.3926% fee 0bps pond 480.8023889 SWAP.HIVE/24h FEASIBLE · CENT spread 4.0979% fee 0bps pond 155.18670591 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.5742% fee 0bps pond 4.20866866 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.