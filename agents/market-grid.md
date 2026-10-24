# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-24T00:49:06.883Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04952650068733771 | 0.04963636363636364 | 0.2216 | 0.221 | 10 | 0.00019833 | 7 |
| SBD/STEEM (internal steem) | 0.1037483266398929 | 0.10391945343401654 | 0.1648 | 0 | 10 | 0.00041534 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 1.3819% fee 0bps pond 1028.36111869 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.1351% fee 0bps pond 6470.98079265 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.0594% fee 0bps pond 3929.57400402 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8705% fee 0bps pond 21.28698039 SWAP.HIVE/24h FEASIBLE · WAIV spread 4.0766% fee 0bps pond 15.96346845 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.