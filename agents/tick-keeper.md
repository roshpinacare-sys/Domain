# Tick keeper · 2026-10-03T21:58:51.868Z

STASIS: false · fired: none

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-03T21:55:45.550Z | 45m | cooldown: dispatched 5m ago < 20m |
| fill-ledger-cron | 2026-10-03T21:52:35.139Z | 45m | fresh 6.3m <= 45m |
| sovereign-tick-cron | 2026-10-03T21:35:25.128Z | 20m | RE-FIRED (book stale 23.4m > 20m) |

**errors:** no token in env — stale desks NOT re-fired (fail-loud book)

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
