# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-31T23:49:36.920Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04699786448590395 | 0.04714360481500866 | 0.3096 | -1.445 | 10 | 0.00018828 | 6 |
| SBD/STEEM (internal steem) | 0.10146 | 0.10740740740740741 | 5.6949 | 0 | 10 | 0.00041773 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4313% fee 0bps pond 464.04170187 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.5995% fee 0bps pond 5271.20783435 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.8135% fee 0bps pond 108.93179322 SWAP.HIVE/24h FEASIBLE · CENT spread 1.349% fee 0bps pond 100.74313588 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4073% fee 0bps pond 5.26698049 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.