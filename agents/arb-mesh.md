# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-04T00:55:05.443Z · Verdict: **MESH-LIVE** · batch: MESH-2026110400-8ca6adce · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 91720.06 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1812µ → SBD | P3 | 2082µ SBD | 1877µ (CEX-FAIR (SBD per STEEM)) | 4µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 3000.73015873 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 9µ | 11437µ | 1270.77777778 | -57.65bps |
| 5% | 47µ | 57980µ | 1233.61702128 | -58.88bps |

**P2 WSBD/SBD** (mid 0.12977717 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5922µ | 3474µ | 0.58662614 | 352.02bps |
| 1% | 59227µ | 34186µ | 0.57720296 | 344.76bps |
| 5% | 296138µ | 158237µ | 0.53433534 | 311.73bps |

**P3 STEEM/SBD** (mid 1.15670074 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 453µ | 522µ | 1.15231788 | -0.37bps |
| 1% | 4530µ | 5175µ | 1.14238411 | -1.23bps |
| 5% | 22650µ | 24892µ | 1.09898455 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 401 · Volume in: 5878767µ · Edge captured: -8045563µ · Fees paid (LP revenue): 5643µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1812µ · edge 1877µ · fees 4µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

