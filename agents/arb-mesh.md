# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-06T04:38:35.998Z · Verdict: **MESH-LIVE** · batch: MESH-2026110604-978b0c98 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 194442.85 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1346µ → SBD | P3 | 2811µ SBD | 2673µ (CEX-FAIR (SBD per STEEM)) | 3µ |

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

**P3 STEEM/SBD** (mid 2.1024599 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 336µ | 703µ | 2.0922619 | -0.48bps |
| 1% | 3366µ | 6989µ | 2.07635175 | -1.24bps |
| 5% | 16831µ | 33621µ | 1.99756402 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 558 · Volume in: 7991580µ · Edge captured: -15010401µ · Fees paid (LP revenue): 7729µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1346µ · edge 2673µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

