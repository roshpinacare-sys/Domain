# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-13T19:45:30.644Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04330708661417323 | 0.0434003567505143 | 0.2151 | 1.1 | 10 | 0.00017341 | 5 |
| SBD/STEEM (internal steem) | 0.10639038829879854 | 0.1066960264237814 | 0.2869 | 0 | 10 | 0.00042617 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.2131% fee 0bps pond 904.40590886 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.6137% fee 0bps pond 25667.07372753 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.5698% fee 0bps pond 214.90796367 SWAP.HIVE/24h FEASIBLE · CENT spread 6.3647% fee 0bps pond 49.44105816 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.9088% fee 0bps pond 16.61659483 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.