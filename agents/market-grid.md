# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-08T19:58:04.223Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04284978982585571 | 0.04290001161231487 | 0.1171 | -2.852 | 10 | 0.0002446 | 5 |
| SBD/STEEM (internal steem) | 0.10229202037351443 | 0.10310570124407052 | 0.7923 | -0.05 | 10 | 0.0004108 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.4849% fee 0bps pond 291.07951362 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1834% fee 0bps pond 4282.45879967 SWAP.HIVE/24h thin · SWAP.DOGE spread 0.4591% fee 0bps pond 2394.90885645 SWAP.HIVE/24h FEASIBLE · CENT spread 2.6662% fee 0bps pond 123.38320647 SWAP.HIVE/24h FEASIBLE · WAIV spread 5.4107% fee 0bps pond 3.10057885 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.