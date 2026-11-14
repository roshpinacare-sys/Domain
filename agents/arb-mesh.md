# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-14T22:38:02.561Z · Verdict: **MESH-LIVE** · batch: MESH-2026111422-52d000d8 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 338349.84 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1089µ → SBD | P3 | 3517µ SBD | 3417µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 18812.68181818 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 17244µ | 8622 | -54.16bps |
| 5% | 14µ | 117022µ | 8358.71428571 | -55.56bps |

**P2 WSBD/SBD** (mid 0.09513378 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6252µ | 2921µ | 0.46721049 | 391.1bps |
| 1% | 62528µ | 28579µ | 0.45705924 | 380.43bps |
| 5% | 312644µ | 129165µ | 0.41313763 | 334.27bps |

**P3 STEEM/SBD** (mid 3.2505936 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 272µ | 881µ | 3.23897059 | -0.35bps |
| 1% | 2724µ | 8745µ | 3.21035242 | -1.23bps |
| 5% | 13624µ | 42076µ | 3.08837346 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1101 · Volume in: 15190199µ · Edge captured: -44914697µ · Fees paid (LP revenue): 15450µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1089µ · edge 3417µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

