# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-06T00:09:43.907Z · Verdict: **MESH-LIVE** · batch: MESH-2026110600-0b17b648 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 181813.16 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1388µ → SBD | P3 | 2723µ SBD | 2581µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 4995.57035928 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 6µ | 13049µ | 2174.83333333 | -56.46bps |
| 5% | 33µ | 69654µ | 2110.72727273 | -57.74bps |

**P2 WSBD/SBD** (mid 0.09345337 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6270µ | 2887µ | 0.46044657 | 392.7bps |
| 1% | 62708µ | 28234µ | 0.45024558 | 381.78bps |
| 5% | 313542µ | 127450µ | 0.40648462 | 334.95bps |

**P3 STEEM/SBD** (mid 1.97498143 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 347µ | 682µ | 1.96541787 | -0.48bps |
| 1% | 3472µ | 6772µ | 1.95046083 | -1.24bps |
| 5% | 17363µ | 32580µ | 1.87640385 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 541 · Volume in: 7763453µ · Edge captured: -14083630µ · Fees paid (LP revenue): 7486µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1388µ · edge 2581µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

