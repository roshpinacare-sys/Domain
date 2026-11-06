# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-06T07:11:21.767Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04403266331658291 | 0.04409562039422443 | 0.1429 | -1.83 | 10 | 0.00017626 | 7 |
| SBD/STEEM (internal steem) | 0.10354348826507133 | 0.10407168684169156 | 0.5088 | 0 | 10 | 0.00041523 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.12% fee 0bps pond 413.54247898 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1369% fee 0bps pond 9613.50077606 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.9689% fee 0bps pond 2526.65159613 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8427% fee 0bps pond 21.06847648 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.5092% fee 0bps pond 8.48358488 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.