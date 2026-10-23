# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T03:29:14.410Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04986057628468995 | 0.04996197718631179 | 0.2032 | -2.649 | 10 | 0.00026443 | 8 |
| SBD/STEEM (internal steem) | 0.10150722854506306 | 0.10182550972024657 | 0.3131 | 0 | 10 | 0.00040667 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3659% fee 0bps pond 741.71625586 SWAP.HIVE/24h thin · SWAP.LTC spread 0.223% fee 0bps pond 4338.14216554 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0494% fee 0bps pond 730.32532186 SWAP.HIVE/24h FEASIBLE · CENT spread 0.162% fee 0bps pond 33.97246756 SWAP.HIVE/24h thin · WAIV spread 0.2942% fee 0bps pond 4.42703134 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.