# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-11T08:18:59.394Z · Verdict: **MESH-LIVE** · batch: MESH-2026111108-21750d9c · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 296405.13 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1120µ → SBD | P3 | 3404µ SBD | 3292µ (CEX-FAIR (SBD per STEEM)) | 2µ |

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

**P3 STEEM/SBD** (mid 3.05928631 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 280µ | 853µ | 3.04642857 | -0.42bps |
| 1% | 2801µ | 8463µ | 3.02142092 | -1.23bps |
| 5% | 14007µ | 40713µ | 2.90661812 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 885 · Volume in: 12146029µ · Edge captured: -32395054µ · Fees paid (LP revenue): 12271µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1120µ · edge 3292µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

