# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-17T06:14:55.066Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03877379300934664 | 0.03884000718261806 | 0.1706 | -0.559 | 10 | 0.00015523 | 5 |
| SBD/STEEM (internal steem) | 0.10281642348150662 | 0.10318696148655662 | 0.3597 | 0 | 10 | 0.00041201 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0071% fee 0bps pond 459.77521334 SWAP.HIVE/24h thin · SWAP.LTC spread 0.1088% fee 0bps pond 5740.72656073 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.2788% fee 0bps pond 510.93116401 SWAP.HIVE/24h thin · CENT spread 9.4659% fee 0bps pond 157.94285088 SWAP.HIVE/24h FEASIBLE · WAIV spread 12.5794% fee 0bps pond 0.0375244 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.