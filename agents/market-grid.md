# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-10T03:23:49.735Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0432 | 0.04326959701378837 | 0.161 | 1.548 | 10 | 0.00017294 | 5 |
| SBD/STEEM (internal steem) | 0.102232 | 0.10366624525916561 | 1.3932 | 0 | 10 | 0.0004118 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.259% fee 0bps pond 294.18795563 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0205% fee 0bps pond 8972.31882003 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.3669% fee 0bps pond 1400.10574631 SWAP.HIVE/24h FEASIBLE · CENT spread 1.841% fee 0bps pond 136.2532762 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5275% fee 0bps pond 2.69853283 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.