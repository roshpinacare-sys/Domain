# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-03T19:27:23.717Z · Verdict: **MESH-LIVE** · batch: MESH-2026110319-b9a71173 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 80489.32 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1922µ → SBD | P3 | 1961µ SBD | 1743µ (CEX-FAIR (SBD per STEEM)) | 4µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 2694.91552063 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1µ | 1144µ | 1144 | -57.54bps |
| 1% | 10µ | 11338µ | 1133.8 | -57.92bps |
| 5% | 50µ | 55064µ | 1101.28 | -59.13bps |

**P2 WSBD/SBD** (mid 0.14592018 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5796µ | 3653µ | 0.63026225 | 331.92bps |
| 1% | 57962µ | 36020µ | 0.62144163 | 325.87bps |
| 5% | 289810µ | 168331µ | 0.58083227 | 298.04bps |

**P3 STEEM/SBD** (mid 1.02711115 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 480µ | 491µ | 1.02291667 | -0.4bps |
| 1% | 4806µ | 4875µ | 1.01435705 | -1.24bps |
| 5% | 24030µ | 23450µ | 0.9758635 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 381 · Volume in: 5543346µ · Edge captured: -7216643µ · Fees paid (LP revenue): 5362µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1922µ · edge 1743µ · fees 4µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

