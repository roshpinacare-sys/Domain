# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-14T05:19:35.806Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05314009661835749 | 0.05315168377626403 | 0.0218 | -0.399 | 10 | 0.00021258 | 5 |
| SBD/STEEM (internal steem) | 0.10110562547806133 | 0.10218156228008445 | 1.0585 | 0 | 10 | 0.00040657 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2949% fee 0bps pond 375.36497072 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1471% fee 0bps pond 7827.7124134 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.1604% fee 0bps pond 10104.39936827 SWAP.HIVE/24h FEASIBLE · CENT spread 3.0879% fee 0bps pond 81.60337643 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1613% fee 0bps pond 4.63420539 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.