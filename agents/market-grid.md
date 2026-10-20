# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T20:19:06.785Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05044104227922539 | 0.05053753560599099 | 0.1911 | 2.616 | 10 | 0.00026417 | 5 |
| SBD/STEEM (internal steem) | 0.10473051121906084 | 0.10540788267644363 | 0.6447 | 0 | 10 | 0.00042028 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6485% fee 0bps pond 344.22422217 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0972% fee 0bps pond 12440.05381748 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.8249% fee 0bps pond 508.3333457 SWAP.HIVE/24h FEASIBLE · CENT spread 2.2719% fee 0bps pond 103.81469323 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.1297% fee 0bps pond 20.73543789 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.