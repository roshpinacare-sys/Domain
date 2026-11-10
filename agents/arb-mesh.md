# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-10T00:01:42.563Z · Verdict: **MESH-LIVE** · batch: MESH-2026111000-04716f0f · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 266725.17 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1163µ → SBD | P3 | 3274µ SBD | 3155µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 9646.04398148 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 4µ | 17264µ | 4316 | -55.25bps |
| 5% | 21µ | 88059µ | 4193.28571428 | -56.52bps |

**P2 WSBD/SBD** (mid 0.08975645 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6313µ | 2810µ | 0.44511326 | 395.91bps |
| 1% | 63138µ | 27459µ | 0.43490449 | 384.53bps |
| 5% | 315693µ | 123624µ | 0.39159563 | 336.28bps |

**P3 STEEM/SBD** (mid 2.83368294 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 290µ | 818µ | 2.82068965 | -0.45bps |
| 1% | 2908µ | 8138µ | 2.79848693 | -1.24bps |
| 5% | 14540µ | 39146µ | 2.69229711 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 807 · Volume in: 11018346µ · Edge captured: -27720573µ · Fees paid (LP revenue): 11101µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1163µ · edge 3155µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

