# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-13T14:19:41.910Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04346373579974504 | 0.04348 | 0.0374 | 2.613 | 10 | 0.00022721 | 5 |
| SBD/STEEM (internal steem) | 0.10269963096599273 | 0.10298146655922644 | 0.2741 | 0 | 10 | 0.00041136 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4254% fee 0bps pond 849.09645981 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.7175% fee 0bps pond 27418.56980371 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.4882% fee 0bps pond 213.37546367 SWAP.HIVE/24h FEASIBLE · CENT spread 6.3647% fee 0bps pond 52.89759341 SWAP.HIVE/24h FEASIBLE · WAIV spread 6.1582% fee 0bps pond 5.37119678 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.