# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T14:27:53.350Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04975276545853086 | 0.05011933174224344 | 0.7341 | -0.415 | 10 | 0.00019974 | 6 |
| SBD/STEEM (internal steem) | 0.10628247520075579 | 0.10734732824427481 | 0.9969 | -0.02 | 10 | 0.00042726 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5527% fee 0bps pond 428.19889231 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2442% fee 0bps pond 11738.70871919 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6684% fee 0bps pond 784.73350424 SWAP.HIVE/24h FEASIBLE · CENT spread 1.1372% fee 0bps pond 65.54057091 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5572% fee 0bps pond 22.37872696 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.