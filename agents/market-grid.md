# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T16:41:02.917Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04800261951538965 | 0.04811913574933287 | 0.2424 | -4.555 | 10 | 0.00043781 | 5 |
| SBD/STEEM (internal steem) | 0.10206164523372117 | 0.10400416016640665 | 1.8853 | -0.131 | 10 | 0.00041213 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.6533% fee 0bps pond 383.36740813 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0544% fee 0bps pond 8415.7512251 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.0644% fee 0bps pond 3537.36382861 SWAP.HIVE/24h FEASIBLE · CENT spread 0.9808% fee 0bps pond 44.03338815 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3969% fee 0bps pond 7.24552263 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.