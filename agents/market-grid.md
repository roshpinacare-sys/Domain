# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-13T03:40:34.257Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.0424332576528615 | 0.04271503803393797 | 0.6619 | -1.534 | 10 | 0.0001703 | 5 |
| SBD/STEEM (internal steem) | 0.10232503165125208 | 0.10266315681515162 | 0.3299 | 0 | 10 | 0.00040998 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.9962% fee 0bps pond 1057.49651658 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 1.2919% fee 0bps pond 21138.05720128 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.6088% fee 0bps pond 167.94068979 SWAP.HIVE/24h FEASIBLE · CENT spread 2.2061% fee 0bps pond 45.95518033 SWAP.HIVE/24h FEASIBLE · WAIV spread 6.3093% fee 0bps pond 2.85585029 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.