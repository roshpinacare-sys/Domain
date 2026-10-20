# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-20T13:41:17.207Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0494702340117387 | 0.04962802939517527 | 0.3185 | 2.64 | 10 | 0.00026158 | 5 |
| SBD/STEEM (internal steem) | 0.10357327809425168 | 0.1039 | 0.315 | -0.121 | 10 | 0.00041495 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6722% fee 0bps pond 428.19889231 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2442% fee 0bps pond 11817.13794048 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.0344% fee 0bps pond 807.91943815 SWAP.HIVE/24h thin · CENT spread 0.4989% fee 0bps pond 66.18546426 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5572% fee 0bps pond 173.55983496 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.