# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-09T12:05:16.990Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0428657120664771 | 0.04292948967666537 | 0.1487 | -1.457 | 10 | 0.00017159 | 6 |
| SBD/STEEM (internal steem) | 0.1022310115838097 | 0.10305438291532158 | 0.8022 | 0 | 10 | 0.00041057 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6049% fee 0bps pond 429.63978182 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.4913% fee 0bps pond 9998.46020143 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.6702% fee 0bps pond 1400.10574631 SWAP.HIVE/24h FEASIBLE · CENT spread 0.416% fee 0bps pond 160.30748131 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5275% fee 0bps pond 31.56597933 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.