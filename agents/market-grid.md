# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T23:22:58.499Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04886785993740219 | 0.04916449338356032 | 0.6052 | 0.054 | 10 | 0.00019606 | 6 |
| SBD/STEEM (internal steem) | 0.10403933965577801 | 0.10421447944919675 | 0.1682 | 0 | 10 | 0.00041651 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.562% fee 0bps pond 1028.35552147 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.068% fee 0bps pond 6704.91162285 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0594% fee 0bps pond 3921.11279991 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8705% fee 0bps pond 21.28698039 SWAP.HIVE/24h FEASIBLE · WAIV spread 4.0766% fee 0bps pond 15.93230803 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.