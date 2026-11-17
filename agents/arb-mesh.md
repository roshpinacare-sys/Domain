# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-17T04:44:15.249Z · Verdict: **MESH-LIVE** · batch: MESH-2026111704-9fe54527 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 312150.33 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1121µ → SBD | P3 | 3428µ SBD | 3321µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 23606.19678715 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 21754µ | 10877 | -53.92bps |
| 5% | 12µ | 126726µ | 10560.5 | -55.26bps |

**P2 WSBD/SBD** (mid 0.11393792 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6062µ | 3254µ | 0.53678654 | 371.12bps |
| 1% | 60625µ | 31943µ | 0.52689484 | 362.44bps |
| 5% | 303127µ | 146314µ | 0.48268218 | 323.63bps |

**P3 STEEM/SBD** (mid 3.07829104 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 280µ | 858µ | 3.06428571 | -0.45bps |
| 1% | 2804µ | 8524µ | 3.03994294 | -1.24bps |
| 5% | 14021µ | 41007µ | 2.9246844 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1228 · Volume in: 16857388µ · Edge captured: -51237669µ · Fees paid (LP revenue): 17217µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1121µ · edge 3321µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

