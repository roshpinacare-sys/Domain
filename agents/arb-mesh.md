# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-10-17T00:41:18.694Z · Verdict: **MESH-LIVE** · batch: MESH-2026101700-18c22584 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 20504.65 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| owner | STEEM 3466µ → SBD | P3 | 1079µ SBD | 725µ (CEX-FAIR (SBD per STEEM)) | 8µ |

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

**P3 STEEM/SBD** (mid 0.313386 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 866µ | 270µ | 0.31177829 | -0.51bps |
| 1% | 8667µ | 2682µ | 0.30944964 | -1.25bps |
| 5% | 43337µ | 12903µ | 0.29773635 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 57 · Volume in: 1125887µ · Edge captured: -902216µ · Fees paid (LP revenue): 942µ
- acct-00: 3 fills · vol 102710281029µ · edge -961-962-963µ · fees 000µ
- owner: 1 fills · vol 3466µ · edge 725µ · fees 8µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

