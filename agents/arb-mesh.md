# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-17T01:22:44.817Z · Verdict: **MESH-LIVE** · batch: MESH-2026111701-1abfae61 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 319097.17 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1112µ → SBD | P3 | 3455µ SBD | 3350µ (CEX-FAIR (SBD per STEEM)) | 2µ |

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

**P3 STEEM/SBD** (mid 3.12775028 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 278µ | 866µ | 3.11510791 | -0.4bps |
| 1% | 2781µ | 8590µ | 3.08881697 | -1.24bps |
| 5% | 13909µ | 41333µ | 2.97167302 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1226 · Volume in: 16855150µ · Edge captured: -51244327µ · Fees paid (LP revenue): 17213µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1112µ · edge 3350µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

