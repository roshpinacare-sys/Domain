# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-10T21:52:50.968Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.05567964262922782 | 0.05569245933957614 | 0.023 | 2.063 | 10 | 0.00022978 | 5 |
| SBD/STEEM (internal steem) | 0.1017759910437128 | 0.10193826274228285 | 0.1593 | 0 | 10 | 0.00040743 | 9 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.4169% fee 0bps pond 470.92131267 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.595% fee 0bps pond 12288.26876675 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.7797% fee 0bps pond 842.59588636 SWAP.HIVE/24h FEASIBLE · CENT spread 1.7839% fee 0bps pond 89.20533022 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.2572% fee 0bps pond 16.3988904 SWAP.HIVE/24h thin
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.