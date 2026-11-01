# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-01T15:14:57.869Z · Verdict: **GATED-WIRE (edge above floor but no free capital to arm the agents — named, never faked)** · batch: MESH-2026110115-a7f1f073 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | SBD→STEEM (sell the rich side) | 655.65 | 100 | dex-core.json (our pool — atomic, no bridge) |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 242.52413912 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5µ | 402µ | 80.4 | -66.84bps |
| 1% | 57µ | 4536µ | 79.57894737 | -67.18bps |
| 5% | 288µ | 22230µ | 77.1875 | -68.17bps |

**P2 WSBD/SBD** (mid 0.55698068 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 4072µ | 3835µ | 0.94179764 | 69.08bps |
| 1% | 40720µ | 38291µ | 0.94034872 | 68.82bps |
| 5% | 203604µ | 190093µ | 0.93364079 | 67.62bps |

**P3 STEEM/SBD** (mid 0.16215849 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1206µ | 194µ | 0.16086235 | -0.79bps |
| 1% | 12064µ | 1932µ | 0.16014589 | -1.24bps |
| 5% | 60323µ | 9293µ | 0.15405401 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 214 · Volume in: 2134277µ · Edge captured: -1314955µ · Fees paid (LP revenue): 2670µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1400µ · edge -1383µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

