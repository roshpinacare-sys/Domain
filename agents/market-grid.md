# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-13T17:12:06.485Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04327999763390612 | 0.04333974912059468 | 0.138 | 1.725 | 10 | 0.00017324 | 5 |
| SBD/STEEM (internal steem) | 0.10639038829879854 | 0.10668429003021149 | 0.2759 | 0 | 10 | 0.00042615 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5354% fee 0bps pond 906.11347347 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.6556% fee 0bps pond 25713.41134275 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.5698% fee 0bps pond 214.90796367 SWAP.HIVE/24h FEASIBLE · CENT spread 6.3647% fee 0bps pond 53.02846709 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.9088% fee 0bps pond 5.75302889 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.