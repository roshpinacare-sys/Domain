# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-04T01:38:18.488Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04446492575524834 | 0.04455966628981326 | 0.2128 | -0.67 | 10 | 0.00017805 | 5 |
| SBD/STEEM (internal steem) | 0.10180900294488851 | 0.10349447664880236 | 1.6419 | 0 | 10 | 0.00041061 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.623% fee 0bps pond 899.52775898 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.3422% fee 0bps pond 11722.16038144 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.7521% fee 0bps pond 475.24608865 SWAP.HIVE/24h FEASIBLE · CENT spread 2.6484% fee 0bps pond 57.41645502 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.4925% fee 0bps pond 26.71783127 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.