# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-07T12:35:42.599Z · Verdict: **MESH-LIVE** · batch: MESH-2026110712-a37f6629 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 217609.74 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1270µ → SBD | P3 | 2987µ SBD | 2855µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 6393.37037037 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 5µ | 14077µ | 2815.4 | -55.96bps |
| 5% | 28µ | 76498µ | 2732.07142857 | -57.26bps |

**P2 WSBD/SBD** (mid 0.09033219 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6306µ | 2822µ | 0.44751031 | 395.4bps |
| 1% | 63068µ | 27581µ | 0.43732162 | 384.12bps |
| 5% | 315343µ | 124226µ | 0.3939393 | 336.1bps |

**P3 STEEM/SBD** (mid 2.36732656 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 317µ | 747µ | 2.35646688 | -0.45bps |
| 1% | 3175µ | 7423µ | 2.33795275 | -1.24bps |
| 5% | 15876µ | 35708µ | 2.24918115 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 636 · Volume in: 8881941µ · Edge captured: -18596962µ · Fees paid (LP revenue): 8724µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1270µ · edge 2855µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

