# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-12T11:48:19.455Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04321227962849675 | 0.04326608389341315 | 0.1244 | -0.601 | 10 | 0.00017296 | 5 |
| SBD/STEEM (internal steem) | 0.10232503165125208 | 0.10363457760314342 | 1.2717 | 0 | 10 | 0.00041192 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.305% fee 0bps pond 661.7445121 SWAP.HIVE/24h thin · SWAP.LTC spread 0.7741% fee 0bps pond 16487.19667222 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 5.4459% fee 0bps pond 78.78955672 SWAP.HIVE/24h FEASIBLE · CENT spread 4.2891% fee 0bps pond 60.1203238 SWAP.HIVE/24h FEASIBLE · WAIV spread 4.845% fee 0bps pond 2.44770019 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.