# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-10T12:53:05.693Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04337930111125987 | 0.04345961401000715 | 0.185 | 0.718 | 10 | 0.00017368 | 5 |
| SBD/STEEM (internal steem) | 0.1023020507945131 | 0.10317460317460317 | 0.8493 | 0 | 10 | 0.00041095 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.6474% fee 0bps pond 256.85050491 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.0307% fee 0bps pond 4491.09648472 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.6268% fee 0bps pond 13.49933198 SWAP.HIVE/24h FEASIBLE · CENT spread 18.1256% fee 0bps pond 159.88958557 SWAP.HIVE/24h FEASIBLE · WAIV spread 1.5543% fee 0bps pond 3.06416521 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.