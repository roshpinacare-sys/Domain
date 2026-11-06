# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-06T06:52:39.743Z · Verdict: **MESH-LIVE** · batch: MESH-2026110606-3bd40679 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 190981.36 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1351µ → SBD | P3 | 2799µ SBD | 2659µ (CEX-FAIR (SBD per STEEM)) | 3µ |

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

**P3 STEEM/SBD** (mid 2.08577008 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 337µ | 700µ | 2.07715133 | -0.41bps |
| 1% | 3379µ | 6960µ | 2.059781 | -1.24bps |
| 5% | 16899µ | 33489µ | 1.98171489 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 559 · Volume in: 7992931µ · Edge captured: -15007742µ · Fees paid (LP revenue): 7732µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1351µ · edge 2659µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

