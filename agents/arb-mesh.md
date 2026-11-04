# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-04T18:06:07.439Z · Verdict: **MESH-LIVE** · batch: MESH-2026110418-cdccfaa7 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 108324.85 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1659µ → SBD | P3 | 2274µ SBD | 2081µ (CEX-FAIR (SBD per STEEM)) | 4µ |

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

**P3 STEEM/SBD** (mid 1.38011944 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 414µ | 569µ | 1.37439614 | -0.41bps |
| 1% | 4149µ | 5655µ | 1.36297903 | -1.24bps |
| 5% | 20746µ | 27203µ | 1.31124072 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 444 · Volume in: 6485141µ · Edge captured: -9741508µ · Fees paid (LP revenue): 6199µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1659µ · edge 2081µ · fees 4µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

