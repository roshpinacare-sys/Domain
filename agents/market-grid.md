# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-05T22:14:34.112Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04323201812346612 | 0.04335739107190591 | 0.2896 | -5.149 | 10 | 0.00044582 | 5 |
| SBD/STEEM (internal steem) | 0.10225 | 0.10366826156299841 | 1.3775 | 0.012 | 10 | 0.00041184 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4848% fee 0bps pond 346.86894781 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1563% fee 0bps pond 7602.93497912 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.1959% fee 0bps pond 2405.42267045 SWAP.HIVE/24h FEASIBLE · CENT spread 1.4372% fee 0bps pond 496.32236536 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.875% fee 0bps pond 8.25584732 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.