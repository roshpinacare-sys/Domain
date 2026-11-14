# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-14T18:30:30.281Z · Verdict: **MESH-LIVE** · batch: MESH-2026111418-d51a99b8 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 353597.73 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1060µ → SBD | P3 | 3610µ SBD | 3511µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 18368.76896552 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 16829µ | 8414.5 | -54.19bps |
| 5% | 14µ | 114239µ | 8159.92857143 | -55.57bps |

**P2 WSBD/SBD** (mid 0.08971477 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.88bps |
| 1% | 63148µ | 27452µ | 0.43472477 | 384.56bps |
| 5% | 315741µ | 123589µ | 0.39142525 | 336.29bps |

**P3 STEEM/SBD** (mid 3.42826503 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 265µ | 905µ | 3.41509434 | -0.38bps |
| 1% | 2652µ | 8979µ | 3.38574661 | -1.24bps |
| 5% | 13264µ | 43204µ | 3.25723764 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1087 · Volume in: 15032041µ · Edge captured: -44558649µ · Fees paid (LP revenue): 15294µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1060µ · edge 3511µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

