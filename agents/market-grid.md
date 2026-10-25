# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-25T10:42:03.418Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04937427065309243 | 0.0494834534491745 | 0.2209 | 1.633 | 10 | 0.00019772 | 7 |
| SBD/STEEM (internal steem) | 0.10207823960880195 | 0.1040582726326743 | 1.9211 | 0 | 10 | 0.00041227 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.949% fee 0bps pond 1426.62357655 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.618% fee 0bps pond 11962.68992615 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.6215% fee 0bps pond 1426.12663567 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8682% fee 0bps pond 154.53797324 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.7492% fee 0bps pond 32.18294508 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.