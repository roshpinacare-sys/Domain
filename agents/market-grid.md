# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-14T06:41:18.429Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04230204450468768 | 0.04252241828174718 | 0.5196 | 0.747 | 10 | 0.00016965 | 5 |
| SBD/STEEM (internal steem) | 0.10240903638544582 | 0.10379828227621365 | 1.3474 | 0.235 | 10 | 0.00041241 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1252% fee 0bps pond 350.07520209 SWAP.HIVE/24h thin · SWAP.LTC spread 0.8511% fee 0bps pond 7699.827911 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.5698% fee 0bps pond 149.96254877 SWAP.HIVE/24h FEASIBLE · CENT spread 4.2891% fee 0bps pond 26.91230996 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.6475% fee 0bps pond 11.6440678 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.