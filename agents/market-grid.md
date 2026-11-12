# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-12T03:54:16.396Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04303204669171932 | 0.04309281529448042 | 0.1411 | -0.582 | 10 | 0.00017225 | 5 |
| SBD/STEEM (internal steem) | 0.10230003510896847 | 0.10364244237198662 | 1.3037 | 0 | 10 | 0.00041188 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.0032% fee 0bps pond 924.26014055 SWAP.HIVE/24h thin · SWAP.LTC spread 0.0311% fee 0bps pond 16125.43634085 SWAP.HIVE/24h thin · SWAP.DOGE spread 4.878% fee 0bps pond 49.32542411 SWAP.HIVE/24h FEASIBLE · CENT spread 4.3412% fee 0bps pond 35.36599484 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.0951% fee 0bps pond 2.36820173 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.