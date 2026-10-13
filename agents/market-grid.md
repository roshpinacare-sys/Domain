# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T22:19:10.129Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05298534576722781 | 0.05336363636363636 | 0.7114 | -0.172 | 10 | 0.0002127 | 6 |
| SBD/STEEM (internal steem) | 0.1024013540674918 | 0.10421008753647353 | 1.7509 | 0 | 10 | 0.00041322 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5456% fee 0bps pond 362.29054318 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2097% fee 0bps pond 6708.67764901 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.1704% fee 0bps pond 9985.5779213 SWAP.HIVE/24h FEASIBLE · CENT spread 0.5096% fee 0bps pond 72.38329819 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.7277% fee 0bps pond 3.75998726 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.