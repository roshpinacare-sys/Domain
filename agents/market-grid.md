# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-01T03:29:47.959Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04719379440714425 | 0.04727009180222258 | 0.1615 | -1.579 | 10 | 0.00018893 | 5 |
| SBD/STEEM (internal steem) | 0.10146 | 0.11568123393316196 | 13.0986 | 0.215 | 10 | 0.00043428 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5337% fee 0bps pond 486.95093456 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2483% fee 0bps pond 5293.85149019 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6013% fee 0bps pond 108.93179322 SWAP.HIVE/24h FEASIBLE · CENT spread 1.349% fee 0bps pond 100.74315732 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4073% fee 0bps pond 5.538233 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.