# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-10-24T07:58:47.064Z · Verdict: **MESH-LIVE** · batch: MESH-2026102407-7f9593c1 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 618.82 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 4121µ → SBD | P3 | 428µ SBD | 8µ (CEX-FAIR (SBD per STEEM)) | 10µ |

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

**P3 STEEM/SBD** (mid 0.10447371 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1502µ | 156µ | 0.10386152 | -0.58bps |
| 1% | 15024µ | 1550µ | 0.10316826 | -1.24bps |
| 5% | 75122µ | 7456µ | 0.09925188 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 190 · Volume in: 1670748µ · Edge captured: -868646µ · Fees paid (LP revenue): 2260µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 4121µ · edge 8µ · fees 10µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

