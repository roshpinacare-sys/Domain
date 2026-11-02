# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-02T18:47:26.539Z · Verdict: **MESH-LIVE** · batch: MESH-2026110218-a79c8869 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 42290.33 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 2712µ → SBD | P3 | 1386µ SBD | 1116µ (CEX-FAIR (SBD per STEEM)) | 6µ |

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

**P3 STEEM/SBD** (mid 0.51462236 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 678µ | 347µ | 0.51179941 | -0.54bps |
| 1% | 6782µ | 3447µ | 0.50825715 | -1.23bps |
| 5% | 33910µ | 16580µ | 0.48894131 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 300 · Volume in: 4013742µ · Edge captured: -3913913µ · Fees paid (LP revenue): 4142µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 2712µ · edge 1116µ · fees 6µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

