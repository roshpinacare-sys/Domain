# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-04T11:29:42.764Z · Verdict: **MESH-LIVE** · batch: MESH-2026110411-3d1da635 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 99524.1 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1646µ → SBD | P3 | 2293µ SBD | 2105µ (CEX-FAIR (SBD per STEEM)) | 4µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 3601.34453781 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 8µ | 12328µ | 1541 | -57.21bps |
| 5% | 41µ | 61355µ | 1496.46341463 | -58.44bps |

**P2 WSBD/SBD** (mid 0.11003709 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6098µ | 3192µ | 0.52345031 | 375.7bps |
| 1% | 60982µ | 31305µ | 0.5133482 | 366.52bps |
| 5% | 304914µ | 143004µ | 0.46899781 | 326.21bps |

**P3 STEEM/SBD** (mid 1.40229326 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 411µ | 574µ | 1.39659367 | -0.4bps |
| 1% | 4116µ | 5700µ | 1.38483965 | -1.24bps |
| 5% | 20582µ | 27422µ | 1.33232922 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 442 · Volume in: 6481830µ · Edge captured: -9745680µ · Fees paid (LP revenue): 6191µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1646µ · edge 2105µ · fees 4µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

