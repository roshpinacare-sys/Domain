# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-02T01:00:00.647Z · Verdict: **MESH-LIVE** · batch: MESH-2026110201-d0d2bf67 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 21689.54 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 3446µ → SBD | P3 | 1090µ SBD | 742µ (CEX-FAIR (SBD per STEEM)) | 8µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 797.93518903 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 2µ | 615µ | 307.5 | -61.46bps |
| 1% | 24µ | 7319µ | 304.95833333 | -61.78bps |
| 5% | 120µ | 35519µ | 295.99166667 | -62.9bps |

**P2 WSBD/SBD** (mid 0.38352509 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 4614µ | 4104µ | 0.88946684 | 131.91bps |
| 1% | 46149µ | 40923µ | 0.88675811 | 131.21bps |
| 5% | 230746µ | 201808µ | 0.87458938 | 128.03bps |

**P3 STEEM/SBD** (mid 0.318475 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 861µ | 273µ | 0.31707317 | -0.44bps |
| 1% | 8615µ | 2709µ | 0.31445154 | -1.26bps |
| 5% | 43076µ | 13034µ | 0.30258148 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 256 · Volume in: 3111225µ · Edge captured: -2476618µ · Fees paid (LP revenue): 3439µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 3446µ · edge 742µ · fees 8µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

