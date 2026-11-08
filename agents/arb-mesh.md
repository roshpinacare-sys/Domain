# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-08T20:10:58.938Z · Verdict: **MESH-LIVE** · batch: MESH-2026110820-98a96fd9 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 260210.16 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1178µ → SBD | P3 | 3226µ SBD | 3106µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 8234.3611691 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 4µ | 14659µ | 3664.75 | -55.49bps |
| 5% | 23µ | 81866µ | 3559.39130435 | -56.77bps |

**P2 WSBD/SBD** (mid 0.08985692 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6312µ | 2812µ | 0.44550063 | 395.78bps |
| 1% | 63125µ | 27480µ | 0.43532673 | 384.46bps |
| 5% | 315629µ | 123728µ | 0.39200454 | 336.25bps |

**P3 STEEM/SBD** (mid 2.75664199 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 294µ | 807µ | 2.74489796 | -0.42bps |
| 1% | 2946µ | 8020µ | 2.72233537 | -1.24bps |
| 5% | 14730µ | 38579µ | 2.61907671 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 736 · Volume in: 10154962µ · Edge captured: -24015860µ · Fees paid (LP revenue): 10151µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1178µ · edge 3106µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

