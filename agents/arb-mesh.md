# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-06T17:55:07.990Z · Verdict: **MESH-LIVE** · batch: MESH-2026110617-824fbeb6 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 187532.76 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1338µ → SBD | P3 | 2831µ SBD | 2690µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 5546.80417335 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 6µ | 14555µ | 2425.83333333 | -56.26bps |
| 5% | 31µ | 72994µ | 2354.64516129 | -57.54bps |

**P2 WSBD/SBD** (mid 0.09152447 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6292µ | 2847µ | 0.45247934 | 394.38bps |
| 1% | 62929µ | 27833µ | 0.44229211 | 383.25bps |
| 5% | 314646µ | 125467µ | 0.39875606 | 335.68bps |

**P3 STEEM/SBD** (mid 2.13011844 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 334µ | 708µ | 2.11976048 | -0.48bps |
| 1% | 3345µ | 7037µ | 2.10373692 | -1.23bps |
| 5% | 16726µ | 33851µ | 2.02385508 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 581 · Volume in: 8224032µ · Edge captured: -15892259µ · Fees paid (LP revenue): 7989µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1338µ · edge 2690µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

