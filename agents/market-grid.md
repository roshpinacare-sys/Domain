# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-14T00:35:05.169Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05302858583685521 | 0.05307692307692308 | 0.0911 | -0.547 | 10 | 0.00021221 | 5 |
| SBD/STEEM (internal steem) | 0.10282193817937188 | 0.10379904504878555 | 0.9458 | 0 | 10 | 0.00041324 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.246% fee 0bps pond 354.14599168 SWAP.HIVE/24h thin · SWAP.LTC spread 0.4024% fee 0bps pond 7242.39673524 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.1704% fee 0bps pond 9985.5779213 SWAP.HIVE/24h FEASIBLE · CENT spread 0.5087% fee 0bps pond 72.16623201 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.7277% fee 0bps pond 3.76100469 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.