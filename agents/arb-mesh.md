# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-02T16:00:49.006Z · Verdict: **MESH-LIVE** · batch: MESH-2026110216-3eec778e · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 41369.06 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 2691µ → SBD | P3 | 1398µ SBD | 1125µ (CEX-FAIR (SBD per STEEM)) | 6µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 1424.95600251 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1µ | 578µ | 578 | -59.43bps |
| 1% | 15µ | 8604µ | 573.6 | -59.74bps |
| 5% | 79µ | 43982µ | 556.73417722 | -60.92bps |

**P2 WSBD/SBD** (mid 0.26783942 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5089µ | 4156µ | 0.81666339 | 204.9bps |
| 1% | 50899µ | 41334µ | 0.81207882 | 203.19bps |
| 5% | 254498µ | 201222µ | 0.7906624 | 195.2bps |

**P3 STEEM/SBD** (mid 0.52289411 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 672µ | 350µ | 0.52083333 | -0.39bps |
| 1% | 6728µ | 3474µ | 0.51634958 | -1.25bps |
| 5% | 33640µ | 16712µ | 0.49678954 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 298 · Volume in: 4008328µ · Edge captured: -3916154µ · Fees paid (LP revenue): 4130µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 2691µ · edge 1125µ · fees 6µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

