# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-25T11:44:33.255Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04931029015379737 | 0.04943524678941668 | 0.2531 | 0.01 | 10 | 0.00019749 | 5 |
| SBD/STEEM (internal steem) | 0.10206122297819209 | 0.1040582726326743 | 1.9378 | 0.305 | 10 | 0.00041224 | 6 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.8077% fee 0bps pond 1518.69376849 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0566% fee 0bps pond 10477.63197727 SWAP.HIVE/24h thin · SWAP.DOGE spread 2.6165% fee 0bps pond 1648.05171583 SWAP.HIVE/24h FEASIBLE · CENT spread 1.8682% fee 0bps pond 154.53797324 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.7492% fee 0bps pond 31.6979385 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.