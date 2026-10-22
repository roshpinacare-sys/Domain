# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-22T04:11:14.581Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05013022620147616 | 0.0506 | 0.9327 | -0.325 | 10 | 0.00020146 | 6 |
| SBD/STEEM (internal steem) | 0.10102335345053792 | 0.10206375153248876 | 1.0246 | 0 | 10 | 0.00040617 | 1 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8888% fee 0bps pond 645.72489741 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.06% fee 0bps pond 8034.80703838 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8625% fee 0bps pond 1716.66001825 SWAP.HIVE/24h FEASIBLE · CENT spread 1.7494% fee 0bps pond 42.15913704 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.2277% fee 0bps pond 56.45166517 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.