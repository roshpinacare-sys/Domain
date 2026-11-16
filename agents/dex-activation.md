# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-16T17:11:02.354Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111617-9ad24bd9 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 11 · Fills settled: 11 · Refusals: 0 · Wires: 10

Core ledger: seq 2601 @ 2026-11-16T15:28:25.830Z · conservation true · att 157e22296bca0c3f


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 14002µ | 1µ WSTEEM | -14001µ | 0µ |
| operator | STEEM 14002µ | 1µ WSTEEM | -14001µ | 0µ |
| operator | STEEM 14002µ | 1µ WSTEEM | -14001µ | 0µ |
| operator | STEEM 14002µ | 1µ WSTEEM | -14001µ | 0µ |
| operator | SBD 6567µ | 12705µ WSBD | 6138µ | 2µ |
| operator | WSBD 12706µ | 6565µ SBD | -6141µ | 1µ |
| operator | SBD 32836µ | 62430µ WSBD | 29594µ | 12µ |
| operator | STEEM 2800µ | 8530µ SBD | 8263µ | 7µ |
| operator | SBD 8638µ | 2821µ STEEM | -87724µ | 21µ |
| operator | STEEM 14000µ | 41038µ SBD | 39703µ | 35µ |
| operator | SBD 34478µ | 11795µ STEEM | -349611µ | 86µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 61 · Volume in: 803894µ · Volume out: 633525µ · Fees accrued: 842µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P3 | 33 | 316033 | 328176 | 770 |
| P2 | 14 | 327660 | 388795 | 72 |
| P1 | 18 | 243665 | 18 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

