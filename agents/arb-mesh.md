# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-06T23:29:39.272Z · Verdict: **MESH-LIVE** · batch: MESH-2026110623-2e135a2f · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 205005.19 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1307µ → SBD | P3 | 2899µ SBD | 2763µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 5826.33499171 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 6µ | 15316µ | 2552.66666667 | -56.18bps |
| 5% | 30µ | 74365µ | 2478.83333333 | -57.45bps |

**P2 WSBD/SBD** (mid 0.09092779 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6299µ | 2835µ | 0.45007144 | 394.97bps |
| 1% | 62998µ | 27708µ | 0.43982349 | 383.7bps |
| 5% | 314993µ | 124848µ | 0.39635166 | 335.89bps |

**P3 STEEM/SBD** (mid 2.23289495 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 326µ | 725µ | 2.22392638 | -0.4bps |
| 1% | 3268µ | 7206µ | 2.20501836 | -1.24bps |
| 5% | 16340µ | 34665µ | 2.12148103 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 599 · Volume in: 8445529µ · Edge captured: -16797162µ · Fees paid (LP revenue): 8232µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1307µ · edge 2763µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

