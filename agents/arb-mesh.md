# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-09T06:09:41.880Z · Verdict: **MESH-LIVE** · batch: MESH-2026110906-33674bec · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 275015.98 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1160µ → SBD | P3 | 3276µ SBD | 3161µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 8856.2166302 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 4µ | 15807µ | 3951.75 | -55.37bps |
| 5% | 22µ | 84455µ | 3838.86363636 | -56.65bps |

**P2 WSBD/SBD** (mid 0.08979536 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6313µ | 2811µ | 0.44527166 | 395.87bps |
| 1% | 63133µ | 27467µ | 0.43506565 | 384.5bps |
| 5% | 315668µ | 123664µ | 0.39175336 | 336.27bps |

**P3 STEEM/SBD** (mid 2.84304942 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 290µ | 821µ | 2.83103448 | -0.42bps |
| 1% | 2902µ | 8148µ | 2.80771881 | -1.24bps |
| 5% | 14510µ | 39194µ | 2.7011716 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 770 · Volume in: 10576039µ · Edge captured: -25871806µ · Fees paid (LP revenue): 10623µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1160µ · edge 3161µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

