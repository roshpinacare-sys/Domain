# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-11T23:43:27.969Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111123-8c48012b · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 1956 @ 2026-11-11T22:58:39.312Z · conservation true · att 5349be65b6aebd16


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13892µ | 2µ WSTEEM | -13890µ | 0µ |
| operator | STEEM 13892µ | 2µ WSTEEM | -13890µ | 0µ |
| operator | STEEM 13892µ | 2µ WSTEEM | -13890µ | 0µ |
| operator | STEEM 13892µ | 2µ WSTEEM | -13890µ | 0µ |
| operator | SBD 5664µ | 12631µ WSBD | 6967µ | 2µ |
| operator | WSBD 12653µ | 5671µ SBD | -6982µ | 1µ |
| operator | SBD 28323µ | 61936µ WSBD | 33613µ | 12µ |
| operator | STEEM 2778µ | 8539µ SBD | 8259µ | 6µ |
| operator | SBD 8647µ | 2798µ STEEM | -82739µ | 21µ |
| operator | STEEM 13891µ | 41084µ SBD | 39680µ | 34µ |
| operator | SBD 29739µ | 10139µ STEEM | -284044µ | 74µ |
| operator | WSBD 61956µ | 1µ WSTEEM | -612879µ | 75µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 61 · Volume in: 892336µ · Volume out: 614647µ · Fees accrued: 932µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P2 | 16 | 434454 | 434267 | 80 |
| P3 | 33 | 348305 | 330462 | 852 |
| P1 | 20 | 259695 | 36 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

