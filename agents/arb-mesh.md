# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-05T12:27:50.589Z · Verdict: **MESH-LIVE** · batch: MESH-2026110512-265c3358 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 140764.81 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1475µ → SBD | P3 | 2563µ SBD | 2406µ (CEX-FAIR (SBD per STEEM)) | 3µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 4442.82434301 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 7µ | 13455µ | 1922.14285714 | -56.73bps |
| 5% | 36µ | 67171µ | 1865.86111111 | -58bps |

**P2 WSBD/SBD** (mid 0.09689116 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6232µ | 2956µ | 0.47432606 | 389.54bps |
| 1% | 62326µ | 28924µ | 0.46407599 | 378.96bps |
| 5% | 311633µ | 130892µ | 0.4200197 | 333.49bps |

**P3 STEEM/SBD** (mid 1.74910666 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 368µ | 641µ | 1.74184783 | -0.41bps |
| 1% | 3688µ | 6371µ | 1.72749458 | -1.23bps |
| 5% | 18442µ | 30647µ | 1.66180458 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 504 · Volume in: 7283789µ · Edge captured: -12265560µ · Fees paid (LP revenue): 6985µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1475µ · edge 2406µ · fees 3µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

