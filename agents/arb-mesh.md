# arb-mesh — THE MESH MARKET (R41, CR-0071)

At: 2026-11-18T08:32:37.252Z · Verdict: **NO-EDGE (every row below the floor — the machinery waits, the floor law protects the P&L)** · batch: — · protocol: SAOS-ARB-MESH/1

Roster: 1 accounts (owner + 0 soldiers) · Edge candidates: 0 · Intents drafted: 0 · Fills settled: 0 · Refusals: 0


## Size ladder (the large-sums law — exact BigInt, honest slippage)


**P1 WSTEEM/STEEM** (mid 26221.87553648 STEEM/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 0µ | — | — | — |
| 1% | 2µ | 24228µ | 12114 | -53.8bps |
| 5% | 11µ | 129491µ | 11771.90909091 | -55.1bps |

**P2 WSBD/SBD** (mid 0.13997475 SBD/, fee 2bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 5842µ | 3593µ | 0.6150291 | 339.38bps |
| 1% | 58426µ | 35401µ | 0.60591175 | 332.87bps |
| 5% | 292131µ | 164878µ | 0.56439748 | 303.21bps |

**P3 STEEM/SBD** (mid 2.87880093 SBD/, fee 25bps):

| Size (% depth) | In | Out | Exec price | Slippage |
|---|---|---|---|---|
| 0.1% | 290µ | 831µ | 2.86551724 | -0.46bps |
| 1% | 2902µ | 8251µ | 2.84321158 | -1.23bps |
| 5% | 14512µ | 39693µ | 2.73518467 | -4.98bps |

## Mesh P&L (lifetime, from the ledger — the core book is the source of truth)

Fills: 1279 · Volume in: 17757848µ · Edge captured: -51290663µ · Fees paid (LP revenue): 18255µ
- acct-00: 1 fills · vol 3859µ · edge 580µ · fees 9µ
- operator: 1 fills · vol 14512µ · edge -14511µ · fees 0µ

Laws: L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 L11 L12 L13 L14 L15 L16 · Gate law: the counter-grid gate follows CR-0074 (open = GATED-ARMED-BROADCAST-READY, closed = PLAN-POOL-GATED-NOT-BROADCAST) — the mesh never fires a keyed rail either way.

