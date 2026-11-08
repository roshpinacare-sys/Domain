# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-08T17:39:09.585Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0429 | 0.04290001161231487 | 0 | -2.794 | 10 | 0.00023972 | 5 |
| SBD/STEEM (internal steem) | 0.10230999052685273 | 0.10299387354063114 | 0.6662 | -0.05 | 10 | 0.00041061 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.7762% fee 0bps pond 311.8353858 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1223% fee 0bps pond 4966.7627979 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.4591% fee 0bps pond 2394.90885645 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3536% fee 0bps pond 166.76555108 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4107% fee 0bps pond 1.7572649 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.