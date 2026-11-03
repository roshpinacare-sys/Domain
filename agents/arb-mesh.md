# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-03T23:37:46.091Z · Verdict: **MESH-LIVE** · batch: MESH-2026110323-e2766b12 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 78295.14 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1804µ → SBD | P3 | 2089µ SBD | 1885µ (CEX-FAIR (SBD per STEEM)) | 4µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 3000.73015873 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 9µ | 11437µ | 1270.77777778 | -57.65bps |
| 5% | 47µ | 57980µ | 1233.61702128 | -58.88bps |

**P2 WSBD/SBD** (mid 0.12977717 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5922µ | 3474µ | 0.58662614 | 352.02bps |
| 1% | 59227µ | 34186µ | 0.57720296 | 344.76bps |
| 5% | 296138µ | 158237µ | 0.53433534 | 311.73bps |

**P3 STEEM/SBD** (mid 1.16595524 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 451µ | 524µ | 1.16186253 | -0.35bps |
| 1% | 4512µ | 5195µ | 1.15137411 | -1.25bps |
| 5% | 22560µ | 24991µ | 1.10775709 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 400 · Volume in: 5876955µ · Edge captured: -8047440µ · Fees paid (LP revenue): 5639µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1804µ · edge 1885µ · fees 4µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

