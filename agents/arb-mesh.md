# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-08T21:17:18.838Z · Verdict: **MESH-LIVE** · batch: MESH-2026110821-829671b6 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 259851.56 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1154µ → SBD | P3 | 3290µ SBD | 3174µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 8538.4508547 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 4µ | 15221µ | 3805.25 | -55.43bps |
| 5% | 23µ | 84944µ | 3693.2173913 | -56.74bps |

**P2 WSBD/SBD** (mid 0.08982263 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6313µ | 2811µ | 0.44527166 | 395.72bps |
| 1% | 63130µ | 27473µ | 0.43518137 | 384.48bps |
| 5% | 315650µ | 123693µ | 0.39186757 | 336.26bps |

**P3 STEEM/SBD** (mid 2.86983832 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 288µ | 823µ | 2.85763889 | -0.42bps |
| 1% | 2887µ | 8182µ | 2.83408382 | -1.24bps |
| 5% | 14439µ | 39370µ | 2.72664312 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 750 · Volume in: 10362242µ · Edge captured: -24948442µ · Fees paid (LP revenue): 10381µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1154µ · edge 3174µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

