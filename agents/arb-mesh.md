# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-03T09:58:52.330Z · Verdict: **MESH-LIVE** · batch: MESH-2026110309-28b30526 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 58740.45 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 2240µ → SBD | P3 | 1680µ SBD | 1447µ (CEX-FAIR (SBD per STEEM)) | 5µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 2067.27124183 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1µ | 862µ | 862 | -58.3bps |
| 1% | 12µ | 10259µ | 854.91666667 | -58.64bps |
| 5% | 61µ | 50629µ | 829.98360656 | -59.85bps |

**P2 WSBD/SBD** (mid 0.1935709 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5480µ | 3982µ | 0.72664233 | 275.38bps |
| 1% | 54803µ | 39446µ | 0.71977811 | 271.84bps |
| 5% | 274018µ | 188378µ | 0.68746579 | 255.14bps |

**P3 STEEM/SBD** (mid 0.7551655 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 560µ | 421µ | 0.75178571 | -0.44bps |
| 1% | 5602µ | 4178µ | 0.74580507 | -1.23bps |
| 5% | 28010µ | 20096µ | 0.71745805 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 342 · Volume in: 4817674µ · Edge captured: -5559974µ · Fees paid (LP revenue): 4779µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 2240µ · edge 1447µ · fees 5µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

