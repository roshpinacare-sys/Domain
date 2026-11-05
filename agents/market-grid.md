# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-05T08:29:42.155Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04581144860062005 | 0.046 | 0.4107 | 3.711 | 10 | 0.0003407 | 5 |
| SBD/STEEM (internal steem) | 0.1022961922854547 | 0.10366826156299841 | 1.3323 | 0.012 | 10 | 0.00041193 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0016% fee 0bps pond 770.25641957 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3133% fee 0bps pond 26622.48069216 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.7521% fee 0bps pond 1685.41394618 SWAP.HIVE/24h FEASIBLE · CENT spread 2.3853% fee 0bps pond 567.72678093 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.8592% fee 0bps pond 22.69638033 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.