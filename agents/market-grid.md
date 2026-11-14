# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-14T22:43:37.125Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03824386183936745 | 0.03875187394539905 | 1.3196 | -9.109 | 10 | 0.00046197 | 1 |
| SBD/STEEM (internal steem) | 0.102501 | 0.10467706013363029 | 2.1007 | -0.228 | 10 | 0.00041436 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.8113% fee 0bps pond 188.33504099 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 2.4246% fee 0bps pond 16045.98822112 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 11.3196% fee 0bps pond 167.24179281 SWAP.HIVE/24h FEASIBLE · CENT spread 4.2891% fee 0bps pond 52.32903552 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.6018% fee 0bps pond 3.39425138 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.