# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T20:57:57.837Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04850108550048501 | 0.04855446423616892 | 0.11 | -2.52 | 10 | 0.00024456 | 6 |
| SBD/STEEM (internal steem) | 0.10206804536357572 | 0.10345541071798055 | 1.3501 | -0.055 | 10 | 0.00041105 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4705% fee 0bps pond 255.7743489 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4164% fee 0bps pond 5907.53034174 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.5121% fee 0bps pond 185.493377 SWAP.HIVE/24h FEASIBLE · CENT spread 2.1463% fee 0bps pond 107.48072715 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3969% fee 0bps pond 6.30963521 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.