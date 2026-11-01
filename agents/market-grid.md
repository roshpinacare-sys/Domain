# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-01T23:55:15.383Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0463 | 0.04632822519009806 | 0.0609 | -1.356 | 10 | 0.00018526 | 5 |
| SBD/STEEM (internal steem) | 0.10209081999346618 | 0.10331684372719163 | 1.1937 | 0.233 | 10 | 0.00041082 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.4838% fee 0bps pond 1105.03955585 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1694% fee 0bps pond 22352.38374417 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.7408% fee 0bps pond 225.64862448 SWAP.HIVE/24h FEASIBLE · CENT spread 1.3616% fee 0bps pond 51.7049541 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4178% fee 0bps pond 5.55501819 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.