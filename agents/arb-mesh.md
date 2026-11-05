# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-05T19:08:43.007Z · Verdict: **MESH-LIVE** · batch: MESH-2026110519-1098a896 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 172786.55 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1432µ → SBD | P3 | 2640µ SBD | 2494µ (CEX-FAIR (SBD per STEEM)) | 3µ |

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

**P3 STEEM/SBD** (mid 1.85613325 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 358µ | 662µ | 1.84916201 | -0.37bps |
| 1% | 3581µ | 6564µ | 1.83300754 | -1.24bps |
| 5% | 17906µ | 31577µ | 1.7634871 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 523 · Volume in: 7527171µ · Edge captured: -13163049µ · Fees paid (LP revenue): 7238µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1432µ · edge 2494µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

