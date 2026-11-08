# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-08T06:39:53.864Z · Verdict: **MESH-LIVE** · batch: MESH-2026110806-336a8d43 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 249708.54 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1194µ → SBD | P3 | 3176µ SBD | 3053µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 7589.03359684 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 5µ | 16817µ | 3363.4 | -55.68bps |
| 5% | 25µ | 81664µ | 3266.56 | -56.95bps |

**P2 WSBD/SBD** (mid 0.0899531 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6311µ | 2814µ | 0.44588813 | 395.68bps |
| 1% | 63114µ | 27501µ | 0.43573534 | 384.4bps |
| 5% | 315570µ | 123829µ | 0.39239788 | 336.22bps |

**P3 STEEM/SBD** (mid 2.67791459 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 298µ | 795µ | 2.66778523 | -0.37bps |
| 1% | 2987µ | 7900µ | 2.64479411 | -1.23bps |
| 5% | 14939µ | 38009µ | 2.54428007 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 701 · Volume in: 9731286µ · Edge captured: -22200770µ · Fees paid (LP revenue): 9676µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1194µ · edge 3053µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

