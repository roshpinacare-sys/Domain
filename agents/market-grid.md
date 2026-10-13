# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-13T16:31:32.708Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05290442642562807 | 0.05308678795108858 | 0.3441 | -1.667 | 10 | 0.00021198 | 5 |
| SBD/STEEM (internal steem) | 0.10136928880815985 | 0.10391096317869773 | 2.4763 | 0 | 10 | 0.00041056 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7303% fee 0bps pond 570.37217502 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.376% fee 0bps pond 7546.95690863 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.1704% fee 0bps pond 5456.16533084 SWAP.HIVE/24h FEASIBLE · CENT spread 2.2445% fee 0bps pond 145.15143698 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.7277% fee 0bps pond 7.94067981 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.