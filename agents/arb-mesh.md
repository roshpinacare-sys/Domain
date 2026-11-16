# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-16T11:59:07.626Z · Verdict: **MESH-LIVE** · batch: MESH-2026111611-8e6030f4 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 325927.77 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1106µ → SBD | P3 | 3471µ SBD | 3367µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 22299.6744186 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 20524µ | 10262 | -53.98bps |
| 5% | 12µ | 119675µ | 9972.91666667 | -55.27bps |

**P2 WSBD/SBD** (mid 0.10718319 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6127µ | 3145µ | 0.51330178 | 378.9bps |
| 1% | 61271µ | 30827µ | 0.50312546 | 369.4bps |
| 5% | 306357µ | 140539µ | 0.45874258 | 327.99bps |

**P3 STEEM/SBD** (mid 3.15922561 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 276µ | 868µ | 3.14492754 | -0.45bps |
| 1% | 2767µ | 8633µ | 3.11998554 | -1.24bps |
| 5% | 13835µ | 41527µ | 3.00159017 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1195 · Volume in: 16443836µ · Edge captured: -49780660µ · Fees paid (LP revenue): 16776µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1106µ · edge 3367µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

