# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-10T21:48:30.157Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04309987567343556 | 0.0431275 | 0.0641 | -0.628 | 10 | 0.00017245 | 5 |
| SBD/STEEM (internal steem) | 0.10231502158701801 | 0.10317460317460317 | 0.8366 | 0 | 10 | 0.00041098 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5251% fee 0bps pond 356.54316829 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0181% fee 0bps pond 13911.80260361 SWAP.HIVE/24h thin · SWAP.DOGE spread 3.5034% fee 0bps pond 291.35855571 SWAP.HIVE/24h FEASIBLE · CENT spread 1.0547% fee 0bps pond 158.98613104 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.156% fee 0bps pond 20.63760071 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.