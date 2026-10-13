# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T15:41:05.725Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10361972951471758 | 0.1037706450607666 | 0.1455 | -0.017 | 10 | 0.00041478 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.835% fee 0bps pond 570.37217502 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.788% fee 0bps pond 7727.04564779 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 2.1704% fee 0bps pond 5421.27116026 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8757% fee 0bps pond 127.3756093 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.7277% fee 0bps pond 8.36615057 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.