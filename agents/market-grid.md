# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T23:22:56.225Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04667292236138876 | 0.04678362573099415 | 0.2369 | -6.884 | 10 | 0.00056074 | 5 |
| SBD/STEEM (internal steem) | 0.10142 | 0.10433117970806413 | 2.8298 | 0 | 10 | 0.0004115 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5491% fee 0bps pond 1130.69000895 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.3472% fee 0bps pond 4264.10229311 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.7605% fee 0bps pond 86.96462544 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3663% fee 0bps pond 102.3688171 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.208% fee 0bps pond 1.76119384 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.