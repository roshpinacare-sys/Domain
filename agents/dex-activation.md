# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-13T17:24:09.895Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111317-9791ad99 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 2178 @ 2026-11-13T16:54:55.729Z · conservation true · att 60ad4d737918b3e9


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13684µ | 1µ WSTEEM | -13683µ | 0µ |
| operator | STEEM 13684µ | 1µ WSTEEM | -13683µ | 0µ |
| operator | STEEM 13684µ | 1µ WSTEEM | -13683µ | 0µ |
| operator | STEEM 13684µ | 1µ WSTEEM | -13683µ | 0µ |
| operator | SBD 5664µ | 12631µ WSBD | 6967µ | 2µ |
| operator | WSBD 12637µ | 5664µ SBD | -6973µ | 1µ |
| operator | SBD 28324µ | 61936µ WSBD | 33612µ | 12µ |
| operator | STEEM 2736µ | 8688µ SBD | 8388µ | 6µ |
| operator | SBD 8800µ | 2756µ STEEM | -77345µ | 22µ |
| operator | STEEM 13683µ | 41810µ SBD | 40307µ | 34µ |
| operator | SBD 29740µ | 9820µ STEEM | -260886µ | 74µ |
| operator | WSBD 61942µ | 1µ WSTEEM | -563823µ | 75µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 62 · Volume in: 887044µ · Volume out: 622374µ · Fees accrued: 930µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P2 | 16 | 434285 | 434192 | 80 |
| P3 | 34 | 348291 | 336506 | 850 |
| P1 | 20 | 252814 | 22 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

