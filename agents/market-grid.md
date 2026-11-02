# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-02T06:46:47.717Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04622444159524934 | 0.04624373471311526 | 0.0417 | -0.668 | 10 | 0.00018494 | 5 |
| SBD/STEEM (internal steem) | 0.10150002816209776 | 0.10331684372719163 | 1.7741 | 0.498 | 10 | 0.00040963 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5111% fee 0bps pond 1059.91431323 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0002% fee 0bps pond 22253.98951237 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.3474% fee 0bps pond 242.03262412 SWAP.HIVE/24h thin · CENT spread 1.8482% fee 0bps pond 30.5912924 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.3135% fee 0bps pond 3.98758882 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.