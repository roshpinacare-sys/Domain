# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-01T20:47:23.346Z · Verdict: **MESH-LIVE** · batch: MESH-2026110120-05996979 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 13146.16 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 4019µ → SBD | P3 | 933µ SBD | 525µ (CEX-FAIR (SBD per STEEM)) | 10µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 502.64508464 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 3µ | 553µ | 184.33333333 | -63.32bps |
| 1% | 33µ | 6026µ | 182.60606061 | -63.67bps |
| 5% | 168µ | 29769µ | 177.19642857 | -64.74bps |

**P2 WSBD/SBD** (mid 0.46451933 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 4341µ | 3988µ | 0.91868233 | 97.77bps |
| 1% | 43419µ | 39804µ | 0.91674152 | 97.35bps |
| 5% | 217097µ | 197089µ | 0.90783843 | 95.43bps |

**P3 STEEM/SBD** (mid 0.23387088 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1004µ | 233µ | 0.23207171 | -0.76bps |
| 1% | 10049µ | 2321µ | 0.23096826 | -1.24bps |
| 5% | 50249µ | 11165µ | 0.22219348 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 235 · Volume in: 2626532µ · Edge captured: -1852504µ · Fees paid (LP revenue): 3070µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 4019µ · edge 525µ · fees 10µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

