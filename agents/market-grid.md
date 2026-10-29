# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-29T15:11:43.275Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04904805437418022 | 0.049199 | 0.3073 | 2.498 | 10 | 0.00024543 | 7 |
| SBD/STEEM (internal steem) | 0.10140501226743205 | 0.10326797385620914 | 1.8204 | 0 | 10 | 0.00040935 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.3332% fee 0bps pond 1494.27836858 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0311% fee 0bps pond 8238.65722649 SWAP.HIVE/24h thin · SWAP.DOGE spread 0% fee 0bps pond 48.56753547 SWAP.HIVE/24h thin · CENT spread 0.9297% fee 0bps pond 101.92582457 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.182% fee 0bps pond 0.96034986 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.