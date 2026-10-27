# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-27T09:19:34.438Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04810390443357652 | 0.04819 | 0.1788 | -0.346 | 10 | 0.00019259 | 5 |
| SBD/STEEM (internal steem) | 0.10205589522877145 | 0.10231481481481482 | 0.2534 | 0 | 10 | 0.00040874 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.198% fee 0bps pond 156.98029894 SWAP.HIVE/24h thin · SWAP.LTC spread 0.042% fee 0bps pond 13068.98229272 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.3082% fee 0bps pond 483.85302582 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3801% fee 0bps pond 65.92254039 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.777% fee 0bps pond 6.19495838 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.