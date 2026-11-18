# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-18T20:52:20.324Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03753955316904785 | 0.03767184431351545 | 0.3518 | -1.725 | 10 | 0.00015042 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0353% fee 0bps pond 458.29585567 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3364% fee 0bps pond 4525.12400093 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9662% fee 0bps pond 70.11944012 SWAP.HIVE/24h FEASIBLE · CENT spread 9.5062% fee 0bps pond 95.59593239 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.6342% fee 0bps pond 12.29296819 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.