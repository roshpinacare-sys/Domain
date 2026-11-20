# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-20T12:05:35.765Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03660452865169175 | 0.03661239033083819 | 0.0215 | -4.085 | 10 | 0.00029906 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3242% fee 0bps pond 813.79031921 SWAP.HIVE/24h thin · SWAP.LTC spread 1.2038% fee 0bps pond 9864.50802328 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 3.0769% fee 0bps pond 395.25735546 SWAP.HIVE/24h FEASIBLE · CENT spread 7.2033% fee 0bps pond 154.56100031 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.1869% fee 0bps pond 6.10517945 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.