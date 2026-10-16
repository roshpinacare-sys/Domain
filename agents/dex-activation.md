# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-10-16T22:09:05.253Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026101622-63ae6ad1 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 3 · Fills settled: 3 · Refusals: 0 · Wires: 3

Core ledger: seq 87 @ 2026-10-16T21:41:55.157Z · conservation true · att 17b2ff6712e23d2a


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| acct-00 | STEEM 1027µ | 66µ WSTEEM | -961µ | 0µ |
| acct-00 | STEEM 1028µ | 66µ WSTEEM | -962µ | 0µ |
| acct-00 | STEEM 1029µ | 66µ WSTEEM | -963µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 56 · Volume in: 1122421µ · Volume out: 1364046µ · Fees accrued: 934µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 22 | 736102 | 450956 | 78 |
| P3 | 24 | 289505 | 829128 | 714 |
| P2 | 26 | 795509 | 782657 | 142 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

