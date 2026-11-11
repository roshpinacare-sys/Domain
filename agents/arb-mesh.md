# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-11T02:48:33.100Z · Verdict: **MESH-LIVE** · batch: MESH-2026111102-f5b47f84 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 285699.36 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1107µ → SBD | P3 | 3446µ SBD | 3335µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 11943.23607427 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 16175µ | 5391.66666667 | -54.85bps |
| 5% | 18µ | 94237µ | 5235.38888889 | -56.16bps |

**P2 WSBD/SBD** (mid 0.08971356 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.89bps |
| 1% | 63145µ | 27451µ | 0.43472959 | 384.57bps |
| 5% | 315725µ | 123582µ | 0.39142291 | 336.3bps |

**P3 STEEM/SBD** (mid 3.13332731 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 276µ | 861µ | 3.11956522 | -0.43bps |
| 1% | 2768µ | 8565µ | 3.09429191 | -1.24bps |
| 5% | 13840µ | 41201µ | 2.97695087 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 882 · Volume in: 12142682µ · Edge captured: -32404972µ · Fees paid (LP revenue): 12265µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1107µ · edge 3335µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

