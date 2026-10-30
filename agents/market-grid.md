# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-30T04:44:01.741Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04611738032668625 | 0.0465419464180953 | 0.9164 | -4.659 | 10 | 0.00043171 | 5 |
| SBD/STEEM (internal steem) | 0.10143 | 0.10433117970806413 | 2.8199 | 0 | 10 | 0.00041152 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4538% fee 0bps pond 791.90727737 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.064% fee 0bps pond 4675.32607634 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.5665% fee 0bps pond 1530.98188904 SWAP.HIVE/24h FEASIBLE · CENT spread 1.151% fee 0bps pond 121.01068486 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2028% fee 0bps pond 2.06128903 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.