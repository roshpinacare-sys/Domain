# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-11T16:02:00.264Z · Verdict: **MESH-LIVE** · batch: MESH-2026111116-b6f0cf1e · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 294628.14 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1115µ → SBD | P3 | 3418µ SBD | 3305µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 12411.77173913 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 16825µ | 5608.33333333 | -54.81bps |
| 5% | 18µ | 97975µ | 5443.05555555 | -56.14bps |

**P2 WSBD/SBD** (mid 0.08971012 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.91bps |
| 1% | 63145µ | 27450µ | 0.43471375 | 384.57bps |
| 5% | 315728µ | 123578µ | 0.39140653 | 336.3bps |

**P3 STEEM/SBD** (mid 3.08581843 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 278µ | 854µ | 3.07194245 | -0.44bps |
| 1% | 2789µ | 8500µ | 3.04768734 | -1.23bps |
| 5% | 13949µ | 40896µ | 2.93182307 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 901 · Volume in: 12369923µ · Edge captured: -33339003µ · Fees paid (LP revenue): 12506µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1115µ · edge 3305µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

