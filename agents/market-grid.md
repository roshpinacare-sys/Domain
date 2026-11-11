# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-11T06:06:26.375Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04331611048521813 | 0.04354010161162469 | 0.5158 | 1.823 | 10 | 0.00017371 | 5 |
| SBD/STEEM (internal steem) | 0.1024008590933497 | 0.10317460317460317 | 0.7528 | 0 | 10 | 0.00041115 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.0053% fee 0bps pond 261.24229852 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0117% fee 0bps pond 13324.91302157 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.2578% fee 0bps pond 305.71813668 SWAP.HIVE/24h FEASIBLE · CENT spread 2.0787% fee 0bps pond 143.15447574 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.1508% fee 0bps pond 19.0670704 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.