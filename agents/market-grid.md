# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-16T12:41:36.274Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.1036247953410292 | 0.10372340425531915 | 0.0951 | 0.094 | 10 | 0.0004147 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.2419% fee 0bps pond 302.88420464 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.5188% fee 0bps pond 16049.41525538 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.6905% fee 0bps pond 308.31537311 SWAP.HIVE/24h FEASIBLE · CENT spread 1.5906% fee 0bps pond 94.37753312 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0607% fee 0bps pond 7.51625907 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.