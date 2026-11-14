# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-14T11:10:53.435Z · Verdict: **MESH-LIVE** · batch: MESH-2026111411-16ab4dcd · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 336789.71 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1062µ → SBD | P3 | 3609µ SBD | 3505µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 17848.18305085 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 16335µ | 8167.5 | -54.23bps |
| 5% | 14µ | 110968µ | 7926.28571428 | -55.59bps |

**P2 WSBD/SBD** (mid 0.0897131 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.89bps |
| 1% | 63148µ | 27452µ | 0.43472477 | 384.57bps |
| 5% | 315740µ | 123587µ | 0.39142015 | 336.3bps |

**P3 STEEM/SBD** (mid 3.42115313 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 265µ | 903µ | 3.40754717 | -0.39bps |
| 1% | 2655µ | 8970µ | 3.37853107 | -1.24bps |
| 5% | 13276µ | 43153µ | 3.25045194 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1071 · Volume in: 14811089µ · Edge captured: -43568811µ · Fees paid (LP revenue): 15061µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1062µ · edge 3505µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

