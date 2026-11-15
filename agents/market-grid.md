# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-15T16:33:50.328Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.039200006272001 | 0.03920784156831366 | 0.02 | -2.623 | 10 | 0.00020568 | 6 |
| SBD/STEEM (internal steem) | 0.10287451061199258 | 0.10329113924050633 | 0.4042 | -0.242 | 10 | 0.00041233 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0499% fee 0bps pond 283.87551426 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3438% fee 0bps pond 5516.21121073 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6529% fee 0bps pond 753.61547685 SWAP.HIVE/24h FEASIBLE · CENT spread 4.2817% fee 0bps pond 459.99154776 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.5742% fee 0bps pond 3.78947835 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.