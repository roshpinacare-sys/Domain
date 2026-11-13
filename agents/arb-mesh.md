# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-13T19:45:04.382Z · Verdict: **MESH-LIVE** · batch: MESH-2026111319-9c379866 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 292157.92 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1079µ → SBD | P3 | 3546µ SBD | 3428µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 16377.40322581 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 22381µ | 7460.33333333 | -54.44bps |
| 5% | 15µ | 108747µ | 7249.8 | -55.73bps |

**P2 WSBD/SBD** (mid 0.08970868 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.92bps |
| 1% | 63147µ | 27450µ | 0.43469999 | 384.56bps |
| 5% | 315739µ | 123581µ | 0.39140239 | 336.3bps |

**P3 STEEM/SBD** (mid 3.30847307 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 269µ | 886µ | 3.2936803 | -0.44bps |
| 1% | 2698µ | 8816µ | 3.26760563 | -1.23bps |
| 5% | 13492µ | 42411µ | 3.14341832 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1026 · Volume in: 14148574µ · Edge captured: -40842405µ · Fees paid (LP revenue): 14368µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1079µ · edge 3428µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

