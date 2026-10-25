# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-25T08:14:33.967Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04919361374503606 | 0.04932679025758438 | 0.2704 | -0.95 | 10 | 0.00019704 | 5 |
| SBD/STEEM (internal steem) | 0.10206122297819209 | 0.10415415415415416 | 2.0298 | 0 | 10 | 0.00041243 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0082% fee 0bps pond 731.22141156 SWAP.HIVE/24h thin · SWAP.LTC spread 1.5541% fee 0bps pond 8967.72721505 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.6115% fee 0bps pond 704.37519612 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8682% fee 0bps pond 154.53797324 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.7492% fee 0bps pond 32.18297333 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.