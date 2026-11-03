# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-03T07:41:33.237Z · Verdict: **MESH-LIVE** · batch: MESH-2026110307-2c7e7ebb · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 59290.79 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 2231µ → SBD | P3 | 1687µ SBD | 1443µ (CEX-FAIR (SBD per STEEM)) | 5µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 2067.27124183 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1µ | 862µ | 862 | -58.3bps |
| 1% | 12µ | 10259µ | 854.91666667 | -58.64bps |
| 5% | 61µ | 50629µ | 829.98360656 | -59.85bps |

**P2 WSBD/SBD** (mid 0.1935709 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5480µ | 3982µ | 0.72664233 | 275.38bps |
| 1% | 54803µ | 39446µ | 0.71977811 | 271.84bps |
| 5% | 274018µ | 188378µ | 0.68746579 | 255.14bps |

**P3 STEEM/SBD** (mid 0.76120837 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 557µ | 422µ | 0.75763016 | -0.47bps |
| 1% | 5579µ | 4194µ | 0.75174763 | -1.24bps |
| 5% | 27898µ | 20176µ | 0.72320596 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 341 · Volume in: 4815434µ · Edge captured: -5561421µ · Fees paid (LP revenue): 4774µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 2231µ · edge 1443µ · fees 5µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

