# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T02:33:36.163Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04966887417218543 | 0.04991235353814927 | 0.489 | 0.413 | 10 | 0.00019916 | 5 |
| SBD/STEEM (internal steem) | 0.10435363359352173 | 0.10439422996748103 | 0.0389 | -0.012 | 10 | 0.0004175 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.411% fee 0bps pond 986.08447352 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4396% fee 0bps pond 7279.18211774 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.0594% fee 0bps pond 3929.57400402 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8705% fee 0bps pond 21.28698039 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.4228% fee 0bps pond 15.96542034 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.