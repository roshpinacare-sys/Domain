# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-08T22:39:19.881Z · Verdict: **MESH-LIVE** · batch: MESH-2026110822-97a7a1b3 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 270935.4 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1159µ → SBD | P3 | 3278µ SBD | 3161µ (CEX-FAIR (SBD per STEEM)) | 2µ |

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

**P3 STEEM/SBD** (mid 2.84706889 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 289µ | 819µ | 2.83391003 | -0.46bps |
| 1% | 2899µ | 8151µ | 2.81165919 | -1.24bps |
| 5% | 14497µ | 39214µ | 2.70497344 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 751 · Volume in: 10363401µ · Edge captured: -24945281µ · Fees paid (LP revenue): 10383µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1159µ · edge 3161µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

