# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-12T16:31:44.412Z · Verdict: **MESH-LIVE** · batch: MESH-2026111216-7bec13e2 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 319407.47 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1088µ → SBD | P3 | 3507µ SBD | 3400µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 14530.66566265 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 19787µ | 6595.66666667 | -54.6bps |
| 5% | 16µ | 102541µ | 6408.8125 | -55.89bps |

**P2 WSBD/SBD** (mid 0.08970568 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.93bps |
| 1% | 63147µ | 27450µ | 0.43469999 | 384.58bps |
| 5% | 315736µ | 123576µ | 0.39139028 | 336.3bps |

**P3 STEEM/SBD** (mid 3.24482518 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 272µ | 879µ | 3.23161765 | -0.4bps |
| 1% | 2722µ | 8723µ | 3.20462895 | -1.23bps |
| 5% | 13614µ | 41971µ | 3.08292934 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 962 · Volume in: 13259377µ · Edge captured: -37123887µ · Fees paid (LP revenue): 13434µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1088µ · edge 3400µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

