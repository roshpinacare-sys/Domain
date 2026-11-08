# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-08T19:03:27.613Z · Verdict: **MESH-LIVE** · batch: MESH-2026110819-e6a90d5d · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 255275.35 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1173µ → SBD | P3 | 3238µ SBD | 3119µ (CEX-FAIR (SBD per STEEM)) | 2µ |

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

**P3 STEEM/SBD** (mid 2.77869679 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 293µ | 811µ | 2.76791809 | -0.38bps |
| 1% | 2934µ | 8052µ | 2.74437628 | -1.23bps |
| 5% | 14671µ | 38732µ | 2.64003817 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 735 · Volume in: 10153784µ · Edge captured: -24018966µ · Fees paid (LP revenue): 10149µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1173µ · edge 3119µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

