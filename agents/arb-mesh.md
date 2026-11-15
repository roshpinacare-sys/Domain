# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-15T03:00:22.663Z · Verdict: **MESH-LIVE** · batch: MESH-2026111503-ef1bf326 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 349479.93 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1084µ → SBD | P3 | 3540µ SBD | 3441µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 19375.59074733 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 17776µ | 8888 | -54.12bps |
| 5% | 14µ | 120552µ | 8610.85714286 | -55.55bps |

**P2 WSBD/SBD** (mid 0.0951358 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6252µ | 2921µ | 0.46721049 | 391.09bps |
| 1% | 62528µ | 28579µ | 0.45705924 | 380.42bps |
| 5% | 312644µ | 129168µ | 0.41314722 | 334.27bps |

**P3 STEEM/SBD** (mid 3.28746172 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 271µ | 887µ | 3.27306273 | -0.43bps |
| 1% | 2710µ | 8798µ | 3.24649446 | -1.24bps |
| 5% | 13550µ | 42322µ | 3.12339483 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1117 · Volume in: 15416269µ · Edge captured: -45971189µ · Fees paid (LP revenue): 15691µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1084µ · edge 3441µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

