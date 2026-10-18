# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T18:55:35.031Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04960732244759591 | 0.04992834179029322 | 0.645 | -3.635 | 10 | 0.00036185 | 5 |
| SBD/STEEM (internal steem) | 0.10433572919081846 | 0.1044 | 0.0616 | -0.061 | 10 | 0.00041747 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.574% fee 0bps pond 590.53865515 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0298% fee 0bps pond 8499.93159118 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.6054% fee 0bps pond 1625.86704406 SWAP.HIVE/24h FEASIBLE · CENT spread 0.0613% fee 0bps pond 302.58174769 SWAP.HIVE/24h thin · WAIV spread 0.1977% fee 0bps pond 2.63951573 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.