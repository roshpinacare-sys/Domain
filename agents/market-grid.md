# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-11-05T05:27:58.497Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04562460078474313 | 0.04567008885410432 | 0.0997 | 2.331 | 10 | 0.00021277 | 5 |
| SBD/STEEM (internal steem) | 0.1022961922854547 | 0.10366826156299841 | 1.3323 | 0.012 | 10 | 0.00041193 | 0 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.129% fee 0bps pond 770.09940515 SWAP.HIVE/24h thin · SWAP.LTC spread 0.9971% fee 0bps pond 26761.61622045 SWAP.HIVE/24h FEASIBLE · SWAP.DOGE spread 1.7521% fee 0bps pond 1685.41394618 SWAP.HIVE/24h FEASIBLE · CENT spread 2.3761% fee 0bps pond 178.00978774 SWAP.HIVE/24h FEASIBLE · WAIV spread 0.8592% fee 0bps pond 22.65156607 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.