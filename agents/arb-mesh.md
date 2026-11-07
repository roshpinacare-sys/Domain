# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-07T20:33:38.437Z · Verdict: **MESH-LIVE** · batch: MESH-2026110720-f92148a5 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 233580.26 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1226µ → SBD | P3 | 3095µ SBD | 2968µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 6992.51123596 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 5µ | 15450µ | 3090 | -55.8bps |
| 5% | 26µ | 78031µ | 3001.19230769 | -57.07bps |

**P2 WSBD/SBD** (mid 0.09010224 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6309µ | 2817µ | 0.44650499 | 395.55bps |
| 1% | 63096µ | 27533µ | 0.43636681 | 384.3bps |
| 5% | 315480µ | 123985µ | 0.39300431 | 336.17bps |

**P3 STEEM/SBD** (mid 2.54137908 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 306µ | 774µ | 2.52941176 | -0.47bps |
| 1% | 3065µ | 7693µ | 2.50995106 | -1.23bps |
| 5% | 15329µ | 37013µ | 2.41457368 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 668 · Volume in: 9307749µ · Edge captured: -20390132µ · Fees paid (LP revenue): 9200µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1226µ · edge 2968µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

