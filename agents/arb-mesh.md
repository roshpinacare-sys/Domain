# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-07T15:54:33.857Z · Verdict: **MESH-LIVE** · batch: MESH-2026110715-0c5ffabd · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 225358.94 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1242µ → SBD | P3 | 3054µ SBD | 2924µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 6690.62 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 5µ | 14756µ | 2951.2 | -55.89bps |
| 5% | 27µ | 77363µ | 2865.2962963 | -57.17bps |

**P2 WSBD/SBD** (mid 0.09020475 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6308µ | 2819µ | 0.44689283 | 395.42bps |
| 1% | 63083µ | 27554µ | 0.43678963 | 384.22bps |
| 5% | 315419µ | 124092µ | 0.39341955 | 336.14bps |

**P3 STEEM/SBD** (mid 2.47556228 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 310µ | 764µ | 2.46451613 | -0.44bps |
| 1% | 3105µ | 7591µ | 2.44476651 | -1.24bps |
| 5% | 15528µ | 36522µ | 2.35200927 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 651 · Volume in: 9094013µ · Edge captured: -19494420µ · Fees paid (LP revenue): 8959µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1242µ · edge 2924µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

