# market-grid — internal-market sovereignty instrument (Z-60+)

At: 2026-10-27T18:38:22.145Z · Verdict: **MARKET-GRID-LIVE** · Markets read: 3 · Errors: 0

| Market | Bid | Ask | Spread% | 24h% | Grid rungs | Step | Paper fills (snapshot) |
|---|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0.04851432839902511 | 0.04856005935118365 | 0.0942 | 5.48 | 10 | 0.00053198 | 5 |
| SBD/STEEM (internal steem) | 0.10140004269133908 | 0.10236220472440945 | 0.9444 | 0 | 10 | 0.00040752 | 5 |

Hive-Engine basket (keyless RPC, per-token fee measured from the tokens contract): BEE spread 0.4691% fee 0bps pond 116.9421535 SWAP.HIVE/24h FEASIBLE · SWAP.LTC spread 0.063% fee 0bps pond 11287.67474459 SWAP.HIVE/24h thin · SWAP.DOGE spread 1.3082% fee 0bps pond 91.04286594 SWAP.HIVE/24h FEASIBLE · CENT spread 0.8747% fee 0bps pond 90.37088988 SWAP.HIVE/24h FEASIBLE · WAIV spread 3.4972% fee 0bps pond 2.18517304 SWAP.HIVE/24h FEASIBLE
HE daily-history probe: DARK (probed, honest) — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series

Blurt internal market: DARK (probed, honest) — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world

Laws: official sources only (chain nodes + sidechain RPC) · keyless: reads only, executor = owner-gated preview, never broadcast · paper is paper (labeled ledger, never laundered into realized book) · fail-loud per market · single canon (market-grid.json/.md) · the pond law: every venue carries its measured 24h volume (v1.3.0 CR-0062)

Executor preview: 20 prebuilt limit_order_create payloads, ALL stamped OWNER-GATED-NOT-BROADCAST (law 2). Paper fills: 20 rows appended to market-grid-paper.jsonl (law 3).

Sources: api.hive.blog, api.steemit.com (condenser_api), api.hive-engine.com/rpc/contracts — official chain surfaces, keyless reads.