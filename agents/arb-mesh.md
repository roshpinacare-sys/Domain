# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-12T04:07:36.482Z · Verdict: **MESH-LIVE** · batch: MESH-2026111204-9b141f49 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 308319.35 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1098µ → SBD | P3 | 3473µ SBD | 3364µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 13420.11428571 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 18237µ | 6079 | -54.7bps |
| 5% | 17µ | 100338µ | 5902.23529412 | -56.01bps |

**P2 WSBD/SBD** (mid 0.08970657 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.93bps |
| 1% | 63146µ | 27449µ | 0.43469103 | 384.56bps |
| 5% | 315733µ | 123576µ | 0.39139399 | 336.3bps |

**P3 STEEM/SBD** (mid 3.18423754 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 274µ | 869µ | 3.17153285 | -0.39bps |
| 1% | 2747µ | 8639µ | 3.14488533 | -1.23bps |
| 5% | 13737µ | 41559µ | 3.02533304 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 931 · Volume in: 12815194µ · Edge captured: -35215570µ · Fees paid (LP revenue): 12970µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1098µ · edge 3364µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

