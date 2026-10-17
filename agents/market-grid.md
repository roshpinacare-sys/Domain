# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-17T18:12:29.426Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05199682241640789 | 0.0521 | 0.1982 | -2.545 | 10 | 0.00026491 | 6 |
| SBD/STEEM (internal steem) | 0.10062972646256782 | 0.10082414641977952 | 0.193 | 0 | 10 | 0.00040291 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3998% fee 0bps pond 79.44324321 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3358% fee 0bps pond 5758.36506181 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.6167% fee 0bps pond 56.18664331 SWAP.HIVE/24h FEASIBLE · CENT spread 3.5706% fee 0bps pond 24.97666092 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2028% fee 0bps pond 6.47128111 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.