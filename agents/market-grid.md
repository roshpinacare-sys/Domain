# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-15T02:48:08.999Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03887575894135266 | 0.03899654257457586 | 0.3102 | -8.055 | 10 | 0.00046723 | 6 |
| SBD/STEEM (internal steem) | 0.10310703630939387 | 0.104 | 0.8623 | -0.228 | 10 | 0.00041421 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4667% fee 0bps pond 227.74757164 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0853% fee 0bps pond 17366.14512266 SWAP.HIVE/24h thin · SWAP.DOGE spread 10.9381% fee 0bps pond 167.24179281 SWAP.HIVE/24h FEASIBLE · CENT spread 2.0973% fee 0bps pond 56.53614084 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.6018% fee 0bps pond 3.47669506 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.