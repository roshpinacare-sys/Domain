# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-12T11:08:18.317Z · Verdict: **MESH-LIVE** · batch: MESH-2026111211-e6adf3ed · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 313048.47 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1091µ → SBD | P3 | 3499µ SBD | 3390µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 13962.17595308 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 18998µ | 6332.66666667 | -54.64bps |
| 5% | 17µ | 104434µ | 6143.17647059 | -56bps |

**P2 WSBD/SBD** (mid 0.08970592 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.93bps |
| 1% | 63147µ | 27450µ | 0.43469999 | 384.58bps |
| 5% | 315735µ | 123576µ | 0.39139152 | 336.3bps |

**P3 STEEM/SBD** (mid 3.22871978 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 272µ | 875µ | 3.21691176 | -0.36bps |
| 1% | 2729µ | 8702µ | 3.18871381 | -1.23bps |
| 5% | 13645µ | 41858µ | 3.06764383 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 946 · Volume in: 13037212µ · Edge captured: -36169624µ · Fees paid (LP revenue): 13201µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1091µ · edge 3390µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

