# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-03T23:48:15.298Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04517987413506998 | 0.04520003147059016 | 0.0446 | 0.557 | 10 | 0.00018076 | 5 |
| SBD/STEEM (internal steem) | 0.10228136882129278 | 0.1039195461578133 | 1.5889 | 0.141 | 10 | 0.0004124 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8424% fee 0bps pond 908.2195652 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1713% fee 0bps pond 13246.20297095 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.7521% fee 0bps pond 475.24608865 SWAP.HIVE/24h FEASIBLE · CENT spread 2.6484% fee 0bps pond 57.41645502 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1831% fee 0bps pond 25.20841988 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.