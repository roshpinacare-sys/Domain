# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-04T11:10:32.821Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05619998201600575 | 0.05620157820941662 | 0.0028 | 0.228 | 10 | 0.0002248 | 5 |
| SBD/STEEM (internal steem) | 0.10009008107296567 | 0.10435911602209945 | 4.1761 | 0.023 | 10 | 0.0004089 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0011% fee 0bps pond 1791.78699893 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0049% fee 0bps pond 9491.02567033 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.0692% fee 0bps pond 818.12979161 SWAP.HIVE/24h FEASIBLE · CENT spread 1.46% fee 0bps pond 15.72956871 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.35% fee 0bps pond 0.94629283 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.