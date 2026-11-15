# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-15T13:21:48.119Z · Verdict: **MESH-LIVE** · batch: MESH-2026111513-16c437ee · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 305446.26 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1124µ → SBD | P3 | 3415µ SBD | 3307µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 19852.62454874 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 18224µ | 9112 | -54.1bps |
| 5% | 13µ | 115015µ | 8847.30769231 | -55.43bps |

**P2 WSBD/SBD** (mid 0.10089289 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6190µ | 3032µ | 0.48982229 | 385.48bps |
| 1% | 61909µ | 29697µ | 0.47968793 | 375.44bps |
| 5% | 309545µ | 134776µ | 0.43540035 | 331.54bps |

**P3 STEEM/SBD** (mid 3.05805641 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 281µ | 856µ | 3.04626334 | -0.38bps |
| 1% | 2810µ | 8487µ | 3.0202847 | -1.23bps |
| 5% | 14051µ | 40825µ | 2.90548715 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1134 · Volume in: 15582349µ · Edge captured: -46327783µ · Fees paid (LP revenue): 15858µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1124µ · edge 3307µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

