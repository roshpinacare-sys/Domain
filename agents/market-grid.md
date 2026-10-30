# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-30T06:40:35.779Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04685886713595466 | 0.04689208633093525 | 0.0709 | -2.837 | 10 | 0.00026593 | 7 |
| SBD/STEEM (internal steem) | 0.10143 | 0.10433117970806413 | 2.8199 | 0 | 10 | 0.00041152 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.8608% fee 0bps pond 952.36682405 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0565% fee 0bps pond 4703.69854641 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.1488% fee 0bps pond 1608.69779639 SWAP.HIVE/24h FEASIBLE · CENT spread 0.7097% fee 0bps pond 114.07276567 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2028% fee 0bps pond 2.06933122 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.