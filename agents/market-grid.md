# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-15T21:38:58.278Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03926063906003725 | 0.03933499802865028 | 0.1892 | 0.027 | 10 | 0.00015719 | 5 |
| SBD/STEEM (internal steem) | 0.10281429745275267 | 0.10342316096139839 | 0.5904 | 0 | 10 | 0.00041247 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5581% fee 0bps pond 210.82345865 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.7641% fee 0bps pond 3728.69713532 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 3.2929% fee 0bps pond 785.28047745 SWAP.HIVE/24h FEASIBLE · CENT spread 6.5771% fee 0bps pond 475.61845911 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.1402% fee 0bps pond 16.83827121 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.