# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-12T23:16:57.430Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04304751273285425 | 0.04311609388097234 | 0.1592 | 0.688 | 10 | 0.00017233 | 5 |
| SBD/STEEM (internal steem) | 0.10232503165125208 | 0.10325047801147227 | 0.9003 | 0 | 10 | 0.00041115 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6713% fee 0bps pond 1013.13242549 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.7663% fee 0bps pond 21756.98175214 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.0005% fee 0bps pond 61.68812173 SWAP.HIVE/24h thin · CENT spread 2.0973% fee 0bps pond 46.41220032 SWAP.HIVE/24h FEASIBLE · WAIV spread 4.845% fee 0bps pond 0.97402385 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.