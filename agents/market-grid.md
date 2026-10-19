# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-19T02:11:21.907Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04914596273291925 | 0.049307 | 0.3271 | -4.618 | 10 | 0.00045462 | 5 |
| SBD/STEEM (internal steem) | 0.10054293183189222 | 0.10355918797785395 | 2.9556 | -0.021 | 10 | 0.0004082 | 1 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.2205% fee 0bps pond 523.4849066 SWAP.HIVE/24h thin · SWAP.LTC spread 0.3601% fee 0bps pond 14423.98063726 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.217% fee 0bps pond 1939.16724462 SWAP.HIVE/24h FEASIBLE · CENT spread 0.3599% fee 0bps pond 328.1066261 SWAP.HIVE/24h thin · WAIV spread 1.4709% fee 0bps pond 3.24470027 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.