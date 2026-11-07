# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-07T17:50:43.896Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04428997020854022 | 0.04430064708810354 | 0.0241 | -0.028 | 10 | 0.00017718 | 5 |
| SBD/STEEM (internal steem) | 0.10258994491972342 | 0.10359484802528995 | 0.9748 | -0.053 | 10 | 0.00041237 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.683% fee 0bps pond 243.59064238 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0623% fee 0bps pond 3472.35444692 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.2846% fee 0bps pond 1056.54680467 SWAP.HIVE/24h FEASIBLE · CENT spread 3.699% fee 0bps pond 24.90064103 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4662% fee 0bps pond 3.64154304 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.