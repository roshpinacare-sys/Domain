# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-10T10:36:00.214Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0434103685196752 | 0.04349196344153797 | 0.1878 | 1.941 | 10 | 0.0001738 | 6 |
| SBD/STEEM (internal steem) | 0.1023020507945131 | 0.10317460317460317 | 0.8493 | 0 | 10 | 0.00041095 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2826% fee 0bps pond 241.64007947 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0218% fee 0bps pond 9418.08895195 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.5267% fee 0bps pond 46.80831186 SWAP.HIVE/24h FEASIBLE · CENT spread 0.17% fee 0bps pond 76.82757475 SWAP.HIVE/24h thin · WAIV spread 1.5543% fee 0bps pond 3.06322204 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.