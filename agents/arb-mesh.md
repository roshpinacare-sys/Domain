# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-15T23:07:22.751Z · Verdict: **MESH-LIVE** · batch: MESH-2026111523-895f09fc · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 321126.19 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1096µ → SBD | P3 | 3498µ SBD | 3392µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 21091.17228464 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 19383µ | 9691.5 | -54.04bps |
| 5% | 13µ | 122238µ | 9402.92307692 | -55.41bps |

**P2 WSBD/SBD** (mid 0.10094273 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6190µ | 3033µ | 0.48998384 | 385.4bps |
| 1% | 61904µ | 29706µ | 0.47987206 | 375.39bps |
| 5% | 309522µ | 134824µ | 0.43558778 | 331.51bps |

**P3 STEEM/SBD** (mid 3.21327655 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 274µ | 877µ | 3.20072993 | -0.39bps |
| 1% | 2742µ | 8701µ | 3.17323122 | -1.24bps |
| 5% | 13713µ | 41865µ | 3.05294246 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1165 · Volume in: 16042885µ · Edge captured: -48367144µ · Fees paid (LP revenue): 16354µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1096µ · edge 3392µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

