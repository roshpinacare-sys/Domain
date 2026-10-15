# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T14:41:33.622Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05184 | 0.05190000493390083 | 0.1157 | -0.956 | 10 | 0.00020748 | 5 |
| SBD/STEEM (internal steem) | 0.1005002857465932 | 0.10212418300653595 | 1.6029 | 0 | 10 | 0.00040525 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6448% fee 0bps pond 913.18348343 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0839% fee 0bps pond 3095.77629551 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.01% fee 0bps pond 1750.5103837 SWAP.HIVE/24h FEASIBLE · CENT spread 0.2179% fee 0bps pond 76.79986681 SWAP.HIVE/24h thin · WAIV spread 0.1414% fee 0bps pond 4.25290391 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.