# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-10-22T03:46:34.329Z · Verdict: **GATED-WIRE (edge above floor but no free capital to arm the agents — named, never faked)** · batch: MESH-2026102203-60b6b59e · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | SBD→STEEM (sell the rich side) | 213.42 | 100 | dex-core.json (our pool — atomic, no bridge) |

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

**P3 STEEM/SBD** (mid 0.10562755 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1494µ | 157µ | 0.10508701 | -0.51bps |
| 1% | 14942µ | 1558µ | 0.10426984 | -1.28bps |
| 5% | 74710µ | 7497µ | 0.10034801 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 187 · Volume in: 1658385µ · Edge captured: -868663µ · Fees paid (LP revenue): 2230µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 4121µ · edge 3µ · fees 10µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

