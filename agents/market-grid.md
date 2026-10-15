# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T12:02:59.840Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05196 | 0.0519810977826245 | 0.0406 | -1.803 | 10 | 0.00020788 | 5 |
| SBD/STEEM (internal steem) | 0.10050286352842576 | 0.10221167934138004 | 1.6859 | 0 | 10 | 0.00040543 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.4136% fee 0bps pond 909.63372917 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1262% fee 0bps pond 6402.84345896 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.7857% fee 0bps pond 1556.19789431 SWAP.HIVE/24h FEASIBLE · CENT spread 0.1095% fee 0bps pond 56.98033166 SWAP.HIVE/24h thin · WAIV spread 0.1464% fee 0bps pond 4.2498585 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.