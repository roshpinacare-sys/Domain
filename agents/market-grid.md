# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-21T00:09:55.164Z · Verdict: **PARTIAL** · Markets read: 2 · Errors: 1

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.03639536528998381 | 0.03640160129806222 | 0.0171 | -1.917 | 10 | 0.00014559 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 3.612% fee 0bps pond 403.36537627 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.36% fee 0bps pond 4850.57580732 SWAP.HIVE/24h thin · SWAP.DOGE spread 11.4094% fee 0bps pond 842.61313036 SWAP.HIVE/24h FEASIBLE · CENT spread 5.3089% fee 0bps pond 130.31138727 SWAP.HIVE/24h FEASIBLE · WAIV spread 9.1365% fee 0bps pond 17.5479182 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 10 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 10 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.