# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-14T10:38:27.430Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04190068456859462 | 0.04200411979997141 | 0.2466 | -2.453 | 10 | 0.0002058 | 5 |
| SBD/STEEM (internal steem) | 0.10269709543568464 | 0.10354565422026984 | 0.8229 | 0.235 | 10 | 0.00041249 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1863% fee 0bps pond 254.53846669 SWAP.HIVE/24h thin · SWAP.LTC spread 0.4123% fee 0bps pond 15057.92283693 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.5698% fee 0bps pond 149.96254877 SWAP.HIVE/24h FEASIBLE · CENT spread 1.0627% fee 0bps pond 26.96116889 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.1229% fee 0bps pond 11.68017852 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.