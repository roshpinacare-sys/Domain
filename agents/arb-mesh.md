# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-02T07:00:33.783Z · Verdict: **MESH-LIVE** · batch: MESH-2026110207-37463928 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 32018.77 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 3008µ → SBD | P3 | 1249µ SBD | 950µ (CEX-FAIR (SBD per STEEM)) | 7µ |

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

**P3 STEEM/SBD** (mid 0.41807587 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 752µ | 313µ | 0.4162234 | -0.44bps |
| 1% | 7521µ | 3105µ | 0.41284404 | -1.25bps |
| 5% | 37609µ | 14939µ | 0.39721875 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 276 · Volume in: 3567618µ · Edge captured: -3162404µ · Fees paid (LP revenue): 3787µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 3008µ · edge 950µ · fees 7µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

