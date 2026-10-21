# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T15:00:24.118Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05101122636063082 | 0.05108481262327416 | 0.1442 | 0.613 | 10 | 0.00020419 | 6 |
| SBD/STEEM (internal steem) | 0.101002 | 0.104 | 2.9248 | -0.004 | 10 | 0.00041 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5922% fee 0bps pond 208.20916843 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4158% fee 0bps pond 6935.60681524 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.0394% fee 0bps pond 683.50141481 SWAP.HIVE/24h FEASIBLE · CENT spread 1.4235% fee 0bps pond 79.40572979 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1297% fee 0bps pond 4.64977768 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.