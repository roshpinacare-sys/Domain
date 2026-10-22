# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-22T15:11:41.768Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04944247028550423 | 0.04949370167278107 | 0.1036 | -2.941 | 10 | 0.00029099 | 5 |
| SBD/STEEM (internal steem) | 0.10262725779967159 | 0.10279101429543908 | 0.1594 | 0 | 10 | 0.00041084 | 8 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6077% fee 0bps pond 1126.16670651 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2732% fee 0bps pond 7343.92262911 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8625% fee 0bps pond 2000.73779738 SWAP.HIVE/24h FEASIBLE · CENT spread 0.1249% fee 0bps pond 33.82936021 SWAP.HIVE/24h thin · WAIV spread 0.2683% fee 0bps pond 56.76962612 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.