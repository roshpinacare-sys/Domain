# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-22T23:33:48.538Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04900445495045004 | 0.04915354915354915 | 0.3038 | -4.065 | 10 | 0.00039903 | 5 |
| SBD/STEEM (internal steem) | 0.1015056392021779 | 0.10200471698113207 | 0.4905 | 0 | 10 | 0.00040702 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3785% fee 0bps pond 1054.54459581 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0729% fee 0bps pond 5848.14154415 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8625% fee 0bps pond 1483.56145474 SWAP.HIVE/24h FEASIBLE · CENT spread 2.6131% fee 0bps pond 33.97246756 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2942% fee 0bps pond 55.419681 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.