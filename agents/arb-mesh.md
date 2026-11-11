# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-11T10:02:40.995Z · Verdict: **MESH-LIVE** · batch: MESH-2026111110-ca2861b2 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 291558.47 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1102µ → SBD | P3 | 3460µ SBD | 3349µ (CEX-FAIR (SBD per STEEM)) | 2µ |

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

**P3 STEEM/SBD** (mid 3.1604704 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 275µ | 866µ | 3.14909091 | -0.36bps |
| 1% | 2756µ | 8602µ | 3.12119013 | -1.24bps |
| 5% | 13783µ | 41387µ | 3.00275702 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 898 · Volume in: 12366591µ · Edge captured: -33348963µ · Fees paid (LP revenue): 12500µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1102µ · edge 3349µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

