# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T17:30:31.696Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05055051589225123 | 0.05080195011658305 | 0.4962 | 3.526 | 10 | 0.00035736 | 5 |
| SBD/STEEM (internal steem) | 0.1013890297069857 | 0.10205877177547071 | 0.6584 | 0 | 10 | 0.0004069 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1202% fee 0bps pond 351.16867235 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.5627% fee 0bps pond 12204.93355836 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.6734% fee 0bps pond 467.81595889 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8395% fee 0bps pond 103.81469323 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1245% fee 0bps pond 20.82842396 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.