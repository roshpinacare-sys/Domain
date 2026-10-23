# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T17:25:46.862Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05026904404431829 | 0.05047 | 0.399 | 3.307 | 10 | 0.00033314 | 5 |
| SBD/STEEM (internal steem) | 0.10282708744247206 | 0.104 | 1.1342 | 0 | 10 | 0.00041365 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0244% fee 0bps pond 919.82705047 SWAP.HIVE/24h thin · SWAP.LTC spread 0.769% fee 0bps pond 5630.30958149 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.7628% fee 0bps pond 497.12253376 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8535% fee 0bps pond 21.08128056 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3194% fee 0bps pond 10.19338127 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.