# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-04T16:41:27.130Z · Verdict: **MESH-LIVE** · batch: MESH-2026110416-da890a63 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 99524.1 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1652µ → SBD | P3 | 2283µ SBD | 2091µ (CEX-FAIR (SBD per STEEM)) | 4µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 3601.34453781 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 8µ | 12328µ | 1541 | -57.21bps |
| 5% | 41µ | 61355µ | 1496.46341463 | -58.44bps |

**P2 WSBD/SBD** (mid 0.11003709 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6098µ | 3192µ | 0.52345031 | 375.7bps |
| 1% | 60982µ | 31305µ | 0.5133482 | 366.52bps |
| 5% | 304914µ | 143004µ | 0.46899781 | 326.21bps |

**P3 STEEM/SBD** (mid 1.39116012 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 413µ | 572µ | 1.38498789 | -0.44bps |
| 1% | 4132µ | 5677µ | 1.37391094 | -1.23bps |
| 5% | 20664µ | 27312µ | 1.32171893 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 443 · Volume in: 6483482µ · Edge captured: -9743589µ · Fees paid (LP revenue): 6195µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1652µ · edge 2091µ · fees 4µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

