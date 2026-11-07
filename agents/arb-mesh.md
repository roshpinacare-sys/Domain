# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-07T14:14:49.689Z · Verdict: **MESH-LIVE** · batch: MESH-2026110714-abd8e349 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 213279.44 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1237µ → SBD | P3 | 3066µ SBD | 2936µ (CEX-FAIR (SBD per STEEM)) | 3µ |

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

**P3 STEEM/SBD** (mid 2.49537384 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 309µ | 768µ | 2.48543689 | -0.39bps |
| 1% | 3093µ | 7622µ | 2.46427417 | -1.24bps |
| 5% | 15466µ | 36668µ | 2.37087805 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 650 · Volume in: 9092771µ · Edge captured: -19497344µ · Fees paid (LP revenue): 8956µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1237µ · edge 2936µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

