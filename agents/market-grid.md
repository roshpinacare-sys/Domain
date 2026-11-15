# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-15T07:09:05.024Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03895000008219764 | 0.03901034406866701 | 0.1548 | -7.91 | 10 | 0.00046776 | 5 |
| SBD/STEEM (internal steem) | 0.10389395838799646 | 0.10389399115607022 | 0 | -0.343 | 10 | 0.00041558 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0018% fee 0bps pond 226.79337387 SWAP.HIVE/24h thin · SWAP.LTC spread 0.8085% fee 0bps pond 17363.37849993 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 93.3926% fee 0bps pond 744.8023977 SWAP.HIVE/24h FEASIBLE · CENT spread 3.0183% fee 0bps pond 197.65661485 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.5742% fee 0bps pond 4.20866866 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.