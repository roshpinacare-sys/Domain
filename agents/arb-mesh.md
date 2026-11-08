# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-08T11:40:10.832Z · Verdict: **MESH-LIVE** · batch: MESH-2026110811-4928d2a5 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 256822.59 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1179µ → SBD | P3 | 3223µ SBD | 3102µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 7911.21747967 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 4µ | 14063µ | 3515.75 | -55.55bps |
| 5% | 24µ | 81897µ | 3412.375 | -56.86bps |

**P2 WSBD/SBD** (mid 0.08989977 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6312µ | 2813µ | 0.44565906 | 395.72bps |
| 1% | 63120µ | 27489µ | 0.4355038 | 384.43bps |
| 5% | 315603µ | 123773µ | 0.39217941 | 336.24bps |

**P3 STEEM/SBD** (mid 2.75176898 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 294µ | 806µ | 2.7414966 | -0.37bps |
| 1% | 2948µ | 8012µ | 2.71777476 | -1.23bps |
| 5% | 14740µ | 38537µ | 2.61445047 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 717 · Volume in: 9941557µ · Edge captured: -23113082µ · Fees paid (LP revenue): 9910µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1179µ · edge 3102µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

