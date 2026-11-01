# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-01T13:39:18.508Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04701906522986674 | 0.04710262220783425 | 0.1776 | 0.125 | 10 | 0.00018824 | 5 |
| SBD/STEEM (internal steem) | 0.10999043083251757 | 0.114197956929873 | 3.7536 | 0.15 | 10 | 0.00044838 | 10 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.457% fee 0bps pond 1079.23277942 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0254% fee 0bps pond 22073.76177796 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0004% fee 0bps pond 148.12521388 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8932% fee 0bps pond 51.4787844 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4073% fee 0bps pond 3.58014296 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.