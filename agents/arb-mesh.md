# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-02T22:50:27.502Z · Verdict: **MESH-LIVE** · batch: MESH-2026110222-d8f45d31 · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 1 · Intents drafted: 1 · Fills settled: 1 · Refusals: 0


| Edge row | Direction | Net bps | Floor | Source |
|---|---|---|---|---|
| A1 P3 STEEM/SBD pool mid vs CEX-implied fair | STEEM→SBD (sell the rich side) | 53997.57 | 100 | dex-core.json (our pool — atomic, no bridge) |

| Agent | Fill | Route | Out | Edge (marked) | Fees |
|---|---|---|---|---|---|
| operator | STEEM 2430µ → SBD | P3 | 1549µ SBD | 1307µ (CEX-FAIR (SBD per STEEM)) | 6µ |

## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 1747.79956427 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 1µ | 723µ | 723 | -58.63bps |
| 1% | 13µ | 9291µ | 714.69230769 | -59.1bps |
| 5% | 68µ | 47173µ | 693.72058824 | -60.3bps |

**P2 WSBD/SBD** (mid 0.22661088 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5295µ | 4094µ | 0.77318225 | 241.19bps |
| 1% | 52951µ | 40644µ | 0.76757757 | 238.72bps |
| 5% | 264758µ | 196101µ | 0.74068017 | 226.85bps |

**P3 STEEM/SBD** (mid 0.64167487 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 607µ | 388µ | 0.63920922 | -0.38bps |
| 1% | 6075µ | 3850µ | 0.63374485 | -1.23bps |
| 5% | 30377µ | 18519µ | 0.60963887 | -4.99bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 319 · Volume in: 4421538µ · Edge captured: -4714308µ · Fees paid (LP revenue): 4457µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 2430µ · edge 1307µ · fees 6µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

