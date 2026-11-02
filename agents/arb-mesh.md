# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-02T02:54:00.130Z · Verdict: **MESH-LIVE** · batch: MESH-2026110202-199ff292 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 21181.46 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 2984µ → SBD | P3 | 1259µ SBD | 958µ (CEX-FAIR (SBD per STEEM)) | 7µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 1108.90320884 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1µ | 440µ | 440 | -60.32bps |
| 1% | 19µ | 8302µ | 436.94736842 | -60.59bps |
| 5% | 95µ | 40298µ | 424.18947368 | -61.74bps |

**P2 WSBD/SBD** (mid 0.31923168 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 4863µ | 4160µ | 0.85543903 | 167.96bps |
| 1% | 48637µ | 41436µ | 0.85194399 | 166.87bps |
| 5% | 243186µ | 203198µ | 0.83556619 | 161.74bps |

**P3 STEEM/SBD** (mid 0.42479389 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 746µ | 315µ | 0.42225201 | -0.59bps |
| 1% | 7462µ | 3130µ | 0.41945859 | -1.25bps |
| 5% | 37310µ | 15058µ | 0.40359153 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 274 · Volume in: 3561614µ · Edge captured: -3164306µ · Fees paid (LP revenue): 3773µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 2984µ · edge 958µ · fees 7µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

