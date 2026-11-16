# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-16T00:24:23.156Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111600-db61b862 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 11 · Fills settled: 11 · Refusals: 0 · Wires: 10

Core ledger: seq 2528 @ 2026-11-16T00:07:34.808Z · conservation true · att 53a439f2f8446721


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13768µ | 1µ WSTEEM | -13767µ | 0µ |
| operator | STEEM 13768µ | 1µ WSTEEM | -13767µ | 0µ |
| operator | SBD 6248µ | 12656µ WSBD | 6408µ | 2µ |
| operator | WSBD 12657µ | 6246µ SBD | -6411µ | 1µ |
| operator | SBD 31244µ | 62147µ WSBD | 30903µ | 12µ |
| operator | STEEM 2753µ | 8667µ SBD | 8399µ | 6µ |
| operator | SBD 8778µ | 2773µ STEEM | -87264µ | 21µ |
| operator | STEEM 13767µ | 41705µ SBD | 40363µ | 34µ |
| operator | SBD 32806µ | 10887µ STEEM | -325609µ | 82µ |
| operator | STEEM 13911µ | 1µ WSTEEM | -13910µ | 0µ |
| operator | STEEM 13911µ | 1µ WSTEEM | -13910µ | 0µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 62 · Volume in: 793465µ · Volume out: 634321µ · Fees accrued: 827µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P1 | 18 | 242160 | 18 | 0 |
| P3 | 34 | 310849 | 330501 | 755 |
| P2 | 14 | 322564 | 385910 | 72 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

