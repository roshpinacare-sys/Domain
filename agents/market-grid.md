# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-12T16:49:57.406Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04253908100426338 | 0.04261065266316579 | 0.1681 | -2.799 | 10 | 0.00023829 | 5 |
| SBD/STEEM (internal steem) | 0.10232503165125208 | 0.10346008907159986 | 1.1031 | 0 | 10 | 0.00041157 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4781% fee 0bps pond 538.72875603 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.335% fee 0bps pond 4575.41019536 SWAP.HIVE/24h thin · SWAP.DOGE spread 5.3828% fee 0bps pond 78.78955672 SWAP.HIVE/24h FEASIBLE · CENT spread 4.2891% fee 0bps pond 60.25096188 SWAP.HIVE/24h FEASIBLE · WAIV spread 4.845% fee 0bps pond 0.63911914 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.