# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-07T02:52:57.535Z · Verdict: **MESH-LIVE** · batch: MESH-2026110702-edc88c41 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 214223.82 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1274µ → SBD | P3 | 2973µ SBD | 2840µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 6112.30993151 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 5µ | 13435µ | 2687 | -56.03bps |
| 5% | 29µ | 75583µ | 2606.31034483 | -57.35bps |

**P2 WSBD/SBD** (mid 0.09049001 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6304µ | 2825µ | 0.44812817 | 395.22bps |
| 1% | 63049µ | 27615µ | 0.43799267 | 384.02bps |
| 5% | 315249µ | 124391µ | 0.39458016 | 336.04bps |

**P3 STEEM/SBD** (mid 2.34916859 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 318µ | 744µ | 2.33962264 | -0.4bps |
| 1% | 3186µ | 7392µ | 2.32015066 | -1.23bps |
| 5% | 15933µ | 35562µ | 2.23197138 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 616 · Volume in: 8662578µ · Edge captured: -17703407µ · Fees paid (LP revenue): 8471µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1274µ · edge 2840µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

