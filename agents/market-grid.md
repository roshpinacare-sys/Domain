# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-25T16:07:56.433Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04939999751024012 | 0.04941087039148612 | 0.022 | 2.906 | 10 | 0.00028715 | 5 |
| SBD/STEEM (internal steem) | 0.10205 | 0.10404855356883268 | 1.9394 | 0 | 10 | 0.0004122 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9071% fee 0bps pond 1438.76819968 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2719% fee 0bps pond 11557.8850091 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9859% fee 0bps pond 1659.16336519 SWAP.HIVE/24h FEASIBLE · CENT spread 1.85% fee 0bps pond 151.57242949 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.8115% fee 0bps pond 55.27197757 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.