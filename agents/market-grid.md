# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-22T09:41:39.413Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0.10175010175010175 | 0.10175188429415359 | 0.0018 | 0 | 10 | 0.000407 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.7064% fee 0bps pond 697.58628839 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.12% fee 0bps pond 7024.41310155 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8625% fee 0bps pond 2000.73779738 SWAP.HIVE/24h FEASIBLE · CENT spread 1.2976% fee 0bps pond 42.30809644 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.0258% fee 0bps pond 56.40331348 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.