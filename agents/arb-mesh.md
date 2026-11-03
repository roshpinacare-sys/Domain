# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-03T15:00:09.096Z · Verdict: **MESH-LIVE** · batch: MESH-2026110315-12b988e8 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 69864.41 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 2056µ → SBD | P3 | 1831µ SBD | 1597µ (CEX-FAIR (SBD per STEEM)) | 5µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 2382.06492335 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1µ | 1002µ | 1002 | -57.93bps |
| 1% | 11µ | 10937µ | 994.27272727 | -58.26bps |
| 5% | 55µ | 53106µ | 965.56363636 | -59.46bps |

**P2 WSBD/SBD** (mid 0.16714931 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5646µ | 3830µ | 0.67835636 | 305.83bps |
| 1% | 56466µ | 37859µ | 0.67047427 | 301.12bps |
| 5% | 282332µ | 178849µ | 0.63347052 | 278.98bps |

**P3 STEEM/SBD** (mid 0.89674539 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 514µ | 459µ | 0.89299611 | -0.41bps |
| 1% | 5142µ | 4554µ | 0.88564761 | -1.23bps |
| 5% | 25711µ | 21906µ | 0.85200887 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 361 · Volume in: 5186617µ · Edge captured: -6406364µ · Fees paid (LP revenue): 5070µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 2056µ · edge 1597µ · fees 5µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

