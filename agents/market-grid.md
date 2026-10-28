# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-28T19:39:21.810Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04885936153556411 | 0.04887407856205191 | 0.0301 | 0.308 | 10 | 0.00019547 | 6 |
| SBD/STEEM (internal steem) | 0.101352 | 0.10241129032258064 | 1.0397 | 0 | 10 | 0.00040753 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8238% fee 0bps pond 391.43679861 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1026% fee 0bps pond 13321.6960752 SWAP.HIVE/24h thin · SWAP.DOGE spread 0% fee 0bps pond 87.16831524 SWAP.HIVE/24h thin · CENT spread 2.5146% fee 0bps pond 99.08778335 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0017% fee 0bps pond 3.88245766 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.