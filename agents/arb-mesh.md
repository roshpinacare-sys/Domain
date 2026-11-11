# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-11T12:17:36.651Z · Verdict: **MESH-LIVE** · batch: MESH-2026111112-0be89cd8 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 300718.72 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1106µ → SBD | P3 | 3445µ SBD | 3334µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 12411.77173913 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 16825µ | 5608.33333333 | -54.81bps |
| 5% | 18µ | 97975µ | 5443.05555555 | -56.14bps |

**P2 WSBD/SBD** (mid 0.08971012 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.91bps |
| 1% | 63145µ | 27450µ | 0.43471375 | 384.57bps |
| 5% | 315728µ | 123578µ | 0.39140653 | 336.3bps |

**P3 STEEM/SBD** (mid 3.13538599 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 276µ | 862µ | 3.12318841 | -0.38bps |
| 1% | 2767µ | 8568µ | 3.0964944 | -1.24bps |
| 5% | 13838µ | 41223µ | 2.97897095 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 899 · Volume in: 12367697µ · Edge captured: -33345629µ · Fees paid (LP revenue): 12502µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1106µ · edge 3334µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

