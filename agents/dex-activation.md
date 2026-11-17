# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-17T09:18:34.398Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111709-a725b8d1 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 10

Core ledger: seq 2680 @ 2026-11-17T09:17:47.515Z · conservation true · att 8eaced05533cc467


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 15609µ | 1µ WSTEEM | -15608µ | 0µ |
| operator | STEEM 15609µ | 1µ WSTEEM | -15608µ | 0µ |
| operator | SBD 6907µ | 12779µ WSBD | 5872µ | 2µ |
| operator | WSBD 12780µ | 6905µ SBD | -5875µ | 1µ |
| operator | SBD 34537µ | 62843µ WSBD | 28306µ | 12µ |
| operator | STEEM 3121µ | 7658µ SBD | null (honest) | 7µ |
| operator | SBD 7756µ | 3144µ STEEM | null (honest) | 19µ |
| operator | STEEM 15608µ | 36851µ SBD | null (honest) | 39µ |
| operator | SBD 36264µ | 15297µ STEEM | null (honest) | 90µ |
| operator | WSBD 60625µ | 1µ WSTEEM | null (honest) | 89µ |
| operator | STEEM 14981µ | 1µ WSTEEM | -14980µ | 0µ |
| operator | STEEM 14981µ | 1µ WSTEEM | -14980µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 50 · Volume in: 657892µ · Volume out: 489439µ · Fees accrued: 710µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 14 | 198657 | 14 | 0 |
| P2 | 11 | 281756 | 313345 | 57 |
| P3 | 29 | 267989 | 266590 | 653 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

