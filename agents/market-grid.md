# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T22:10:33.506Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04651162790697674 | 0.04684679186444148 | 0.718 | -4.394 | 10 | 0.00041018 | 5 |
| SBD/STEEM (internal steem) | 0.10142 | 0.10433117970806413 | 2.8298 | 0 | 10 | 0.0004115 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.0538% fee 0bps pond 1232.09969004 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.516% fee 0bps pond 4300.88737662 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.7605% fee 0bps pond 86.96462544 SWAP.HIVE/24h FEASIBLE · CENT spread 0.6813% fee 0bps pond 102.3688171 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.208% fee 0bps pond 1.76071944 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.