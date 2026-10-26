# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-26T14:23:53.015Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04818174784189996 | 0.04820067218624478 | 0.0393 | -2.703 | 10 | 0.00026053 | 5 |
| SBD/STEEM (internal steem) | 0.10206164523372117 | 0.10241704219582139 | 0.3476 | -0.097 | 10 | 0.00040896 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.3384% fee 0bps pond 253.64185333 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1022% fee 0bps pond 6116.40042185 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.1588% fee 0bps pond 865.05106349 SWAP.HIVE/24h thin · CENT spread 2.2346% fee 0bps pond 64.27758085 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.6055% fee 0bps pond 29.08615538 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.