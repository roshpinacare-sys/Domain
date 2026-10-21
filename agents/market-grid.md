# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T08:41:29.490Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10336985734959686 | 0.1033805437816603 | 0.0103 | -0.326 | 10 | 0.0004135 | 9 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0028% fee 0bps pond 199.83819575 SWAP.HIVE/24h thin · SWAP.LTC spread 0.4557% fee 0bps pond 7440.57824479 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.0394% fee 0bps pond 235.15008537 SWAP.HIVE/24h FEASIBLE · CENT spread 0.4346% fee 0bps pond 82.85763008 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1297% fee 0bps pond 14.24402457 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.