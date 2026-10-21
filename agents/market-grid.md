# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-21T00:10:46.665Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05086393896327324 | 0.05102602405849516 | 0.3182 | 6.248 | 10 | 0.00061134 | 5 |
| SBD/STEEM (internal steem) | 0.10505796122056453 | 0.1052576124749763 | 0.1899 | 0 | 10 | 0.00042063 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1553% fee 0bps pond 264.69800792 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0358% fee 0bps pond 10259.69248356 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0394% fee 0bps pond 508.3333457 SWAP.HIVE/24h FEASIBLE · CENT spread 2.2719% fee 0bps pond 103.81469323 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1297% fee 0bps pond 15.47114044 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.