# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-12T00:58:33.628Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04308013291090333 | 0.04317761518050977 | 0.226 | 0.518 | 10 | 0.00017252 | 7 |
| SBD/STEEM (internal steem) | 0.10317497537869906 | 0.10364244237198662 | 0.4521 | 0 | 10 | 0.00041363 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0451% fee 0bps pond 923.64564866 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0156% fee 0bps pond 15850.05356448 SWAP.HIVE/24h thin · SWAP.DOGE spread 4.878% fee 0bps pond 49.32542411 SWAP.HIVE/24h FEASIBLE · CENT spread 4.3412% fee 0bps pond 35.36599484 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.0951% fee 0bps pond 2.37003401 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.