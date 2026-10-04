# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-04T05:27:45.120Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05620542082738944 | 0.0563391317975239 | 0.2376 | -0.073 | 10 | 0.00022509 | 5 |
| SBD/STEEM (internal steem) | 0.10390689941812137 | 0.10435911602209945 | 0.4343 | 0 | 10 | 0.00041653 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0945% fee 0bps pond 1839.32571377 SWAP.HIVE/24h thin · SWAP.LTC spread 0.053% fee 0bps pond 9515.1963846 SWAP.HIVE/24h thin · SWAP.DOGE spread 3.0741% fee 0bps pond 818.12979161 SWAP.HIVE/24h FEASIBLE · CENT spread 3.0326% fee 0bps pond 15.0806549 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.35% fee 0bps pond 15.02342755 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.