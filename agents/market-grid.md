# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-17T23:32:52.563Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03876882776686313 | 0.03884711779448621 | 0.2017 | 0.021 | 10 | 0.00015523 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 2.5421% fee 0bps pond 596.8813266 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1239% fee 0bps pond 10586.04410903 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0978% fee 0bps pond 706.27203166 SWAP.HIVE/24h FEASIBLE · CENT spread 4.8185% fee 0bps pond 112.47902224 SWAP.HIVE/24h FEASIBLE · WAIV spread 10.1169% fee 0bps pond 0.5028182 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.