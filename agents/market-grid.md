# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-28T21:31:19.279Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04922791846819024 | 0.04956000345906274 | 0.6723 | 0.951 | 10 | 0.00019758 | 6 |
| SBD/STEEM (internal steem) | 0.101352 | 0.10236220472440945 | 0.9918 | 0 | 10 | 0.00040743 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5654% fee 0bps pond 368.0320709 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.3704% fee 0bps pond 10428.07287213 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9132% fee 0bps pond 85.70644028 SWAP.HIVE/24h FEASIBLE · CENT spread 2.5146% fee 0bps pond 99.08778335 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0017% fee 0bps pond 3.88003688 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.