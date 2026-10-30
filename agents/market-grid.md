# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-30T12:19:46.636Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0472 | 0.04728930923830434 | 0.189 | -1.458 | 10 | 0.00018898 | 5 |
| SBD/STEEM (internal steem) | 0.10143 | 0.10433117970806413 | 2.8199 | 0 | 10 | 0.00041152 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7373% fee 0bps pond 1029.81789176 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0041% fee 0bps pond 7276.96041095 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.4011% fee 0bps pond 2463.75375044 SWAP.HIVE/24h FEASIBLE · CENT spread 1.0193% fee 0bps pond 78.0481539 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.208% fee 0bps pond 1.97278603 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.