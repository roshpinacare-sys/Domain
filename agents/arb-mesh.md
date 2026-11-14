# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-14T09:16:21.306Z · Verdict: **MESH-LIVE** · batch: MESH-2026111409-527424d8 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 327490.1 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1076µ → SBD | P3 | 3561µ SBD | 3455µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 17342.24333333 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 23735µ | 7911.66666667 | -54.37bps |
| 5% | 15µ | 115219µ | 7681.26666667 | -55.7bps |

**P2 WSBD/SBD** (mid 0.0897116 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.9bps |
| 1% | 63148µ | 27452µ | 0.43472477 | 384.58bps |
| 5% | 315740µ | 123585µ | 0.39141382 | 336.3bps |

**P3 STEEM/SBD** (mid 3.33103382 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 269µ | 892µ | 3.31598513 | -0.45bps |
| 1% | 2690µ | 8849µ | 3.28959108 | -1.24bps |
| 5% | 13452µ | 42573µ | 3.16480821 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1058 · Volume in: 14592569µ · Edge captured: -42593483µ · Fees paid (LP revenue): 14834µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1076µ · edge 3455µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

