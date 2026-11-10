# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-10T04:19:20.254Z · Verdict: **MESH-LIVE** · batch: MESH-2026111004-a7f1099e · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 276721.39 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1150µ → SBD | P3 | 3309µ SBD | 3193µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 10132.6076555 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 4µ | 18164µ | 4541 | -55.18bps |
| 5% | 20µ | 88305µ | 4415.25 | -56.42bps |

**P2 WSBD/SBD** (mid 0.08974306 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2810µ | 0.44504276 | 395.9bps |
| 1% | 63140µ | 27456µ | 0.43484321 | 384.54bps |
| 5% | 315702µ | 123611µ | 0.39154329 | 336.29bps |

**P3 STEEM/SBD** (mid 2.89678666 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 287µ | 828µ | 2.88501742 | -0.4bps |
| 1% | 2876µ | 8228µ | 2.86091794 | -1.23bps |
| 5% | 14383µ | 39586µ | 2.75227699 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 822 · Volume in: 11244396µ · Edge captured: -28657979µ · Fees paid (LP revenue): 11334µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1150µ · edge 3193µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

