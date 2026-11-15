# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-15T19:28:39.058Z · Verdict: **MESH-LIVE** · batch: MESH-2026111519-cbc62289 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 315929.76 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1112µ → SBD | P3 | 3452µ SBD | 3346µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 20461.98161765 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 18795µ | 9397.5 | -54.07bps |
| 5% | 13µ | 118571µ | 9120.84615385 | -55.42bps |

**P2 WSBD/SBD** (mid 0.10091752 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6190µ | 3033µ | 0.48998384 | 385.52bps |
| 1% | 61906µ | 29701µ | 0.47977579 | 375.41bps |
| 5% | 309533µ | 134800µ | 0.43549476 | 331.53bps |

**P3 STEEM/SBD** (mid 3.12467995 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 278µ | 865µ | 3.11151079 | -0.42bps |
| 1% | 2780µ | 8579µ | 3.08597122 | -1.23bps |
| 5% | 13904µ | 41278µ | 2.96878596 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1150 · Volume in: 15813523µ · Edge captured: -47336265µ · Fees paid (LP revenue): 16108µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1112µ · edge 3346µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

