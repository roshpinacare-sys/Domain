# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-15T11:12:18.701Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03947124819491243 | 0.03962036009474434 | 0.3771 | -5.929 | 10 | 0.00046891 | 5 |
| SBD/STEEM (internal steem) | 0.10332893869479236 | 0.10399513182568955 | 0.6427 | -0.242 | 10 | 0.00041465 | 7 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.1404% fee 0bps pond 217.09695109 SWAP.HIVE/24h thin · SWAP.LTC spread 0.6777% fee 0bps pond 7423.12987914 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 14.7763% fee 0bps pond 744.8023977 SWAP.HIVE/24h FEASIBLE · CENT spread 4.4444% fee 0bps pond 482.77280246 SWAP.HIVE/24h FEASIBLE · WAIV spread 13.5742% fee 0bps pond 4.17221733 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.