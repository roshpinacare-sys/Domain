# dex-activation — THE IGNITION DESK (CR-0077)

At: 2026-11-14T02:42:19.225Z · Verdict: **IGNITED (3/3 rounds filled)** · batch: ACT-2026111402-1b6b29c1 · lane: dex-activation

Owner word (trace 1a135897157a1d75): "saos dex עמלות 0 נפח כמעט 0 מצטבר כלום" — הדלפק הזה הוא התיקון: זרימה דו-צדדית רציפה סביב המיד של כל בריכה חיה, דרך חוקי-ה-settle של הליבה עצמה.

Pools armed: P1, P2, P3 · Intents drafted: 12 · Fills settled: 12 · Refusals: 0 · Wires: 11

Core ledger: seq 2246 @ 2026-11-14T01:51:46.109Z · conservation true · att 2e834c8c6533515a


| Agent | Fill | Out | Edge (marked) | Fees |
|---|---|---|---|---|
| operator | STEEM 13523µ | 1µ WSTEEM | -13522µ | 0µ |
| operator | STEEM 13523µ | 1µ WSTEEM | -13522µ | 0µ |
| operator | STEEM 13523µ | 1µ WSTEEM | -13522µ | 0µ |
| operator | STEEM 13523µ | 1µ WSTEEM | -13522µ | 0µ |
| operator | SBD 5665µ | 12633µ WSBD | 6968µ | 2µ |
| operator | WSBD 12637µ | 5664µ SBD | -6973µ | 1µ |
| operator | SBD 28325µ | 61937µ WSBD | 33612µ | 12µ |
| operator | STEEM 2704µ | 8798µ SBD | 8508µ | 6µ |
| operator | SBD 8911µ | 2724µ STEEM | -80117µ | 22µ |
| operator | STEEM 13522µ | 42336µ SBD | 40882µ | 33µ |
| operator | SBD 29741µ | 9589µ STEEM | -266899µ | 74µ |
| operator | WSBD 61941µ | 1µ WSTEEM | -575836µ | 75µ |

## Rolling 24h (measured from the ledger — never invented)

Fills: 62 · Volume in: 886438µ · Volume out: 623457µ · Fees accrued: 930µ


| Pool | Swaps 24h | In µ | Out µ | Fees µ |
|---|---|---|---|---|
| P2 | 16 | 434267 | 434187 | 80 |
| P3 | 34 | 348064 | 337157 | 850 |
| P1 | 20 | 252014 | 20 | 0 |

Laws: keyless internal-only · staged-lane (CR-0077) · two-sided (never a direction bet) · 10/100/500bps depth ladder · dust 1000µ · minOut −0.5% · roster split op-40% · bounded 30 intents/run · single-writer queue (DEX_SETTLE_QUEUE) · idempotent batch · measured 24h only

