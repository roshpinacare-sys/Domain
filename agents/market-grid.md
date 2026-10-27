# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-27T21:23:42.191Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04864984024311058 | 0.04870586289589018 | 0.1151 | -0.871 | 10 | 0.00019471 | 5 |
| SBD/STEEM (internal steem) | 0.10140004269133908 | 0.10236220472440945 | 0.9444 | 0 | 10 | 0.00040752 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2459% fee 0bps pond 139.49111222 SWAP.HIVE/24h thin · SWAP.LTC spread 0.6242% fee 0bps pond 16538.00890758 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.9997% fee 0bps pond 90.04598188 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8747% fee 0bps pond 90.37088988 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.5749% fee 0bps pond 2.1797188 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.