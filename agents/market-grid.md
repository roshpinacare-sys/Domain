# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-05T12:32:59.349Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04580350211334426 | 0.04592656651851329 | 0.2683 | 1.493 | 10 | 0.00018346 | 5 |
| SBD/STEEM (internal steem) | 0.10229173636667782 | 0.10366826156299841 | 1.3367 | 0.012 | 10 | 0.00041192 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0004% fee 0bps pond 758.93631818 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0815% fee 0bps pond 26413.54717249 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.7521% fee 0bps pond 1965.46260413 SWAP.HIVE/24h FEASIBLE · CENT spread 2.3863% fee 0bps pond 496.32236536 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.8382% fee 0bps pond 8.34390465 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.