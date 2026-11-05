# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-05T20:49:59.488Z · Verdict: **MESH-LIVE** · batch: MESH-2026110520-8fe8911f · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 170137.7 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1438µ → SBD | P3 | 2630µ SBD | 2481µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 4719.91786743 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 6µ | 12299µ | 2049.83333333 | -56.57bps |
| 5% | 34µ | 67639µ | 1989.38235294 | -57.85bps |

**P2 WSBD/SBD** (mid 0.09498283 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6253µ | 2918µ | 0.466656 | 391.3bps |
| 1% | 62536µ | 28544µ | 0.45644109 | 380.55bps |
| 5% | 312684µ | 128996µ | 0.41254429 | 334.33bps |

**P3 STEEM/SBD** (mid 1.8413987 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 359µ | 658µ | 1.83286908 | -0.46bps |
| 1% | 3595µ | 6538µ | 1.818637 | -1.23bps |
| 5% | 17978µ | 31453µ | 1.7495272 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 524 · Volume in: 7528609µ · Edge captured: -13160568µ · Fees paid (LP revenue): 7241µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1438µ · edge 2481µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

