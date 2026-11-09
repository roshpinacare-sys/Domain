# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-09T17:28:52.721Z · Verdict: **MESH-LIVE** · batch: MESH-2026110917-0eb0a3b0 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 263092.53 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1166µ → SBD | P3 | 3261µ SBD | 3141µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 9189.47309417 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 4µ | 16423µ | 4105.75 | -55.32bps |
| 5% | 22µ | 87682µ | 3985.54545455 | -56.62bps |

**P2 WSBD/SBD** (mid 0.08977379 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6313µ | 2810µ | 0.44511326 | 395.81bps |
| 1% | 63136µ | 27463µ | 0.43498163 | 384.53bps |
| 5% | 315682µ | 123642µ | 0.3916663 | 336.28bps |

**P3 STEEM/SBD** (mid 2.81495854 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 291µ | 816µ | 2.80412371 | -0.38bps |
| 1% | 2917µ | 8109µ | 2.77991087 | -1.24bps |
| 5% | 14585µ | 39008µ | 2.67452863 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 790 · Volume in: 10789707µ · Edge captured: -26800796µ · Fees paid (LP revenue): 10864µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1166µ · edge 3141µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

