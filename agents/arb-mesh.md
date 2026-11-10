# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-10T20:34:50.282Z · Verdict: **MESH-LIVE** · batch: MESH-2026111020-11e99d16 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 281219.63 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1140µ → SBD | P3 | 3341µ SBD | 3226µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 11064.59240506 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 14948µ | 4982.66666667 | -54.96bps |
| 5% | 19µ | 91882µ | 4835.89473684 | -56.29bps |

**P2 WSBD/SBD** (mid 0.08972432 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.83bps |
| 1% | 63143µ | 27453µ | 0.43477503 | 384.56bps |
| 5% | 315716µ | 123592µ | 0.39146575 | 336.29bps |

**P3 STEEM/SBD** (mid 2.9500249 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 285µ | 837µ | 2.93684211 | -0.44bps |
| 1% | 2851µ | 8306µ | 2.91336373 | -1.24bps |
| 5% | 14259µ | 39965µ | 2.80279122 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 855 · Volume in: 11698359µ · Edge captured: -30516023µ · Fees paid (LP revenue): 11806µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1140µ · edge 3226µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

