# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-20T08:11:42.289Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03690231739513054 | 0.03694531045132718 | 0.1164 | -2.832 | 10 | 0.00020915 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6224% fee 0bps pond 858.74193206 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1727% fee 0bps pond 35897.81239252 SWAP.HIVE/24h thin · SWAP.DOGE spread 6.4516% fee 0bps pond 371.75985545 SWAP.HIVE/24h FEASIBLE · CENT spread 7.2033% fee 0bps pond 154.56100031 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.1869% fee 0bps pond 5.93541977 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.