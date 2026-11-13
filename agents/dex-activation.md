# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-13T22:44:00.261Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111322-787a24e3 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 2212 @ 2026-11-13T21:42:21.464Z · conservation true · att 7dae16c0534d1c96


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13600µ | 1µ WSTEEM | -13599µ | 0µ |
| operator | STEEM 13600µ | 1µ WSTEEM | -13599µ | 0µ |
| operator | STEEM 13600µ | 1µ WSTEEM | -13599µ | 0µ |
| operator | STEEM 13600µ | 1µ WSTEEM | -13599µ | 0µ |
| operator | SBD 5664µ | 12630µ WSBD | 6966µ | 2µ |
| operator | WSBD 12635µ | 5663µ SBD | -6972µ | 1µ |
| operator | SBD 28324µ | 61936µ WSBD | 33612µ | 12µ |
| operator | STEEM 2720µ | 8747µ SBD | 8452µ | 6µ |
| operator | SBD 8857µ | 2740µ STEEM | -78792µ | 22µ |
| operator | STEEM 13599µ | 42079µ SBD | 40602µ | 33µ |
| operator | SBD 29740µ | 9700µ STEEM | -264071µ | 74µ |
| operator | WSBD 61940µ | 1µ WSTEEM | -570186µ | 75µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 61 · Volume in: 885623µ · Volume out: 619407µ · Fees accrued: 928µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P2 | 16 | 434271 | 434186 | 80 |
| P3 | 33 | 347085 | 333318 | 848 |
| P1 | 20 | 252384 | 20 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

