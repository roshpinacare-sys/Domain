# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T15:37:28.906Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05012741033735215 | 0.05037980339588918 | 0.5022 | 2.964 | 10 | 0.00029788 | 5 |
| SBD/STEEM (internal steem) | 0.10379904504878555 | 0.10405643738977072 | 0.2477 | 0 | 10 | 0.00041571 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6797% fee 0bps pond 900.47750223 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0421% fee 0bps pond 2666.85526513 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0594% fee 0bps pond 339.74341527 SWAP.HIVE/24h FEASIBLE · CENT spread 0.7826% fee 0bps pond 0.53477092 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3194% fee 0bps pond 9.25528746 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.