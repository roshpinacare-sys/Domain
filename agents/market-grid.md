# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-25T05:15:46.627Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0499 | 0.04990826310777017 | 0.0166 | 0.403 | 10 | 0.00019962 | 5 |
| SBD/STEEM (internal steem) | 0.10443529332343213 | 0.1155802126675913 | 10.131 | -0.502 | 10 | 0.00044003 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8046% fee 0bps pond 726.69813216 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.9585% fee 0bps pond 7259.28026754 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.2066% fee 0bps pond 566.37465914 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8349% fee 0bps pond 151.06613777 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.7492% fee 0bps pond 32.18308718 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.