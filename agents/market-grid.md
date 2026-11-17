# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-17T11:36:02.889Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03858899119865616 | 0.03859090329978341 | 0.005 | -0.65 | 10 | 0.00015436 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1867% fee 0bps pond 426.90290769 SWAP.HIVE/24h thin · SWAP.LTC spread 3.5959% fee 0bps pond 7517.98191074 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.9274% fee 0bps pond 877.14451629 SWAP.HIVE/24h FEASIBLE · CENT spread 2.3977% fee 0bps pond 127.29868329 SWAP.HIVE/24h FEASIBLE · WAIV spread 10.1618% fee 0bps pond 0.33126067 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.