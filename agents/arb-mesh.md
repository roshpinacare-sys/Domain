# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-07T03:09:35.634Z · Verdict: **MESH-LIVE** · batch: MESH-2026110703-85d2bf73 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 213235.78 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1279µ → SBD | P3 | 2961µ SBD | 2828µ (CEX-FAIR (SBD per STEEM)) | 3µ |

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

**P3 STEEM/SBD** (mid 2.33052249 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 319µ | 740µ | 2.31974922 | -0.46bps |
| 1% | 3199µ | 7363µ | 2.30165677 | -1.23bps |
| 5% | 15997µ | 35421µ | 2.21422767 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 617 · Volume in: 8663857µ · Edge captured: -17700579µ · Fees paid (LP revenue): 8474µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1279µ · edge 2828µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

