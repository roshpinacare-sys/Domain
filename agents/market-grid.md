# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T13:11:15.393Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10325367518985577 | 0.10372340425531915 | 0.4539 | 0.094 | 10 | 0.00041395 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.1786% fee 0bps pond 315.16432103 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.788% fee 0bps pond 16381.18066611 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.6905% fee 0bps pond 308.31537311 SWAP.HIVE/24h FEASIBLE · CENT spread 3.2086% fee 0bps pond 94.97871879 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0607% fee 0bps pond 7.51625907 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.