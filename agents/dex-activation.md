# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-15T00:23:27.331Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111500-03ef06ae · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 2383 @ 2026-11-14T23:19:28.322Z · conservation true · att 3dd919638fca75ce


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13733µ | 1µ WSTEEM | -13732µ | 0µ |
| operator | STEEM 13733µ | 1µ WSTEEM | -13732µ | 0µ |
| operator | STEEM 13733µ | 1µ WSTEEM | -13732µ | 0µ |
| operator | STEEM 13733µ | 1µ WSTEEM | -13732µ | 0µ |
| operator | SBD 5948µ | 12632µ WSBD | 6684µ | 2µ |
| operator | WSBD 12634µ | 5946µ SBD | -6688µ | 1µ |
| operator | SBD 29743µ | 61984µ WSBD | 32241µ | 12µ |
| operator | STEEM 2746µ | 8676µ SBD | 8424µ | 6µ |
| operator | SBD 8787µ | 2766µ STEEM | -92819µ | 21µ |
| operator | STEEM 13732µ | 41748µ SBD | 40486µ | 34µ |
| operator | SBD 31230µ | 10346µ STEEM | -329375µ | 78µ |
| operator | WSBD 61986µ | 1µ WSTEEM | -674285µ | 79µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 73 · Volume in: 1043354µ · Volume out: 769568µ · Fees accrued: 1086µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P2 | 19 | 482637 | 516177 | 95 |
| P3 | 38 | 405575 | 402730 | 991 |
| P1 | 24 | 304505 | 24 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

