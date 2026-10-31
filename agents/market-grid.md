# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-31T21:36:39.115Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04715556301392851 | 0.04733405875952122 | 0.3778 | -0.194 | 10 | 0.00018898 | 5 |
| SBD/STEEM (internal steem) | 0.10269641689076241 | 0.10628653732102009 | 3.4358 | 0 | 10 | 0.00041797 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7305% fee 0bps pond 467.28303624 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.337% fee 0bps pond 3821.61062994 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.2686% fee 0bps pond 36.80679322 SWAP.HIVE/24h thin · CENT spread 1.349% fee 0bps pond 100.74313588 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4177% fee 0bps pond 5.26827007 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.