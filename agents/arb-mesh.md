# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-10T05:48:42.260Z · Verdict: **MESH-LIVE** · batch: MESH-2026111005-57ae23e8 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 273285.75 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1155µ → SBD | P3 | 3297µ SBD | 3180µ (CEX-FAIR (SBD per STEEM)) | 2µ |

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

**P3 STEEM/SBD** (mid 2.87379599 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 288µ | 824µ | 2.86111111 | -0.44bps |
| 1% | 2888µ | 8197µ | 2.8382964 | -1.23bps |
| 5% | 14441µ | 39430µ | 2.73042033 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 823 · Volume in: 11245551µ · Edge captured: -28654799µ · Fees paid (LP revenue): 11336µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1155µ · edge 3180µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

