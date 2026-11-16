# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-16T17:44:22.678Z · Verdict: **MESH-LIVE** · batch: MESH-2026111617-62b9b209 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 291531.3 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1128µ → SBD | P3 | 3404µ SBD | 3297µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 22871.35433071 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 21066µ | 10533 | -53.94bps |
| 5% | 12µ | 122765µ | 10230.41666667 | -55.26bps |

**P2 WSBD/SBD** (mid 0.1137011 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6064µ | 3251µ | 0.53611478 | 371.51bps |
| 1% | 60647µ | 31906µ | 0.52609362 | 362.69bps |
| 5% | 303236µ | 146119µ | 0.48186561 | 323.8bps |

**P3 STEEM/SBD** (mid 3.03786 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 282µ | 853µ | 3.0248227 | -0.42bps |
| 1% | 2822µ | 8466µ | 3 | -1.24bps |
| 5% | 14111µ | 40728µ | 2.88625895 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1209 · Volume in: 16615223µ · Edge captured: -50186460µ · Fees paid (LP revenue): 16946µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1128µ · edge 3297µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

