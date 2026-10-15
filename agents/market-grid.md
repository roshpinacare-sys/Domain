# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-15T00:05:20.279Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0519900004512732 | 0.05199612232308099 | 0.0118 | -0.077 | 10 | 0.00020797 | 5 |
| SBD/STEEM (internal steem) | 0.10007 | 0.10220811385914118 | 2.114 | 0.303 | 10 | 0.00040456 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0027% fee 0bps pond 421.6043005 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0819% fee 0bps pond 5919.60873229 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.1804% fee 0bps pond 5536.59265692 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8379% fee 0bps pond 55.41407028 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.1664% fee 0bps pond 1.57667217 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.