# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-22T06:13:05.963Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04990191270230505 | 0.05001477541371158 | 0.2259 | -0.206 | 10 | 0.00019983 | 5 |
| SBD/STEEM (internal steem) | 0.10184336490477645 | 0.1018452441635233 | 0.0018 | 0 | 10 | 0.00040738 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6844% fee 0bps pond 653.8327527 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.257% fee 0bps pond 8108.60409157 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.8625% fee 0bps pond 2000.73779738 SWAP.HIVE/24h FEASIBLE · CENT spread 1.7494% fee 0bps pond 42.30809644 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2419% fee 0bps pond 56.45166517 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.