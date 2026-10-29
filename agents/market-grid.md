# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T07:49:09.787Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0479184040028225 | 0.04801417117285102 | 0.1997 | -1.925 | 10 | 0.00019187 | 5 |
| SBD/STEEM (internal steem) | 0.10140001392340804 | 0.10241129032258064 | 0.9924 | 0 | 10 | 0.00040762 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2812% fee 0bps pond 932.38096946 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0067% fee 0bps pond 6809.43319231 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8827% fee 0bps pond 81.29452317 SWAP.HIVE/24h FEASIBLE · CENT spread 1.0276% fee 0bps pond 80.69559817 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1092% fee 0bps pond 1.22287556 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.