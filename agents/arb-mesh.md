# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-10T12:55:38.475Z · Verdict: **MESH-LIVE** · batch: MESH-2026111012-c6dadf01 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 277227.4 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1147µ → SBD | P3 | 3319µ SBD | 3203µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 10652.33910891 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 4µ | 19128µ | 4782 | -55.1bps |
| 5% | 20µ | 92894µ | 4644.7 | -56.39bps |

**P2 WSBD/SBD** (mid 0.08973238 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.79bps |
| 1% | 63142µ | 27454µ | 0.43479776 | 384.54bps |
| 5% | 315710µ | 123600µ | 0.39149853 | 336.29bps |

**P3 STEEM/SBD** (mid 2.91312743 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 286µ | 830µ | 2.9020979 | -0.37bps |
| 1% | 2869µ | 8254µ | 2.87696061 | -1.24bps |
| 5% | 14346µ | 39706µ | 2.76774014 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 839 · Volume in: 11472522µ · Edge captured: -29592409µ · Fees paid (LP revenue): 11571µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1147µ · edge 3203µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

