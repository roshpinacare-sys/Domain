# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-05T10:11:31.827Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04584637720611588 | 0.04593577740834719 | 0.1948 | 1.793 | 10 | 0.00018356 | 5 |
| SBD/STEEM (internal steem) | 0.1022961922854547 | 0.10366826156299841 | 1.3323 | 0.012 | 10 | 0.00041193 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0287% fee 0bps pond 758.93631818 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0159% fee 0bps pond 26622.48069216 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.7521% fee 0bps pond 1623.77706226 SWAP.HIVE/24h FEASIBLE · CENT spread 2.3853% fee 0bps pond 567.72678093 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.8592% fee 0bps pond 22.69638033 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.