# arb-mesh — THE MESH MARKET (R41, CR-0071)

<<<<<<< Updated upstream
At: 2026-10-20T06:11:14.172Z · Verdict: **MESH-LIVE** · batch: MESH-2026102006-bbe37964 · protocol: SAOS-ARB-MESH/1
=======
At: 2026-10-20T06:11:13.499Z · Verdict: **MESH-LIVE** · batch: MESH-2026102006-bbe37964 · protocol: SAOS-ARB-MESH/1
>>>>>>> Stashed changes

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 3150.11 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
<<<<<<< Updated upstream
| operator | STEEM 4121µ → SBD | P3 | 526µ SBD | 125µ (CEX-FAIR (SBD per STEEM)) | 10µ |
=======
| operator | STEEM 4121µ → SBD | P3 | 526µ SBD | 124µ (CEX-FAIR (SBD per STEEM)) | 10µ |
>>>>>>> Stashed changes

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

**P3 STEEM/SBD** (mid 0.12857427 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1354µ | 173µ | 0.12776957 | -0.62bps |
| 1% | 13540µ | 1719µ | 0.12695716 | -1.25bps |
| 5% | 67704µ | 8270µ | 0.12214936 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

<<<<<<< Updated upstream
Fills: 154 · Volume in: 1522392µ · Edge captured: -870438µ · Fees paid (LP revenue): 1900µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 4121µ · edge 125µ · fees 10µ
=======
Fills: 154 · Volume in: 1522392µ · Edge captured: -870439µ · Fees paid (LP revenue): 1900µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 4121µ · edge 124µ · fees 10µ
>>>>>>> Stashed changes

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

