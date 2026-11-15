# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-15T15:49:39.777Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03893247305520933 | 0.03909002766807766 | 0.4039 | -4.31 | 10 | 0.00033631 | 5 |
| SBD/STEEM (internal steem) | 0.10287451061199258 | 0.10329113924050633 | 0.4042 | -0.242 | 10 | 0.00041233 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0009% fee 0bps pond 283.0100561 SWAP.HIVE/24h thin · SWAP.LTC spread 0.7669% fee 0bps pond 5631.06282195 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.823% fee 0bps pond 752.36487146 SWAP.HIVE/24h FEASIBLE · CENT spread 4.3372% fee 0bps pond 471.74562764 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.5742% fee 0bps pond 3.78766765 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.