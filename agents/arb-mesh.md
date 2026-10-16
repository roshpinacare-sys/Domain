# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-10-16T09:11:35.637Z · Verdict: **GATED-WIRE (edge above floor but no free capital to arm the agents — named, never faked)** · batch: MESH-2026101609-712751c3 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 308521.15 | 100 | dex-core.json (our pool — atomic, no bridge) |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 645.90740741 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 0µ | — | — | — |
| 5% | 2µ | 473µ | 236.5 | -63.38bps |

**P2 WSBD/SBD** (mid 0.37752143 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1831µ | 1624µ | 0.88694702 | 134.93bps |
| 1% | 18318µ | 16193µ | 0.88399388 | 134.15bps |
| 5% | 91592µ | 79826µ | 0.871539 | 130.85bps |

**P3 STEEM/SBD** (mid 3.25996534 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5µ | 16µ | 3.2 | -1.83bps |
| 1% | 51µ | 164µ | 3.21568627 | -1.35bps |
| 5% | 259µ | 802µ | 3.0965251 | -5.01bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 38 · Volume in: 643579µ · Edge captured: -846803µ · Fees paid (LP revenue): 304µ
- acct-00: 20 fills · vol 115614163416347314081739314031401634717441744040437760840434043µ · edge -175760-104-1068223-6166289-30463-158938-155-1588411-7993518-39258µ · fees 5803015073903013010µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

