# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-11T17:29:06.241Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111117-a5f780b0 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 1926 @ 2026-11-11T16:54:48.517Z · conservation true · att b312dcb854f6c580


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 14061µ | 2µ WSTEEM | -14059µ | 0µ |
| operator | STEEM 14061µ | 2µ WSTEEM | -14059µ | 0µ |
| operator | SBD 5664µ | 12631µ WSBD | 6967µ | 2µ |
| operator | WSBD 12658µ | 5673µ SBD | -6985µ | 1µ |
| operator | SBD 28323µ | 61934µ WSBD | 33611µ | 12µ |
| operator | STEEM 2812µ | 8434µ SBD | 8147µ | 7µ |
| operator | SBD 8541µ | 2833µ STEEM | -80790µ | 21µ |
| operator | STEEM 14060µ | 40578µ SBD | 39142µ | 35µ |
| operator | SBD 29739µ | 10386µ STEEM | -280783µ | 74µ |
| operator | WSBD 61959µ | 1µ WSTEEM | -606628µ | 75µ |
| operator | STEEM 13782µ | 2µ WSTEEM | -13780µ | 0µ |
| operator | STEEM 13782µ | 2µ WSTEEM | -13780µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 61 · Volume in: 894402µ · Volume out: 613631µ · Fees accrued: 933µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 20 | 261937 | 36 | 0 |
| P2 | 16 | 434512 | 434295 | 80 |
| P3 | 33 | 348632 | 329979 | 853 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

