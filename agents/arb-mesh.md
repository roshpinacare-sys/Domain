# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-10-18T00:11:30.359Z · Verdict: **MESH-LIVE** · batch: MESH-2026101800-3eb5460b · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 14854.66 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 3890µ → SBD | P3 | 962µ SBD | 570µ (CEX-FAIR (SBD per STEEM)) | 9µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 62.01053138 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 16µ | 248µ | 15.5 | -75bps |
| 1% | 166µ | 2563µ | 15.43975904 | -75.1bps |
| 5% | 830µ | 12437µ | 14.98433735 | -75.83bps |

**P2 WSBD/SBD** (mid 0.65814678 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 3816µ | 3664µ | 0.96016771 | 45.88bps |
| 1% | 38161µ | 36596µ | 0.95898954 | 45.71bps |
| 5% | 190806µ | 181971µ | 0.95369642 | 44.9bps |

**P3 STEEM/SBD** (mid 0.24893666 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 972µ | 241µ | 0.24794239 | -0.39bps |
| 1% | 9726µ | 2391µ | 0.2458359 | -1.24bps |
| 5% | 48632µ | 11502µ | 0.23651094 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 62 · Volume in: 1144834µ · Edge captured: -899191µ · Fees paid (LP revenue): 986µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 3890µ · edge 570µ · fees 9µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

