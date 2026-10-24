# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T14:38:39.868Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04890076795663303 | 0.04902304797010699 | 0.2497 | -2.052 | 10 | 0.00020091 | 5 |
| SBD/STEEM (internal steem) | 0.102048 | 0.10488777008600797 | 2.7446 | 0 | 10 | 0.00041387 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1187% fee 0bps pond 350.27828005 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.363% fee 0bps pond 9072.03588038 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.2152% fee 0bps pond 3624.61624844 SWAP.HIVE/24h FEASIBLE · CENT spread 0.9808% fee 0bps pond 44.16401665 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3969% fee 0bps pond 7.24552263 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.