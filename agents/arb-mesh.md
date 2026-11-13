# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-13T08:40:46.770Z · Verdict: **MESH-LIVE** · batch: MESH-2026111308-50313e3c · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 314108.01 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 1088µ → SBD | P3 | 3516µ SBD | 3407µ (CEX-FAIR (SBD per STEEM)) | 2µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 15470.809375 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 3µ | 21105µ | 7035 | -54.52bps |
| 5% | 16µ | 109252µ | 6828.25 | -55.86bps |

**P2 WSBD/SBD** (mid 0.08970653 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 6314µ | 2809µ | 0.44488438 | 395.93bps |
| 1% | 63147µ | 27450µ | 0.43469999 | 384.58bps |
| 5% | 315738µ | 123578µ | 0.39139413 | 336.3bps |

**P3 STEEM/SBD** (mid 3.25274394 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 272µ | 881µ | 3.23897059 | -0.42bps |
| 1% | 2720µ | 8738µ | 3.2125 | -1.23bps |
| 5% | 13602µ | 42036µ | 3.09042788 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 995 · Volume in: 13705104µ · Edge captured: -39027265µ · Fees paid (LP revenue): 13902µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 1088µ · edge 3407µ · fees 2µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

