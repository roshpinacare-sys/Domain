# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-07T14:47:18.062Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04435994930291508 | 0.04439998520869382 | 0.0902 | 0.472 | 10 | 0.00017752 | 5 |
| SBD/STEEM (internal steem) | 0.10242290748898679 | 0.10389021209028014 | 1.4224 | 0 | 10 | 0.00041263 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9325% fee 0bps pond 278.00640372 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.2487% fee 0bps pond 3276.66275397 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.077% fee 0bps pond 1217.90100065 SWAP.HIVE/24h thin · CENT spread 2.7673% fee 0bps pond 27.18978704 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4662% fee 0bps pond 4.2895997 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.