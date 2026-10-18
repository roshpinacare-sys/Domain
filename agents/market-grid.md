# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-18T01:08:11.126Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05153216159013527 | 0.05161957270847691 | 0.1695 | -1.025 | 10 | 0.0002063 | 5 |
| SBD/STEEM (internal steem) | 0.10079629069650237 | 0.10105092966855295 | 0.2523 | 0 | 10 | 0.00040369 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.5362% fee 0bps pond 154.3482746 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.4098% fee 0bps pond 5819.75873814 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 0.5385% fee 0bps pond 70.08751248 SWAP.HIVE/24h FEASIBLE · CENT spread 3.5696% fee 0bps pond 25.7282826 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2028% fee 0bps pond 6.347075 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.