# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T11:02:58.870Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04910886505670859 | 0.04931651687938977 | 0.4219 | -4.011 | 10 | 0.0003948 | 5 |
| SBD/STEEM (internal steem) | 0.10105101849251175 | 0.10132499327414582 | 0.2708 | 0.046 | 10 | 0.00040475 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6782% fee 0bps pond 289.55250203 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0947% fee 0bps pond 14791.19365789 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.217% fee 0bps pond 1531.97655498 SWAP.HIVE/24h FEASIBLE · CENT spread 0.4485% fee 0bps pond 303.32911953 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5116% fee 0bps pond 19.12401442 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.