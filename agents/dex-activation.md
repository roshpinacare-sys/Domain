# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-13T09:42:59.435Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111309-e5d96c6e · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 2139 @ 2026-11-13T09:41:26.544Z · conservation true · att 9d1ea49564637c70


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13657µ | 1µ WSTEEM | -13656µ | 0µ |
| operator | STEEM 13657µ | 1µ WSTEEM | -13656µ | 0µ |
| operator | SBD 5664µ | 12632µ WSBD | 6968µ | 2µ |
| operator | WSBD 12640µ | 5665µ SBD | -6975µ | 1µ |
| operator | SBD 28323µ | 61935µ WSBD | 33612µ | 12µ |
| operator | STEEM 2731µ | 8703µ SBD | 8431µ | 6µ |
| operator | SBD 8814µ | 2751µ STEEM | -85446µ | 22µ |
| operator | STEEM 13656µ | 41876µ SBD | 40512µ | 34µ |
| operator | SBD 29739µ | 9786µ STEEM | -287798µ | 74µ |
| operator | WSBD 61942µ | 1µ WSTEEM | -619824µ | 75µ |
| operator | STEEM 13413µ | 1µ WSTEEM | -13412µ | 0µ |
| operator | STEEM 13413µ | 1µ WSTEEM | -13412µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 62 · Volume in: 886632µ · Volume out: 622216µ · Fees accrued: 929µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 20 | 252412 | 26 | 0 |
| P2 | 16 | 434301 | 434200 | 80 |
| P3 | 34 | 348300 | 336371 | 849 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

