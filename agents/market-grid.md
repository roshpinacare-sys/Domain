# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-23T18:35:52.174Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05019422652144109 | 0.05025 | 0.1111 | 2.763 | 10 | 0.00027754 | 5 |
| SBD/STEEM (internal steem) | 0.10353241924238903 | 0.10411244143675169 | 0.5587 | 0 | 10 | 0.00041529 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6484% fee 0bps pond 1043.66933999 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.869% fee 0bps pond 5731.11770789 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.7628% fee 0bps pond 1249.68279852 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8535% fee 0bps pond 21.08128056 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.3194% fee 0bps pond 10.19164178 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.