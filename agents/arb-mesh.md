# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-01T20:08:17.191Z · Verdict: **MESH-LIVE** · batch: MESH-2026110120-4bc8bed0 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 13146.16 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 4003µ → SBD | P3 | 937µ SBD | 530µ (CEX-FAIR (SBD per STEEM)) | 10µ |

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

**P3 STEEM/SBD** (mid 0.2357422 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1000µ | 234µ | 0.234 | -0.73bps |
| 1% | 10009µ | 2330µ | 0.23279049 | -1.25bps |
| 5% | 50049µ | 11210µ | 0.2239805 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 234 · Volume in: 2622513µ · Edge captured: -1853029µ · Fees paid (LP revenue): 3060µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 4003µ · edge 530µ · fees 10µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

