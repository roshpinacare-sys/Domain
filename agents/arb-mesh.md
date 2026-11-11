# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-11T18:18:57.682Z · Verdict: **MESH-LIVE** · batch: MESH-2026111118-d3fd2507 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 287315.21 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1102µ → SBD | P3 | 3462µ SBD | 3350µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 12903.7632312 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 17513µ | 5837.66666667 | -54.75bps |
| 5% | 17µ | 96435µ | 5672.64705882 | -56.03bps |

**P2 WSBD/SBD** (mid 0.08970795 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.92bps |
| 1% | 63146µ | 27450µ | 0.43470687 | 384.58bps |
| 5% | 315731µ | 123577µ | 0.39139964 | 336.3bps |

**P3 STEEM/SBD** (mid 3.16232482 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 275µ | 866µ | 3.14909091 | -0.41bps |
| 1% | 2756µ | 8607µ | 3.12300435 | -1.24bps |
| 5% | 13782µ | 41409µ | 3.00457118 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 915 · Volume in: 12591587µ · Edge captured: -34275358µ · Fees paid (LP revenue): 12737µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1102µ · edge 3350µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

