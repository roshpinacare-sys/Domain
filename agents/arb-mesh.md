# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-06T11:25:25.832Z · Verdict: **MESH-LIVE** · batch: MESH-2026110611-81fd5f39 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 187532.76 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1368µ → SBD | P3 | 2767µ SBD | 2626µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 5265.80155039 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 6µ | 13787µ | 2297.83333333 | -56.36bps |
| 5% | 32µ | 71365µ | 2230.15625 | -57.64bps |

**P2 WSBD/SBD** (mid 0.09233881 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6283µ | 2864µ | 0.4558332 | 393.65bps |
| 1% | 62835µ | 28003µ | 0.44565927 | 382.63bps |
| 5% | 314177µ | 126309µ | 0.40203134 | 335.38bps |

**P3 STEEM/SBD** (mid 2.03649705 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 342µ | 694µ | 2.02923977 | -0.35bps |
| 1% | 3420µ | 6878µ | 2.01111111 | -1.24bps |
| 5% | 17102µ | 33090µ | 1.93486142 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 562 · Volume in: 7997018µ · Edge captured: -14999831µ · Fees paid (LP revenue): 7741µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1368µ · edge 2626µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

