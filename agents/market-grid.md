# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-02T18:01:18.445Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04511894995898277 | 0.04525913541915452 | 0.3102 | 1.761 | 10 | 0.00018076 | 5 |
| SBD/STEEM (internal steem) | 0.10279012165804619 | 0.10718087855297158 | 4.1823 | 0 | 10 | 0.00041994 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.5371% fee 0bps pond 712.53306656 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.5599% fee 0bps pond 12286.54961845 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.9553% fee 0bps pond 324.78262413 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3616% fee 0bps pond 97.60132103 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4137% fee 0bps pond 0.47118141 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.