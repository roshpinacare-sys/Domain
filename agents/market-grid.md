# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-22T15:52:08.069Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04917 | 0.0491999877701037 | 0.061 | -4.446 | 10 | 0.00043737 | 5 |
| SBD/STEEM (internal steem) | 0.10150223304912707 | 0.10280095351609059 | 1.2714 | 0 | 10 | 0.00040861 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8101% fee 0bps pond 1136.54321967 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2732% fee 0bps pond 7343.92262911 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8625% fee 0bps pond 1483.56145474 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8766% fee 0bps pond 34.02805755 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2683% fee 0bps pond 56.76962612 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.