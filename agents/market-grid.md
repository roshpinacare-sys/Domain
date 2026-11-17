# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-17T03:02:26.330Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0386809931082948 | 0.03871711418497423 | 0.0933 | -1.22 | 10 | 0.0001548 | 5 |
| SBD/STEEM (internal steem) | 0.10292566479764614 | 0.10342316096139839 | 0.4822 | 0 | 10 | 0.0004127 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4827% fee 0bps pond 528.84549264 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.6557% fee 0bps pond 5666.76356909 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.2788% fee 0bps pond 498.47052175 SWAP.HIVE/24h thin · CENT spread 9.6386% fee 0bps pond 124.98187459 SWAP.HIVE/24h FEASIBLE · WAIV spread 12.628% fee 0bps pond 0.19872506 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.